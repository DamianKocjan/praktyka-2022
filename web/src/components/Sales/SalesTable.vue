<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

import VSpinner from "@/components/VSpinner.vue";
import VContainer from "@/components/VContainer.vue";
import VTable from "@/components/Table/VTable.vue";
import VTHead from "@/components/Table/VTHead.vue";
import VTh from "@/components/Table/VTh.vue";
import VTd from "@/components/Table/VTd.vue";
import axios from "@/utils/axios";

onMounted(async () => {
  await getSales();
});

// @TODO:
const sales = ref<any>([]);

async function getSales() {
  try {
    const response = await axios.get("/sales");

    sales.value = response.data;
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <Suspense>
    <VContainer>
      <VTable>
        <VTHead>
          <tr>
            <VTh>Id Klienta</VTh>
            <VTh>Status Zamówienia</VTh>
            <VTh>Data Zamównienia</VTh>
          </tr>
        </VTHead>
        <tbody>
          <tr class="odd:my-4">
            <VTd>1</VTd>
            <VTd>W trakcie</VTd>
            <VTd>25.04.2022</VTd>
          </tr>
          <tr class="odd:my-4">
            <VTd>2</VTd>
            <VTd>W Trakcie</VTd>
            <VTd>11.09.2021</VTd>
          </tr>
          <tr class="odd:my-4">
            <VTd>3</VTd>
            <VTd>Dostarczone</VTd>
            <VTd>21.11.2015</VTd>
          </tr>
        </tbody>
      </VTable>
    </VContainer>

    <template #fallback>
      <VSpinner />
    </template>
  </Suspense>
</template>
