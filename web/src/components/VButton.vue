<script setup lang="ts">
import { cva, cx } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "w-full",
        "rounded-md",
        "border",
        "border-gray-300",
        "shadow-sm",
        "bg-white",
        "font-medium",
        "text-white",
        "bg-gray-800",
        "hover:bg-gray-700",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-slate-900",
        "sm:mt-0",
        "sm:ml-3",
        "sm:w-auto",
        "sm:text-sm",
      ],
      secondary: [
        "w-full",
        "rounded-md",
        "border",
        "border-gray-300",
        "shadow-sm",
        "bg-white",
        "font-medium",
        "text-gray-700",
        "hover:bg-gray-50",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-gray-500",
        "sm:mt-0",
        "sm:ml-3",
        "sm:w-auto",
        "sm:text-sm",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
      large: ["md:text-lg", "py-4", "px-6"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

type ButtonProps = VariantProps<typeof button>;

defineProps<{
  intent: ButtonProps["intent"];
  size: ButtonProps["size"];
  className?: string;
}>();
</script>
<template>
  <button :class="cx(button({ intent, size }), className)">
    <slot />
  </button>
</template>
