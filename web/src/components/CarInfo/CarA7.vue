<template>
  <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
            <div class="flex items-center">
              <a
                :href="breadcrumb.href"
                class="mr-2 text-sm font-medium text-gray-900"
              >
                {{ breadcrumb.name }}
              </a>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-4 h-5 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <a
              :href="product.href"
              aria-current="page"
              class="font-medium text-gray-500 hover:text-gray-600"
            >
              {{ product.name }}
            </a>
          </li>
        </ol>
      </nav>

      <!-- Image gallery -->
      <div
        class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8"
      >
        <div
          class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block"
        >
          <img
            :src="product.images[0].src"
            :alt="product.images[0].alt"
            class="w-full h-full object-center object-cover"
          />
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              :src="product.images[1].src"
              :alt="product.images[1].alt"
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              :src="product.images[2].src"
              :alt="product.images[2].alt"
              class="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div
          class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4"
        >
          <img
            :src="product.images[3].src"
            :alt="product.images[3].alt"
            class="w-full h-full object-center object-cover"
          />
        </div>
      </div>

      <!-- Product info -->
      <div
        class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1
            class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
          >
            {{ product.name }}
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl text-gray-900">{{ product.price }}</p>

          <form class="mt-10">
            <!-- Colors -->
            <div>
              <h3 class="text-sm text-gray-900 font-medium">Kolor</h3>

              <RadioGroup v-model="selectedColor" class="mt-4">
                <RadioGroupLabel class="sr-only">
                  Choose a color
                </RadioGroupLabel>
                <div class="flex items-center space-x-3">
                  <RadioGroupOption
                    as="template"
                    v-for="color in product.colors"
                    :key="color.name"
                    :value="color"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        color.selectedClass,
                        active && checked ? 'ring ring-offset-1' : '',
                        !active && checked ? 'ring-2' : '',
                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none',
                      ]"
                    >
                      <RadioGroupLabel as="span" class="sr-only">
                        {{ color.name }}
                      </RadioGroupLabel>
                      <span
                        aria-hidden="true"
                        :class="[
                          color.class,
                          'h-8 w-8 border border-black border-opacity-10 rounded-full',
                        ]"
                      />
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>

            <button
              type="submit"
              class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Kup teraz
            </button>
            <div
              class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:pr-8"
            >
              <p class="text-center">
                lub umów się na jazde testową w naszym salonie już teraz!
              </p>
            </div>
          </form>
        </div>

        <div
          class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"
        >
          <!-- Description and details -->
          <div>
            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ product.description }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Cztery pierścienie. Jedna wyraźna linia
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.details }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Wszechstronne A7</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.select }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Dynamika w najatrakcyjniejszej formie
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.suport }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Innowacyjna technologia oświetlenia
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                {{ product.headlights }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Sportowe doświadczenie prowadzenia
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                {{ product.sport }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Proste parkowanie z pomocą asystenta
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                {{ product.design }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Przyjemna atmosfera
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                {{ product.design2 }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

const product = {
  name: "Audi A7 Sportback",
  price: "300 080 PLN",
  href: "#",
  images: [
    {
      src: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAI1WaTiV7RZ-zMMjswplm6fMcxmSMSW2sV1CiB2ZVYZQn7Y5xDZmio-jlGT62OZ5nillmzUYIrb4UPY-b-c75_95f6zruda7rutZaz33uu_1egPQ3fMHNHZ2epePeHmwWKI6NQBBvgAAKsRPbaf3eufEPj2j9cJ_3XAK0Aa6OvtSIRFG1MzuXk5YV_nfjmMUCoWNitlJXdbd-66sv68KAxIRAdHSzCT1I_Uiz1CL-yF_7RZBJXwMgD3qhODQ7wcZbtdep4TZy1vaSBfOAJgT14ut2ZTIkDq_F47b2niTb675HkBWCv3F4heuzCFHxq3xSqzatS06ggByRq-wW3kGCfqUGZH3L73DXsb1ywP4wdUwP0Couez09hWHLCvCSl1pYyeABO6AdtFjy-utUr_o2dUOQw84zPMAfHjf5W-XgvmeGt_vLN1qVysdsvUWAEzRIQaPeujx1b7U0aCyGqRjOrJpBNBiAUePT_Os5HgUIbvf4FkwS-k0BLCtKgF4XooLPavP-YC1bs4hJuDxFQDtH4_S1Wc6sM01rNhaqBCdH8p5agC4-LjbGWuQIWZ998bXB5SAa4dvomwBFEhQtlwa7wrO4Lo-KkWKIpQm07kAeKR4i7MijjScb_z4ZVNOTYDLRBmSAybRUEuPQSW5pkY96EWswXJH1KA-gLWTT8psD6nNl7kvCdhs6M_brrCPAPjtSUJCXLRbxy8F8X60OV_FVXbWSQBRu3XbIST3gGNm5f31mj92XSbL6wEslMHxBwsZps7dqRJudEqRPgBO_gD2W7eKj8bH-HapRRhplDKM4Mp0dwAMP6hg2Bh7Gj_M5Wfv8BJvcPNLoTKA9y2KqNv-qmzCpesusNQpMR0zlUEy6-sy9GuILhddvX7mD5GS1VSha_fCAVREO2CC-7K1d2idjdSTLtxMoZNEYttjd4NwQfdo2g2ux3LPKahynAn7CeA1Pg_iUfhcuvjX1zk39bhZNe4P9yK3xS61tt-_0fyIrCvztYu-vHNNWAjAojn23L3b2hQrF76xvO22iJ4AQwRn_Lczpa1cMQbM4s-ba55nVXXKapwDMN1v9npLCdWkM4d_2_q2Sms4ZrgGQDuf5vg34rJTbGeV3S16zgxlOz-9BGCpxaxCDlMAg6iRbqOAfyxLLGrKBMBxj6a_tW-rLSpOvOlhpSb_yHnwSgvAOaGzpA_lFtoRpWbxBnwD9eXy2FYA7zkVCqzNX9kWlxhRMyDUXA6drkNu6wtsyhSJZdP81jetL4dpqq9i0f8OoNURwY1_n1GJKJrGj5ayffvC-eoSgPlhzJU2g5RVnvpPiYnGYqtZPueHkNpOhlQfdXik9r1K-x5lHcgjK-iQA2AmAYVpNbzqtvpgcNBLIClyRAGuAqi6PiRTvvnsSe0tOXSq8_P0rXc8vgAO8xdn2LN4Tj7uMZHQ5WUvJRQq4wEcou2tUc9qHj6SEkxsJJWNckrFpwI43aGTYaU6bFeg5CjcSLWr1cI_pIngzJYNl9Meb5omO2ZGaRmXNsNrViD9VcT0BHWzSHio1xpbSC_vuuydYgKw25WXt_J8E75AlJxN8Kf1kgRHiwCif6WwnMgUyI3YRof-Ge_BVmf0nQ7pjqQPSzq99x7PweDXsF-oaE1UK4Kd3VzuGKHjWnYlpGf6H51UeqrUriPeJsbOn8sGyaf2thoD3Z7alh0fw50FMNWmQzB3zM5pLCxk0JGdrP3NvOsJgLfORUpuL0ZlEPcjl9fjCc2jJTMqADpMt_NZC-ZNqNENe6nuyJ3Yu_grH0AXmruGYyfpLl3kGTpePF2bMiHdPI7MfHkYhWCL93iqQDR7KPHjIDL11QUAaXhkHAyzUr5UUEk4HvFVpqqrMiKZhZ5JFaOeFdFkgKTCzWysWIL7PV4A6eLQx_nNYhvYT08XR6J6464xzycj2FHRakq7p4QhX9iToq9vHYwIQ_EAKBHvs2v-iZT_1wVsWJIy4aPcWqwagMf8iuDrmIXF_jvv3pRmWgvX00aYAnjONlpe2IZyvUUpfqtimF2ozvTGHoCmXzYdf6wG7DNQ7hUf1H24njArKwZga6yxU2-9Rg6LXRKzv6V7lCnNTAuACXyuxWV0L1vS6VE4X70_trCoHRkA744OnOpYuXM6-Fngk3bTQjNxmbA2AJeMnH-G1TQRkz4J-b__1hKLUg3FAfgx2hJ3-8tJ-2hMxS5vaP8EEVWMzJvfkGbE-Z9kkWATvbef8Gz4kGxpZOaPSupWer0j8-SF38dufw5bYVkZTwdQHGB1dIabtBisO_DzKStFe9NnkHxXlxtRwR7o-0q5PidJl02KUEv8_ABqiMXkfCpfU2aZV97DvH1SNV6ThFTMWvhKZ5lorhRixzaaJ-GwVKx1YgLA02-0O8m0FdQGE_LLsb-oMDHh0ZwIzuwZF3LMu4aq3jepcLxdqk6YrV5D8KsfKNXXKZQ30smC09-03jyLa0dY2ead5e5tu2TcqoI6qyZxxmvwrRUNgAENP_uVHF7M3iljMXQQHOH-ljy7DSBHp-iuf8xqcGa_vsdcX5jJnQp0GYCDC8_3w8mPMYvoXsyQxpZ-wzSbFfLyHnXhpA0L3a_yQ7x-BcJMMsHEDUTJsjl4nZuHd9SCO02HQ2cZtUXUdQC8_PDq11MN719kkz0uZu0SHqWkrlEh_bUepJcHLhmSwj4PX6sbqGrim70BzDjs_rHnFbVRPePQE17agGopMvmEVJEdyCp67nbwKbEXP5jXrfPV77yGiDpNNL70Vd4_tpPprGFll_WC_g92BJPThsw9cXdImNDPOXrCqV1-76OOEGVIGPv7KiGWvLUelwLYvccrQt3mLRHt9ix9wKGWaTvGNxX8DEfkqr5pEwJgsxgVZlljcs49OZr64tBZimxbOKLHvOMf0g6FfauqqzolW3mM2HvK3BGdt_8Xq4k9mZyQ1LY4us_a9kgXhb8FYEEOk_GfXlocxhO7H47GN7IUXHIeAPjDBIMNMpsZajuSy2MfgUko_UhhhB9EPzo9U8tNfJlyN0-uuDB9joeVFkC8k96j9z2gfliJXYb9pMF-DfWvRAAle3qtwI_FhI1FslAeU5OE52wiwusa_IdqVrMrQYoCPM0CxpTlm5411wA0ZLDdXBr5cj5Znamj6zmp6Ph60SkA04qTSZxTxaVzIVixRGW7LFRvSRSAnmXrRkxoP5VC8dP82hp7-QWfb64D2ECnSn3r21sm48NS8QIrJcs89NNnSBVDkWhhm_x3bo_Q6xOkjfxCk1xRRHl_nkOnvBPNHMuyIbjw0JdcEApFtMVRZs2WM7yQd-X5Cf1HlnihiCuryBQK9bp5RnAT8dwK3SQurakql_QbAgCGmfFINBINznO51AYMTn8a99goRHTzp1iW6vH5Wknyx1-YzDWhGPYCXYTPqqqJxI8ila3cB-pEqtz1seQO-00APWbwljK8GTSiWXQ05KiSkgqhFGR_-IoWMOJj8amP0UiQVMQlkw-lSxGcLX9e5qSk2B4WaYnIXyge0KXnni9FOHVg8LG_ZGCFwNAMQZH4dNONtWYa4YciIkUH05cw8C9vl3Vhz-wF7CSiIu7iitQJtgNc0pHhuutdjoE0VSIfALyhrxFiVNddSeDaPyaqGOjJ_ZSMvPyUM-ZEz10RjEjPkCrP8D5W90YWwtVbho7DsX0Or3yoZd46VTWvyykIDSAa4G3Cm38SrTAlLUAe25xl6NFOQBiGkTvZWTxZ0t11avKKo6izWubaDuJd9xWbWPmzOo3FqkBhVudgHas3xYJwnwve7iEp1-Sqse35vOJLlX8zViErcJpHq-qKfFZhDRUm3UmQ0dAiMBRRHE56gBUoFG3nLRNOHjBMHn53Lh_Rlhq3Y7HdbFcSn5fp73ijRL7oEWUyke7ccI-_xDE3yZz-0XdcoSgiQkf3AND93qkBYqi3EcP8-0TP8Y_9359_LA2OBslC9_fhPy5Wrnv-nr5O_k5ecv6uAb4-3gHu9105JBX-z4-L9oKtifW_AegPtSYKDAAA?wid=1440",
      alt: "interior",
    },
    {
      src: "https://mediaservice.audi.com/media//live/50690/n4n05/4ka0my-0-asgea6/2022/14+a2a2/56+fz/aaue0a/aed1tp/aer0p0/agm4bi/ahv1d0/aib4uf/algqe0/appgs0/ase6xf/asl5sl/asr5ru/asy0k3/ata1x1/aud9wc/ausa8s/bbo6fa/blbb0a/cdw7a0/cha2h9/cpcje3/cpdiw3/ctxgw0/dae1ba/dei3fa/dfo6f0/edw7al/eih5ma/eil7m1/eph7x0/esi7w1/essuf7/estgz0/feu6a2/fhwvf0/fls8k4/fri2v5/fsp5l0/fvs7g0/fzsf0a/gef9r0/gksep0/gmot4h/gra8t6/grtvc0/gspg1d/heb6v1/hes5j2/him6nj/his3nz/hka9aq/hsw8it/hudks0/insu5a/irs4l6/kark8r/kasqk1/kms4d0/kov5zf/krs1a2/ksa5c0/ksi3g4/ksuka0/kzv6w6/lcpqq0/lddnj0/ldgfu0/ldoes3/leal0l/lenqz7/lia8g1/lka70t/lkb73p/lkc76c/lor7p1/lra2zb/lrvav1/lse9vd/lss2c5/ltu3hl/lum7ha/mas6e3/mdsfm0/mfa9s8/moaix1/motm1g/nav7ug/nnnfz1/pamgp0/pgaft0/radc7z/raoi8z/rau9ja/rcoer1/reii54/rer1g8/sab4x3/sag7f9/sbr8sk/scrfk0/sctql1/sdh4e7/sfs2k1/sfz2f0/sgk1i0/sibn2m/sie3l4/sih4a0/sizi4p/sna7l8/son5xc/spu7y0/srh6i3/ssh4kc/ssr3y0/sttgj0/tkv4i6/tpg9b0/tplb17/tveqv3/twl1vg/twu1sa/typ1ex/tyz2z8/vbk1t3/vosq1a/vtv9zx/wal9ta/wss4gf/zfm0td/zie4zb/zkv3b3/zss0rz/zuh9m0.jpeg?wid=1920",
      alt: "interior2",
    },
    {
      src: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAI1X9zvW3_8_3SgcM2QmRBFSiJC94rZuZGR1myk7K2SUkb2SvTIqElJkk1EU5Zb1tmdWRjbhc7qu7x_wPT-c6_U6r9d1rvN8Ph_jed78BiQeboDIxEQBe8jMYGc3LI4BwNsFAHACrWNMFN5sMO6eJNWf-L9lajNA7GVj6XIC_aGCIbd3xNvZCP1boDw-PqY-QY4XF7Txdhd0cxE9hf4ohv5tJufubn8d00_exXc0l4-tptwaBjBbhn1VN_O9xH-Zv1pjHN5DRQaBDwCOhS9EVROROY610DBErFMG9-0xfQXQIsNTobLDvK8kUEKXr5noOPRgQAHABenyTOI36388P37zJD4vbW3waCcPQOUP5jT1NNgiw__UDE0aR3KIaSfrATwto05u4k8iYyz58IIRy-eIrm22iwDyDbM0PDXeqjxfTjaSKSi7LikEvwOY4mw06kN1OBj985Avr7s_QO3LJDuAbh2wbx6b3zI9rUNgy_4et0Xuk4RW-Yu4S83sZlWNeDeoDQlCKxJDWgAqndXE0FVpkPDqv2Wk5IxhaJI-jkGxZT5uefS7kVvCiyunpHZtiTy8BMX2FrbSvUg9o7D9gbxTS9KlvvGbTQaArtaOpf2r2ScFxIIEAzHvbXfzA8sAdKcHT6y8XY-Zg_sbMAoLHF5WBu8AfB7izUM9Tn9UyS4oqbo2hXPRwIgB-OLUQqTlnpP5q-4GT1eQWhEY7zYNoPeUIBkx0c-zrzB1JROHJdYeUk_cALQzPQy0HnMlRLzcsibb9dZQ8j78DaBaUc31iY2HEXaxzO_8dwxvXo1algNQvM9l8sT-tZR3ijd2vR-B4hxdhnUAxayjsHwqR14p1SXb8_Z7sa3NfiYAOkrsOFeIKxgNxktVVSUysfVcvhML4H8nbEVXZQLvpK09eNNq0c8232t6BsDmHwTN920d-fjWyi-ij9doUz5HhQDolcs3W5Agh3XfwiiJirgN3pRN4ATwhG9OvtS1aLmUh7dfjTBdjx4Te0gP4Htbu_pQ4niK2w0qRN9qzY5KpofMARQOocJVPm_vgbKbgr4fP1dElBJOAkhJHcOW55TgJcizo0pL7rf7d9j4AYDMZxo4eje7lUd5qYbldecjEzMCUwAMiAiApd-7c4criP5U_wieedA18RpAFQ9hKp-wtHZP7E6JbfLVFlN_rwUA46wcRzTFzO4ZJx-8Tm1VCmniiUwHMG8Fa32uoutoivjNRonDhVlGm9cIJdpO7JE6RNdHO1VaMFT3_fDvOLg70b5BfeV-rnNutYVOymT996dob1Y8AbCxSnxrlf770lw2c9GHygmecJfMtwDKyTz5miF8v1TbtcGtCzY1vZP0RRzKFdTSJvojc1Snd7Ey2Lzy6pV50WQAfxCvKhQEjkqay69VkpiTJP-smHAAMClzpUjFqFjrQD7TcV_Gkv8XNtwGQMHGQctHxTwBR40qSkGR3yyWxagRUuPZ3s9OVQ18xNdTlOkIT_4yvvICABj2li5Fwm-2CJgrvsGKfTPVHH2ZCGDQgeQ0lRVzhvxPaUyc23B0eZviXQD9F2mMY8-Ojw2ONUzy2Pm79vEYPQfwtU9PHptF41q4d_Qk17Kz_0RaVDdiQNTHWpEVvdXBzw_PxExT1r_qOzZAOQvxseEUoDE1UuZq63mrlLbbVFgFoBnxU5-WC5cC9QrtL3Xp3k8NOTeMeGFt9-yGOb-zcy13kP9NiYGZbDnLqwD6bDMo5n8KIy4qS5EIr1jxsldYmQRQg3P-ZOhw_a9L_7Fm7Sl9Xfya4CcB4Fm_zoJ5to-5OCkrf7wpjvLB9y8IO0EG403FBGr_1vyCBcZnmaes8sZ4kBKY4SgbJo82919b7iQ7RRUUat6TBrCe9ferSidZHek6ldi07vSRj6qfggFkKwnWOXAIs11OTnFqaGYC3D-LrgA4F8pEHbEobLFscGpUioLD7D7eBnFI53xzjqKea2krqBF7pZrRFfDu2gqADKpsVAJLZqwBf_LbLjO_GNf6frcPwDSFITt2_46kVVlyo8zUKAd5eisUm68NRe_X3LFBbf6BjiemmST3T32xQ7HVqKvaNz4Q5lSPTV5YVbc6pehrBeDJPgbFFKUykramTPk5LFnGRU59MgAfBIukssCfRs_oSfjuuV6xIRN9GYTwYFNIMUb5mbWw3TW-5UscJ03goSSAE4vSjQnju03twTpX6NjSVWJMIj4CmEF1RToOFAzLV5nncWf6YOqu96H8EvZn5k4Ln20y0FnBMYZ0ybpUyWYB-OrO6V6B3Ejp5tOm1lmuJ-ksDgtRHowC866cxUzQP8xNEqmL-k_QN7daFUASzSiupbH1iGOenYg9bQvnsK239kgRGRJvPLXVVgv5tb-2YfdatTg08QRiy9IFjExHxbihmfrxj3M6JcGcLxEmC1n-0nDZHHGvzdpfT5fW4sCdL_AFkJ9oZeTxQEbPosHEF_qRVIyCBfsygNXbsLkuWDODr-Ww-nN7tQl7h2QagBF3iu3Vx4dWzP2zt4Zt-7Tz2YfQDnobzx39rjOwZhJ_DctfNsnTWIh_gZwszsdI-Bvm9cyeb6n6qBzHPmEacUhOuqWj0FA46JZ5Xk9ptLdcoaM9YnfHM9GhrQtJ1K1eG0HZLMdKWQ7qSJWbJOcisIzn9BIEcjNlr7-ro_0RjtiiExAWai6kfTH0a40vZ13G3gFIR5Xn-Rsgv5Kf7l410BJ8r0T793vSS70AOhmECS3Z4WJhYzs8v0TqhjU_MgQwOu-P5dzi7T3qP5mmJRU1TBhvYghgVrcYgZ4jX5oVBrFqedvwCskJcSBdz_A9mUzgcArFDtHe5Ncqilrht0AnW8W0F4mobUfkmXYV8CTs_Cr-TgzgasItfbbXyrqb9BQnB5zr-CY_kSFuOh8Gz9iddZ0vrlZSVxWfSXeTIEMucjXjwmaBmoTLHJmXCa8o74plqDrS343Scj053DNNLmGOoeLEBL3FoOFoAG_7vVmTOL4jwjLlZ6j03tGKi6m2EcDDTW3yodfbNe1PpQzU7Eui4qMkmNB5WeRiZOqlcS-JbSj6E0iLnklcswaQrp4wehTUkZgw7uqD_1XMLihOJgygMVUPViSy5XbGPebEfi6ze5F3gwYAJEpjS7oYOBrrufkgLumZvfvfnfBCAGd0M-46eI-XMIrdj6XTP3-7roTpNHKnwbiWWGNDbLSuWaBmjGaf418JlIdPsfxHmlJ613x9s0Xm1WOC8EWHGqhb0bQtZ7rcYKZ1oXI79LxfG7mqzzGAH90edexN7ZI4WHfKP3DTlVz5082IcNaNr3d-NKJkK72uLW_4aqGsbaofwMU2Mt_2WZUanO8L5Q9HrCkcXU9RxIbh96zJbzzMez6rSEtaP9M7oyCE1KiEjSt-uZ55a9XbLSz3orfoS5UlHQAZrfCO5hECuITUUqyGXj11e5o90slIJYUijxvL9neNEhUGE4hS-S1WkTux1PJEutJx8zXFnchv4PomsX6fPA7AUuwycdPjVIqmh8XNWBMaEvfLG5bI5-dYVh-pLsaq9FZGOmmsBxfet0C9huUffN_pGOorlhuaCd0e_YoHZB7IpVPMiqYH3s3xabDXfv7pWVZkIXe5B0Ct-dZOrpic7WrYqfsId6fv0dmqR6hu4ixU1hU3qE5Plz9LJmJ6Utos5od0ZzzfVJB1XKW8zDGqVnHFKBBHKEFeWC6oUF8yK5sWKl-g2uhy0bG-Able22-xSd-Y2W_83vXWFaS1kJ5hFlUoTt_7qV8N4edXzTrGyP37yRez8hDW5y5OLPsHlT_RXmI_tRb4IeuuWsABqtCgSulVrRhzjk8naz9Zav8hHRlFLJQXD_4cUpPisVAwLbq1qr0f9aWCG0BWJpVYwcon0kX01jun2Z--X6e8RAmghGUtIcFIRR4rJZ36_NU1QlpWHOp3qlOUsohsdRWuyzC_qJ_B-cJelyMAJVv-0vv_tisau1YdqzZ4x6vaQxxx6Hy_kVpqTn-PhlLtgNC5kciQS5zzKJPCZ1Tp7N4IAKz4iM3rbyZvHn9C2dF4u1kdfC_g7HbxsoAmd4Mqjg6giC2ncj3V4w8w-Ym42lNsSVJJ5r8cAezGPHk2-VYvyYYyNuhYvZH8OqUAUq6u5spVZ9ozznzjYZXUIVcmfBhNkHeniM7R7HmM5hCpB1g9nlyWXHCsQApzzWZdRl-kNk1TOdVOOjMkLIqrGGlJd1Mb-T4RIe-He65TGsFf5Ug9G7G7Kbjs4JITU4BpeF2Ml349J9f-RRzqint3ePPXeQmpCdqJus-VGnpYCAUIZxrlMcKLf1c3c8KdFwSGDuhyqooBXHnRZU9zRvtFzU0zC-qXeNXxdO1bAOa3skbp_vTSmt7V1SvqdjwIkmhmQGdglnn3eMLQQ-epC7v-SwqctW068uOXYQekhMHsGx3svPiMEdUNHO2mJ4DpnhVb98re6k4q58t8Mv_sGRMhuQng_rejzlA65ep4yZqdpdNV9o7vjlAvdztrXaQ2hXdWZcd7tgo1mcy0XtsAUtG36V2Lbqq5upOiV6BsFRz_eFsUQOqqp0lhGaF3O4Ss9ZvvbHTkilmh_qGdRWtwyzkwK-3sGqW9wUyw7E0DpOB4x5Lhjl0d4ki_uKQbeyz8Hc3x7YixAxT4a2O7tOfSsy_I9USWOci4I0wmN92p5ydZDLA0y8DK7Im6KzLZoX5dRjh5U_h7iVB0he_i26T8TqlNP0UA53uvdu4en4sr2DCyE_krZ53byUOHblTB3PrLBLOMHzkXKp3cNzM9KW86A_iH2cFC5XtRQlMYppLGR2No4hRjKbodNDSzf9Z7bHLbXeW9t3VoX1ITHRbApVP6025fHIIUe9sd8m2pDiS8aplRNZduGlNo5MEnV5XOk0o5Pl1fhLUAhmdBzd0f9p988nGbSRzGS2zrN5BqcM_I3pPBa-w0sXy128kADnUGlMaoxtWR-lud4_2V6iHPepYW54cbz6PYAn65bhDWg-pd6R_ewu1UKeNnNIcA9MN7EB7Dy1mLfoPgOFL1gzXTyzrUOXr9OvQJOKYoy-e-OfVTRLeqrIMAoNQGNJX7ndQ4FcjV98grhOIT044uIEE32xPqaCIGaKI6QhOp-r9HUvp_X1j_XXwF_71jxoj-uTcARMHg36Ci83BzcMG74R0vu9k8cHF2emDvaUPLe-X_OeiI5Q3U9P8HD5k6dpAPAAA?wid=1440",
      alt: "side",
    },
    {
      src: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAI1X9zvX3_s_VsaxVyp7FMqWvWXvkmzJXtkiMztkZRMi452VyB4hyStbQmZCdtlEfE7X9f0DvueH-7qe9_Nc93XOfe7H43Hf5ZsAz9sD4JiYKGj8vURjZzclig2ArxsAAAv5sU0UyncvHl0g0J__PzeZGcB9ZPPADQvtUMYmcnCxtLPh--cgOT8_J8MishTlsfH14vFwE8ZHO8ogI7PySu_dvBXZKpFvlMe7_ElE7zoBDKkQSoluW2SwU81QwnBrh7X9OFADcItYZZlPVtzT37LMD36Kvh2uWr8NYHwWZuUktcBxvLrw5sTHim0xfXtBANMzva7jL3EYZjwzeeaX7Pm4trqIA8DP2CmKAwtCPZXBWxKy8tSbn2QIKgFcUp4jTX-3oZrsLvhiz-EW_ehqzzqAjTexe9MChJ7Ti2I_jjn942Gb-44cxXX0LW0Z8m-lFrugmXUnW8HzjIcKwJ6yahbjwIoUn4QtxZ6HfALCE_MpALL8fvr3p23wyVX980yhuRnKvAytRgDzOSLIiO3nBATEVqdedIChAt80LQA1uNNYYhOZ2YJW6YoqvXh-WXR4fgWwyLrV3ly_wpIir1ueZ5etoTnwkAXA_whorO4Zkg0X339ssM-lrzVywWkfQGY66R7qI7mk35Hj5vD-9urzmY5cAGnEchiWXjRd1DTAq32nWVN8gzYeRdipMW6S-IphalqM03YP-Ou3-Ut3FcBINTddjv4BVnHasUd9Qw7vf6n-pQOQvb1A5MXP64mDkuMiwbyWuBcm1x4DSMtNA19shL-p56TDswmP3oQiAvgADugZEG5j-RY5MD42EZh4k1lBMNMH4KyUm1CDck0ziXC1kxZgFpQKElAAsHmE0YTJk9iWvcjIn5bfnxabouYjgEHb7YeDpOeDDL-5f7jzMimH2aXtAXhHauFhRj3bKPmT4Q7r2pGBIg8wAWCpFc7t-bjIMpeLRweltZMP748JigJYx_W-mv-KhdMiZ957XIfRhKUmcU0Ay_nyeJzUjhMTufI_GDtA0sgPRv0Abr4wXewsill6fj324LlQLnYw_hrK5EXXZX41rsRGGSrvFdOiZvYaer9aAE0L-LFp-qtL6Y6fiWpTXQo7fxKSiarkrHF0tNNlZ7P4kVPzcPw-N4_tDQBd-mYLcva-NHc9lc7iUakpMLF9Vghg-NpLsuvqnZHOHlw0i3oNP90_a08D2FSmIKHO5NAkKFp5_JFPB8ZtKkUCGKVQpvU8O8PtgzHrCcvd6uaqgLjPKA-YsSBty9B0wVLnmWsPU60sPji-AHC07DTBa7g3bABOunxv7aq0aFfGBbBM-z8c7IH-g57F3iCDL85NN57YzwL46nDW_Pr6SDfW_lt2HVkLosrf3fUAtrm7dFZGqY1Z5c1-uiOm5lj7toULwLdZ6k52MacHsLWO5fJLxxFpW_FgAL006TeuyNQ6uo5deCCf3ugxPpz2DWXyA9EV05jDbrqLUdfu6W-_mdw9UARQO5Aj0Bxjzi6S0cbZcdJQiBXAh9544Xdlw-2zbudHZhjKnrMEua6iUXmU37N9Qq1vmfTz_pxJ8_gJvUHeXhIA6ja1aETc2kqYqVX1aLYX6v_C44nycKZisMaBG_WNQ8ZXKL7Yrd9E1zUDoZuRusldWufCnNADh_qjzZTbNxWnAMy7QVVHI2r4-GVUsBP0antmHca-CSBph5FJbSIhtZ3Td91RTpXSt1i-WQixrIEnma9e13-2DcF6IlVUz8ugjjAfNONkGVlCJlk7qOzYts4yaphLuoPulkOzlitJEMePIVdrwWpMpC_OQjjmmW5wDcH4xd0fy-pyG2ZXWGX4KAXgIvXDxiG8kSRFXbb-dhdex1ilhG4AA1QXYvr_bp2H2Q-OqGBbjeTxiAwAOE7IxX3d0jPSPE279frUdoP1r0oyAH9xMpMnvxHkyD-NDBl0YzcYabn3CUDCQBlnmrsy1-uM1IN0vR02HKejHyDWUJwIqs-3WxUlDxzqYHDeGFhi9ANQ0__4ZDKunJEzx3WYzuPZEo6VqDGA289PNZYYAhk6ssa6_XEWs5S8dRCnEti6bvot2HKdbluIKJ1pXtWPtV8CMJe5-VrZT1XT00rW_a_MO8zkLbx4AH5yJzh8ExFVeH5GPVqRg59DVX0lG0Big-GdiPo_t69N9mN1Ryae4_WZokpVYeet_ip9WrFOKmVad_XYsVwjYx7ASkaciHTpqMoMyazGjMeBPpEkI80Azui-dHLQ8tr-dBefsn-1YNfg75VWAPtwMGEu-rb4XaKr8SJ9d5jvTZVbACiyRjk0fuRVrhhVOpcoWnB3szlBBkAKjd-uP0cdmbqMTeq9PeTcmV6nzQGIe8nEZBRT9mJlbC56eIijoyTfhB3A98azNuYR8kcvMDaJ1_4u9t6MHEQaMChaxtexLhwi267motFSkPm2OPs1gH_5cmbtmj8-EBa_R9YoukK0TMjODeDcLp7YHysRRUqSi1CebSeDM54XeQcuv_2Dc8MsLGX3xFQ87GbjT78dHgAFcJP8b_se4jFXVn9jUIsNISQsokfagp3h1X_vvXHIewHRvUt2HOGcYfkA7qdNlDnXpWiZE4vVxjAOqMdPeY0A-IelrsknNPdqmVeLUnZ08FQqqxkhgCuHbO-liFOnGp0_v35pKEw5ndblDqBgYbJK1dfbj1QUJ81KxJ3JBwSnEBv1R9jYespeaEqnxPwoqHHCkzjxMkN751czGVoru1uvOfFjF79pJnWjRdVHYr23dXnpTLeFUkOOKp5NQf7Tlz8AauGfHIS7aIDT1_RXAvhoLWzeOfWik9WNCTPgWXem6T08peFlnt-ykEasUd1hOFiAw-3NQHzso9ZqfLWKlfwIQKNb50dXFIY7Z_m_Xr6oJDlkZW6OuPpbNVPDeGeXm_Smx7MFfwz-MZRCvC7t489phPumIp-Kmmqmt-shn40-KYCZC1-8D9uvVaVufNNTPlB_x2CWgOrhzpGLZAyVb8pTMe3NPc5n2psfBAMB5Gu-SFdVoSOhYNaTfT8-1kmUXqkOYdN7uVTr_eLYPTc3LVYdh99-JRJPAVx7TUpAPukngcslYh1_o-pjV46hK4CXJ9Yus8p-L522rckID8et8hNqlUPaki_AXfDaVnKwK32y7ZV3exGlaxOA6qMKBYQPLbY_-Ro7qQfnEDTbiaC3cH80RtSb_0FMaHYo45XYmX3nl5k4ACPEoj9jVYU2s4mH75_kq6xO1OX2ABhXIe0WSkZN6u0TGrAt2_BTbj-BBkAOqWT1bU5m3RLV06WbAljVa1SenKiiXjbUNsrdL9O_WTC1bKLxdWHdEeGY3Sjh0EmRVZBOJyrdXXhH0bZvCTFtSIrb02RSVvysk58mFNPKjGVcRtUAJpKwZl-RU9XOd28z7Hm0qEMuH4Wys7ZdY0b_IPT2AM08oy1ktbYgX6MFsMv50J6iWDJh3VTTNw07NnCck7YUofs6mQEe8-ZcUOyaxDV55Q4vZhGEecXwqHbl6PxijfStbGZ6q3w8zzmEt45yAatxUVOpQpm3QUlq39_0bOkhvRgpsJPw8I8_ZUi89coPZ9jOcVw4HsAjImGV1ZgpqrBI8kxZQoLhvgUupMeRRlJ9LjkzYXKYWPrF9KBUI9tsxPaad25RLN_7dUc-4aLUiZs1x9OjIh3UXWkf37879eMAPE3NYGRfGVhMsNwA8Lxa8qzJ5GyWqep8YyO_VmqQzmYQ4aIef5SGLcCUij10JOjH8lx5diETgDXNpMuRwvN0v8I8C_SivmRkxvelA7jH6pEaQZmx20SinOSq7pxb-rEVRUhjlSfbvcH11SRPA2jsK2OFuFZ7AXiL5ZW740NTU_tWjGCguUvjdBgR6hQoOw7lRzKerBjwzYzG7IFum6inSE35rHgDBlrwciakh5PBulLh5_QPSBniSdlqycXly9WEL9XqfHPhPyBif4cUMg4qKq0e1xtc4MdSbuBM5ivZ9QUQqywuRVb6HXmC7ui8GudHAn256C6km39TU504w7Z_CatbVshHu-zlLCKWC70r2cfRcFEdRtoYWF-NseZb7kYY0l_AtSd5EpOSTFKeGFAm--C4UE8ZaRZbsVYQCUyVO4pbMI1PFFVKvRuC1Ikg9ysX31z7p6E4atUWlSEr0Vt5KC6z_oMnIV98XCcW1rl77kdV7z5A7xah-IjIfeWyphCF_iwm-wZxsb78GIA5O0wckjLVOCffm-5PWi2FvjnGP0T65jyFofo-hMmj6NuimiQorC8SUUc5G12hHWhU-I57-MRHLcHcelGTbgZAxv2bzVOJGWfEFk-u2M47tPb7-SKGaai6GScPU36zx1eeEOv8Jy-IZRYE4K6qBavay2Um7Xv3ibFf-UxND4ugOUAr_nOJtO8zDIvo4LTbF8xuIZGGD4BKcZc7l703m3yN8R7fWcjiKidOUgXQkIpvBK6a0Q9uTBk51GmshAhHGQLI7-woRy3ItyI-10BO4ItXnN1GTIIY8Vl3rEqASGR5RIeQqk8g3cmnFqSbZLVCeTLNz3MXTO9d3pE7l3GLOkFc8lIar05JVuSRVc7KovoSdb3fehk62Qmukpeloh-xRdYW7-N55Uq7u4ZCiD21nXmEqrxlCajxSoryeJJkrw4jHPf8ZF4mXny7mYTLUcYd7UuS_pEC4TjHxjsUKkXP1Gz8WngeNWklFNGIcJxbQTdZ8TRe1UbiY0g9VZuez7dzbTRfmFGNcLpp_9UjMQxpUQzVPn_vh05GXNq4qKliPG0oNRQuU1Bw6_plQsRc_q9ORrJ6NX-wUq0fOjB72SuGqqIb705LLUUvBDdj_TY7sD-VHucW2kNTR0C9vGP8oxrdo0D9b3l58p3JE43CAN64UGMz75U7MF7BzC8zmnTp7WokH4BOEWuEDuJnB_BSxO9gn_43YdeIET9sYcK8udqCqPfCzk1r9Ks1uPS-EgCYUbTPsYzFkjfqwSX2bmhMdGj_EKl_yE-6pP_GbrikBPQO1QXkOVO81YOos7Eij8NIlfcnp9trOhGXfO5R2EUoFMlO0ouluXkWZ2yp-d2LuCCofdIe6ZCHZ0yJbwvBDm3J-3ZhHWtRiW19gIcmW9xjZHDOkIEUyBDogn-W6J8z89_gy_PvG3sWB_2XQ75w8G-RUnl7OLtZeli68HrYeLq5PvR08LGh4OT_fy4qXHkDNf3_Ad0THj6QDwAA?wid=1440",
      alt: "front",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-300", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-400" },
    { name: "Red", class: "bg-red-500", selectedClass: "ring-gray-400" },
    { name: "Blue", class: "bg-blue-800", selectedClass: "ring-gray-400" },
  ],

  description:
    "Zużycie paliwa w cyklu mieszanym 5,9 l/100 km | Emisja CO₂ w cyklu mieszanym: 155 g/km",

  details:
    "Audi A7 Sportback prezentuje sportowy charakter i elegancję, podkreśloną klasyczną estetyką quattro.",

  select:
    "Od dynamicznie nakreślonych świateł z unikatową sygnaturą, przez mocny przód z osłoną Singleframe, po sylwetkę coupé i wyjątkowo sportowy tył.",

  suport:
    "Od ekspresywnych powierzchni i wyraźnie zaznaczonych krawędzi po atletyczne linie – Audi A7 Sportback jest progresywne z każdej perspektywy.",

  headlights:
    "Innowacyjna technologia oświetlenia: Opcjonalne reflektory HD Matrix LED efektownie oświetlają drogę: wysoka rozdzielczość i redukcja odblasku. Dynamiczne choreografie Coming Home/Leaving Home witają i żegnają kierowcę, gdy odblokowuje i blokuje drzwi.",

  sport:
    "Dzięki opcjonalnemu zawieszeniu z układem regulacji tłumienia amortyzatorów Audi A7 Sportback łączy dynamikę sportowego samochodu z komfortem podczas każdej podróży. Opcjonalny napęd quattro ze sportowym dyferencjałem, precyzyjny układ kierowniczy i doskonała stabilność zapewniają wygodne prowadzenie na praktycznie wszystkich rodzajach podłoża",

  design:
    "Wygodne parkowanie przy krawężnikach i na miejscach parkingowych. Przodem i tyłem. Podczas wjazdu i wyjazdu. Twoje Audi A7 Sportback ułatwi kierowanie, przyspieszanie, hamowanie i wyłączanie silnika. W samochodzie wyposażonym w asystenta parkowania plus wystarczy przytrzymać przycisk >> P. Z asystentem parkowania plus z funkcją remote możesz zaparkować samochód dzięki opcji w aplikacji myAudi. Oba systemy wymagają nadzorowania całego procesu parkowania przez kierowcę.",

  design2:
    "Fascynujące wnętrze. Precyzja i wysokiej klasy rzemieślnicze wykończenie. Opcjonalny panoramiczny szklany dach zapewnia jasną i nastrojową atmosferę. Przesłonięty roletą oferuje idealną ochronę przed nadmiarem promieni słonecznych i chroni wnętrze przed nagrzewaniem się.",
};

const selectedColor = ref(product.colors[0]);
</script>
