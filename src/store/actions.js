export default {
  addCart({ state, commit }, cartGood) {

    if (!state.cartList.length) {
      commit("addGood", cartGood)
    } else {
      let oldGood = state.cartList.find(item => item.id === cartGood.id)
      if (oldGood) {
        commit("addCount", oldGood)
      } else {
        commit("addGood", cartGood)
      }
    }
  },
  changeCheck({ commit }, payload) {
    commit("changeCheck", payload)
    return new Promise((resolve) => {
      resolve()
    })
  }
}