import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import app from "./firebase";
import router from "./router";
const pinia = createPinia();
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRightFromBracket,
  faAngleLeft,
  faAngleRight,
  faGear,
  faFolderOpen,
  faCalendarDays,
  faPlus,
  faEnvelope,
  faList,
  faEye,
  faCaretRight,
  faCircleCheck,
  faCircleExclamation,
  faEyeSlash,
  faMoon,
  faHeart,
  faSun,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faTiktok,
  faLinkedin,
  faXTwitter,
  faGoogle,
  faTelegram,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faAngleLeft,
  faAngleRight,
  faArrowRightFromBracket,
  faGear,
  faFolderOpen,
  faCalendarDays,
  faPlus,
  faList,
  faCheck,
  faEnvelope,
  faEye,
  faCaretRight,
  faCircleCheck,
  faCircleExclamation,
  faEyeSlash,
  faMoon,
  faSun,
  faHeart,
  faInstagram,
  faYoutube,
  faTiktok,
  faLinkedin,
  faXTwitter,
  faGoogle,
  faTelegram,
  faRedditAlien
);
createApp(App)
  .use(router)
  .use(pinia)
  .use(app)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
