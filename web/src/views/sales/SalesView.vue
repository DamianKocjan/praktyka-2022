<script setup lang="ts">
import SalesTable from "@/components/Sales/SalesTable.vue";
import axios from "@/utils/axios";

async function fetchSales() {
  const response = await axios("/api/sales");
  return response;
}
</script>

<template>
  <main>
    <Suspense>
      <SalesTable></SalesTable>
    </Suspense>
  </main>
</template>
