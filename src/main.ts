import { createApp, h, provide } from "vue";
import App from "./App.vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./store";
import { defaultClient } from "@/apollo";
import "@/assets/css/tailwind.css";
import i18n from './i18n'

createApp({
  setup() {
    provide(DefaultApolloClient, defaultClient);
  },
  render() {
    return h(App);
  }
}).use(i18n)
  .use(store)
  .use(router)
  .mount("#app");
