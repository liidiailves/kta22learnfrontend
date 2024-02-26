<script setup>
import axios from 'axios';
import { ref } from 'vue';
let data = ref([]);
let lastInfoTime = 0;
while(true){
    try {
        let response = await axios.get('http://localhost:3000/longpolling?time=' + lastInfoTime);
    console.log(response.data);
    if(response.data != []){
        data.value.push(...response.data);
        lastInfoTime = Date.now();
    }
    } catch (err){}
    
}
</script>

<template>
<div class="content">
    <ul>
        <li v-for="num in data">{{ num.data }}</li>
    </ul>
</div>
</template>