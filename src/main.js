import Vue from "vue";
import App from "./App.vue";

import "normalize.css/normalize.css"; // a modern alternative to CSS resets

import "@/components/_globals_register_components";

import router from "./router";
import Element from "element-ui";

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
