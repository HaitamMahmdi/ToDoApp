<script setup>
/**
 * TODO:Subscribe to Firebase Storage so users can upload their profile images.
 * ! FIX: Error whene user try create profile with existing Email
 * TODO: Make all the validation functions into one function or component
 */
import { computed, ref, watch } from "vue";
import { useAuthStore } from "../stors/AuthStore";
const authStore = useAuthStore();
const user = computed(() => authStore.user);
const showPassword = ref(false);
authStore.checkAuth();
watch(user, (val) => {
  console.log("User updated:", val);
});
const inPhase = ref(3);
const isLoginMode = ref(false);
const firstPhase = ref(null);
const secondPhase = ref(null);
const thirdPhase = ref(null);

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

const changColor = (e) => {
  const target = e.currentTarget;
  const isClicked = target.dataset.clicked === "true";
  if (!isClicked) {
    target.classList.replace("bg-gray-300", `bg-on-surface`);
    target.classList.replace("text-black", `text-white`);
  } else {
    target.classList.replace("bg-on-surface", `bg-gray-300`);
    target.classList.replace("text-white", `text-black`);
  }
  target.dataset.clicked = (!isClicked).toString();
};
const userDisplayName = ref(``);
const isValidDisplayName = ref(null);
const validationInfo = ref(null);
/*

const validitDisplayName = ()=>{
  const displayNameRegex = /^[A-Za-z]{4,8}$/

  if(userDisplayName.value){
    if(nameRegex.test(userDisplayName.value)){

    }
  }else{
    isValidDisplayName.value = false
    validationInfo.value = `This field is required`
  }
}
*/
const userImage = ref(null);
const changProfileImage = (e) => {
  const target = e.target;
  if (userImage.value) {
    userImage.value.src = `/user_default_profile_image/${target.dataset.imagename}.jpg`;
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
      if (inPhase.value === 3) {
        authStore.signUp(
          emailInput.value,
          passwordInput.value,
          userDisplayName.value,
          userImage.value.src
        );
        inPhase.value = 0;
      }
      inPhase.value += 1;
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
  <div class="container max-sm:w-full mx-auto mt-5">
    <div class="w-fit mx-auto flex justify-center">
      <form
        @submit.prevent
        novalidate
        action=""
        class="bg-on-primary dark:text-white justify-between dark:bg-surface relative overflow-hidden flex max-sm:w-full p-4 sm:w-fit md:min-w-xl flex-col"
      >
        <h1
          class="text-textColor text-center mb-5 max-sm:text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
        >
          {{ isLoginMode ? "signIn" : "signUp" }}
        </h1>
        <div class="min-h-[25rem] flex items-center justify-center relative">
          <div
            v-if="inPhase === 1"
            id="firstPhase"
            ref="firstPhase"
            class="relative left-0"
          >
            <div class="w-full sm:w-md relative mx-auto">
              <div class="relative">
                <input
                  @input="validitEmail"
                  v-model="emailInput"
                  autocomplete="email"
                  required
                  class="peer border max-sm:w-full dark:focus:bg-on-primary dark:focus:text-surface w-md pl-10 h-12 placeholder:font-bold"
                  :class="[
                    isValidEmail === null
                      ? 'border-on-surface dark:border-on-primary placeholder:text-on-surface dark:placeholder:text-on-primary'
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
                      ? 'text-on-primary peer-focus:text-on-surface   '
                      : isValidEmail
                      ? 'text-success '
                      : 'text-error ',
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
                  class="placeholder:font-bold dark:focus:bg-on-primary dark:focus:text-surface block border pl-10 h-12 w-full"
                  :class="[
                    isValidFN === null
                      ? 'border-on-surface dark:border-on-primary placeholder:text-on-surface dark:placeholder:text-on-primary'
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
                  class="placeholder:font-bold block border pl-10 h-12 w-full dark:focus:bg-on-primary dark:focus:text-surface"
                  :class="[
                    isValidLN === null
                      ? 'border-on-surface dark:border-on-primary placeholder:text-on-surface dark:placeholder:text-on-primary'
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
                  class="peer placeholder:font-bold block border pl-10 h-12 w-md max-sm:w-full dark:focus:bg-on-primary dark:focus:text-surface"
                  :class="[
                    isVaildPW === null
                      ? 'border-on-surface dark:border-on-primary placeholder:text-on-surface dark:placeholder:text-on-primary '
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
                      ? 'text-on-primary peer-focus:text-on-surface'
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
                      ? 'text-on-primary peer-focus:text-on-surface'
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
            <p
              class="w-md max-sm:w-full font-semibold text-center mx-auto mt-15"
            >
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
          </div>
          <div
            v-if="inPhase === 2"
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
          <div v-if="inPhase === 3" ref="thirdPhase" id="thirdPhase" class="">
            <div class="flex flex-col items-center">
              <img
                ref="userImage"
                src="/user_default_profile_image/defualt.jpg"
                alt="userImage"
                class="w-40 h-40 mb-5 rounded-full"
              />
              <div>
                <input
                  type="text"
                  v-model="userDisplayName"
                  class="border max-sm:w-full dark:focus:bg-on-primary dark:focus:text-surface w-xs p-2.5 placeholder:font-bold"
                  placeholder="Your Name"
                />
                <p class="" ref="validationInfo"></p>
              </div>
              <ul class="flex flex-wrap justify-center items-center mt-5">
                <li>
                  <img
                    @click="changProfileImage"
                    data-imagename="defult"
                    class="w-16 h-16 rounded-full mx-5 md:mt-0 cursor-pointer mt-3"
                    src="/user_default_profile_image/defualt.jpg"
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
                    data-imageName="cat"
                    class="w-16 h-16 rounded-full md:mt-0 m-3 cursor-pointer"
                    src="/user_default_profile_image/cat.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    @click="changProfileImage"
                    class="w-16 h-16 rounded-full md:mt-0 m-3 cursor-pointer"
                    data-imageName="face"
                    src="/user_default_profile_image/face.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    @click="changProfileImage"
                    data-imageName="woman_face"
                    class="w-16 h-16 rounded-full md:mt-0 m-3 cursor-pointer"
                    src="/user_default_profile_image/woman_face.jpg"
                    alt=""
                  />
                </li>
              </ul>
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
        <div
          v-show="!isLoginMode"
          class="w-md max-sm:w-full h-2/5 pt-5 mx-auto flex flex-col justify-between"
        >
          <div class="flex flex-row-reverse justify-between">
            <button
              @click="handleSubmit"
              class="flex mb-5 items-center w-24 justify-center rounded-2xl bg-on-surface p-2 cursor-pointer"
            >
              <p class="text-on-primary font-semibold">
                {{ inPhase <= 2 ? "Next" : "Submit" }}
              </p>
              <font-awesome-icon
                v-if="inPhase <= 2"
                class="text-primary ml-1 text-2xl"
                icon="caret-right"
              />
            </button>
            <button
              @click="inPhase !== 1 ? (inPhase -= 1) : ''"
              class="bg-on-secondary mb-5 items-center min-w-24 text-black p-2 text-center cursor-pointer transition hover:text-white hover:bg-[#333] rounded-2xl"
            >
              <p class="">Go Back</p>
            </button>
          </div>
          <div class="flex items-center justify-center">
            <div
              :class="[inPhase === 1 ? 'bg-primary' : 'bg-on-surface']"
              class="flex justify-center transition duration-75 items-center w-10 h-10 text-on-primary rounded-full font-bold"
            >
              1
            </div>
            <div class="w-5 bg-on-surface h-0.5"></div>
            <div
              :class="[inPhase === 2 ? 'bg-primary' : 'bg-on-surface']"
              class="flex justify-center transition duration-75 items-center w-10 h-10 text-on-primary rounded-full font-bold"
            >
              2
            </div>
            <div class="w-5 bg-on-surface h-0.5"></div>
            <div
              :class="[inPhase === 3 ? 'bg-primary' : 'bg-on-surface']"
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
