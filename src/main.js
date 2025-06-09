import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import app from "./firebase";
const pinia = createPinia();
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faPlus);
createApp(App)
  .use(pinia)
  .use(app)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
