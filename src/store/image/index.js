import {getImageListV2} from "@/api/image";

export default {
  namespaced: true,
  state: {
    list: [],
    loading: true
  },
  getters: {},
  mutations: {
    ON_LOADING (state) {
      state.loading = true
    },
    ON_LOADED (state) {
      state.loading = false
    },
    SET_IMAGE_LIST (state, data) {
      state.list = state.list.concat(data)
    }
  },
  actions: {
    getImageList ({ commit }, payload = {page:0, limit:100}) {
      commit('ON_LOADING')
      getImageListV2(payload)
        .then(data => {
          commit('SET_IMAGE_LIST', data)

          commit('ON_LOADED')
        })
        .catch(err => {
          console.log(err.response)

          commit('ON_LOADED')
        })
    }
  }
}
