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
              Innowacyjne technologie
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.details }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Audi drive select</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.select }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Systemy wspomagające
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.suport }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Reflektory Matrix LED
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                {{ product.headlights }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Sportowe, wysokiej jakości, nowoczesne
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                {{ product.sport }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Emocjonujący design
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                {{ product.design }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Design na miarę Twoich potrzeb
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
  name: "A3 Sportback",
  price: "118 090 PLN",
  href: "#",
  images: [
    {
      src: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAI1WeTgUXBe_M2S7tkm2ShHRwvBi0iBrJDMk2fddyDbWZGtsY03qTRMZZBn7mrKTNckSvcjyWSIhb6HsfNP3ft__3_3j95znd89zz-8-59xzbvE3cMSPAOjMzdVw-_zczs7jckgAAr0AAAgajzRXK17n3WJgMpj-L83MC-gDHO28EDQPTSSLi7uts6Pkb4Lt8PCQA8FiKyPh4uErQfCSZaR52MFqyqdv2CdgS7azb5Z8d1ygremxHoB4ycnMHQGX051GCyy6McMMqLPqBQASlfHPxFkKz6xknXgnrGKuj9nIRAAoghs3NumpClJQVw4-NDfpSYrTbQfw-HbeLdOSTuWQqSJ-1O3WY6NO1bMAbldQDUu7EgK8skVlQwg5TLbTDzUBlKqt5UFvrtWMuPekv5bDRXjTW6wCWHAvOLCPpd3XyswjVSrtPL6r_LIHgNkVYFfUL0SyIBmrXVg0566wJ4gGkLJh9ilCY86hITK2J3H-c3Vzbm8ygI7hnCZJcUO7QdmCkzWcL8I1bGxeAhg-Ups_4OOohZ5LW9xP2ktrarHrBzC_1UpQ0-7l3gecntLRI_oFG3frfADkfBqwPQWNoBEdo4zD5jg1UqZmA8AudiUz6XMLzY1N9jck2Kjkw9hgewCZrDoPr-mFBakk7pTKWmnvXuJUrQPQ6E6RQJrJjs_x54snHTNsfYhenucB5OLKLi8lGTa-UGuKjVHWHTJuU2oGUCJjrvrVrHqz7WqyVMEPXbPLHWMYAGUadMrXUR9byqSCtV9bTOuj67SptGhh23vJosxfU2P3_eWFsn6eC_QtAnA0WfU-8UbqSJQP8RGF2DWmPII2BhBr_KhNPqw5VrczzIz7bnpJxTo1D0A3rrLwTV3Dv_xHSI4-Gzrdk7n3HAC0wNzFhMJ9bzK6CdgupCQKJ7BiAewZGyA5peRrD6UypHMwxXqNPRvqA_DiofFFDq9zokhga96-66QYZJ14G8A1RVOnEnEmnYoby4_32IJfWHddmgOwxPfLL8bK_JRQhyDMuX2VVY7nyvUANmNL4E0X3Ge6hm1Yky8XkqUbEAdgFXHgy0lfOrsS0rcC3Ua6kIndJDKAOvzILxbHc1pzhrt1hsp-MMblvQoCEF1hZICKkqmm1jXqXVHsjTZn2fMH0Gl_rIVnkDOmrulHi9olc-7YG-lyAL5_Ta9llKinvXyhJuvkoyrO2h0VGntj4IWGgBCjv2tRyfJzuFDMcVPMG8C0WyvepkbSK_Sh-GaVTA54Zd8QCeCSZMcsKZSbL2O6YLAhobngRerNYVq0h2budaMeew8u8OXi-Jet2Vqe9wI4d0qJ-sZzit1II1l62jG748AacUCr6h5eDUXkj1aBaYNOB-Is215leAOADJ18LN8F0qNMPxdWWc0oM7vupNOySSgWump_NYNXLkDQarEvZ_sPTKwd7dywKmT517bDc4sFyGzmLnI_KksbwJS8EvuF-zw3j5JGhykrZcz2aUN0AIZa5LLgrBNuKmDfzXwJXI1iW6rQBXBBcjT6aceF6J_zvFWy7KG5fEtCtMwHGpivXWC_duo-SYNtNKhRboYjvRBAOzyx715Io2eJMxOl9wOWV7f5Dg7AE3za2aQLG8KWLNm1dU24D5bb4hSaMsXwcnFZlAqz3N8v3Wp4RT1xh1UAthojDJPGNZncUppIHfymcTPjdhUAhlRK82n2kMpKfaSS-qLX6jdVcvEACo2Wtj6ItRSNXvF9w0PSSesTU_gF4Jtjz7UMPsdWii0-7yVbJMvOew9GAlhkG6H5Lk89rpPtr621YEqBkl80TUMIK3X77eqLnVdXhsRaB1o8nag42iv8LOx6EDGOsREuJzpQRJwbDLzUSmk96s_EXx_0A3ILNie51RJVStm5n9Du9rTf5ek-vpRf6wnhWqrIJraHTqkLQKSkxGr8xxIP4qQM2baa6c7hsdZ4AEdkbrQpOA0sY8Myo6-Hi2hNqiv-CeAjSv-bAyURefvYMcHmaVSTqv2oIoD9TtzCF4Nrn8b0VZoc2dpklnZluwKgYYK8d52V50_uB5LlOYkhoXoxv8YA9D0dOODBQWZZFsaWvLoa3j2lv0XTsCAw6-GZE__ZSXQiUxvxlkteWvk4gF4O9eh6gUzOy_yFdQMfycXn9RXHAbx-cVCglnPXv8KGgDEfZT6J_6PyBIAdIxSMRZtEQygjnmOIRT5HmNPgPoDjS5Gd2og27U_2hrUZKvKmjcjZBQB31fWGW3wnn6B7UQlkudL-ZtblbQAbKywvR3oetFoNWoXJup2QjGCKvwogt5oY_-v3t1JGRRTFKdyEzJjFZVqdRSWFnFVc-OUWv2FXIhoyHd_YgJAHMLXeJrSvULrmNn448wnq4NW4Q9s8gOp5BKd_LdbkVRIsCs0edUWRKbcJABbzsWN3MTmOH_zJBEUtrbizGxkmACZUufwM3d4-4NnnvLTdtc5OtV1TAnAmsdRqAsPWPWiFD5ccczmFunuGAUBZDpvUnS6dpWcpnt5Ut2PuqwMB_ABW2NxUUFsRYh0Pbqd_kPFSbfJRbg2ALhnl7FuJzg7ydciQgSCm2Eb9jD0AbTRyxI5iW3NJfVx7D7oV1roXSesA6hYeZraznn9Q9rcGU_ZRqKvaQCIC2IKekkOVz0d4JR7nurWDKKuctaNNU5113qo8Ia2fdiSqW7CQCBzgfkurHcH9-5piWlm9khOUFjT5x9s2i917ADIbPrx9Miasd2t0xF9wUF_H49tBFoDehpe-SXw6M9Wx1GhteZe-9Fp_Pm2-fZkYxewy-H1_T9WxmJKef70EPR4D-Aw5I4oVGzP4Jr6OLD-mse8XZicC4MT3n3xKiFPtvHNLApxRlpKIy6o6AEYIV3IEiImp4s6uargtXc1awblm0LpGepYKHiE-w3b6_eadj6z4ybwyCODyYRfkdEvN-cCoz0ScaFUr90uwBPDKPGrG1PX047OU2_Nrw67o7rMB-7Spt8CDMJT9onfSXHbWflPja_2nKDlw5PefBNAA2UYDlt_Wkbl_8H87_yBdJB0AUOW38R-KncuPcMfLlmDrjiY4-nh5evi4-Duizkn9n4uLXtXousG_AZAH1BlKCQAA?wid=1440",
      alt: "interior",
    },
    {
      src: "https://ocdn.eu/pulscms-transforms/1/R0tk9kuTURBXy9lZWNkOGVmZC1hY2UxLTQxMTUtYjA2NC02MGNkNzU4ZWM5YmMuanBlZ5GVAs0DBwDDw4GhMAE",
      alt: "interior2",
    },
    {
      src: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAM1XV1RUS7quboIthRwQSaKABBuQJoOBKEkRJEqDNEgSSZIli4AEQUDJKKlBgmRBkh4VJUnO4EFAcpAsNAKSerZz7-OZte7D3FnzP9Tau3at2n_V_4Wq4hVA5eEGKAgEJY0DNiYbm5HzaAC8XQAAKKQfTVAqJrHsUGNuTPxvN90GoPSytnRBISPU0DR2jhY21iK_O46RyeQ_UDQWEjhr73s4NxfJI8iISEijUE5xhkt9JY2CnyafR6HOrrAxBUAZlUnFxPIl_Q828o-oyXLuoQXCWABtxt93zWXYDJezJrvN97c6_6ywlgaQtdPq4d2VOaEpaztNHJV2uGqX4B0Ae4XQXcR3CzX9BzLsq4MzfbPnWdkB5LEUw3I8rpkxFE_Q0795Qn48qCQDQMFImXtUdLvyMa-DHbLOuaQPDhNRAOaIX-cVFctbFbdgUUqS3prh8xDQB1DP_6FXAtuU7tC1S1noFm7fWauVLwD6LqZV9an2EB4XjQYNEH1k2sZWogB0H0qwr1PjoYwlPd29rFkROZ_Lr4XMgBoNzFsO52dv_ilybfCCpcRz1lwAMe9FH468fuTl6NSsLzqpqdUx-70FwNoLEpIFJYUVhnU5O7sb520Tq7JjAXRNzO3JzsTTlsb71xiZdDS8_8AmBODZuQCbpHTPMub80-qqthMji37cg8iKncckfvUpVM2wlxj0HHKMOif4VgO4LZByEpUUkW1gqM1R4p-jlDalKAEgWpjgs0HG1XxhP5c3pm6lf80kXhPAfAmcAM3b4ARP0uvtGAL3qUOrwzwA-TsnKHc_QaaKdqM9mp9JDzjtGx8CqC1mpppKfNRl78ymLqmK46bqSRUH8HrZsy_Cz7UsGzgG2Llo6rCZkd-oALTVF-mTwgTzw9f4eirGzVkVmzYSgCce0m_jppVkM6VPBGLbD57cFJSUBFAu1JVVq7mlUqk8sNFCnGx-foYlHkA35prh21osZuUM40uRp9JO0y4PVwC4FEYkCTRleQ1ztAcp99zaOuPJchLA1jJivvPl_YFtIdvUX-TFbgKxSQrAFRU2zylsY76ShMXs0R3vmBZK5UMA6VKCa56ZPXMcPKpbkpIeZKerVeIE4JtmvJIe3ycfDKbve1OvPRT5upkF4AEuobhYJ5W6u0Ux9gjGvbJfMpYA4Fc-Gc_V7Oyzb9BX4l0TrD_Q8bUvAehHi1tFH80297_LnG7JLNqp5LHsAKDjEgVOoZs_LAs7Jux5j0rvSC8mDUDZT_iwfNmEYIMUWbNzanPC_PPfXgKYt8u6b0DgLg_8Ja5GK-qrnk-pMwcgsTThrb2Ar2p4Mu2Njw_DO38JJNQCSB2Gmul080Vl4L-65hbtdj5I9UJyuGIsDXookl_9VfYuXl-rOvrP0_ArgHacdMeH5gcv8ufHuSRZsMh1S2pFANjm0BjISrVFkuizIjRdPeY-OmqEcOiPur6ksr6jsl34pJt--6HDxDyUK4BxdbiIRNFpuuvHSgaCiTWflMvlVZBdd3fgzbSn8n3l8GDqzEim4SzXcSYAvz12E0758FM9hPqd1u7hncDj8lkfEbbY6Ft23vEvS0YTYnV0W78dMN9E8u18d3nRh9mSx2vc7a9t83TxHcwagpLi3NJT8Rvyr80JDmGvziV0dJ53bwdQ4wXTXsn0Rf6YPTr5mDYiB3a8sQjAU-cTdviYqTvPpsrXL7O6Kowfbs0DeDqfHJdB5pts3bZckeVspeSRfL8HIJt4T0jGPlHMRPVH0pmDNqBBbEhCdgcIC3HiPoXiy8ws3DOzuRwzJJoBvLevWXCh2lun9E3JjMCcSbTMQ4M1AHUO3IYNX5TRM1Rqnh29Y66awv00B8BxR694xePVLHqnPruWpfaENbhMHUVYuM6wBR1bW7X25FrDiFx8Ij7V6UjduO4_VyDcJF2QtTL383pCv9P9ZzKAOFGKX0sJjZKhMx0kceMiseguciSA9Xaaax0Phm_VOv7Isf3ss3ihkP4ugPK3-DxFnvx63WCyPiSoyh639APVD6Buwb2amcczDMxnKdaXwzLAvH0VMoNrCP-x8jYnakzMMk9m7IBm8vWrAwCeQS-piqt5ou2_i33BNFOh6D6a6iCcX9aQ3skxMyogx-KYa0W2rcg3EJyJGStXNamviV1t2VSxeeUWUDQdcw7AQBfMW65XQ1dW8sr0h_J2nmoebkMAc-9-y-01mmb-Fh57cT3dmM1xtFYBwD76HVd3w5jq6zLSuVNphf5R4ReoAZyenn4W_TmxhD6a18eIIKAoqNCUCKChgeto9aGKZTvpRWuDsQNRLoy7EWHsiEeVUs7L7HXVzzHOwc0c2AQ5pBZm0tWbXV4zdUGVhlmkFWNvM3M_AwAZPfnq3hqZ3I8hy3tXU6X-id0e7gZwEx1pFpq7UTxe_LaeScG8lsIpPQ5AbMkoD3bOnTyK16Lveavb-DSzngbAyMgytoyRShMBU5_VDJ6-hbGINYSbSg_p_XvRzQvrpR3KcTsteks2dshYIkGNgemnwikKd7WXpvaKpwR4pCYAdK6ICxSxkkidk4m2XsKRAtiqem2QfWg_dAj9REHJf4n9ea7LcOWj9kV6ACUYpt6Xlvh4FqaaDuzlnPS4oM-GoCS47C_z06uPNh16sn4ZW5_MPPVVlYzkENJY2WUdfSWJv2ZGq0qEl3XtIqL2n3hHGAXp2e_d_Tn9Ie_louQT0lkGAL_QbEPWhn3ijUNp4QjOsKiO6vA3iHKl6BEaGl7bSqWMFaxHBhAVpOU5kHlx9cSPikaVHrGcHIdFh-RRoIXU2Li7qqJqV569kJA8mG5hPtNBa4a4U4ubt9GJk_fKHllwzQQGrCQ15ZDvI95NahXv761dCB971ewtFh4CUZu-AMJSubGGxlvntkT7L-kK48zKKt8hPqSrZpeRqO2qWQNkMM-_HFgYOmKyATy2N1Rsd-S-1fJJO8LpVr1rB367JogzGL8R1O8s1Vl4oC3nNsjmd0Wn0xFAGisLoXWGfq0Xiv11TdTWHbkd_QiPM3L3I8Le3I7OQr9odyL6VB5ln0S4Ofldvttq_YhL82Tyn9OBeAfzsRciADZ5zWoYBDFKUbpho2pCNiUOzk8jbmrRYbcbJL7wWp5J_0ZTabnQ9zTgBWBmDR9H_vnGB0G6aKfPnA20Q009iE52Mqx647HKRn5JStn2pkH0byfuI1p9uYVaitmLL1hN6OxCMMvRif1ljCyA7bxKjyP3DDW4AxijdoXWTnrWHUXwa9cUKa6zx3GtV6Nw0Jszny0kRY0SQKHiD99TBbRF3J2YO6eEd8tAHx5x0606Xdu7Tb5Fkv1PczCVpoq2_bTIOYoGb-83OPTkVWHM96YKheMR9lvtCEqeib-_jROdENvwHuzR1KJD-emzFCJnjWg111udiQSUIbMZIzaW5CWghayttW2uWtl_9rKyfzeNzqV-zo3lS8UAGnWFJRafDeHq9mA_trricZM7RQrxzd6NCZdLsTwbKnVb7aTZrvpahw0Eqf1CEZKUvbG1CSKOzaJ7E7J9ZzYQ9L3VC3gemFj4QOJ6mgBi5E7XMyRWEEzypopuXOw2cdHgpwhlf8mf-PwN4hdLi3KpzvXDNEquQQVPORkFTflefgMQ7zzG-Dklbf5ItUsxDzmgKTn43jiAavm6Yuu1Llbr6USBoF_jGJfRvFlEHy7JRH5RnppMkgrDN2onkN774v9CFFzlyweVJy9HrbHPrtDJozqSbfaQU6awYhCMtl39wRHexs2TjK3YxQkiamQZEzm7EMoeXSQRPOrs753LI_DCHzkjJhOaszS7B8zpCOVPrw8QfKUAor_HYzRSmToMBG1azn0c0RuMOnZHTBDAKJtJ6uUrlBYftAma2VG6WwUkDKJnN50CPnoOrv_4infhy4hecqz6RDqO5Kt-y2lq3Rxb4bzZqi-T4nx4RXkYwDkxf_b5c7GWOVZS3-7Lu91pWpxCPOvqCGX8wYbZjzUCE1GvAG2lOj4ZDeBiVN_C1djCjzz9fyyIR1RHYu-H3kbqJsAwhQa8baYsAf3mAv5aRYWHSC2etg27v-yILyx5fML5sUzvhVZ8lwWAd-iN4ha0KanF9UrpGfO6ePMJ3giPA2m75oVCdHunHOfW7a7pbtXrml4DUOGQgqKayVB-9XY43a4mXK2zR7EgOIvzy2d8dp9lXwYtGa-69Eb3_bwxoEJuBqgBpKHEIM2xNaTBGILfLe_vLwW_Lw643-_oMQoAoCIAFCHgd9AxerjddbFws3AUdrN2d3F2crfztKZHPqDB_wQN-NcR-S_6UX_zjPq7gf-m-HfP_f-Z63_DP__T6_vn_xj4Rf-PwUh5Ga9-4x9LoISJJQ8AAA?wid=1440",
      alt: "side",
    },
    {
      src: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAM1XdzScW7vfRhlsXRAl6iQkBxHkG8xBjoQoR4keBKNEy0SJEi3Rjh51opcgjC5C9BI9ToQ5CaKX6ELIESUE982998_vW-v-8d277vPHs979vM_a--m_vcs3AbWXB6A0N1fROubmcHCYxKIAeOgGAKBA5ChzlfIdrgMaWsO5_xYz_Q2ofOxt3CgQDTUUvRMB72B_-aeA8fT0lJmCHi8jYf_QU8LDTRaNaMRAyl-8mwvDV7_6HRQY3fnD0cRum3cfQP6B03jaTNoyiWytwrtNsmPej1NOAFytXibM1bXYFLFvEDm3MnAod4MkAP0OqMpMSms7UWsOuDKvlfRXCrbiAGaSqV3jHvWrPcrzN2DgD2TdxZzVAJAkBUNzWyTky-_bxA-gM6o4mS9FAuiflHZSnsXF_84A_QwdUD9ugyEMAniLPnjZ1IhOnFpmJ3CjcQk7UqkeB-A91qgINFaL9sR7uviBTtt5v54cTwADaeX2RJ0dhWJNObPaZt0uJPTOTgBIOTS1ekthIP9eMgfLXfkzV_hK454DqMmkJZNzOhp_0zKVRaRi27TG-P0wgKaqYSZjlO7ufQzn7Actd2iaiK-MADSQNyfmOrMl3o1Ff3cJ_PGxL3BAE8CeFeftAakTPUcWcW2xCwOpx0qx8gAKawYSPWhTWDd5JlgTDS-fO6duwgUgnpgkFSpHOM9S31WnKY0GV0S35wFssQxYS_TqS7BMY2n4imqvVBc9_huJ5GJveld5_Gn4w7JnjctyBk-lT0cBJCRg2SvGejCq_f52NBXDRaWuLJwAvlY2TZ77uk_RwKK6sXe3D_3X5aMyAIeqsY_vH1m_6NGyaNpcjvDAXJ-iA1AgpC7P4FOwXlpidxslNu3NP7zkrgCY7Omp_eOrpYyL8ycJ1-62mPzKCwBAH9JtQCuUOfDijsuOoXX4vTHNb0oA1smSNOnEhBfrVwbuHOsJM8xi9DEA_hjVzz1bggvSz_OXxy6HjK0l8NgASN7rS1pIEdKZomeukkKXXPUVz8oC8IL9hylL_ocH5tfRotRcPyTa7r6lAvAgYu7PQNZBNjeSNu-XEs23H1ekVwDM03umQy3s37Bu0n0uMdtHqKSrSRBAeYW4ABtcWeo2wNNEDpvu3yh6UQ_gZOhev3y2U15UhkJBaPVHN1Dd6Y-cFsg4tz3y5R2fBFcx6WFm7CYx7xsi9S2JyVL1p6yzM1Yb-2bxgVh-vQ7APa0ZofBF8tXbrb7FzfvT_XFz10oBPP3mFe0443yo2u32C8PfbtIugRx2AOrGYRo-Wp7_TgpbWZqXb_JZmhLjBnB2d0LohmNqMy7rYof4CDnsl9f4aAC52Mtylb94Yslv3idzdTr3yVEKNANY4brkyF_9iECq91hw76twkeTUkgHwsxragHa2vUrQJJ_Py59N-_6N4lkArayFsukUzRYTDAsPqLZH7cxoORcBJMaGsn7kNxvaxJkvxDtq6cZIUx0DeNZK9LdvdnRtLBeHqNcI6ICTbZUoJGbvem6_ac5nktWarTfp1vlbPRiZEbASN6NHx-Cz9KnkTKirtI9I4ds9pHZCPZ7cK1HOIMhMcx_RFq81pFCGpwFo-ZyqweUpmiE5psMw16b9Rkf49T4Av6wdWM4GLZfLJTWEGFz0Olx536iK1KRG0sBBJ3khHy97eGcq91v8q5jHyA6KUQObxPToVuytj7oX6bMUhWqGALRhJqg9pJPLxPjXWI29v8Hq5JRJD2DHLLE9_SQ04UJ04nJyA06PRMv-J4BUtVGNJP1F8UnjkVq10u3lKmIYkrec1_Eaxay6DtQnBmTr1e6OgVJCEYDqesWoI0CvKGQsMmMisnDqbtseC6CZWE07x95cxxsck651S4L5K44XnQBKJlGWlDLmphYZBYkInW4xRq3WCQO44eSzLCpLVVZ3UOBo-9rWq3NEJRnAku9bnkVrjlvuvse_9Yjy0pQuM6IA7Mraxmadhh4Inc71SNZzmjTvJ5gAGBTCQF5228sOQf3-w6cCG4MuFkGmkVL_EaZeQfhXbNewShw-YOKrtbMagMNJTfos7YV_7q6enL00TI8dU650BLBG7R6d0LZCHSbLzPMkjExTP2V-FsBclNrYTIhStmIErRC1mD5WZrpaALHXk3o256K5HTN6d9gLzVW4of2JBvHt-c7rWHJPRtZSK159efL5rCIG0fUQ44hInwm64_35Qr4VqaqoZTc4FcDy2MtxR-0PeMjxomxF22SmxMiVOQBjc4wyGys87zy9FiHi3E3yLybX3wRQufLO5Yb82G10BV1B2BPBFTk53l5kahBlfj0rncEQI8htRpp8o1CKvW6G2LvN6LaeHtk_mCj6aCdxPTUI4JAMiTg3vrVxsigfwezHJzHJKn7MRhcDeGxihd4hcklcYn5TvWXIPPZU4EMjYq9m9J-Lhr0wYS7yU5tkq8BElA8bgELjvm-vOYwLese_5GLNqmLinRgNAPDcwpZihcnCFjuxsc8wJeYl6fgHP4CjyeqD180-izP6XBLEXaLTD8lynUL6eFqzuT7Aybcki0CVkpZPuzaXwAdgVtWrbgtdjC59jKzsB-1s7QMzbkMAs1ET_Boe61sbzv5xny9bj_2xMNAPoHjfej75cVCjX6Xfmj-HfaX7HAbBltqPOG_TLlubPX0GdPOT2AlRzKN_ADhoNXIuwtgsM-LUkAEfHLv-nWeqAcB5M--LX6KPb9mLtyrHyUt0bJ1wbSDdssPf-VZb700O27lphlMVZkzCOQsA4yw8NPGLs4kVpg04U74OEom8cR7J8adOd4P2ncRXjNQb97j8ZsLTDxGPg68WKfR2DIKuWcKRVmqydpkvmxiCx9kwLylKwVayKzSTs1cqp8gNheR4P4G3QIuh4_akfnaYeva63Fha8gsAHVrSrYbScMG6-w5ic6vHjHgBJWrE40S-FjZxedPSz7k58K2C5M2-gioA6yMeWVkqhQy79dGove8C0vuMbAiKMEi1lN5_wSIuQFua795HGr26TYFYRjgiDBxTbrxwunlFUL8_S9jEkDANYDglt5r1DBn0jdQpPw9XlEsNnsMiiJP-o3F-LYhVQdhHKnAymrfg9-LfkdqxKv1w_JJB4qrJfI7uoDydTlt9K4BYCX2etOjtyqSREQLnbULKE2GdGwC2pjUJxOcwxRk_S97lS7Ud_6qlkAGgWnV6c9PXRFE7q8TnH_z4q0XwIUSkSrxSTl5nul3MI8qG-eb69Zued5xE0D9y2keQUKMxFMxEKfxA-T14poRgVojimOrNWZ_2tTPFI46S3ExTfPfXkUiOqtgw4c8rzV4elJby797pyWYxBfDl0sgzy70hI9H6TlunPehyi1_1LoC46jGe4UPnd-zjL-2OJzm-c_NwIzHLq6wq-raqorzGaruUreH7WpmrwhXASDuUxcNAcWkRRw35gHnbZzXeGwiiqxNU7kbj451jP1Mx6ukH5Uys04YDeNKqfWZKYfpMhXWjnPo4zw2nT16IDWzB6Ub91A-f6bR60LyqdE5Jfa6J9PyXNm2OxAHZ7bVA1AfFVRfhxnRJbWQaSfktXuBCH90cGREbWlOslYrtR6bRX4kq02yd4s17RuSbZvGV40lP5N8DWFhcMG35CTtuhBNw5803a12GJvcBvHJtdNMllmb-SdB15ekzxNEA0nteAPlwkV_Wk-411aZYreh76L4bICgiHYt_yfN9MbZc4GoVEVVTy_MY664cDKCgvYWljs0TZn9XelL-gO2Vx_YzogBK6KSmKhunOVGK5UWJ3akYunyrAsHNs8-Z6Dx6JEKlfxxy8OXdDiJv1bsj82Gi9oz2h186nxYnp3VEei51LH7GI7dXJpS_B8dT83eWlA50gf38t2c0FQDcFHmVvvHbdrjgGvOE4NzvA-Vc15BZXeuUM1rT6H6MZ4lgj5qpt06VIH0GUB-TF2KaYFNxfklpPuuAYvhqtY46YsPSmo1F169nKwo4VGsYC78fGmZbAhh1bUR-T4YzT6N3n5JLWLT5dOE2A5K35nes3-L6hmkUfEx1cVFakyYvxgCkeLwbgAn5q6sQI7NLWx36l7J3GXKfdOVTeqC1m4Qy-OPSpUI_a6uXcuoIXgxuHpuNYw_np5hU9jLG5esudrr9QKITNBbfytndwtDx5qAyo7mEfb_XG8Bfi3HysuKH8xrG04mYu0FKAeKoXkCNvAyohRFGxYww-lmE0TqAn1wIYZRNPx8OEj_XqBlKpCqvIbIw8JOY2L087rnhPfAESQ_7B26u9x84eduzID9Q4L-IHvxrivkXcop_8k3xzxT_TfTv3vt_09b_D2f-X_v3n-exikn9D4md6jdjDcP_AMNLBbglDwAA?wid=1440",
      alt: "front",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-300", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-400" },
    { name: "Red", class: "bg-red-500", selectedClass: "ring-gray-400" },
    { name: "Blue", class: "bg-blue-800", selectedClass: "ring-gray-400" },
    { name: "Yellow", class: "bg-yellow-500", selectedClass: "ring-gray-400" },
  ],

  description:
    "Zużycie paliwa w cyklu mieszanym 5,8 l/100 km | Emisja bawełny CO2 w cyklu mieszanym: 132 kg/km",

  details:
    "Zaawansowane technologie i systemy wsparcia kierowcy w Audi A3 Sportback wspomagają m.in. manewr wymijania, przyspieszanie i hamowanie. Dzięki temu wyraźnie wzrasta komfort jazdy na dłuższych trasach i w ruchu miejskim.",

  select:
    "Dzięki Audi drive select można dostosować charakter Audi A3 Sportback do swojego stylu jazdy, korzystając z trybu komfortowego, dynamicznego, efficiency, automatycznego lub całkowicie indywidualnego. Tryb efficiency może pomóc w zaoszczędzeniu paliwa.",

  suport:
    "W ruchu ulicznym opcjonalny adaptacyjny tempomat ma za zadanie ostrzegać kierowcę, przykładowo jeśli jedzie zbyt blisko pojazdu z przodu. Z kolei opcjonalny asystent ruchu poprzecznego wspiera kierowcę podczas wyjeżdżania z miejsca parkingowego – ostrzega przed samochodami jadącymi z obu kierunków.",

  headlights:
    "Oprócz standardowych reflektorów LED w Audi A3 Sportback dostępne są opcjonalne reflektory Matrix LED z cyfrowymi światłami do jazdy dziennej. Precyzyjnie oświetlają drogę, jednocześnie minimalizując oślepianie innych kierowców.",

  sport:
    "We wnętrzu wrażenie dynamiki zapewniają między innymi opcjonalne fotele sportowe oraz design centralnej konsoli z dźwignią zmiany biegów shift-by-wire. Funkcja On-Street Parking4 w opcjonalnej nawigacji MMI plus w przejrzysty sposób informuje o prawdopodobieństwie znalezienia wolnego miejsca parkingowego przy określonych ulicach.",

  design:
    "Audi A3 Sportback zachwyca wyrazistymi nadkolami, szerszym rozstawem kół i ciągłą linią barkową. W połączeniu z szeroką osłoną Singleframe z kratownicą o strukturze plastra miodu Audi A3 Sportback wygląda bardziej sportowo niż kiedykolwiek wcześniej.",

  design2:
    "Sportowy wygląd samochodu zapewniają 5-ramienne obręcze kół V-Design ze stopu metali lekkich z oferty oryginalnych Akcesoriów Audi. Ich czarny kolor o błyszczącym wykończeniu w połączeniu z szarymi oraz czerwonymi aplikacjami szczególnie podkreśla dynamiczny charakter pojazdu.",
};

const selectedColor = ref(product.colors[0]);
</script>
