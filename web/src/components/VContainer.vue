<script setup lang="ts">
defineProps<{
  classes?: string;
}>();
</script>

<template>
  <div :class="`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${classes}`">
    <slot />
  </div>
</template>
