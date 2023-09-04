<template>
    <ul class=" mt-1 max-h-56 overflow-y-auto">
      <li v-if="todos.item.length <= 0" class=" flex justify-center py-6">empty list</li>
      <li class=" flex hover:bg-blue-200 rounded cursor-pointer" v-else v-for="(item, index) in todos.filtered" :key="index">
        <p @click="check(index)" class=" flex-1 select-none list p-2" :class=" item.status ? 'line-through' : ''">{{ item.name }}</p>
        <button @click="check(index)">
          <v-icon v-if="!item.status " name="bi-square" /> 
          <v-icon v-else name="bi-check-square" />
        </button>
        <button class=" ml-2 p-1 rounded hover:bg-red-300" @click="remove(index)">
          <v-icon name="bi-trash" />
        </button>
      </li>
    </ul>
</template>

<script lang="ts" setup>
import { todoStore } from "@/stores/todo";

const todos = todoStore();

function check(index: number) {
  todos.changeStatus(index);
}

function remove(index: number) {
  todos.removeItem(index);
}
</script>
