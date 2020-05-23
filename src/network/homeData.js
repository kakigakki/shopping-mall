import axios from "./myAxios"
export function getMultiData() {
  return axios({
    mathod: "get",
    url: "/home/multidata"
  })
}
export function getGoodsData(type, page) {
  return axios({
    methos: "get",
    url: "/home/data",
    params: {
      type: type,
      page: page
    }
  })
}