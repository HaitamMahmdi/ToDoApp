import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import app from "./firebase";
import router from "./router";
const vueApp = createApp(App);
const pinia = createPinia();
vueApp.use(pinia);
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleInfo,
  faBan,
  faHourglassStart,
  faEllipsis,
  faRotate,
  faTrashCan,
  faExclamation,
  faPenToSquare,
  faUser,
  faArrowRightFromBracket,
  faAngleDown,
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
import { useAuthStore } from "./stores/AuthStore";
library.add(
  faCircleInfo,
  faBan,
  faHourglassStart,
  faEllipsis,
  faRotate,
  faTrashCan,
  faExclamation,
  faPenToSquare,
  faUser,
  faAngleDown,
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
const authStore = useAuthStore();

const a = await authStore.checkAuth();
vueApp
  .use(router)
  .use(app)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
