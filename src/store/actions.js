export default {
  addCart({ state, commit }, cartGood) {
    return new Promise(res => {
      if (!state.cartList.length) {
        commit("addGood", cartGood)
        res("商品添加成功")
      } else {
        let oldGood = state.cartList.find(item => item.id === cartGood.id)
        if (oldGood) {
          commit("addCount", oldGood)
          res("商品数量添加成功")
        } else {
          commit("addGood", cartGood)
          res("商品添加成功")
        }
      }
    })
  },
  changeCheck({ commit }, payload) {
    commit("changeCheck", payload)
    return new Promise((resolve) => {
      resolve()
    })
  }
}