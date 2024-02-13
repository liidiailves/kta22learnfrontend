<script setup>
import { ref } from 'vue';

let count = ref(0);
let message = ref('Hello vue');
let items = ref(['piim', 'viin', 'sai']);

function add() {
  if(message.value.trim() !== ''){
    items.value.push(message.value.trim());
  }
  message.value= '';
}
</script>

<template>
  <div class="container mt-3">
    <input class="input" v-bind:value="message">
    <button class="button" v-on:click="count++">{{count}}</button>
  </div>
</template>
