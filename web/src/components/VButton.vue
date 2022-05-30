<script setup lang="ts">
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-gray-800",
        "text-white",
        "border-transparent",
        "hover:bg-gray-700",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [
    { intent: "primary", size: "medium", class: "uppercase font-semibold" },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

type ButtonProps = VariantProps<typeof button>;

defineProps<{
  intent: ButtonProps["intent"];
  size: ButtonProps["size"];
}>();
</script>
<template>
  <button :class="button({ intent, size })">
    <slot />
  </button>
</template>
