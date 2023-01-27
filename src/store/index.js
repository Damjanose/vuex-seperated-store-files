import {createStore} from "vuex";
import rootMutations from "@/store/mutations";
import rootActions from "@/store/actions";
import rootGetters from "@/store/getters";
import counterModule from "./counter/index"

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store