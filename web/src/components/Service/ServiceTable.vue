<script setup lang="ts">
import { onMounted, ref } from "vue";

import VButton from "@/components/VButton.vue";
import VModal from "@/components/VModal.vue";
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
const selectedService = ref<ServiceData | null>(null);
const open = ref(false);

async function getServices() {
  const { data: response } = await axios.get<ServiceAllResponse>("/services");

  services.value = response.data;
}

function handleModalOpen(e: Event, service: ServiceData) {
  e.preventDefault();

  selectedService.value = service;
  open.value = true;
}

function handleOpenChange(isOpen: boolean) {
  open.value = isOpen;
}
</script>

<template>
  <Suspense>
    <div>
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
              <VButton
                :intent="'primary'"
                :size="'medium'"
                @click="(e) => handleModalOpen(e, service)"
              >
                Więcej
              </VButton>
            </VTd>
          </tr>
        </tbody>
      </VTable>
      <VModal
        :title="`O serwisie ${selectedService?.vehicleName}`"
        :open="open"
        @open="handleOpenChange"
      >
        <div>
          <!-- TODO: make modal content pretty -->
          {{ JSON.stringify(selectedService) }}
        </div>
        <template #actions>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <VButton
              :intent="'secondary'"
              :size="'medium'"
              type="button"
              class="mt-3 w-full inline-flex justify-center"
              @click="open = false"
            >
              Zamknij
            </VButton>
          </div>
        </template>
      </VModal>
    </div>

    <template #fallback>
      <VSpinner />
    </template>
  </Suspense>
</template>
