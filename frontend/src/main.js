
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createPinia } from "pinia";
import { createApp, h, provide } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router.js";
import apolloClient from "./vue-apollo";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");

