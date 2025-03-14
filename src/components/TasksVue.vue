<script setup>
const props = defineProps({ Task: {} });
</script>
<template>
  <div>
    <h1>{{ props.Task.taskTitle }}</h1>
    <p>{{ props.Task.taskDescription }}</p>
  </div>
</template>
