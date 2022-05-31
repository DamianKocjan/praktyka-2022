<script setup lang="ts">
import { onMounted, ref } from "vue";

import VSpinner from "@/components/VSpinner.vue";
import VContainer from "@/components/VContainer.vue";
import VButton from "@/components/VButton.vue";
import VModal from "@/components/VModal.vue";
import VTable from "@/components/Table/VTable.vue";
import VTHead from "@/components/Table/VTHead.vue";
import VTh from "@/components/Table/VTh.vue";
import VTd from "@/components/Table/VTd.vue";
import axios from "@/utils/axios";
import type { SaleData, SaleAllResponse } from "@/types";
import { formatCurrency } from "@/utils/formaters";

onMounted(async () => {
  await getSales();
});

const sales = ref<SaleData[]>([]);
const selectedSale = ref<SaleData | null>(null);
const open = ref(false);

async function getSales() {
  try {
    const { data: response } = await axios.get<SaleAllResponse>("/sales");

    sales.value = response.data;
  } catch (error) {
    console.log(error);
  }
}

function handleModalOpen(e: Event, sale: SaleData) {
  e.preventDefault();

  selectedSale.value = sale;
  open.value = true;
}

function handleOpenChange(isOpen: boolean) {
  open.value = isOpen;
}

async function createOrder(e: Event) {
  e.preventDefault();

  try {
    await axios.post("/orders", {
      saleId: selectedSale.value!.id,
    });
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
            <VTh>Pojazd</VTh>
            <VTh>Typ</VTh>
            <VTh>Kolor</VTh>
            <VTh>Stan</VTh>
            <VTh>Rok produkcji</VTh>
            <VTh>Cena</VTh>
            <VTh />
          </tr>
        </VTHead>
        <tbody>
          <tr v-for="sale in sales" :key="sale.id">
            <VTd>{{ sale.vehicleName }}</VTd>
            <VTd>{{ sale.vehicleType }}</VTd>
            <VTd>{{ sale.vehicleColor }}</VTd>
            <VTd>{{ sale.vehicleCondition }}</VTd>
            <VTd>{{ new Date(sale.vehicleProductionYear).getFullYear() }}</VTd>
            <VTd>{{ formatCurrency(sale.cost) }}</VTd>
            <VTd>
              <VButton
                size="medium"
                intent="primary"
                @click="(e) => handleModalOpen(e, sale)"
              >
                Kup
              </VButton>
            </VTd>
          </tr>
        </tbody>
      </VTable>

      <VModal
        :title="`O serwisie ${selectedSale?.vehicleName}`"
        :open="open"
        @open="handleOpenChange"
      >
        <div>
          <!-- TODO: make modal content pretty -->
          {{ JSON.stringify(selectedSale) }}
        </div>
        <template #actions>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <VButton
              :intent="'primary'"
              :size="'medium'"
              type="button"
              class="mt-3 w-full inline-flex justify-center"
              @click="
                (e) => {
                  open = false;
                  createOrder(e);
                }
              "
            >
              Kup
            </VButton>
            <VButton
              :intent="'secondary'"
              :size="'medium'"
              type="button"
              class="mt-3 w-full inline-flex justify-center"
              @click="open = false"
            >
              Anuluj
            </VButton>
          </div>
        </template>
      </VModal>
    </VContainer>

    <template #fallback>
      <VSpinner />
    </template>
  </Suspense>
</template>
