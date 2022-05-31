<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

import VButton from "@/components/VButton.vue";
import VSpinner from "@/components/VSpinner.vue";
import VTable from "@/components/Table/VTable.vue";
import VTHead from "@/components/Table/VTHead.vue";
import VTh from "@/components/Table/VTh.vue";
import VTd from "@/components/Table/VTd.vue";
import axios from "@/utils/axios";
import type { ServiceAllResponse, ServiceData } from "@/types";
import { formatRelativeDate, formatCurrency } from "@/utils/formaters";

onMounted(async () => {
  await getServices();
});

const services = ref<ServiceData[]>([]);

async function getServices() {
  const { data: response } = await axios.get<ServiceAllResponse>("/services");

  services.value = response.data;
}
</script>

<template>
  <Suspense>
    <VTable>
      <VTHead>
        <tr>
          <VTh>Pojazd</VTh>
          <VTh>Opis</VTh>
          <VTh>Koszt</VTh>
          <VTh>Status</VTh>
          <VTh>Oddano do serwisu</VTh>
          <VTh></VTh>
        </tr>
      </VTHead>
      <tbody>
        <tr v-for="service in services" :key="service.id">
          <VTd>{{ service.vehicleName }}</VTd>
          <VTd>{{ service.description }}</VTd>
          <VTd>{{ formatCurrency(service.cost) }}</VTd>
          <VTd>{{ service.status }}</VTd>
          <VTd>{{ formatRelativeDate(new Date(service.createdAt)) }}</VTd>
          <VTd>
            <RouterLink to="/sales">
              <VButton :intent="'primary'" :size="'medium'">Więcej</VButton>
            </RouterLink>
          </VTd>
        </tr>
      </tbody>
    </VTable>

    <template #fallback>
      <VSpinner />
    </template>
  </Suspense>
</template>
