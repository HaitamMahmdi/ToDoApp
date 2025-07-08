<script setup>
import InputComponent from "./InputComponent.vue";
</script>
<template>
  <form
    @submit.prevent
    action=""
    class="flex md:justify-between flex-wrap justify-center dark:text-on-primary"
  >
    <div class="grow text-center px-6">
      <h2 class="sectionTittle mb-10 font-bold">contact US</h2>
      <font-awesome-icon icon="phone" class="text-[clamp(2.5rem,50vw,10rem)]" />
      <div class="mt-20 hidden mb-10 lg:block">
        <input
          class="bg-Clickable cursor-pointer text-on-primary w-2xs px-8 py-4"
          type="reset"
          value="submit"
        />
        <input
          class="bg-light-primary cursor-pointer text-on-primary w-2xs px-8 py-4"
          type="reset"
          value="reset"
        />
      </div>
    </div>
    <div class="md:min-w-3/6 mx-auto">
      <InputComponent
        label="your email"
        inputType="email"
        id="newInput"
        name="input"
        :isRequired="true"
        lableStyle="text-3xl"
        cusclass="px-5 w-full py-3"
        :helperText="true"
        :addValidateToText="true"
      />
      <InputComponent
        label="your message tittle"
        inputType="email"
        id="newInput"
        name="input"
        :isRequired="true"
        lableStyle="text-3xl"
        cusclass="px-5 w-full py-3"
        class="mt-10"
        :helperText="true"
        :addValidateToText="true"
      />

      <div class="mt-10">
        <label class="font-semibold mb-2 text-3xl" for="Description"
          >your message
        </label>
        <textarea
          v-model="taskDescription"
          class="dark:bg-on-surface focus:bg-on-primary border border-on-surface mt-4 font-semibold text-tiny dark:focus:bg-on-primary rounded-3xl h-96 dark:focus:text-on-surface p-5 lg:p-10 w-full"
          name="Description"
          id="Description"
        ></textarea>
      </div>
      <div class="mb-20 mt-5 mx-auto w-fit lg:hidden">
        <input
          class="bg-Clickable cursor-pointer block text-on-primary w-2xs px-8 py-4"
          type="reset"
          value="submit"
        />
        <input
          class="bg-light-primary cursor-pointer mt-5 lg:mt-0 block text-on-primary w-2xs px-8 py-4"
          type="reset"
          value="reset"
        />
      </div>
    </div>
  </form>
</template>
