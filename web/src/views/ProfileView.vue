<script setup lang="ts">
import { CheckIcon } from "@heroicons/vue/outline";
import { onMounted, ref } from "vue";

import VContainer from "@/components/VContainer.vue";
import VSpinner from "@/components/VSpinner.vue";
import axios from "@/utils/axios";
import type { MeResponse, User } from "@/types";
import VButton from "@/components/VButton.vue";
import VBanner from "@/components/Banner/VBanner.vue";
import VIconWrapper from "@/components/Banner/IconWrapper.vue";

onMounted(async () => {
  await fetchUser();
});

const isEdited = ref(false);
const updatedSuccessfully = ref<boolean | null>(null);
const user = ref<User>({
  id: "",
  email: "",
  phoneNumber: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "" as unknown as Date,
  country: "",
  state: "",
  zip: "",
  city: "",
  street: "",
  createdAt: "" as unknown as Date,
  updatedAt: "" as unknown as Date,
});

async function fetchUser() {
  const { data: result } = await axios.get<MeResponse>("/auth/me");

  user.value = result.data.user;
}

// TODO: add type for event
function handleEdit(e: any) {
  e.preventDefault();

  isEdited.value = true;
  user.value = { ...user.value, [e.target.name]: e.target.value };
}

async function handleUpdateForm(e: Event) {
  e.preventDefault();

  try {
    await axios.put(`/users/${user.value.id}`, user.value);
  } catch (error) {
    console.log(error);
  } finally {
    isEdited.value = false;
    updatedSuccessfully.value = true;
  }
}

function handleOpenChange(isOpen: boolean) {
  updatedSuccessfully.value = isOpen;
}
</script>

