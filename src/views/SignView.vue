<script setup>
/**
 * TODO:Subscribe to Firebase Storage so users can upload their profile images.
 */
import { computed, reactive, ref, watch } from "vue";
import { useAuthStore } from "../stores/AuthStore";
import InputComponent from "../components/InputComponent.vue";
import { useRouter } from "vue-router";
const base = import.meta.env.BASE_URL;
const router = useRouter();
const authStore = useAuthStore();
const user = computed(() => authStore.user);
authStore.checkAuth();
const isFinished = ref(false);

const formSettings = reactive({
  currentPhase: 1,
  isLoginMode: false,
  errorMessages: ``,
});
const inputVal = reactive({
  email: {
    val: "",
    isValidVal: null,
  },
  password: {
    val: "",
    isValidVal: null,
  },
  firstName: {
    val: "",
    isValidVal: null,
  },
  lastName: {
    val: "",
    isValidVal: null,
  },
  displayName: {
    val: "",
    isValidVal: null,
  },
  profileImage: "",
});
const errorMessages = {
  "auth/email-already-in-use":
    "❌ This email is already registered. Try logging in instead.",
  "auth/invalid-email":
    "❌ The email address is badly formatted. Please check and try again.",
  "auth/operation-not-allowed":
    "❌ Sign-up with email/password is currently disabled. Please try again later.",
  "auth/weak-password":
    "❌ Your password is too weak. It must be at least 6 characters.",
};
const goToNextPage = async () => {
  try {
    const isFirstPhaseFinished =
      inputVal.email.isValidVal &&
      inputVal.password.isValidVal &&
      inputVal.firstName.isValidVal &&
      inputVal.lastName.isValidVal;
    const isLastPhaseFinished =
      inputVal.displayName.isValidVal && inputVal.profileImage;

    if (!isFirstPhaseFinished) {
      formSettings.errorMessages = "❌ Please fill out all fields correctly.";
      return;
    }

    if (formSettings.currentPhase === 3) {
      if (!isLastPhaseFinished) {
        formSettings.errorMessages =
          "❌ select an image and a valid display name. ";
        return;
      }
    }

    if (formSettings.currentPhase < 4) {
      formSettings.currentPhase += 1;
      formSettings.errorMessages = "";
    }

    if (formSettings.currentPhase === 4) {
      const isSignUp = await authStore.signUp(
        inputVal.email.val,
        inputVal.password.val,
        inputVal.displayName.val,
        inputVal.profileImage
      );
      if (isSignUp instanceof Error) {
        formSettings.currentPhase = 1;
        formSettings.errorMessages = errorMessages[isSignUp.code];
        return;
      }
      formSettings.currentPhase = `completed`;
    }
  } catch (error) {
    formSettings.errorMessages = `🔥 Firebase error: ${error.code}`;
    console.error("❌ Error in goToNextPage:", error.code, error.message);
  }
};
const login = async () => {
  const result = await authStore.signIn(
    inputVal.email.val.trim().toLocaleLowerCase(),
    inputVal.password.val
  );
  if (result instanceof Error) {
    formSettings.errorMessages = `❌ Email or password are wrong.`;
  }
};
const userImage = ref(null);
const changProfileImage = (e) => {
  const target = e.target;
  if (userImage.value) {
    inputVal.profileImage = target.dataset.imagename;
    userImage.value.src = `${base}user_default_profile_image/${inputVal.profileImage}.jpg`;
  }
};
const changColor = (e) => {
  const target = e.currentTarget;
  const isClicked = target.dataset.clicked === "false" ? false : true;
  if (!isClicked) {
    target.classList.replace("text-black", "text-on-primary");
    target.classList.replace("bg-gray-300", "bg-primary");
    target.dataset.clicked = `true`;
  } else {
    target.classList.replace("text-on-primary", "text-black");
    target.classList.replace("bg-primary", "bg-gray-300");
    target.dataset.clicked = `false`;
  }
};

