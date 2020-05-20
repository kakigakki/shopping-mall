import axios from "./myAxios"
export function getMultiData() {
  return axios({
    mathod: "get",
    url: "/home/multidata"
  })
}