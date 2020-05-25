import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue() //因为事件总线默认是undefined,所以需要手动赋值

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");