watch(user, () => {
  isFinished.value = true;

  setTimeout(() => {
    router.push("/index");
  }, 1000);
});
</script>

<template>
  <div
    :class="isFinished ? ' opacity-100 z-100 h-[200vh]' : 'opacity-0 z-0'"
    class="absolute w-full bg-light-primary flex flex-col items-center justify-start top-[-1.2rem] pt-20 left-0 dark:bg-on-surface dark:text-on-primary"
  >
    <h1 class="text-[clamp(3rem,5vw,8rem)] font-semibold">All Finished</h1>
    <div
      class="bg-success w-24 h-24 p-5 text-on-primary rounded-full text-center flex items-center justify-center"
    >
      <font-awesome-icon
        class="text-[clamp(3rem,5vw,8rem)]"
        :icon="['fas', 'check']"
      />
    </div>
  </div>
  <div class="container max-sm:w-full mx-auto mt-5">
    <div class="md:w-fit w-full mx-auto flex justify-center">
      <form
        v-if="formSettings.currentPhase != 'completed'"
        @submit.prevent
        @keydown.enter.prevent
        novalidate
        action=""
        class="dark:text-white justify-between dark:bg-surface relative overflow-hidden flex max-sm:w-full p-4 sm:w-fit md:min-w-xl flex-col"
      >
        <h1
          class="text-textColor text-center mb-5 max-sm:text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
        >
          {{ formSettings.isLoginMode ? "signIn" : "signUp" }}
        </h1>
        <div class="min-h-[25rem] flex items-center justify-center relative">
          <div
            v-if="formSettings.currentPhase === 1"
            id="firstPhase"
            ref="firstPhase"
            class="relative left-0 md:w-fit w-full"
          >
            <div class="w-full sm:w-md relative mx-auto"></div>
            <InputComponent
              v-model="inputVal.email.val"
              label="email"
              inputType="email"
              id="newInput"
              name="input"
              :isRequired="true"
              @isvalidVal="(n) => (inputVal.email.isValidVal = n)"
              lableStyle="text-2xl"
              class="md:w-md mb-5"
              cusclass="px-5 w-full py-3"
              :helperText="true"
              :addValidateToText="true"
            />
            <InputComponent
              v-model="inputVal.password.val"
              label="Password"
              inputType="password"
              id="newInput"
              name="input"
              :isRequired="true"
              class="md:w-md mb-5"
              @isvalidVal="(n) => (inputVal.password.isValidVal = n)"
              lableStyle="text-2xl"
              cusclass="px-5 w-full py-3"
              :helperText="true"
              :addValidateToText="true"
            />
            <div
              v-show="!formSettings.isLoginMode"
              class="flex max-sm:w-full max-sm:flex-col w-md mx-auto my-5 flex-wrap justify-between"
            >
              <div class="max-w-[48%] max-sm:max-w-full">
                <InputComponent
                  v-model="inputVal.firstName.val"
                  label="first name"
                  inputType="text"
                  id="newInput"
                  name="input"
                  :isRequired="true"
                  class="w-full"
                  @isvalidVal="(n) => (inputVal.firstName.isValidVal = n)"
                  lableStyle="text-2xl"
                  cusclass="px-5 w-full py-3"
                  :helperText="true"
                  :addValidateToText="true"
                />
              </div>
              <div class="max-w-[48%] max-sm:max-w-full max-sm:mt-5">
                <InputComponent
                  v-model="inputVal.lastName.val"
                  label="last name"
                  inputType="text"
                  id="newInput"
                  name="input"
                  :isRequired="true"
                  class="w-full"
                  @isvalidVal="(n) => (inputVal.lastName.isValidVal = n)"
                  lableStyle="text-2xl"
                  cusclass="px-5 w-full py-3"
                  :helperText="true"
                  :addValidateToText="true"
                />
              </div>
            </div>
            <p
              class="w-md max-sm:w-full font-semibold text-center text-error mx-auto"
            >
              {{ formSettings.errorMessages }}
            </p>
            <p
              class="w-md mb-5 max-sm:w-full font-semibold text-center mx-auto mt-5"
            >
              {{
                formSettings.isLoginMode
                  ? "Don't have an account ?"
                  : "Already have an account ?"
              }}
              <span
                @click="formSettings.isLoginMode = !formSettings.isLoginMode"
                class="text-primary cursor-pointer"
                >{{ formSettings.isLoginMode ? "SignUp" : "SignIn" }}</span
              >
            </p>
          </div>
          <div
            v-if="formSettings.currentPhase === 2"
            id="secondPhase"
            ref="secondPhase"
            class="bg-transparent mx-auto max-w-md"
          >
            <h2
              class="font-semibold text-center dark:text-on-primary text-3xl mb-5"
            >
              How did you hear about us ?
            </h2>
            <div class="flex flex-wrap justify-center">
              <p
                @click="changColor"
                data-clicked="false"
                class="p-2 px-4 transition duration-75 text-black bg-gray-300 rounded-full m-2 cursor-pointer"
              >
                <font-awesome-icon
                  icon="fa-brands fa-instagram"
                  class="text-[#E1306C]"
                />
                Instagram
              </p>
              <p
                data-clicked="false"
                @click="changColor"
                class="p-2 px-4 text-black transition duration-75 bg-gray-300 rounded-full m-2 cursor-pointer"
              >
                <font-awesome-icon
                  icon="fa-brands fa-youtube"
                  class="text-[#FF0000]"
                />
                Youtube
              </p>
              <p
                @click="changColor"
                data-clicked="false"
                class="p-2 px-4 text-black transition duration-75 bg-gray-300 rounded-full m-2 cursor-pointer"
              >
                <font-awesome-icon
                  icon="fa-brands fa-linkedin"
                  class="text-[#0A66C2]"
                />
                Linkedin
              </p>
              <p
                @click="changColor"
                data-clicked="false"
                class="p-2 px-4 text-black transition duration-75 bg-gray-300 rounded-full m-2 cursor-pointer"
              >
                <font-awesome-icon
                  icon="fa-brands fa-x-twitter"
                  class="text-black"
                />
                Twitter
              </p>
              <p
                @click="changColor"
                data-clicked="false"
                class="p-2 px-4 text-black transition duration-75 bg-gray-300 rounded-full m-2 cursor-pointer"
              >
                <font-awesome-icon
                  icon="fa-brands fa-telegram"
                  class="text-[#229ED9]"
                />
                Telegram
              </p>
              <p
                @click="changColor"
                data-clicked="false"
                class="p-2 px-4 text-black transition duration-75 bg-gray-300 rounded-full m-2 cursor-pointer"
              >
                <font-awesome-icon
                  class="text-[#FF4500]"
                  icon="fa-brands fa-reddit-alien"
                />
                Reddit
              </p>
              <p
                @click="changColor"
                data-clicked="false"
                class="p-2 px-6 transition duration-75 text-black bg-gray-300 rounded-full m-2 cursor-pointer"
              >
                Other
              </p>
            </div>
          </div>
          <div
            v-if="formSettings.currentPhase === 3"
            ref="thirdPhase"
            id="thirdPhase"
            class=""
          >
            <div class="flex flex-col items-center">
              <img
                ref="userImage"
                src="/user_default_profile_image/default.jpg"
                alt="userImage"
                class="w-40 h-40 mb-5 rounded-full"
              />
              <div>
                <InputComponent
                  v-model="inputVal.displayName.val"
                  label="last name"
                  inputType="text"
                  id="newInput"
                  name="input"
                  :isRequired="true"
                  class="w-full"
                  @isvalidVal="(n) => (inputVal.displayName.isValidVal = n)"
                  lableStyle="text-2xl"
                  cusclass="px-5 w-full py-3"
                  :helperText="true"
                  :addValidateToText="true"
                />
              </div>
              <ul class="flex flex-wrap justify-center items-center mt-5">
                <li>
                  <img
                    @click="changProfileImage"
                    data-imagename="default"
                    class="w-16 h-16 rounded-full mx-5 md:mt-0 cursor-pointer mt-3"
                    src="/user_default_profile_image/default.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    @click="changProfileImage"
                    data-imagename="camionnette"
                    class="w-16 h-16 rounded-full md:mt-0 m-3 cursor-pointer"
                    src="/user_default_profile_image/camionnette.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    @click="changProfileImage"
                    data-imagename="camionnette_Night"
                    class="w-16 h-16 rounded-full md:mt-0 m-3 cursor-pointer"
                    src="/user_default_profile_image/camionnette_Night.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    @click="changProfileImage"
                    data-imagename="cat"
                    class="w-16 h-16 rounded-full md:mt-0 m-3 cursor-pointer"
                    src="/user_default_profile_image/cat.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    @click="changProfileImage"
                    class="w-16 h-16 rounded-full md:mt-0 m-3 cursor-pointer"
                    data-imagename="face"
                    src="/user_default_profile_image/face.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    @click="changProfileImage"
                    data-imagename="woman_face"
                    class="w-16 h-16 rounded-full md:mt-0 m-3 cursor-pointer"
                    src="/user_default_profile_image/woman_face.jpg"
                    alt=""
                  />
                </li>
              </ul>
              <p
                class="w-md max-sm:w-full font-semibold text-center text-error mx-auto"
              >
                {{ formSettings.errorMessages }}
              </p>
            </div>
          </div>
        </div>
        <button
          v-show="formSettings.isLoginMode"
          @click="login"
          class="dark:bg-on-surface bg-primary cursor-pointer font-semibold text-on-primary text-2xl block w-96 mx-auto px-3 py-4"
          id="sbmitBotton"
        >
          Submit
        </button>
        <div
          v-show="!formSettings.isLoginMode"
          class="w-md max-sm:w-full pt-5 mx-auto flex flex-col justify-between"
        >
          <div class="flex flex-row-reverse justify-between">
            <button
              @click="goToNextPage"
              class="flex items-center w-24 justify-center rounded-2xl bg-on-surface p-2 cursor-pointer"
            >
              <p class="text-on-primary font-semibold">
                {{ formSettings.currentPhase <= 2 ? "Next" : "Submit" }}
              </p>
              <font-awesome-icon
                v-if="formSettings.currentPhase <= 2"
                class="text-primary ml-1 text-2xl"
                icon="caret-right"
              />
            </button>
            <button
              @click="
                formSettings.currentPhase !== 1
                  ? (formSettings.currentPhase -= 1)
                  : ''
              "
              class="bg-on-secondary items-center min-w-24 text-black p-2 text-center cursor-pointer transition hover:text-white hover:bg-[#333] rounded-2xl"
            >
              <p class="">Go Back</p>
            </button>
          </div>
          <div class="flex items-center mt-10 justify-center">
            <div
              :class="[
                formSettings.currentPhase === 1
                  ? 'bg-primary'
                  : 'bg-on-surface',
              ]"
              class="flex justify-center transition duration-75 items-center w-10 h-10 text-on-primary rounded-full font-bold"
            >
              1
            </div>
            <div class="w-5 bg-on-surface h-0.5"></div>
            <div
              :class="[
                formSettings.currentPhase === 2
                  ? 'bg-primary'
                  : 'bg-on-surface',
              ]"
              class="flex justify-center transition duration-75 items-center w-10 h-10 text-on-primary rounded-full font-bold"
            >
              2
            </div>
            <div class="w-5 bg-on-surface h-0.5"></div>
            <div
              :class="[
                formSettings.currentPhase === 3
                  ? 'bg-primary'
                  : 'bg-on-surface',
              ]"
              class="flex justify-center transition duration-75 items-center w-10 h-10 text-on-primary rounded-full font-bold"
            >
              3
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
