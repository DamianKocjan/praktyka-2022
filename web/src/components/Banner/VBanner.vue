<script setup lang="ts">
import { XIcon } from "@heroicons/vue/outline";

const emit = defineEmits(["open"]);

function close() {
  emit("open", false);
}

defineProps<{
  heading: string;
  open: boolean;
}>();
</script>

<template>
  <div class="bg-gray-900 my-4 rounded-lg">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <slot name="icon" />
          <p class="ml-3 font-medium text-white truncate">
            <span class="md:hidden"> {{ heading }} </span>
            <span class="hidden md:inline">
              <slot />
            </span>
          </p>
        </div>
        <div
          class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
        >
          <slot name="actions" />
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button
            type="button"
            class="-mr-1 flex p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 sm:-mr-2"
            @click="close"
          >
            <span class="sr-only">Dismiss</span>
            <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
