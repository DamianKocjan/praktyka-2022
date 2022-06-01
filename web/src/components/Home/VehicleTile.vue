<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps<{
  callout: {
    imageSrc: string;
    imageAlt: string;
    name: string;
    description: string;
    href: string;
  };
}>();
</script>
<template>
  <div class="group relative">
    <div
      class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 my-6"
    >
      <img
        :src="callout.imageSrc"
        :alt="callout.imageAlt"
        class="w-full h-full object-center object-cover"
      />
    </div>
    <h3 class="mt-6 text-sm text-gray-500">
      <RouterLink :to="callout.href">
        <span class="absolute inset-0" />
        {{ callout.name }}
      </RouterLink>
    </h3>
    <p class="text-base font-semibold text-gray-900">
      {{ callout.description }}
    </p>
  </div>
</template>
