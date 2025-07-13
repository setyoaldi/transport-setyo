import "./style.css";
import "vue-toast-notification/dist/theme-sugar.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./routes";
import VueToast from "vue-toast-notification";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueToast, {
  position: "bottom-right",
  duration: 3000,
});

app.mount("#app");
