<script setup>
defineProps({
  percentage: Number,
  progressColor: String,
});
</script>

<template>
  <div
    :style="{
      background: `conic-gradient(${
        progressColor ? progressColor : '#3674b5'
      } ${percentage}%, #DDD ${percentage}%)`,
    }"
    v-bind="$attrs"
    class="relative w-[100px] h-[100px]"
  >
    <div
      class="w-4/5 h-4/5 flex justify-center items-center top-3/6 bg-white rounded-full left-3/6 transform -translate-3/6 absolute"
    >
      <slot name="content"> </slot>
    </div>
  </div>
</template>
