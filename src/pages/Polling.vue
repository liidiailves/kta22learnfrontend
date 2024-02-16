<script setup>
import axios from 'axios';
import { ref } from 'vue';
let data = ref([]);
let lastInfoTime = 0;
setInterval(()=> {
    axios.get('http://localhost:3000/polling?time=' + lastInfoTime).then(response => {
        console.log(response.data);
        if(response.data != []){
            data.value.push(...response.data);
            lastInfoTime = Date.now();
        }
    });
}, 1000);
</script>

<template>
<div class="content">
    <ul>
        <li v-for="num in data">{{ num }}</li>
    </ul>
</div>
</template>