<script setup>
import axios from 'axios';
import { ref } from 'vue';
let joke = ref('');
let joke2 = ref('');

axios.get('https://api.chucknorris.io/jokes/random').then(response => {
    console.log(response);
    joke.value = response.data.value;
}).catch(() => {});

axios.get('http://localhost:3000').then(response => {
    console.log(response);
    joke2.value = response.data.joke;
}).catch(() => {});
</script>

<template>
    <div class="content">
        <h1>{{ joke }}</h1>
        <h1>{{ joke2 }}</h1>
    </div>
</template>