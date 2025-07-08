<script setup>
/**
 *TODO => Add more sections to the page e.g (aboutUs, subscribe plane,footr,users feedback)
 *TODO => give every new section an entry animation
 *TODO => give the hero section a fitting bg for the light theme
 */
import { useRouter } from "vue-router";
import SliderCom from "../components/SliderCom.vue";
import { useAuthStore } from "../stores/AuthStore";
import PlanComponent from "../components/PlanComponent.vue";
import ContactUsCom from "@/components/ContactUsCom.vue";
const authStore = useAuthStore();
authStore.checkAuth();
const router = useRouter();
if (authStore.user) {
  router.push("/index");
}
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
  <section class="container mx-auto">
    <section id="selectPlan" class="my-10 py-10">
      <h2
        class="dark:text-on-primary text-center font-bold text-[clamp(2.5rem,5vw,4rem)]"
      >
        --- select a plan ---
      </h2>
      <PlanComponent></PlanComponent>
    </section>
    <section id="aboutUs" class="dark:text-on-primary my-10 py-10">
      <h2 class="text-center font-bold mb-2 text-[clamp(2.5rem,5vw,4rem)]">
        --- about us ---
      </h2>
      <p class="text-4xl text-center max-w-4xl mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati vel
        quia nulla nobis alias mollitia illo impedit ipsum, hic porro provident
        dolorum repellat non error culpa nostrum corporis? Facilis, sit.
      </p>
    </section>
    <section id="contactUs" class="mb-10 mt-20">
      <ContactUsCom />
    </section>
  </section>
</template>
