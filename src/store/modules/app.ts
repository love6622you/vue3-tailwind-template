export default {
  namespaced: true,
  state: {
    loading: false,
    modalStatus: {
      isShow: false,
      type: '',
    },
  },
  getters: {
    loading: (state: any) => state.loading,
    modalStatus: (state: any) => state.modalStatus,
  },
  mutations: {
    setLoading: (state: any, data: boolean) => {
      state.loading = data
    },
    // setModalStatus: (state: any, data: object) => {
    //   state.modalStatus = {
    //     ...data,
    //   }
    // },
  },
  actions: {},
}
