import axios from "./myAxios"
export function getCategory() {
  return axios({
    methods: "get",
    url: "/category"
  })
}

export function getSubcategory(maitKey) {
  return axios({
    url: "/subcategory",
    methods: "get",
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return axios({
    url: "/subcategory/detail",
    methods: "get",
    params: {
      miniWallkey,
      type
    }
  })
}