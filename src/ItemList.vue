<script setup>
    defineProps(['title', 'items']);
</script>

<template>
    <h1>{{title}}</h1>
      <ul>
        <li v-for="item in items" v-bind:key="item.id">
          {{ item.name }}
          <input type="checkbox" v-model="item.isDone">
        </li>
      </ul>
</template>