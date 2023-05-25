import { createStore } from "vuex";
import auth from "./modules/auth";
import task from "./modules/task";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    task,
  },
});
