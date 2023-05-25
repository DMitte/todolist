import VueCookies from "vue-cookies";
import router from "@/router";

export default {
  namespaced: true,
  state: {
    token: null,
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async register(usuario) {
      try {
        const res = await fetch("http://localhost:3000/api/user/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(usuario),
        });
        const usuDB = await res.json();
        return usuDB;
      } catch (e) {
        console.log("error:", e);
      }
    },
    async login({ commit }, usuario) {
      try {
        const res = await fetch("http://localhost:3000/api/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(usuario),
        });
        const usuDB = await res.json();
        commit("setToken", usuDB.data.token);
        VueCookies.set("auth-sesion", usuDB.data.token, "1d");
        router.push("/");
      } catch (e) {
        console.log("error:", e);
      }
    },
    obtenerToken({ commit }) {
      if (VueCookies.isKey("auth-sesion") === true) {
        commit("setToken", VueCookies.get("auth-sesion"));
      } else {
        commit("setToken", null);
      }
    },
  },
  getters: {},
};
