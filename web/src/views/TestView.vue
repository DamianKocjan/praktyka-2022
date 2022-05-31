<script setup lang="ts">
import VContainer from "@/components/VContainer.vue";
import VModal from "@/components/VModal.vue";
import VButton from "@/components/VButton.vue";

import { ref } from "vue";

const open = ref(false);

function handleOpenChange(isOpen: boolean) {
  open.value = isOpen;
}
</script>

<template>
  <main>
    <VContainer>
      <VModal :title="'Hello world'" :open="open" @open="handleOpenChange" />
      <VButton @click="open = true" :intent="'secondary'" :size="'small'">
        open modal
      </VButton>
      <VButton @click="open = true" :intent="'primary'" :size="'small'">
        open modal
      </VButton>
      <VButton @click="open = true" :intent="'secondary'" :size="'medium'">
        open modal
      </VButton>
      <VButton @click="open = true" :intent="'primary'" :size="'medium'">
        open modal
      </VButton>
      <VButton @click="open = true" :intent="'secondary'" :size="'large'">
        open modal
      </VButton>
      <VButton @click="open = true" :intent="'primary'" :size="'large'">
        open modal
      </VButton>
    </VContainer>
  </main>
</template>
