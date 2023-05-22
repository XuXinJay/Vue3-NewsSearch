<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <Header></Header>
  <div
    class="min-w-[100%] container flex justify-center items-center flex-col bg-[#F5F5F5] dark:bg-[#1e1e20]"
  >
    <div class="grid grid-cols-3 sm:grid-cols-6 bg-[#F5F5F5] dark:bg-[#1e1e20]">
      <RouterLink
        class="flex w-[80px] h-[40px] bg-indigo-300 m-4 rounded-full p-2 justify-center"
        to="/"
        >頭條</RouterLink
      >
      <RouterLink
        class="flex w-[80px] h-[40px] bg-indigo-300 m-4 rounded-full p-2 justify-center"
        to="/ContentA"
        >政治</RouterLink
      >
      <RouterLink
        class="flex w-[80px] h-[40px] bg-indigo-300 m-4 rounded-full p-2 justify-center"
        to="/ContentB"
        >科技</RouterLink
      >
      <RouterLink
        class="flex w-[80px] h-[40px] bg-indigo-300 m-4 rounded-full p-2 justify-center"
        to="/ContentC"
        >商業</RouterLink
      >
      <RouterLink
        class="flex w-[80px] h-[40px] bg-indigo-300 m-4 rounded-full p-2 justify-center"
        to="/ContentD"
        >娛樂</RouterLink
      >
      <RouterLink
        class="flex w-[80px] h-[40px] bg-indigo-300 m-4 rounded-full p-2 justify-center"
        to="/ContentE"
        >運動</RouterLink
      >
    </div>
    <RouterView class="bg-[#F5F5F5] dark:bg-[#1e1e20]" v-slot="{ Component }">
      <transition name="page">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1px);
}
</style>
