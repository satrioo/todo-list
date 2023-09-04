<template>
  <div class=" flex gap-2">
    <input class=" border-neutral-600 border-2 rounded flex-1 p-2" placeholder="you can press enter to add" type="text" @keyup.enter="addTodo" v-model="todo"  />
    <button class=" bg-blue-500 text-white px-6 font-medium rounded" @click="addTodo">ADD</button>
  </div>
</template>

<script lang="ts" setup>
import { todoStore } from "@/stores/todo";
import { ref } from "vue";

const todos = todoStore();
const todo = ref("");

function addTodo() {
  todos.addItem(todo.value);
  todo.value = "";
}
</script>
