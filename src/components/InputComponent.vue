<script setup>
import { ref } from "vue";
const emit = defineEmits(["isvalidVal"]);
const {
  inputType,
  id,
  name,
  label,
  helperText,
  placeholder,
  addValidateToText,
  isRequired,
  cusclass,
  inputReadonly,
  lableStyle,
} = defineProps({
  inputType: String,
  id: String,
  name: String,
  label: String,
  helperText: Boolean,
  placeholder: String,
  addValidateToText: Boolean,
  isRequired: Boolean,
  cusclass: String,
  inputReadonly: Boolean,
  lableStyle: String,
});

const val = defineModel();
const isvalid = ref(null);
const validationFeedback = ref("");
const validate = () => {
  const nameRegx = /^[A-Za-z\s]+$/;
  const emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=\S{8,16}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/;

  if (!val.value && isRequired) {
    isvalid.value = false;
    validationFeedback.value = `This field is required!`;
    console.log(`ssss`);
    emit("isvalidVal", isvalid.value);
    return;
  }
  if (inputType === "email") {
    if (!emailRegx.test(val.value)) {
      isvalid.value = false;
      validationFeedback.value =
        "Please enter a valid email like example@gmail.com";
    } else {
      isvalid.value = true;
      validationFeedback.value = "Looks good!";
    }
  }
  if (inputType === "text" && addValidateToText) {
    if (!nameRegx.test(val.value)) {
      isvalid.value = false;
      validationFeedback.value = `Name must contain letters only.`;
    } else {
      isvalid.value = true;
      validationFeedback.value = "Looks good!";
    }
  }
  if (inputType === "password") {
    if (!passwordRegex.test(val.value)) {
      isvalid.value = false;
      validationFeedback.value = `Use 8–16 characters: uppercase, lowercase, number, and symbol!`;
    } else {
      isvalid.value = true;
      validationFeedback.value = "Looks good!";
    }
  }
  emit("isvalidVal", isvalid.value);
};
</script>

<template>
  <div v-bind="$attrs" class="flex flex-col relative">
    <label
      :for="id || 'text`'"
      :class="[lableStyle]"
      class="font-semibold mb-2"
      >{{ label }}</label
    >
    <input
      @input="validate"
      :type="inputType || 'text'"
      :placeholder="placeholder || ''"
      v-model="val"
      :id="id || 'text'"
      :name="name || 'text'"
      class="dark:bg-on-surface font-semibold"
      :readonly="inputReadonly"
      :class="[
        isvalid === null
          ? ' text-on-surface  placeholder:text-[#dddd]'
          : isvalid
          ? 'border-success  border text-success  '
          : 'border-error text-error border placeholder:text-error',
        cusclass,
        inputReadonly ? '' : 'focus:bg-on-primary',
      ]"
    />
    <div
      class="flex items-center absolute bottom-[-1.4rem]"
      :class="[
        isvalid === null ? 'hidden' : isvalid ? ' text-success' : ' text-error',
      ]"
      v-if="helperText"
    >
      <font-awesome-icon v-show="isvalid" icon="circle-check" />
      <font-awesome-icon v-show="!isvalid" icon="circle-exclamation" />
      <p class="mr-1">{{ validationFeedback }}</p>
    </div>
  </div>
</template>
