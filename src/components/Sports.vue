<template>
  <input
    v-model="searchKeyword"
    class="w-[300px] mt-4 mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
    placeholder="Search"
  />
  <div
    class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 bg-[#F5F5F5] dark:bg-[#1e1e20] min-h-[100vh]"
  >
    <div
      class="grid grid-cols-1 max-h-[100%] gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 dark:bg-[#1e1e20]"
    >
      <a
        v-for="item in filteredNews"
        :key="item.id"
        :href="item.url"
        class="group dark:text-[#F5F5F5] bg-[#F5F5F5] dark:bg-[#1e1e20] rounded-xl border-2 p-2"
        target="_blank"
      >
        <h2 class="sr-only">{{ item.title }}</h2>
        <div
          class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
        >
          <img
            :src="item.urlToImage"
            class="h-full w-full object-cover object-center group-hover:scale-110 duration-700 min-h-[200px] dark:text-[#F5F5F5] bg-[#F5F5F5] dark:bg-[#1e1e20]"
          />
        </div>
        <h3
          class="mt-4 text-sm text-gray-900 dark:text-[#F5F5F5] bg-[#F5F5F5] dark:bg-[#1e1e20]"
        >
          {{ item.description }}
        </h3>
        <h5
          class="mt-4 text-sm font-medium text-gray-700 bottom-0 dark:text-[#F5F5F5] bg-[#F5F5F5] dark:bg-[#1e1e20]"
        >
          {{ item.publishedAt }}
        </h5>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const news = ref([]);
const apiKey = "f0a6d1e45c914cbbb4ac7541daf5b4d8";

const fetchData = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&apiKey=${apiKey}`
  );
  const data = await response.json();
  return data.articles;
};

onMounted(async () => {
  const data = await fetchData();
  news.value = data;
});

const searchKeyword = ref("");
const filteredNews = computed(() => {
  if (!searchKeyword.value) {
    return news.value;
  } else {
    const keyword = searchKeyword.value.toLowerCase();
    return news.value.filter(
      (item) =>
        (item.title &&
          typeof item.title === "string" &&
          item.title.toLowerCase().includes(keyword)) ||
        (item.description &&
          typeof item.description === "string" &&
          item.description.toLowerCase().includes(keyword))
    );
  }
});
</script>
