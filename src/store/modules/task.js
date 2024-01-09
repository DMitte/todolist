import VueCookies from "vue-cookies";

export default {
  namespaced: true,
  state: {
    token: null,
    tasks: null,
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setTask(state, payload) {
      state.tasks = payload;
    },
  },

  actions: {
    /*obtenerToken({ commit }) {
      if (VueCookies.isKey("auth-sesion") === true) {
        commit("setToken", VueCookies.get("auth-sesion"));
      } else {
        commit("setToken", null);
      }
    },*/
    async allTask() {
      //let tareas = null;
      try {
        const token = VueCookies.get("auth-sesion");
        const res = await fetch(
          "https://todolist-back-65ad.onrender.com/api/task/all",
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "auth-token": token,
            },
          }
        );
        const confirm = await res.json();
        return confirm.data;
      } catch (r) {
        console.log(r);
      }
      //return tareas;
    },
    async onetask(idTask) {
      try {
        const token = VueCookies.get("auth-sesion");
        const res = await fetch(
          `https://todolist-back-65ad.onrender.com/api/task/${idTask}`,
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "auth-token": token,
            },
          }
        );
        const confirm = await res.json();
        return confirm.data;
      } catch (e) {
        console.log(e);
      }
    },
    async aggtask(tareaInfo) {
      try {
        const token = VueCookies.get("auth-sesion");
        const res = await fetch(
          "https://todolist-back-65ad.onrender.com/api/task/new",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "auth-token": token,
            },
            body: JSON.stringify(tareaInfo),
          }
        );

        return res.json();
      } catch (e) {
        console.log(e);
      }
    },
    async deleteTask(idTask) {
      try {
        const token = VueCookies.get("auth-sesion");
        const res = await fetch(
          `https://todolist-back-65ad.onrender.com/api/task/delete/${idTask}`,
          {
            method: "DELETE",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "auth-token": token,
            },
          }
        );
        const confirm = await res.json();
        return confirm;
      } catch (error) {
        console.log(error);
      }
    },
    async editTask(idTask, taskInfo) {
      try {
        const token = VueCookies.get("auth-sesion");
        const res = await fetch(
          `https://todolist-back-65ad.onrender.com/api/task/update/${idTask}`,
          {
            method: "PUT",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "auth-token": token,
            },
            body: JSON.stringify(taskInfo),
          }
        );
        return res.json();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
