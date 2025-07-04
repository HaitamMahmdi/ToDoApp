<script setup>
import { ref, watch } from "vue";
const emit = defineEmits(["selectedPriority"]);
const priority = ref("moderate");
function selectPriority(e) {
  priority.value = e.currentTarget.id;
  emit("selectedPriority", priority.value);
}
watch(priority, (newVal) => {
  emit("selectedPriority", newVal);
});
</script>
<template>
  <div class="flex">
    <div class="flex items-center relative">
      <label class="font-semibold cursor-pointer text-tiny" for="extreme"
        >extreme</label
      >
      <input
        @change="selectPriority"
        type="radio"
        name="priority"
        class="peer absolute opacity-0 w-0 h-0"
        id="extreme"
        :checked="priority === 'extreme'"
      />
      <span
        @click="priority = 'extreme'"
        class="p-1 block ml-2 w-5 h-5 cursor-pointer peer-checked:bg-error bg-on-primary rounded-full border-5 border-error"
      ></span>
    </div>

    <div class="flex mx-5 items-center relative">
      <label class="font-semibold cursor-pointer text-tiny" for="moderate"
        >moderate</label
      >
      <input
        @change="selectPriority"
        type="radio"
        name="priority"
        id="moderate"
        :checked="priority === 'moderate'"
        class="peer absolute opacity-0 w-0 h-0"
      />
      <span
        @click="priority = 'moderate'"
        class="p-1 cursor-pointer block ml-2 w-5 h-5 peer-checked:bg-success bg-on-primary rounded-full border-5 border-success"
      ></span>
    </div>

    <div class="flex items-center relative">
      <label class="font-semibold cursor-pointer text-tiny" for="low"
        >low</label
      >
      <input
        @change="selectPriority"
        required
        type="radio"
        class="peer absolute opacity-0 w-0 h-0"
        name="priority"
        :checked="priority === 'low'"
        id="low"
      />
      <span
        @click="priority = 'low'"
        class="p-1 cursor-pointer block ml-2 w-5 peer-checked:bg-amber-200 h-5 bg-on-primary rounded-full border-5 border-amber-200"
      ></span>
    </div>
  </div>
</template>
