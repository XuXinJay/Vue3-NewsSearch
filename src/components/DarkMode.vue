<template>
  <div class="theme-switch">
    <label>
      <input type="checkbox" class="checkbox" v-model="isDark" />
      <span class="check"></span>
    </label>
  </div>
</template>

<script setup>
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>

<style scoped>
.theme-switch {
  background: none;
}

.checkbox {
  width: 0;
  height: 0;
  visibility: hidden;
  display: none;
}

.check {
  position: relative;
  display: block;
  width: 40px;
  height: 20px;
  background: #1e1e20;
  cursor: pointer;
  border-radius: 30px;
  overflow: hidden;
  transition: 0.4s;
}

.checkbox:checked ~ .check {
  background: #f5f5f5;
}

.check:before {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  background: #f5f5f5;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: 0.4s;
}

.checkbox:checked ~ .check:before {
  transform: translateX(20px);
  background: #1e1e20;
}
</style>
