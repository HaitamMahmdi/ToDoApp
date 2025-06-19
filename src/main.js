import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import app from "./firebase";
import router from "./router";
const pinia = createPinia();
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faEnvelope,
  faEye,
  faCaretRight,
  faCircleCheck,
  faCircleExclamation,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faPlus,
  faEnvelope,
  faEye,
  faCaretRight,
  faCircleCheck,
  faCircleExclamation,
  faEyeSlash
);
createApp(App)
  .use(router)
  .use(pinia)
  .use(app)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