<template>
  <main>
    <Suspense>
      <VContainer>
        <VBanner
          heading="hello world"
          :open="(updatedSuccessfully as boolean)"
          @open="handleOpenChange"
          v-if="updatedSuccessfully"
        >
          <template #icon>
            <VIconWrapper>
              <CheckIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </VIconWrapper>
          </template>

          Zaktualizowano pomyślnie!
        </VBanner>

        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-5">
            <div class="border-t border-gray-200" />
          </div>
        </div>

        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Informacje osobiste
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                  Użyj swojego adresu E-mail, aby otrzymywać od nas wiadomości.
                </p>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="first-name"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Imię
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="first-name"
                          autocomplete="given-name"
                          class="mt-1 focus:ring-gray-800 focus:border-gray-800 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          :value="user.firstName"
                          @input="(e) => handleEdit(e)"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="last-name"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Nazwisko
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="last-name"
                          autocomplete="family-name"
                          class="mt-1 focus:ring-gray-800 focus:border-gray-800 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          :value="user.lastName"
                          @input="(e) => handleEdit(e)"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="phoneNumber"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Numer telefonu
                        </label>
                        <input
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          autocomplete="family-name"
                          class="mt-1 focus:ring-gray-800 focus:border-gray-800 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          :value="user.phoneNumber"
                          @input="(e) => handleEdit(e)"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <label
                          for="email"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Adres E-mail
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          autocomplete="email"
                          class="mt-1 focus:ring-gray-800 focus:border-gray-800 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          :value="user.email"
                          @input="(e) => handleEdit(e)"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="country"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Kraj
                        </label>
                        <select
                          id="country"
                          name="country"
                          autocomplete="country-name"
                          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-gray-800 sm:text-sm"
                          :value="user.country"
                          @input="(e) => handleEdit(e)"
                        >
                          <option value="poland">Polska</option>
                          <option value="usa">Stany Zjedoczone</option>
                          <option value="canada">Kanada</option>
                          <option value="germany">Niemcy</option>
                          <option value="ukraine">Ukraina</option>
                          <option value="great-britain">Wielka Brytania</option>
                        </select>
                      </div>

                      <div class="col-span-6">
                        <label
                          for="street"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Ulica
                        </label>
                        <input
                          type="text"
                          name="street"
                          id="street"
                          autocomplete="street"
                          class="mt-1 focus:ring-gray-800 focus:border-gray-800 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          :value="user.street"
                          @input="(e) => handleEdit(e)"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          for="city"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Miasto
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autocomplete="address-level2"
                          class="mt-1 focus:ring-gray-800 focus:border-gray-800 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          :value="user.city"
                          @input="(e) => handleEdit(e)"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          for="state"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Województwo
                        </label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          autocomplete="address-level1"
                          class="mt-1 focus:ring-gray-800 focus:border-gray-800 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          :value="user.state"
                          @input="(e) => handleEdit(e)"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          for="zip"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Kod pocztowy
                        </label>
                        <input
                          type="text"
                          name="zip"
                          id="zip"
                          autocomplete="postal-code"
                          class="mt-1 focus:ring-gray-800 focus:border-gray-800 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          :value="user.zip"
                          @input="(e) => handleEdit(e)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-5">
            <div class="border-t border-gray-200" />
          </div>
        </div>

        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Powiadomienia
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                  Zdecyduj, jakie powiadomienia chcesz otrzymywać i w jaki
                  sposób.
                </p>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <fieldset>
                      <legend class="sr-only">Za pomocą E-maila</legend>
                      <div
                        class="text-base font-medium text-gray-900"
                        aria-hidden="true"
                      >
                        Za pomocą E-maila
                      </div>
                      <div class="mt-4 space-y-4">
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="comments"
                              name="comments"
                              type="checkbox"
                              class="focus:ring-gray-800 h-4 w-4 text-gray-800 border-gray-300 rounded"
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              for="comments"
                              class="font-medium text-gray-700"
                            >
                              Uwagi
                            </label>
                            <p class="text-gray-500">
                              Otrzymuj powiadomienia, gdy pojawią się jakieś
                              nowości.
                            </p>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="candidates"
                              name="candidates"
                              type="checkbox"
                              class="focus:ring-gray-800 h-4 w-4 text-gray-800 border-gray-300 rounded"
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              for="candidates"
                              class="font-medium text-gray-700"
                            >
                              Oferty
                            </label>
                            <p class="text-gray-500">
                              Otrzymuj powiadomienia, gdy wystąpi jakaś
                              promocja.
                            </p>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              class="focus:ring-gray-800 h-4 w-4 text-gray-800 border-gray-300 rounded"
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              for="offers"
                              class="font-medium text-gray-700"
                            >
                              Każde powiadomienia
                            </label>
                            <p class="text-gray-500">
                              Dostawaj każde możliwe powiadomienie.
                            </p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend
                        class="contents text-base font-medium text-gray-900"
                      >
                        Powiadomienia push
                      </legend>
                      <p class="text-sm text-gray-500">
                        Są one dostarczane przez SMS na Twój telefon komórkowy.
                      </p>
                      <div class="mt-4 space-y-4">
                        <div class="flex items-center">
                          <input
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
                            class="focus:ring-gray-800 h-4 w-4 text-gray-800 border-gray-300"
                          />
                          <label
                            for="push-everything"
                            class="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Wszystko
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                            class="focus:ring-gray-800 h-4 w-4 text-gray-800 border-gray-300"
                          />
                          <label
                            for="push-email"
                            class="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Takie same jak na e-mail
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            id="push-nothing"
                            name="push-notifications"
                            type="radio"
                            class="focus:ring-gray-800 h-4 w-4 text-gray-800 border-gray-300"
                          />
                          <label
                            for="push-nothing"
                            class="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Brak powiadomień push
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div
                    class="px-4 py-3 bg-gray-50 text-right sm:px-6"
                    v-if="isEdited"
                  >
                    <VButton
                      type="submit"
                      size="medium"
                      intent="primary"
                      @click="handleUpdateForm"
                    >
                      Zapisz
                    </VButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </VContainer>

      <template #fallback>
        <VSpinner />
      </template>
    </Suspense>
  </main>
</template>
