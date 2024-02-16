<script setup>
import axios from 'axios';
import { ref } from 'vue';
let data = ref([]);
const evtSource = new EventSource("http://localhost:3000/sse");
evtSource.addEventListener("data", event => {
    data.value.push(...JSON.parse(event.data));
    console.log(event);
});
</script>

<template>
<div class="content">
    <ul>
        <li v-for="num in data">{{ num.data }}</li>
    </ul>
</div>
</template>