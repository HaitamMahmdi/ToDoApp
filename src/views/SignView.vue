<script setup>
import { computed, ref, watch } from "vue";
import { useAuthStore } from "../stors/AuthStore";
const authStore = useAuthStore();
const addTask = ref(false);
const user = computed(() => authStore.user);
const showPassword = ref(false);
authStore.checkAuth();
watch(user, (val) => {
  console.log("User updated:", val);
});
const isLoginMode = ref(false);

const emailInput = ref("");
const emailErrorMessage = ref(null);
const isValidEmail = ref(null);
const validitEmail = () => {
  const email = emailInput.value;
  const messageEl = emailErrorMessage.value;
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email) {
    isValidEmail.value = false;
    messageEl.innerText = "This field is required.";
  } else if (!emailRegex.test(email)) {
    isValidEmail.value = false;
    messageEl.innerText = "Please enter a valid email like example@gmail.com";
  } else {
    isValidEmail.value = true;
    messageEl.innerText = "Looks good!";
  }
};

const nameRegex = /^\p{L}+$/u;
const firstNameInput = ref("");
const fNIMessage = ref(null);
const isValidFN = ref(null);

const validitFN = () => {
  if (!firstNameInput.value) {
    isValidFN.value = false;
    fNIMessage.value.innerText = `This field is required.`;
  } else if (!nameRegex.test(firstNameInput.value)) {
    isValidFN.value = false;
    fNIMessage.value.innerText = `Name must contain
     letters only.`;
  } else {
    isValidFN.value = true;
    fNIMessage.value.innerText = `Looks good!`;
  }
};
const lastNameInput = ref("");
const lNIMessage = ref(null);
const isValidLN = ref(null);
const validitLN = () => {
  if (!lastNameInput.value) {
    isValidLN.value = false;
    lNIMessage.value.innerText = `This field is required.`;
  } else if (!nameRegex.test(lastNameInput.value)) {
    isValidLN.value = false;
    lNIMessage.value.innerText = `Name must contain
     letters only.`;
  } else {
    isValidLN.value = true;
    lNIMessage.value.innerText = `Looks good!`;
  }
};

