<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
        <h2
          class="-ml-4 lg:text-6xl md:text-5xl text-3xl font-extrabold text-gray-800"
        >
          Lista samochodów
        </h2>

        <div
          class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 my-5"
        >
          <div
            v-for="callout in callouts"
            :key="callout.name"
            class="group relative"
          >
            <div
              class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 my-6"
            >
              <img
                :src="callout.imageSrc"
                :alt="callout.imageAlt"
                class="w-full h-full object-center object-cover"
              />
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <a :href="callout.href">
                <span class="absolute inset-0" />
                {{ callout.name }}
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900">
              {{ callout.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="py-8">
        <VehicleTable />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VContainer from "@/components/VContainer.vue";
import HeroSection from "@/components/Home/HeroSection.vue";
import VehicleTable from "@/components/Vehicle/VehicleTable.vue";
const callouts = [
  {
    name: "Audi A3 Sportback",
    description: "118 090 PLN",
    imageSrc:
      "https://flota.com.pl/flota.com.pl/backend/photos/userfiles/image/FORD/_DSC8676.jpg",
    imageAlt: "A3",
    href: "/a3",
  },
  {
    name: "Audi A7 Sportback",
    description: "300 080 PLN",
    imageSrc:
      "https://napradzie.pl/wp-content/uploads/2019/09/audi-a7-tfsi-e-quattro-phev.jpg",
    imageAlt: "A7",
    href: "/a7",
  },
  {
    name: "Audi A8",
    description: "442 100 PLN",
    imageSrc:
      "https://www.auto-motor-i-sport.pl/media/lib/3229/2022-audi-a8-facelift-41-9c484b357bc54280f0088fa6dbfec82a.jpg",
    imageAlt: "A8",
    href: "/a8",
  },
  {
    name: "Audi R8 Coupé V10 performance quattro",
    description: "993 500 PLN",
    imageSrc:
      "https://www.audi.pl/content/dam/nemo/models/r8/r8-coupe-v10-performance/my-2019/1920x1080-inline-media-gallery/1920x1080_AR8_181034.jpg?output-format=webp&downsize=1459px:*",
    imageAlt: "R8",
    href: "#",
  },
  {
    name: "Audi RS 7 Sportback",
    description: "636 000 PLN",
    imageSrc:
      "https://www.audi.pl/content/dam/nemo/models/a7/rs-7-sportback/my-2020/1920x1080-inline-media-gallery/1920x1080-ARS7_191005.jpg?output-format=webp&downsize=1459px:*",
    imageAlt: "RS7",
    href: "#",
  },
  {
    name: "Audi Q2",
    description: "118 900 PLN",
    imageSrc:
      "https://www.audi.pl/content/dam/nemo/models/q2/q2/my-2021/1920x1080-gallery/1920x1080-audi-q2-dynamic-top-my2021-0684.jpg?output-format=webp&downsize=1459px:*",
    imageAlt: "Q2",
    href: "#",
  },
  {
    name: "Audi Q4	Sportback e-tron",
    description: "209 700 PLN",
    imageSrc:
      "https://www.audi.pl/content/dam/nemo/models/q4-e-tron/q4-e-tron-sportback/my-2022/NeMo-Derivate-Startpage/highlighted-car-teaser/CTA_to_Q4_desktop_02.jpg",
    imageAlt: "R8",
    href: "#",
  },
  {
    name: "Audi R8	Spyder V10 performance RWD",
    description: "865 900 PLN",
    imageSrc:
      "https://www.autotrader.com/wp-content/uploads/2022/01/2022-audi-r8-v10-performance-spyder-quattro-front-right.jpg",
    imageAlt: "RS7",
    href: "#",
  },
  {
    name: "Audi RS	Q8",
    description: "657 900 PLN",
    imageSrc:
      "https://www.audi.pl/dam/nemo/pl/modele/q8/rs-q8/my-2020/1920x1080-rs-q8_dynamika.jpg?output-format=webp&downsize=1920px:*",
    imageAlt: "Q2",
    href: "#",
  },
];
</script>
