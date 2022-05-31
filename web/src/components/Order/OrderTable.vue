<script setup lang="ts">
import { onMounted, ref } from "vue";

import VSpinner from "@/components/VSpinner.vue";
import VTable from "@/components/Table/VTable.vue";
import VTHead from "@/components/Table/VTHead.vue";
import VTh from "@/components/Table/VTh.vue";
import VTd from "@/components/Table/VTd.vue";
import axios from "@/utils/axios";
import { formatRelativeDate, formatCurrency } from "@/utils/formaters";
import type { OrderAllResponse, OrderData } from "@/types";

onMounted(async () => {
  await getOrders();
});

const orders = ref<OrderData[]>([]);

async function getOrders() {
  const { data: response } = await axios.get<OrderAllResponse>("/orders");

  orders.value = response.data;
}
</script>

<template>
  <Suspense>
    <VTable>
      <VTHead>
        <tr>
          <VTh>Pojazd</VTh>
          <VTh>Cena</VTh>
          <VTh>Zamówiono</VTh>
          <VTh>Status</VTh>
          <VTh>Data dostarczenia</VTh>
        </tr>
      </VTHead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <VTd>
            {{ order.saleVehicleManufacturerName }}
            {{ order.saleVehicleModel }}
          </VTd>
          <VTd>{{ formatCurrency(order.saleCost) }}</VTd>
          <VTd>{{ formatRelativeDate(new Date(order.createdAt)) }}</VTd>
          <VTd>{{ order.status }}</VTd>
          <VTd>
            {{ formatRelativeDate(new Date(order.deliveredAt)) }}
          </VTd>
        </tr>
      </tbody>
    </VTable>

    <template #fallback>
      <VSpinner />
    </template>
  </Suspense>
</template>
