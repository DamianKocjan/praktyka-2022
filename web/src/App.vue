<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";

import VNav from "@/components/VNav.vue";
import { useAuthStore } from "@/stores/auth";
import axios from "@/utils/axios";

const authStore = useAuthStore();

onMounted(async () => {
  if (authStore.token) {
    axios.defaults.headers.common["x-access-token"] = authStore.token;

    await authStore.me();
  }
});
</script>

<template>
  <VNav />
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
