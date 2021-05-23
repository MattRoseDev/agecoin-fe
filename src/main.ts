import { createApp, h, provide } from "vue";
import App from "./App.vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./store";
import { defaultClient } from "@/apollo";
import "@/assets/css/tailwind.css";

createApp({
  setup() {
    provide(DefaultApolloClient, defaultClient);
  },
  render() {
    return h(App);
  }
})
  .use(store)
  .use(router)
  .mount("#app");
