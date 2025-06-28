<script setup>
/**
 *TODO => Add more sections to the page e.g (aboutUs, subscribe plane,footr,users feedback)
 *TODO => give every new section an entry animation
 *TODO => give the hero section a fitting bg for the light theme
 */
import { useRouter } from "vue-router";
import SliderCom from "../components/SliderCom.vue";
const router = useRouter();
</script>

<template>
  <section
    id="hero"
    class="text-4xl h-[calc(100vh-67px)] relative bg-cover bg-no-repeat w-full bg-right bg-[#050b10] md:bg-[url(assets/landing2.png)]"
  >
    <div
      class="text-white md:text-left text-center p-1 sm:pl-4 container mx-auto relative top-3/6 md:top-2/5 transform -translate-y-3/6"
    >
      <h2 class="font-bold text-[clamp(1.5rem,5vw,3rem)] mb-10">
        Simple . Powerful . Friendly
      </h2>
      <div class="mx-auto sm:ml-5">
        <ul class="mb-10 text-[clamp(1.4rem,5vw,1.8rem)]">
          <li>Capture tasks at the speed of thought</li>
          <li class="my-4">Stay organized and focused</li>
          <li>Simplify your planning</li>
        </ul>
        <button
          @click="router.push(`/SignView`)"
          class="bg-primary px-4 text-2xl font-semibold py-2 rounded-2xl cursor-pointer"
        >
          Start Now
        </button>
      </div>
    </div>
  </section>
  <section
    id="slider"
    class="flex overflow-x-hidden animate- w-[calc(256px*20)]"
  >
    <SliderCom></SliderCom>
  </section>
</template>
