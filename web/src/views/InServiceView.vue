<script setup lang="ts">
import { RouterLink } from "vue-router";

import ServiceTable from "@/components/Service/ServiceTable.vue";
import VContainer from "@/components/VContainer.vue";
import VButton from "@/components/VButton.vue";
</script>

<template>
  <main>
    <VContainer>
      <div class="flex justify-between items-center my-4">
        <h2
          class="lg:text-4xl md:text-5xl text-3xl font-extrabold text-gray-800 float-left"
        >
          Serwis
        </h2>
        <RouterLink to="/add-service">
          <VButton :intent="'primary'" :size="'medium'">
            Oddaj samochód do serwisu
          </VButton>
        </RouterLink>
      </div>
      <ServiceTable />
    </VContainer>
  </main>
</template>
