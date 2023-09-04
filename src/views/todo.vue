<template>
  <div class=" bg-gray-500 w-screen h-screen flex justify-center items-center">
    <div class=" max-w-screen-md w-1/2 bg-white p-6 rounded-lg">
      <div class=" flex flex-col gap-5">
        <h1 class=" font-bold">To Do List</h1> <v-icon name="fa-flag" />
          <ToDoInput />
        <div>
          <p class=" text-base font-semibold">Filter:</p>
          <ToDoFilter />
        </div>
        <div>
          <p class=" text-base font-semibold">List:</p>
          <ToDoLists />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ToDoInput from "@/components/Input.vue";
import ToDoFilter from "@/components/Filter.vue";
import ToDoLists from "@/components/List.vue"
</script>
