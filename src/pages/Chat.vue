<script setup>
import { ref } from 'vue';
let nameInput = ref('');
let name = ref('');
let messages = ref([]);
let message = ref('');
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");
// Connection opened
socket.addEventListener("open", (event) => {
    //socket.send("Hello Server!");
});
// Listen for messages
socket.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
    messages.value.push(JSON.parse(event.data));
});
function send(){
    if(message.value.trim() !== ''){
        socket.send(JSON.stringify({message: message.value, name: name.value, isMe: false}));
        messages.value.push({message: message.value, name: name.value, isMe: true});
    }
    message.value = '';
}
function join(){
    if(nameInput.value.trim() !== ''){
        name.value = nameInput.value;
    }
}
</script>
<template>
<div v-if="!name">
    <div class="field has-addons">
        <div class="control is-expanded">
            <input class="input" type="text" placeholder="Name" v-model="nameInput">
        </div>
        <div class="control">
            <a class="button is-info" @click="join()">
                Join
            </a>
        </div>
    </div>
</div>
<div v-else>
    <div class="field has-addons">
        <div class="control is-expanded">
            <input class="input" type="text" placeholder="Message" v-model="message">
        </div>
        <div class="control">
            <a class="button is-info" @click="send()">
                Send
            </a>
        </div>
    </div>
    <div v-for="msg in messages" class="notification is-light py-1 my-1" :class="{'is-primary': msg.isMe}">
        {{ msg.message }}
        <p class="is-size-7	has-text-weight-semibold has-text-grey-dark">{{ msg.name }}</p>
    </div>
</div>
</template>