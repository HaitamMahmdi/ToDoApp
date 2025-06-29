<script setup>
import { ref } from "vue";

const props = defineProps({
  type: String,
  regExp: RegExp,
  name: String,
  addMessage: Boolean,
  isRequired: Boolean,
  placeholder: String,
  inputClass: String,
  id: String,
});

const input = ref("");
const message = ref("");
const inputReg = props.regExp;
const isvalid = ref(null);
function validit() {
  if (props.isRequired && !input.value.length) {
    message.value = `This field is required.`;
    isvalid.value = false;
    return;
  }
  if (!inputReg.test(input.value)) {
    if (props.type === "text") {
      message.value = `Name must contain letters only.`;
      isvalid.value = false;
    }
    if (props.type === "password") {
      message.value = `Use 8–16 characters: uppercase, lowercase, number, and symbol!`;
      isvalid.value = false;
    }
    if (props.type === "email") {
      message.value = "Please enter a valid email like example@gmail.com";
      isvalid.value = false;
    }
  } else {
    message.value = `Looks good!`;
    isvalid.value = true;
  }
}
</script>
<template>
  <input
    :id="props.id"
    @input="validit"
    :class="[
      isvalid === null
        ? 'border-on-surface  dark:border-on-primary  placeholder:text-on-surface dark:placeholder:text-on-primary'
        : isvalid
        ? 'border-success text-success placeholder:text-success'
        : 'border-error text-error placeholder:text-error',
      props.inputClass,
    ]"
    class="border pl-2 dark:focus:bg-on-primary dark:focus:text-on-surface"
    v-model="input"
    :type="props.type"
    :placeholder="props.placeholder"
  />
  <div
    class="items-center"
    :class="[
      isvalid === null
        ? 'hidden'
        : isvalid
        ? 'flex text-success'
        : 'flex text-error',
    ]"
  >
    <font-awesome-icon v-show="isvalid" icon="circle-check" />
    <font-awesome-icon v-show="!isvalid" icon="circle-exclamation" />
    <p class="font-bold ml-1" id="errorMassage">{{ message }}</p>
  </div>
</template>
