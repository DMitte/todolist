<template lang="es">
    <div class="BarNavegation">
        <button class="btn-toggle" @click="navActive = !navActive"><img src="@/assets/iconos/btn-abrir.svg" alt="btn"></button>
        <button class="btn-notify"><img src="@/assets/iconos/btn-notify.svg" alt="btn notify"></button>

        <Transition>
            <nav v-if="navActive">
                <button class="btn-close" @click="toggleNav"><img src="@/assets/iconos/btn-close.svg" alt="btn close"></button>
                <ul>
                    <li><router-link to="/">Inicio</router-link></li>
                    <li><router-link to="/about">Perfil</router-link></li>
                    <li><router-link to="/about">Contacto</router-link></li>
                    <li @click="logout()">Cerrar Sesion</li>
                </ul>
            </nav>
        </Transition>
    </div>
</template>
<script>
export default {
  data() {
    return {
      navActive: false,
    };
  },
  name: "BarNavegation",
  methods: {
    toggleNav() {
      this.navActive = !this.navActive;
    },
    logout() {
      this.$cookies.remove("auth-sesion");
      this.$router.go("/login");
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");
.BarNavegation {
  display: flex;
  padding: 20px 26px;
  justify-content: space-between;
  font-family: "Ubuntu", sans-serif;
}
button {
  background-color: transparent;
  border: none;
}
nav {
  position: absolute;
  background-color: black;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  padding-left: 20%;
  display: block;
  z-index: 1;
  animation: abrir 500ms linear 0s reverse;
}
nav.isActive {
  display: block;
  animation: abrir 0.2s linear 0s;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
/*Transition */
/*@keyframes abrir {
        0%{
            height: 0vh;
        }
        25%{
            height: 25vh;
        }
        50%{
            height: 50vh;
        }
        75%{
            height: 75vh;
        }
        100%{
            height: 100vh;
        }
    }*/
nav ul {
  list-style: none;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 80vh;
  width: 80vw;
  font-size: 24px;
  font-weight: 400;
}
nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: 400;
}
nav ul li a.router-link-exact-active {
  border-bottom: 3px solid #7f9fde;
  padding-bottom: 5px;
}
.btn-close {
  position: fixed;
  top: 20px;
  left: 20px;
}
</style>
