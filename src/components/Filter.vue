<template>
    <select class=" w-full border-b-2 focus-visible:outline-0 py-2" v-model="filter" @change="changeFilter">
      <option value="all">All</option>
      <option value="not">Not Done</option>
      <option value="done">Done</option>
    </select>
</template>

<script lang="ts" setup>
import { todoStore } from "@/stores/todo";
import { ref } from "vue";

const todos = todoStore();
const filter = ref("all");

function changeFilter() {
  todos.changeFilter(filter.value);
}
</script>