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
  name: "A8",
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
      src: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAI1X9zvX3_s_VsaxVyp7FMqWvWXvkmzJXtkiMztkZRMi452VyB4hyStbQmZCdtlEfE7X9f0DvueH-7qe9_Nc93XOfe7H43Hf5ZsAz9sD4JiYKGj8vURjZzclig2ArxsAAAv5sU0UyncvHl0g0J__PzeZGcB9ZPPADQvtUMYmcnCxtLPh--cgOT8_J8MishTlsfH14vFwE8ZHO8ogI7PySu_dvBXZKpFvlMe7_ElE7zoBDKkQSoluW2SwU81QwnBrh7X9OFADcItYZZlPVtzT37LMD36Kvh2uWr8NYHwWZuUktcBxvLrw5sTHim0xfXtBANMzva7jL3EYZjwzeeaX7Pm4trqIA8DP2CmKAwtCPZXBWxKy8tSbn2QIKgFcUp4jTX-3oZrsLvhiz-EW_ehqzzqAjTexe9MChJ7Ti2I_jjn942Gb-44cxXX0LW0Z8m-lFrugmXUnW8HzjIcKwJ6yahbjwIoUn4QtxZ6HfALCE_MpALL8fvr3p23wyVX980yhuRnKvAytRgDzOSLIiO3nBATEVqdedIChAt80LQA1uNNYYhOZ2YJW6YoqvXh-WXR4fgWwyLrV3ly_wpIir1ueZ5etoTnwkAXA_whorO4Zkg0X339ssM-lrzVywWkfQGY66R7qI7mk35Hj5vD-9urzmY5cAGnEchiWXjRd1DTAq32nWVN8gzYeRdipMW6S-IphalqM03YP-Ou3-Ut3FcBINTddjv4BVnHasUd9Qw7vf6n-pQOQvb1A5MXP64mDkuMiwbyWuBcm1x4DSMtNA19shL-p56TDswmP3oQiAvgADugZEG5j-RY5MD42EZh4k1lBMNMH4KyUm1CDck0ziXC1kxZgFpQKElAAsHmE0YTJk9iWvcjIn5bfnxabouYjgEHb7YeDpOeDDL-5f7jzMimH2aXtAXhHauFhRj3bKPmT4Q7r2pGBIg8wAWCpFc7t-bjIMpeLRweltZMP748JigJYx_W-mv-KhdMiZ957XIfRhKUmcU0Ay_nyeJzUjhMTufI_GDtA0sgPRv0Abr4wXewsill6fj324LlQLnYw_hrK5EXXZX41rsRGGSrvFdOiZvYaer9aAE0L-LFp-qtL6Y6fiWpTXQo7fxKSiarkrHF0tNNlZ7P4kVPzcPw-N4_tDQBd-mYLcva-NHc9lc7iUakpMLF9Vghg-NpLsuvqnZHOHlw0i3oNP90_a08D2FSmIKHO5NAkKFp5_JFPB8ZtKkUCGKVQpvU8O8PtgzHrCcvd6uaqgLjPKA-YsSBty9B0wVLnmWsPU60sPji-AHC07DTBa7g3bABOunxv7aq0aFfGBbBM-z8c7IH-g57F3iCDL85NN57YzwL46nDW_Pr6SDfW_lt2HVkLosrf3fUAtrm7dFZGqY1Z5c1-uiOm5lj7toULwLdZ6k52MacHsLWO5fJLxxFpW_FgAL006TeuyNQ6uo5deCCf3ugxPpz2DWXyA9EV05jDbrqLUdfu6W-_mdw9UARQO5Aj0Bxjzi6S0cbZcdJQiBXAh9544Xdlw-2zbudHZhjKnrMEua6iUXmU37N9Qq1vmfTz_pxJ8_gJvUHeXhIA6ja1aETc2kqYqVX1aLYX6v_C44nycKZisMaBG_WNQ8ZXKL7Yrd9E1zUDoZuRusldWufCnNADh_qjzZTbNxWnAMy7QVVHI2r4-GVUsBP0antmHca-CSBph5FJbSIhtZ3Td91RTpXSt1i-WQixrIEnma9e13-2DcF6IlVUz8ugjjAfNONkGVlCJlk7qOzYts4yaphLuoPulkOzlitJEMePIVdrwWpMpC_OQjjmmW5wDcH4xd0fy-pyG2ZXWGX4KAXgIvXDxiG8kSRFXbb-dhdex1ilhG4AA1QXYvr_bp2H2Q-OqGBbjeTxiAwAOE7IxX3d0jPSPE279frUdoP1r0oyAH9xMpMnvxHkyD-NDBl0YzcYabn3CUDCQBlnmrsy1-uM1IN0vR02HKejHyDWUJwIqs-3WxUlDxzqYHDeGFhi9ANQ0__4ZDKunJEzx3WYzuPZEo6VqDGA289PNZYYAhk6ssa6_XEWs5S8dRCnEti6bvot2HKdbluIKJ1pXtWPtV8CMJe5-VrZT1XT00rW_a_MO8zkLbx4AH5yJzh8ExFVeH5GPVqRg59DVX0lG0Big-GdiPo_t69N9mN1Ryae4_WZokpVYeet_ip9WrFOKmVad_XYsVwjYx7ASkaciHTpqMoMyazGjMeBPpEkI80Azui-dHLQ8tr-dBefsn-1YNfg75VWAPtwMGEu-rb4XaKr8SJ9d5jvTZVbACiyRjk0fuRVrhhVOpcoWnB3szlBBkAKjd-uP0cdmbqMTeq9PeTcmV6nzQGIe8nEZBRT9mJlbC56eIijoyTfhB3A98azNuYR8kcvMDaJ1_4u9t6MHEQaMChaxtexLhwi267motFSkPm2OPs1gH_5cmbtmj8-EBa_R9YoukK0TMjODeDcLp7YHysRRUqSi1CebSeDM54XeQcuv_2Dc8MsLGX3xFQ87GbjT78dHgAFcJP8b_se4jFXVn9jUIsNISQsokfagp3h1X_vvXHIewHRvUt2HOGcYfkA7qdNlDnXpWiZE4vVxjAOqMdPeY0A-IelrsknNPdqmVeLUnZ08FQqqxkhgCuHbO-liFOnGp0_v35pKEw5ndblDqBgYbJK1dfbj1QUJ81KxJ3JBwSnEBv1R9jYespeaEqnxPwoqHHCkzjxMkN751czGVoru1uvOfFjF79pJnWjRdVHYr23dXnpTLeFUkOOKp5NQf7Tlz8AauGfHIS7aIDT1_RXAvhoLWzeOfWik9WNCTPgWXem6T08peFlnt-ykEasUd1hOFiAw-3NQHzso9ZqfLWKlfwIQKNb50dXFIY7Z_m_Xr6oJDlkZW6OuPpbNVPDeGeXm_Smx7MFfwz-MZRCvC7t489phPumIp-Kmmqmt-shn40-KYCZC1-8D9uvVaVufNNTPlB_x2CWgOrhzpGLZAyVb8pTMe3NPc5n2psfBAMB5Gu-SFdVoSOhYNaTfT8-1kmUXqkOYdN7uVTr_eLYPTc3LVYdh99-JRJPAVx7TUpAPukngcslYh1_o-pjV46hK4CXJ9Yus8p-L522rckID8et8hNqlUPaki_AXfDaVnKwK32y7ZV3exGlaxOA6qMKBYQPLbY_-Ro7qQfnEDTbiaC3cH80RtSb_0FMaHYo45XYmX3nl5k4ACPEoj9jVYU2s4mH75_kq6xO1OX2ABhXIe0WSkZN6u0TGrAt2_BTbj-BBkAOqWT1bU5m3RLV06WbAljVa1SenKiiXjbUNsrdL9O_WTC1bKLxdWHdEeGY3Sjh0EmRVZBOJyrdXXhH0bZvCTFtSIrb02RSVvysk58mFNPKjGVcRtUAJpKwZl-RU9XOd28z7Hm0qEMuH4Wys7ZdY0b_IPT2AM08oy1ktbYgX6MFsMv50J6iWDJh3VTTNw07NnCck7YUofs6mQEe8-ZcUOyaxDV55Q4vZhGEecXwqHbl6PxijfStbGZ6q3w8zzmEt45yAatxUVOpQpm3QUlq39_0bOkhvRgpsJPw8I8_ZUi89coPZ9jOcVw4HsAjImGV1ZgpqrBI8kxZQoLhvgUupMeRRlJ9LjkzYXKYWPrF9KBUI9tsxPaad25RLN_7dUc-4aLUiZs1x9OjIh3UXWkf37879eMAPE3NYGRfGVhMsNwA8Lxa8qzJ5GyWqep8YyO_VmqQzmYQ4aIef5SGLcCUij10JOjH8lx5diETgDXNpMuRwvN0v8I8C_SivmRkxvelA7jH6pEaQZmx20SinOSq7pxb-rEVRUhjlSfbvcH11SRPA2jsK2OFuFZ7AXiL5ZW740NTU_tWjGCguUvjdBgR6hQoOw7lRzKerBjwzYzG7IFum6inSE35rHgDBlrwciakh5PBulLh5_QPSBniSdlqycXly9WEL9XqfHPhPyBif4cUMg4qKq0e1xtc4MdSbuBM5ivZ9QUQqywuRVb6HXmC7ui8GudHAn256C6km39TU504w7Z_CatbVshHu-zlLCKWC70r2cfRcFEdRtoYWF-NseZb7kYY0l_AtSd5EpOSTFKeGFAm--C4UE8ZaRZbsVYQCUyVO4pbMI1PFFVKvRuC1Ikg9ysX31z7p6E4atUWlSEr0Vt5KC6z_oMnIV98XCcW1rl77kdV7z5A7xah-IjIfeWyphCF_iwm-wZxsb78GIA5O0wckjLVOCffm-5PWi2FvjnGP0T65jyFofo-hMmj6NuimiQorC8SUUc5G12hHWhU-I57-MRHLcHcelGTbgZAxv2bzVOJGWfEFk-u2M47tPb7-SKGaai6GScPU36zx1eeEOv8Jy-IZRYE4K6qBavay2Um7Xv3ibFf-UxND4ugOUAr_nOJtO8zDIvo4LTbF8xuIZGGD4BKcZc7l703m3yN8R7fWcjiKidOUgXQkIpvBK6a0Q9uTBk51GmshAhHGQLI7-woRy3ItyI-10BO4ItXnN1GTIIY8Vl3rEqASGR5RIeQqk8g3cmnFqSbZLVCeTLNz3MXTO9d3pE7l3GLOkFc8lIar05JVuSRVc7KovoSdb3fehk62Qmukpeloh-xRdYW7-N55Uq7u4ZCiD21nXmEqrxlCajxSoryeJJkrw4jHPf8ZF4mXny7mYTLUcYd7UuS_pEC4TjHxjsUKkXP1Gz8WngeNWklFNGIcJxbQTdZ8TRe1UbiY0g9VZuez7dzbTRfmFGNcLpp_9UjMQxpUQzVPn_vh05GXNq4qKliPG0oNRQuU1Bw6_plQsRc_q9ORrJ6NX-wUq0fOjB72SuGqqIb705LLUUvBDdj_TY7sD-VHucW2kNTR0C9vGP8oxrdo0D9b3l58p3JE43CAN64UGMz75U7MF7BzC8zmnTp7WokH4BOEWuEDuJnB_BSxO9gn_43YdeIET9sYcK8udqCqPfCzk1r9Ks1uPS-EgCYUbTPsYzFkjfqwSX2bmhMdGj_EKl_yE-6pP_GbrikBPQO1QXkOVO81YOos7Eij8NIlfcnp9trOhGXfO5R2EUoFMlO0ouluXkWZ2yp-d2LuCCofdIe6ZCHZ0yJbwvBDm3J-3ZhHWtRiW19gIcmW9xjZHDOkIEUyBDogn-W6J8z89_gy_PvG3sWB_2XQ75w8G-RUnl7OLtZeli68HrYeLq5PvR08LGh4OT_fy4qXHkDNf3_Ad0THj6QDwAA?wid=1440",
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
