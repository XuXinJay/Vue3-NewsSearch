<template>
  <div
    class="w-[100%] h-[60px] bg-[#F5F5F5] dark:bg-[#1e1e20] flex justify-between items-center drop-shadow-md"
  >
    <h1
      class="text-3xl font-bold text-[black] dark:text-[#F5F5F5] bg-[#F5F5F5] dark:bg-[#1e1e20] ml-6"
    >
      News
    </h1>
    <DarkMode class="mr-6" />
  </div>
</template>

<script setup>
import DarkMode from "./DarkMode.vue";
</script>