const passwordInput = ref("");
const passwordMessage = ref(null);
const isVaildPW = ref(null);
const passwordRegex = /^(?=\S{8,16}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/;

const validitPassword = () => {
  if (!passwordInput.value) {
    isVaildPW.value = false;
    passwordMessage.value.innerText = `This field is required!`;
  } else if (!passwordRegex.test(passwordInput.value)) {
    isVaildPW.value = false;
    passwordMessage.value.innerText = `Use 8–16 characters: uppercase, lowercase,
     number, and symbol!`;
  } else {
    isVaildPW.value = true;
    passwordMessage.value.innerText = `Looks good!`;
  }
};
const handleSubmit = () => {
  if (isLoginMode.value) {
    if (isValidEmail.value && isVaildPW.value) {
      authStore.signIn(emailInput.value, passwordInput.value);
    } else {
      validitEmail();
      validitPassword();
    }
  } else {
    if (
      isValidEmail.value &&
      isValidFN.value &&
      isValidLN.value &&
      isVaildPW.value
    ) {
      authStore.signUp(emailInput.value, passwordInput.value);
    } else {
      validitEmail();
      validitPassword();
      validitFN();
      validitLN();
    }
  }
};
</script>

<template>
  <div class="container max-sm:w-full mx-auto mt-20">
    <div class="w-fit mx-auto flex justify-center">
      <form
        @submit.prevent
        novalidate
        action=""
        class="bg-on-primary h-[37.5rem] flex justify-between max-sm:w-full p-4 sm:w-fit md:min-w-xl flex-col"
      >
        <h1
          class="text-textColor text-center mb-10 max-sm:text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
        >
          {{ isLoginMode ? "signIn" : "signUp" }}
        </h1>
        <div id="firstPhase">
          <div class="w-full sm:w-md relative mx-auto animate-slide-to-left">
            <div class="relative">
              <input
                @input="validitEmail"
                v-model="emailInput"
                autocomplete="email"
                required
                class="border max-sm:w-full w-md pl-10 h-12 placeholder:font-bold"
                :class="[
                  isValidEmail === null
                    ? 'border-on-surface placeholder:text-on-surface'
                    : isValidEmail
                    ? 'border-success'
                    : 'border-error text-error placeholder:text-error',
                ]"
                id="email"
                :placeholder="isLoginMode ? 'Email or User Name' : 'Email'"
                :type="isLoginMode ? 'text' : 'Email'"
              />
              <font-awesome-icon
                :class="[
                  isValidEmail === null
                    ? 'text-on-surface'
                    : isValidEmail
                    ? 'text-success'
                    : 'text-error',
                ]"
                class="absolute text-2xl left-2 top-3/6 transform -translate-y-2/4"
                icon="envelope"
              />
            </div>
            <div
              class="items-center"
              :class="[
                isValidEmail === null
                  ? 'hidden'
                  : isValidEmail
                  ? 'flex text-success'
                  : 'flex text-error',
              ]"
            >
              <font-awesome-icon v-show="isValidEmail" icon="circle-check" />
              <font-awesome-icon
                v-show="!isValidEmail"
                icon="circle-exclamation"
              />
              <p
                class="font-bold ml-1"
                ref="emailErrorMessage"
                id="errorMassage"
              ></p>
            </div>
          </div>

          <div
            v-show="!isLoginMode"
            class="flex max-sm:w-full max-sm:flex-col w-md mx-auto my-5 flex-wrap justify-between"
          >
            <div class="max-w-[48%] max-sm:max-w-full">
              <input
                @input="validitFN"
                id="firstName"
                v-model="firstNameInput"
                type="text"
                placeholder="First Name"
                class="placeholder:font-bold block border pl-10 h-12 w-full"
                :class="[
                  isValidFN === null
                    ? 'border-on-surface placeholder:text-on-surface'
                    : isValidFN
                    ? 'border-success'
                    : 'border-error text-error placeholder:text-error',
                ]"
              />
              <div
                class="items-center"
                :class="[
                  isValidFN === null
                    ? 'hidden'
                    : isValidFN
                    ? 'flex text-success'
                    : 'flex text-error',
                ]"
              >
                <font-awesome-icon v-show="isValidFN" icon="circle-check" />
                <font-awesome-icon
                  v-show="!isValidFN"
                  icon="circle-exclamation"
                />
                <p
                  class="font-bold ml-1"
                  ref="fNIMessage"
                  id="errorMassage"
                ></p>
              </div>
            </div>
            <div class="max-w-[48%] max-sm:max-w-full max-sm:mt-5">
              <input
                id="lastName"
                v-model="lastNameInput"
                @input="validitLN"
                type="text"
                placeholder="Last Name"
                class="placeholder:font-bold block border pl-10 h-12 w-full"
                :class="[
                  isValidLN === null
                    ? 'border-on-surface placeholder:text-on-surface'
                    : isValidLN
                    ? 'border-success'
                    : 'border-error text-error placeholder:text-error',
                ]"
              />
              <div
                class="items-center"
                :class="[
                  isValidLN === null
                    ? 'hidden'
                    : isValidLN
                    ? 'flex text-success'
                    : 'flex text-error',
                ]"
              >
                <font-awesome-icon v-show="isValidLN" icon="circle-check" />
                <font-awesome-icon
                  v-show="!isValidLN"
                  icon="circle-exclamation"
                />
                <p
                  class="font-bold ml-1"
                  ref="lNIMessage"
                  id="lastNameErrorMassage"
                ></p>
              </div>
            </div>
          </div>
          <div class="w-fit mx-auto max-sm:w-full">
            <div class="relative">
              <input
                autocomplete="new-password"
                id="password"
                @input="validitPassword"
                v-model="passwordInput"
                minlength="8"
                maxlength="16"
                placeholder="Password"
                class="placeholder:font-bold block border pl-10 h-12 w-md max-sm:w-full"
                :class="[
                  isVaildPW === null
                    ? 'border-on-surface placeholder:text-on-surface'
                    : isVaildPW
                    ? 'border-success'
                    : 'border-error text-error placeholder:text-error',
                ]"
                :type="showPassword ? 'text' : 'password'"
              />
              <font-awesome-icon
                v-show="!showPassword"
                @click="showPassword = !showPassword"
                :class="[
                  isVaildPW === null
                    ? 'text-on-surface'
                    : isVaildPW
                    ? 'text-success'
                    : 'text-error',
                ]"
                class="absolute text-2xl cursor-pointer left-2 top-3/6 transform -translate-y-2/4"
                icon="eye"
              />
              <font-awesome-icon
                icon="eye-slash"
                :class="[
                  isVaildPW === null
                    ? 'text-on-surface'
                    : isVaildPW
                    ? 'text-success'
                    : 'text-error',
                ]"
                class="absolute text-2xl cursor-pointer left-2 top-3/6 transform -translate-y-2/4"
                v-show="showPassword"
                @click="showPassword = !showPassword"
              />
            </div>
            <div
              class="items-center"
              :class="[
                isVaildPW === null
                  ? 'hidden'
                  : isVaildPW
                  ? 'flex text-success'
                  : 'flex text-error',
              ]"
            >
              <font-awesome-icon v-show="isVaildPW" icon="circle-check" />
              <font-awesome-icon
                v-show="!isVaildPW"
                icon="circle-exclamation"
              />
              <p
                class="font-bold ml-1"
                ref="passwordMessage"
                id="passwordErrorMassage"
              ></p>
            </div>
          </div>
          <p class="w-md max-sm:w-full font-semibold text-center mx-auto mt-15">
            {{
              isLoginMode
                ? "Don't have an account ?"
                : "Already have an account ?"
            }}
            <span
              @click="isLoginMode = !isLoginMode"
              class="text-primary cursor-pointer"
              >{{ isLoginMode ? "SignUp" : "SignIn" }}</span
            >
          </p>
          <div
            v-show="!isLoginMode"
            class="w-md max-sm:w-full h-2/5 pt-20 mx-auto flex flex-col justify-between"
          >
            <button
              @click="handleSubmit"
              class="ml-auto flex items-center w-28 sm:w-full max-sm:w-full justify-center rounded-2xl bg-on-surface p-2 cursor-pointer"
            >
              <p class="text-2xl text-on-primary font-semibold">next</p>
              <font-awesome-icon
                class="text-primary ml-1 text-2xl"
                icon="caret-right"
              />
            </button>
            <div class="flex items-center justify-center">
              <div
                class="flex justify-center items-center w-10 h-10 bg-primary text-on-primary rounded-full font-bold"
              >
                1
              </div>
              <div class="w-5 bg-on-surface h-0.5"></div>
              <div
                class="flex justify-center items-center w-10 h-10 bg-on-surface text-on-primary rounded-full font-bold"
              >
                2
              </div>
              <div class="w-5 bg-on-surface h-0.5"></div>
              <div
                class="flex justify-center items-center w-10 h-10 bg-on-surface text-on-primary rounded-full font-bold"
              >
                3
              </div>
            </div>
          </div>
        </div>
        <button
          v-show="isLoginMode"
          @click="handleSubmit"
          class="bg-on-surface cursor-pointer font-semibold text-on-primary text-2xl block w-96 mx-auto px-3 py-4"
          id="sbmitBotton"
        >
          Submit
        </button>
      </form>
      <div
        class="w-md max-sm:hidden sm:hidden lg:block h-[40rem] bg-on-surface p-4 pt-10"
      >
        <h2 class="text-on-primary font-bold text-3xl text-center">
          Simple . Powerful . Friendly
        </h2>
      </div>
    </div>
  </div>
</template>
