import toastCom from "components/common/toast/toast"
export default {
  install(Vue) {
    const ToastContructor = Vue.extend(toastCom)
    const toast = new ToastContructor()
    toast.$mount(document.createElement("div"))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
  }
}