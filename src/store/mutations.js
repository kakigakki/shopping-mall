import { ADD_GOOD, ADD_COUNT, CHANGE_CHECKED, CHECK_ALL, NO_CHECK_ANY } from "./mutation-type"
export default {
  [ADD_GOOD](state, cartGood) {
    state.cartList.push(cartGood)
  },
  [ADD_COUNT](state, oldGood) {
    oldGood.cartCount++
  },
  [CHANGE_CHECKED](state, payload) {
    let item = state.cartList.find(item => item == payload)
    item.checked = !item.checked
  },
  [CHECK_ALL](state) {
    for (const k in state.cartList) {
      state.cartList[k].checked = true
    }
  },
  [NO_CHECK_ANY](state) {
    for (const k in state.cartList) {
      state.cartList[k].checked = false
    }
  }
}