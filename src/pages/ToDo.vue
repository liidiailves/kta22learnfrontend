<script setup>
import { ref, computed } from 'vue';
import ItemList from '../ItemList.vue';

let count = ref(0);
let message = ref('Hello vue');
let i = 0;
let items = ref([
  {id: i++, name: 'piim', isDone: true}, 
  {id: i++, name: 'viin', isDone: false}, 
  {id: i++, name: 'sai', isDone: false},
]);

function add() {
  if(message.value.trim() !== ''){
    items.value.push({id: i++, name: message.value.trim(), isDone: false});
  }
  message.value= '';
}

let doneItems = computed(() => {
  return items.value.filter(item => item.isDone)
});

let todoItems = computed(() => {
  return items.value.filter(item => !item.isDone)
});
</script>

<template>
  <div class="container mt-3">
    <!-- v-bind ei muuda sisu, v-model aga küll
    <input class="input" v-bind:value="message"> -->
    <input class="input" v-model="message" @keydown.enter="add">
    <button class="button" v-on:click="add">Add</button>
    <div class="content">
      <ItemList title="All Items" :items="items"></ItemList>
      <ItemList title="Done Items" :items="doneItems"></ItemList>
      <ItemList title="Todo Items" :items="todoItems"></ItemList>
    </div>
  </div>
</template>
