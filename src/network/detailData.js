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