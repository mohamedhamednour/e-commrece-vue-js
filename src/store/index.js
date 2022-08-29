import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      user: null,
      filtred: null,
      add: null,
    };
  },
  mutations: {
    user: (state, payload) => {
      state.user = payload;
    },
    filtred(state, payload) {
      state.filtred = payload;
    },
    changedata: async (state, payload) => {
      state.filtred = await state.user.filter((x) => x.category === payload);
    },
  },

  actions: {
    user(context, payload) {
      console.log(payload, "f");
      context.commit("user", payload);
    },
    filtred(context, payload) {
      context.commit("filtred", payload);
    },
  },
  getters: {
    user: (state) => {
      console.log(state.user);
      return state.user;
    },
    filtred(state) {
      return state.filtred;
    },
    changedata: (state) => {
      console.log(state.user);
      return state.user;
    },
  },
  modules: {},
});
