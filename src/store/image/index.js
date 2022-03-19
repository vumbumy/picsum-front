import {getImageListV2} from "@/api/image";

export default {
  namespaced: true,
  state: {
    list: []
  },
  getters: {
    imageList(state) {
      return state.list
    }
  },
  mutations: {
    SET_IMAGE_LIST (state, data) {
      state.list = data
    }
  },
  actions: {
    getImageList ({ commit }) {
      console.log("GET")
      getImageListV2()
        .then(res => {
          commit('SET_IMAGE_LIST', res)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
