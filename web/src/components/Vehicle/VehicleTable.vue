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
import type { VehicleData, VehicleAllResponse } from "@/types";
import { formatNumber } from "@/utils/formaters";

onMounted(async () => {
  await getVehicles();
});

const vehicles = ref<VehicleData[]>([]);

async function getVehicles() {
  const { data: response } = await axios.get<VehicleAllResponse>("/vehicles");

  vehicles.value = response.data;
}
</script>

<template>
  <Suspense>
    <VTable>
      <VTHead>
        <tr>
          <VTh>Producent</VTh>
          <VTh>Model</VTh>
          <VTh>Stan</VTh>
          <VTh>Rok Produkcji</VTh>
          <VTh>Przebieg</VTh>
          <VTh>Liczba Drzwi</VTh>
          <VTh>Liczba Miejsc</VTh>
          <VTh>Kolor</VTh>
          <VTh>Moc Silnika</VTh>
          <VTh>Rodzaj Paliwa</VTh>
          <VTh></VTh>
        </tr>
      </VTHead>
      <tbody>
        <tr v-for="vehicle in vehicles" :key="vehicle.id">
          <VTd>{{ vehicle.manufacturerName }}</VTd>
          <VTd>{{ vehicle.model }}</VTd>
          <VTd>{{ vehicle.condition }}</VTd>
          <VTd>{{ new Date(vehicle.productionYear).getFullYear() }}</VTd>
          <VTd>{{ formatNumber(vehicle.mileage) }}km</VTd>
          <VTd>{{ vehicle.doorsNumber }}</VTd>
          <VTd>{{ vehicle.numberOfSeats }}</VTd>
          <VTd>{{ vehicle.color }} {{ vehicle.lacquer }}</VTd>
          <VTd>{{ vehicle.enginePower }} HP</VTd>
          <VTd>{{ vehicle.fuelType }}</VTd>
          <VTd>
            <RouterLink to="/sales">
              <VButton :intent="'primary'" :size="'medium'">Kup</VButton>
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
