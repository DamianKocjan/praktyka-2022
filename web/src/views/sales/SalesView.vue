<script setup lang="ts">
import SalesTable from "@/components/Sales/SalesTable.vue";
</script>
<template>
  <main>
    <Suspense>
      <SalesTable></SalesTable>
    </Suspense>
  </main>
</template>
