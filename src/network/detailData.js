import axios from "./myAxios"
export function getDetail(id) {
  return axios({
    methods: "get",
    url: "/detail",
    params: {
      iid: id
    }
  })
}
export class BaseInfo {
  constructor(title, highPrice, lowPrice, discountText, discountColor, sold, collect, express, services) {
    Object.assign(this, { title, highPrice, lowPrice, discountText, discountColor, sold, collect, express, services })
  }
}

export function getRecommend() {
  return axios({
    method: "get",
    url: "/recommend"
  })
}