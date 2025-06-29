<script setup>
/**
 *! The feedback obj is temp
 *? Maybe make a saparate component for card ?
 * */

const feedbacks = [
  { company: "TechNova", reaction: "Clean design and super intuitive." },
  { company: "Cloudbyte", reaction: "Fast, simple, and reliable tool." },
  { company: "Zenloop", reaction: "Exactly what we were missing." },
  { company: "PixelForge", reaction: "Elegant UI, great user flow." },
  { company: "Brightstack", reaction: "Works smoothly across all devices." },
  { company: "Codeflare", reaction: "Simple, smart, and well built." },
  { company: "Snapcore", reaction: "Productivity instantly went up." },
  { company: "NimbusX", reaction: "Easy to use and efficient." },
  { company: "Quantico", reaction: "Great UX, fast and responsive." },
  { company: "LoopNetics", reaction: "Feels polished and thoughtfully made." },
  { company: "TechNova", reaction: "Clean design and super intuitive." },
  { company: "Cloudbyte", reaction: "Fast, simple, and reliable tool." },
  { company: "Zenloop", reaction: "Exactly what we were missing." },
  { company: "PixelForge", reaction: "Elegant UI, great user flow." },
  { company: "Brightstack", reaction: "Works smoothly across all devices." },
  { company: "Codeflare", reaction: "Simple, smart, and well built." },
  { company: "Snapcore", reaction: "Productivity instantly went up." },
  { company: "NimbusX", reaction: "Easy to use and efficient." },
  { company: "Quantico", reaction: "Great UX, fast and responsive." },
  { company: "LoopNetics", reaction: "Feels polished and thoughtfully made." },
];
</script>
<template>
  <div
    class="relative p-4 text-on-primary animate-scroll text-center min-w-64 h-60 flex flex-col items-center justify-center"
    v-for="(feedback, index) in feedbacks"
    :key="index"
    id="card"
    :class="Number.isInteger(index / 2) ? 'bg-surface' : 'bg-on-surface'"
  >
    <p class="mb-5">{{ feedback.reaction }}</p>
    <h4 class="font-bold text-4xl">{{ feedback.company }}</h4>
  </div>
</template>
