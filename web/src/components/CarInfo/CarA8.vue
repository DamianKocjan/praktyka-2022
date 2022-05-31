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
              Komfort, który zaprasza do wnętrza
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.details }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Przyjedź zrelaksowany
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.select }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Podróżuj w miłej atmosferze
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.suport }}</p>
            </div>
          </div>
          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Niezwykła wygoda każdego dnia
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                {{ product.headlights }}
              </p>
            </div>
          </div>
          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Intuicyjne, zintegrowane i uniwersalne
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                {{ product.sport }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Oblicze elegancji</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                {{ product.design }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Precyzja. Dynamika. Niepowtarzalny styl
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                {{ product.design2 }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Tak różnorodne jak życie
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                {{ product.design3 }}
              </p>
            </div>
          </div>
          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">
              Audi exclusive – nie pomylisz go z żadnym innym
            </h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                {{ product.design4 }}
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
  name: "Audi A8",
  price: "442 100 PLN",
  href: "#",
  images: [
    {
      src: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAI1WdzzV7Rt-EA5PdpEVyjiR7c3KiCRORla8iGPEMY95yDESspMZDWSX7GQmI7wHERISSccMyc76ffuN_3_fP-7P87m-9x_Pc9_XdV936TKg9vMGVJaWGpgDzpNOTp_lKQEIwAMAKBCc0lKjdJ1jhwZl8vW_MFQFxwiOdngKJOMKJT3OHevkKPkHYDg6OmKigFgFcZyHrzjWH-dLi6QEwce-2jaU8jczSvy30JwL_ZQj0oLZANacZajiVR35PR0T37aXIBBhNJjIDCB7LP-3YO_pO4_tn0_UX23eE2V95AOgQ9j62hnLCbt3QolHHjzzDvxlLsEAvnHlf2xRf_voWRIdw5OM80quK4-OAKyeno-zvvG6mt4ia15KLIOUWrIxC6A1U8TKECsBuwNy0G7H-GSqSwcJAJrnUm-r0Jygzi91YJw7c40lFX-LFsDHIZW85c7l94Xl923Lis4u1wiF9AEo6Fu22W9Nao2asr064VE35ry6vQ0gc6ItCgQoL-v5TdfGc4QujisOewLoxe-pvxYfdEhHtUmlU2ZglC58nApACW8XVXpjfzfpn4fiqwbnKJzjZ5IBXI85_Wn55RBMafT6nILXM-cxuKwIoDtDqIVZPk3joOWJe83hY7lCaprGAD54evJMRibNwNlnqXzJLzR-sMjSjgN4rPjGLYv6hxyilTp9SurBOs_cUJ0AMoWHZgSMjmNrK3olnRy6M73Ut3YBPFDlIApeaqzWP0CfTtATtRvSqXgE4GbQZoy7wruHUVN742xsymenTd8jdVCCZfG_KKtWDIKnbB7wZ1NOq7Z0AdhZeFGWiCpTX9D8EJ54IXVrtD__LIBNfE01zzs92oUptxseDK2Mej3t-wLgEyv0xkk3HXS5xtavkMy2HsJc4WMAFZ-_ve0qifn9k0CkDrnoI33DPRXhQw7qVF3oV-ELYUrtDVXWJSVmQikaAHLONHkvTpTf6B4Rs0X71ChE9Vn-BBD6CqMUVRTWuitOVZSIfY-VdBd3A3Bnat9VRss3z9jVErM_z65QFfVEFECWqvxIB6Y03NY_dWJlqCEGX8GlXKRv7DIMIkVPhBbK3b76Mu6-mhWYewHgEENW2_1QQNyQjJap0985o73yPhLhDsGp6i0DqeKIMUaEJe9z9ejc8QoA74F8coiEtEMNMU9KxaSCeUeO628At419cCeu-hii9WS1W_L2MWxcAUIAyq1OoqP7fOYUmuJzt2RFrul2NuwDqDljIth6jAHTezhEF5gc_i7nej4fgPIkKQnxFm5OErcu4eeHEwayN4oQRn1spLG2l16L1i2O-yeCLUpkwrA2DsDBGU5Ch-fhXPcajj69buy6GQHnCuDhhaTCQG2XGeI-7SXR824teylwGcldyWmyOaocK9wzP-lR8HwNO0ODVNIC1UxoDzRDJ5Fq48pZWm5vprfmA9hLnNFKZRnUXbhA5guNWxvBuOMWARSVjp2cqkhjfQ2YRr2mNEl0B2VRABaqs38q9vw4UMnW8PeJiX637y4ZTgB65N0TMODHGwxP7uJ5HTC22lGlDgCyXY9c03dyJW5PtIctKo-iWQXIqwD-aGfuIX6PyesR9peSi6wgJEr1lSB36JaEg4n_sFYFcF-PL1Y_dO66Yorc93lz49Xsnwxpi8SHeh6JTTdbYycBxBRgCnLFt71VSmxvfDegxORNo6cAXHZempu_zFe1a5Qc1Dz0QWqVZ3UP4dnOto7cjNtwXaWspfo4R3u4RTOiluNcpwI5iEWWlgKpIX1qLuMqy0O9AC66LEWKuaZsxqIndWzTUMGMM8E7AEpmCjXQJT3oUiOd1adwkGo7s_4jE0CunjpTmegcYluivoJSaiGztLsmFkC96vCWt_jbumvffvMGcwTuRwY-QfpmZM3RZjFBcTliuu1HQJLx4gu9iVAAKbU1EjTX5uY0mLGGWY15YJExJBbAou-4UqzN5ZCE2c7fRnSv7XJbt5DZF0i8jW3x2mkh8I6YqNin1BlK5CJq-RRsWqJHlKDcT0LbMqv72d3nE9MCsNZ8UsFh4VOsLtbEJD-BpbhIfyAFQG3SY2czzLL2j2AJBcaW3ZDqj8ncABo2fbn7dGKqc0lxWmnI3FEsWOPDAFJJQWXFjcTbOnnJx1MsE49Usy7fwSCcbK6tl1JhJCnrkr_QC1Re1D8ykgKwa_-DVwZdp2mDs0_L2G6-BS6VRgnR5uy7r6kX4_seTuEZX9TnswSKknkAHD7dFphvTOZRzvsRzJvxKspESMsdQDG_5Dz-68GW1s5Ntlo2L3GFji-DAEySGsLLMgFyzeFyFpBvoqw8GFwHkGI5rPg1IFuxkC7xDHRz0z95X3UMUeHWvXH-1S8Li5-v3bNuwijKMbG9RNQde5eFK5fN_r3v6OOcv4vJxgerZwCMt0p3Mp4bFn8jF5g-bc1_QaB2YxB58S21HeFQLUEhLb_pcNOqjOHYU8MAdhDWDzNnT98s8N2a1caumfDh8hUA3DJsXnEo0XFOCVATzO4SOcfhfsIEmfY0fh2MLylozTBkEVpSvH-8-IO3AM6m3CRIHj1qj05k_5LiPXuNJy1XF0DWpoErTo21XDyaTUcK7tRVvUGnPQDsedQpR52zO3A3_i9nTLmhn3V3YhEyHwJw-FvKQ9fYibQMBYstXaF9Hw8BrL9DIdrRVuiorFN88gxNOltV8sYCkjvafRG8e6abUGQSnNnGOl8SQmcB4A0eAjlSRVm_9NV88sHk8zeBEb2Iuk11E1rtGfMiNYwcIkh2LtnqDb-QucMZ815zNFKcWqmclvlU34EobQIK8az7asZBqqab_W4N-l425yPiz9UvIux7UH3227W0gs9lL-x3j91XXVEVX0I8i4XZTspXYylAfm_vZ05selRMbooqgOq2BfSjKusp9LT-RNIvPs6S3MxnSC-WwmjFrdi17S1ilI179mVATy_SeZLYuATV02957BNxpSNMoiim6zTlANoO3N1Yv-U8-L2De2c2i8lknYkjC3H_vJYC4fGev0x35UfCyp_vVMbQIu5U0JulU-6zMfaxEo9_ZvdUUq-HYgbAkAVSHGPWOe-9N55bHAozX0kbba0AxtyfI6e_5vS36GLtqE4yE3lKN9kBYELDhWy3OhncrsotWYZ66_wL0r4I2pvjWxX_yeaevpdPm_oah9geFVs_gNOXT1UL7ndLbD-ZyQjdZJHlxBkh7tRhubMUmEO69_DVeK3ilXARjGv1ewDrwsq9Pqy1h8ehoN0nLKPwua5-TgCpfbFyjmVX0hS0ju-moQS_OGU5fQUw7OjXgBUb2uN1O6PmOS4fb98xo0vIi8eub2S-SRRGETjKGatHq_r_augGsKQ--zfGW4DkaTNN4xZec1k6xYUJwNhXOg_eaKRSGaWyvxA4PN5K4uJGdEw2ifLz1lSKH6HrCB8O93MXcqTVRFA8r2OM7vBLx9ZH7uyT0qZ9bwi8AIY6sioZOkd3ZYgwL9wp45Cy4Q8QB1DLJjA6DFuhYZxutUaLGzgSot7FIfNBnmZpx4cQTO7RiB2XcufWNeiqRapD_DFAfqcfPUBeHHS36vkUSN2oBmCpyLutc3GnzscGrw8rkHJlYsi0DYjPr1zR9jMnR5llm697Bnp_aFT-8hvZrjS6X_ceHJyWTGs3ufKs7a1_trMYspW23MnUeLTO22IVtmvOrJll31DCDmBlUHpNQ9N8qua-NQcndsJK5sTLLUD9Z3UFSKBEIYH-z4ka_Z_4vz__iVQRVMi-q_7n8G-Ikc3P2w2P9ca6S3g7-uA9PXxw_o4saKn_82M7dslMx-Rf61DsLXELAAA?wid=1440",
      alt: "interior",
    },
    {
      src: "https://www.tuningblog.eu/wp-content/uploads/2021/10/Audi-A8-L-Horch-D5-2021-Tuning-7.jpg",
      alt: "interior2",
    },
    {
      src: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAI1X9VdVXdfdtLjlwgVBQJRurxKKoDRKdwpIi8BD50MoId0dUgIXpFHkCiJIykNIS18aRGlEECTf4xjfH_CdH9YYZ5099jl7rrXmnKdiE5B4ugEiY2NZlVMGWhsb_F1CALxdAAAESJ7QWLbi15VD0gu68_-XprgEiP-1tnQhQFbIE160c7Swsb71N0Fxfn5OSQAtRDHW3h4YCy87DzJkSQLMcr4QirkZS5pEuyLjLsR0SHShVApA_sG49o6lWiv0xXgtrQN-ASN1li4Au4JJgkuyaF1_ljIPYKOsTvYfoJIA9HTDWzBm3FeLx-IMry7BmkcErH0Abh1JEFRj2wh-VrgzZpm-i8pp5QgBsMa_mZuWSYrs7oAciQw3_lHODdojAP9MFl8s6GA3GBRNGlukWL7lrFzrA-B4eMBs-tcaRsJl8jZdZyWYsIHKQNZer23ut6w7Gr5TX5T3bZmv2r1qFECFqajbFB9jU-3mrig8z-yOsuOdlAPwo5szFcj4mGV1sDZQ9ovvZfPz_gsA4nKh9Lvy3o63GIrXY70pzWaBq4oA2o_qlScnYRpd4urK124HFeSKJrgBGP_pCiWwMdVm_2BwwqOtK9ycEX0GYM-rUC2CMGrXt3xm4FV-0sjjyrhuBJ2D9RxWjRV-uXVc0B4ZPXUo-w6yr_F31nmq7UPVVY3F0c57mW5ME9QTAOqRl-LLyX-INIlOPlDljslOsV93AFBDiuvUszLi8-td8Rla2W3Wz4z6OQAeewzYzVw7326SbyQO8Qo9PwubqQeQ7IDf7qrtXLY6eoBuom6zf2mPAcHsEo9Z41GiUWZ2h8dq6jRTeRW73XUAiYujU405ufGawtstlD7Uns_UC5IBZHKi66FSfkeA22_YoRmT-vprryEMQG2FR34UyQG-pDs6fidEkbPnYqZMAGbA7qH1ONnAP3n8ZHTj5FJ9OfR6AGKTyI4x33t6W6zViEgv9yS7_sp1B5DBkhCYdUi6FziwYHPvSvvcCj4TQDA7PiNW6utfoE__pR1dYRVQcTFNF8DcKAo-lcOJuYRrbbSUgvhXC--H6gBkC-a8w4pfse73NHiixmE3eLBgWQrgTSuZqV7MxihhVXFF90kL-ZGhOx_SqeK47vFQZY_1HX2pRvs2dpNTBhkEHU3OLXP_G3iFkMeUj39VVWfWszQByHqV71_JmfXjlBL7srqsxMh9R1YdACM_LDxxWNrvkf1UODD2_PFEWkLHOIBtQpl6SRu7k3svpFmdVMvp0Hc48wDEH0h3rRWTQ6E3epNpB6LOhRlJNADSkHOGfptJ9lsjpnrW1n65s7K7KALAKvHsD2iazqIYhhlTlIfaC-IgJuRtz_9Z7e6MFObH5RwliHBaZH6yE_MDsELklCpfZk9PUjp1yDdYY1QfPYjUuOs4gF_zU0-cx5UfbjXX_1X4UK21jdT4fCf4bCa0IGumYmMnOXagZC_2GMBCp3df3gKFauzL21-qyjA_P8qaGAEo2W53gnLUFJ7kqtIxWM2ULC8mJAbwKl351_h4uTecHvY43c6O3NYuB3sATyXMaFgYsdFstqaK5m1A8kIpwwaAylqo2XsE7BQvtdjENT8Ebl8lfKwN4PaB38JxctkKOkPNRmWWTN7tbd1bAB-0U2kcdp49ovQXd2eaLxjp-fSYDkClP6J7Fop9Cd6oc3lWFXOd6lYbRwAd6rS8I736dOwVa6gp241adj1UVgFEWbYWuGMkUMfYVf1Y9bXI98opTgA-DMYItScLVl75pzn9euvaOv9LRnUAmVmJxSw58KYOYoQZ3mdd1zv2TZcADGTDqUsLjjoHxJXZSxrmKmKUg5UA5FF7amy8Pzx_SpgnP95zOkw5-SsYmSy6qJjlP3zGHfaM3rfYnyuOvD3KQs7m41y4RV2SHU9yzVgx52P1wJA8AYBGaieGFGf4XadgPVE5nKSfkrca0qmEKkNRW46FZbiiSAUryitPQ_CxbQjvNIgURbL31LFERk5WonZfnAS6zCNzsfGwzJh_-vrkfwkp4cJ-J6YOsfQA5v9gy09jfr_F119J9d4yCMss6YLwjpuukbPtXe3O41CSm7SFDb74BoE9BMnY5Rs2kxuBEqXp7Pkhm8UGrwjsADQpgl3N1TLhR5tpQcRM3a-pTHaoAKTw7dOmIo8texrH_JACx0Fd2j2JYCbtqUibdttR0tDy4ZM3qHOsn8o9DWQ2uVxbrMh_cxG9uG1C08u9ZxPBqIp09YXVEjXiwv3fZMDgU2yxn3Le40NkX-0aCrUXeXkv-FeKxQpTTEQ3gs0AnOGdbpe8c8ZzlTTCM0Dxq7oFJhoF4MjiQmz7jUyHFRK7lpgHN3aYr3AlABh-lCLfJr-w8eaWuVtgAscYg7QYDpmsvRG9H_aHtP-lHLXWCr2T3AtxngNwoodP5ZLmsiSJILNFvXar9J9UN14As3Zo8K9Rz-jtm04aGCOSz2lvbCK8buHwucXkLbUstYN-PG2QHy7MfcscYQ3meqaRn23F-fggdrjndPV0UQvhKP5n6bejzSXvTRTf9usqCtr1Ck3fR_BdnUO9ElR6IWyCu3VRl9yEZk2U-y9r9M3YqzyXiE3rFSTGKNYrtbUgE-DeY2zibhWdF_pvvHxx8BLpNy1nYQDzXLNE9swxUgpJGaY15C4Va0_JEH3beHo0pamQkGjKck2y4rvNQP0YdxSAwZ8jWakGKppH5Y23_lnJ5w0iCkKUoVfYbHzOf8G_ZdeYIZIcP8wfHj8FYEQFyetLg_8Z9ZmT2dBhR6Ob1VuuAci7GtAohnWlLTx53fJhVWUmjDvgJ4BRsenpxegJ5s2TlDP6NQWSw0xLLwDni0ozMQy3DT2UJjIAUzF6khePKAMWelFoKC3LckoO32_1sBibW7CvBnAdOz9_6uOV-pLVIbXLEfBTJk52ACgwHWaUH8dPzYXGjNWmdblShAutA0j__j0HF-E9HVGDFDUHyefBXqdkKgDaGaz6Tz2FG5l6bO2F89Vk6VmZBsiJl3zfcMnbMzPuqvdzjO6gnPsVkbnQ_MF9J-5yynlVW8veInktwVD-NtIl5KbU12Qt4hrlU9BTa8kD987rKJDKl9hqTOZhiaK2NJdGvEnqDXzx0mjkew9cSpJZ_qy_lpgl7bLlSQhgZTIFsGH78NtyZvgKmULbM5eKETVdosRzhFNPHYntSwMO-eU21IYSE7rOn2BdkT57U2IW_MxmgENvx9O66ULPBn3dIOJWouVkFYx1qeiWYlamSiaam39nIjw5oDPc8DDjI2lVS6BEgwmPVPajHFoA_WP6ZsVcHVAFibOt_EaO-q7mz4wBtGwVnv0hPHLXO9Yr8PsQh49OygTiFAY5IlkXTcLFj9Rwiel-heMX76MZAawV9FU92C4iJ8_eDz3MybRnieXaArDsxldL2TA49PnVIGbrvE-kluiyLaIXrIJVHZ9wok2E1lZZibleyuAbwgQN75YMA3Vagr9EUteWfHTOineOsALw6fcp84jhkGOlmpRypierr_ZSFxHXptXnK-_2Wdakelq2_ApRVVZXW88ugNfzO7xw5VH9v4unfDUpVf1U3cYXkQr5NqrwL6LlF0d8ZHVupdhL8Voj_qEeX_R5WBm3zTyyZB0Ujb8F-39QI76PuQbbU-CIVpGfNA-1ddyjsZYfAFBoUsCKljtS1XlS4-agS6_073orhGF-B1oMCAhk31eXk7FeIDBUPddl4wRw7UlvwP3lXS625xkJaqa81_W5b7YCmM2aPSOCx8T46cmdPOpcodgvkP6OsMZ6IoXvOr1xnnORr9hLdwHCOplOAJv80ywEZZpOrIPIurwn9rJGzY-QbN_KmFQyfcxBoIX__bAy3BHpNC-isYZKEp9ifX6_aeot1BWz6ZjhOlYqQziKztaGqMLIcpu4KGbTNKNdPb1NDUBRx8ZuomRt2hGREBYNFI_s4TXbFwDeMxQzyF09EhVPbhyVZuv0TvNTuIecwjvLRKxi0ay28X0G0w0F30sz1taIG2RW3TLHO8rPhYpMk9cVGz5pfDeD7MvTbtyJdvVxS5VB-zRlqY1QbsUD-NZuwkvotUvxl9ZXLX4EhC3eoXOIEyP5Q6F3TlrOwu3vl2TFNv5YvjcHQWf6Z4dTeJJQKv9BbUP0l7Zr_TuVZIjq7U6NBQYY0HDZZ3z4Lu4lnr553wVAdADRQOSec_WZI-X0qJOTScTHTUSlBUQvos134n5XOjDC5VExljDzR0QABo1xlDEUofSsfbXCXl4O62YLHyYEUEqyta_07twCV9p4sQR5Zfz9bQVRRPXUdbozuPT_dPhjj_KMfSYnLH91AJK_PyIzSCBmQAKqEwkXNMDfqIQEAp6_jzF_7wlniQCiTwAQhYC_F4rG083BxcLNwvGmm7W7i7OTu52XNZpH4P950RDL6Cvp_g9XdAcEPw0AAA?wid=1440",
      alt: "side",
    },
    {
      src: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAI1X-TuV3ffeZtmIYx4yvURmShxDxmSmEscQHZy8poODTDkkEomOqWR4zYoMpczzHEJJs2PIlDGZ58_TdX3_gO_-YV3XXs--nmc9a933vdZ-sQxoAgiAys5Ox_iQh8PV9bsyJQBBPgAACsRPaafzYp1rh5becuL_3EyMgDoQ5-RDgZzQp2Rw88K64uT-OpiOj49PUkCsigwuyF8Ge8vNnw458gguHkc0PiCVzfvR-yUs7wt2rHtv-gD404D2c5H9QZjeJTPcyxZK-m3N9IcAJh-8j6ND_5gvVnIb-2-n_wrmNvtrAP9cMDj5ZWSoTnT2skgtVip-gP07C4BZPWNlkr5PSFx5bqIHtZkehyo_AgD8lOPLuYfOJ_qmXrVgrueRan3etA4gEY99qmbAapksPNSkeQ33OGVwtBBAI9O67YwVm5gE7zW7Gr6ee3LCEaYAWnTiyQ2JCT1ZYfo8r8ZePf7dmukEIAb1yGG_IaTgKfPr-3y6SoP2dKW7AEpT0b_DiWuYYurFM85nLBmeliJ9BlC0tqHQYqw2gpVrVN9ibLkmmKJaCEDB-G2rNBVqwwGs8X10aJbpXl-SPIBzdxPN-ofSRvw13dhWzKs5rSF_N4CcrFv4m8MeI5Us3sXrEgrnl5NGHAHUIQVjkm-Ir-jcJg_nmldaSEvcWADwRqjmyduLL03mhn8q_zMbap4fvrCIRKYUMa1u-_2q-85pkUO_2oZZHk87AN--d-0XafRKJ8rtG-CSdh9mnNmuB_DNO0fUtEYa6wXHlRfZmEsEKtsBSQB3vTdHpcREmp8qbMVDgOau9zVTAJBvUy5jaWVpqTTULC7ZtHxPIqzHD0D3alSGBeapI_eWNbcS8ajnQ3CLKoA5JQSRs_N49EW-s22CRknPsKFz8QAOix2w-QfENsoySVO0mGg0B6BYJgD0cCr6cgpjbmeimDxxsEmkNDXmtwRQVgDD9Fz0fW2JpMXqu0ZyHBvLJSMAW08snvOsyXFko707pR1oLbVhyh0KICHr0zWHbZ9Ts_15b7loBihrGRpfATgvOsqMN7CDr0yICyPsPyN3tnFI5SMtiR6e9_aTZuh2CT-ODI1M1ZIGADQJip6TadBUzzpipk3X6g_qnjcPB_DrHyGJVloJrJH7wm9e329TheSMQQC1itEvfi1sBcgMq96Q3x4-tFz6dwvAbxkrNHUD2zWSQ8NP2xvf8ula6_cDOGZ_8cG54sPMTfPAXOeqC6cNhzwIAFrHGI3RvELvuBrsTKDnD20-1wcgSLXdIDg6x4HSRJlTpfTL1g-X9-EOgAOxFWLs9ReDrkFJY-1qA95T3z3_ANieke43fSFFaSpz1orbyolXp7mMFsDFtTs2v9JqXAPVbweZnzf08ikjIbxgf6PF_nWrchdtbCY3cU7fHueWbQZgbN00sWujuH4wL5fOuHdx7erYeDSALv5TdVQPXgtmCrwcIvpQMtTqkcQAPC-swiZlhTZP5DDcml-zHvjSXM4BYJNbcGKbj7ja7pqC_--Nydxjd9xHACPIp2MZY07L875nF-_DvUidsQncBpCq_1OTIf8sW7kJ21fNuwFoZbsEAQBRv-emBcnF2eqq0x-lz8x0q7RJyCJndZSvSLoc5dOgZvhbc1XvtWT9PAEgV1xjeIql3o7iWVJI-q-3bXsRj-kAvPqro7XEl-hR0KpoheJS-_zdG4t4lQ83zyjtj7dWfOkl2KqP7kFdnk4AN0m0GMEY8VjrIV5dDzPZ_A5efgyAqsSjhtitT08z7x3OaDDSuMakez8BMGlyaJUmvqDz-NN2d_KPYJTzqiM3gNSsHvmvQqNsljCoidHN163WSYsxANL_wFJvtrVERd6fr71yPEcq6IVHAIaUqgUP0psqbFTInIXEAL7xpQp7AK2uP3mCn6q-aaHotj85mnCjpCYMyY7UOKFjcSOcVFnt23Yutj1bwiaxCoksR9tf69Ehw7Xes8tyVz-cqTO68BJA3C1zt-kig48ulqZ9PoPLxMOFulEAV8p0xRZ-e4YnsI460or05tbJ1iJK-zwkgrr8NW_c0YmONnOpJ1-FzJ_cB_CkJf2BS3I6NsVWo19kte7IB7-I4JdSfuPZwoiECs9vqrLl48qC1SdOZABz-d4Irxux0SV0adrqbbj_wPX48SI4656bsqZ4pVkUqNvZr-2UXFztYIXEuxbe3OLHjxIXdTjNiV0-8R4fhShMo0Tq8R3PislIYpkA46O-ySjJP8jXdPHmqd2KAxgOB3GX34_aGdrXfqEB5C0MFb7PFVKz3TeT1TLoXdVYqnYbQB9H5abo_KdMldgOB_BS4v6Isr0rouDhHe3cZyKndlGCGnctj_4V4C68CWBJjfZlJ4aHzz9m3UHTO89Od-8EJQMYU2k5VWxV9SD-tWqjTOHsm3kl9QIAzx3msdOrFRYv3mgcWE-wbH9w_eIVhN2dediDB_E5Z_7LnaNhJuZkSBnRAOiNBtw5uY8PJxxIMRWXvneF4J_ZIrVQnw2Vs9aDYS5ugqHO05StbmikFhyqNz7d7ph2GmjarPdoEJTk4JZzA_C03vco_YE4L3QyrxcVVznNt5KTbwAsxnNY7FKufzjMRasm4zgLymH0N-QvmMOEbSkxiaLnwg3RojntSjcHFQGsnDJuNneX6rA7mH52MXpQycw0_R6ATjMbe1pOYw66Hpmtw8zs7nf7CpsBrPKyDltLjjUosLFRiwy8E0f24mwFsGik11P8qqv2fo1xjohIFr9N-PN8RLm-CPXuEcT6Uk24K2UPFEcGXKyQypNL7eQXmP8RODR-LxAw3zyE22ZJArAn1s_7c6R3UnqKjPq8uyhjeu8pRDWsIiabXG5RBrfYVStsGKgN0PxqkQJwBqMhLv8syhmjw0G6WVEmZr9CdQnAy4-uVEWc2DtmntziGWFRL5Z-sVCGcFNFgnFyn5MxKIO8mxTWPi3TtluMKIzTAa5Q65yDN-koZ0EjZtrWJBxBSSCOrNNpRI3q5ONpDmVQly_SK0Z4PNNXZT5Sqq41UOC90Ybn4xMYJX9HspOb9Uxt1rffm2XPPtWx2jAL_84XQFq85Bmdhd2ET3P6hscWW1zx8qVI5z2K4OJPRkd1am0GKNnPHIQub9YhOukgJ8FKyZrtcYIl-JtlUXm1WYgqwiFilJy0agkj61C1GJ5qQGVbg-iLqEZ4xuSLpemmn-1vD48_FIm_sKw2QQFIh2IOLaVY1Ey02uKsNE14Gh9jVwugq126h4a-5LGP759UzYgR5gqz2xUASjSt2ntIaGqlpO-uywRGZu936ZsgPbaQT6Si36VUTNhLoZcJ7Ye3xiI4u2paOyFRm0Pbum0kRWZ698E3BNUB4IbnxSR6-ooG5fYN4pqbKFdVU7wggGzkNsKoXC6D6bV8oZsVae-Fg4SXAbzTZ27dLzA1J_4mxEsDu8hmFJZ9HcAJuobu_Q7TGFzjLVrVLD-7gyeGFxHOk976S4ZemLz3WLA62cJrtxjn_BiZKnTqlfNelTRp-TAt57tZlQcJHSNa7ZN2h-DkLugXPofCFve1J4mN_0GmFSJ6bVbYm1bNAQ8JLdcORyjXJZAJLzpwtFJ2jIpljKvqltzGvz1OvBeQeLkTDz5yf5X-pW5etN0ayCSc4xbCA-AanUNreKqC2QTmn4_UHX9Ky2cvIOyWL_1PsEDF0J5jWHdOtLNrHvUBowzgXrf2Hz3Fa0YMgnRU4953KxeWppD3knduHKco9i2tuVpO6TyTEks12_iJoI_-5Wh9h6kSzZs0k-FPAuGz5FPzALLYqMsNTawyEoTTOFhPllbonzdHsj7qJ7Lzfpg9ZXuVemb8UHon76vNFwALRkMvr7Ex3DFkiD-1Vs1r_Z8zNTK1Xcn0jq9OztUvKHsePbl0If56dBcSg323w47XqHfbPHNe17SJxWI0YP6NoE9M0vyj8EV1_tQFdTydQfZsvTSC9R8lwcPOYqK830pkUzGWOc5Hp5MoAMTHGU_uNBzZ61aEBTOOVn8LIvUhSjsbGVjy0SxiUyxIyKxLqp2niqILwcORyAFthNE-Kuw2DXF_WJV9R_clMik8KFWPGYr4B2WUSieXlxIsQC-JykRqLHT4wOBDgF3ch62VR9V3AgsPfiF9c-dEf2y4rOeVkwpNOv0tp2R43f0RHqc1vBNLkl09skZvkXKrErr1F8Z_AGhshb08NPloPXbnaz-pNtt9bvcuomekfzFSZCdNUS2BzHATeD2FUAUQPASLBEzXOWbcSi8Qy_XAnnBU1kkUR7wWehtpQaW5Ft2pezPSejJaVCZRAI6HGY-fJWm_86Splm9v2VAeeC2kDWiQiwgNQAw1J2IgNWLom__u6YMQQ9Xz954i83dPSaZCnmshvijwdzGzBRA8fbAErJcsAefn4433c7uFY5WQ_38uNmptK0PL_wEpyqUQPw0AAA?wid=1440",
      alt: "front",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-300", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-400" },
    { name: "Green", class: "bg-green-900", selectedClass: "ring-gray-400" },
    { name: "Blue", class: "bg-blue-800", selectedClass: "ring-gray-400" },
  ],

  description:
    "Zużycie paliwa w cyklu mieszanym 7,0 l/100 km | Emisja CO₂ w cyklu mieszanym: 184 g/km",

  details:
    "Wysokiej jakości materiały i precyzja wykonania sprawiają, że wnętrze jest strefą wyjątkowego komfortu. Dostępne opcjonalnie regulowane fotele konturowe z przodu, tylne siedzenia z opcjonalnymi zagłówkami, podobnie jak całe wnętrze, zachęcają w każdej chwili do podróży w niezrównanym komforcie.",

  select:
    "Opcjonalne personalizowane fotele konturowe z przodu dzięki funkcji pamięci potrafią zapamiętać kształt Twojej sylwetki. Wentylacja siedzeń i funkcja masażu z przodu oraz z tyłu zapewniają na życzenie dodatkowy komfort. Odpręż się i ciesz się drogą – nawet podczas długich podróży.",

  suport:
    "Odkryj swoją osobistą strefę komfortu w tylnym rzędzie siedzeń dzięki imponującej akustyce wnętrza. Zrelaksuj się na wygodnych regulowanych fotelach konturowych pokrytych perforowaną skórą Valcona w kolorze perłowego beżu.",

  headlights:
    "Design wnętrza wyróżnia się wysokiej jakości materiałami i najwyższej klasy wykonaniem. Ciesz się przestrzenią dzięki dużej ilości miejsca na głowę i nogi. Poczuj się w podróży prawie tak jak w domu.",

  sport:
    "Dostępne opcjonalnie ekrany z tyłu pozwalają na wyświetlanie treści z urządzeń mobilnych – pasażerowie mogą oglądać wideo, grać w gry lub korzystać z aplikacji",

  design:
    "Dzięki elementom stylistycznym nowe Audi A8 w kolorze Terragrau Metalik cechuje sportowa elegancja i wysoka jakość. Przyciągające wzrok detale na osłonie chłodnicy Singleframe i zderzakach oraz dynamiczna linia dachu i niepowtarzalna architektura napędu quattro podkreślają charakter biznesowej limuzyny.",

  design2:
    "Ciesz się nową generacją technologii oświetlenia z opcjonalnymi cyfrowymi reflektorami Matrix LED i tylnymi światłami OLED. W chwili zakupu pojazdu do wyboru dostępne są dwie sygnatury tylnych świateł.",

  design3:
    "Dzięki oryginalnym akcesoriom Audi Twoja biznesowa limuzyna ujawni swoje wszechstronne talenty. Zarówno elementy wyposażenia technicznego, jak i akcenty wizualne można łatwo dostosować do swoich oczekiwań. Zawsze i wciąż na nowo.",

  design4:
    "Audi A8 może być wyjątkowe – dokładnie takie, jak tego oczekujesz. A to wszystko dzięki elementom dekoracyjnym, materiałom tapicerskim czy indywidualnym lakierom z szerokiej oferty Audi exclusive.",
};

const selectedColor = ref(product.colors[0]);
</script>
