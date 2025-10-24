<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goHome = () => router.push("/");
</script>

<template>
  <router-view />
  <button class="home-button" @click="goHome" aria-label="Go home">
    <!-- Custom prettier SVG home icon -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
      <path
        d="M3 10L12 3l9 7v11a1 1 0 0 1-1 1h-6v-6H10v6H4a1 1 0 0 1-1-1V10z"
        stroke="black"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<style scoped>
.home-button {
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9); /* soft background */
  border: none;
  padding: 16px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, background 0.3s, box-shadow 0.3s;
  z-index: 1000;
}

.home-button:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.15);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.icon {
  width: 28px;
  height: 28px;
}
</style>
