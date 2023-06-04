<template>
  <div class="home">
    <cardMessageTP class="cardMessageTP" />

    <BarNavegation class="sidebar" />

    <div class="main">
      <div class="top">
        <h1>To Do</h1>
        <div class="date" @click="isActiveDate = !isActiveDate">
          <p>{{ day_Format }}</p>
          <img src="@/assets/iconos/icon-calendar.svg" alt="icon calendar" />
        </div>
      </div>
      <div class="calendar">
        <ul>
          <li
            v-for="(item, index) in daysWeekend"
            :key="index"
            v-bind:class="{ active: item == this.dayFecha }"
          >
            <!--@click="(this.dayFecha = item), this.dayFormat(item)"-->
            <p class="day">{{ letterDays[index] }}</p>
            <p class="number">{{ item.substring(8, 10) }}</p>
          </li>
        </ul>
      </div>
      <hr />
      <div class="cards">
        <Transition name="bounce">
          <loading-overlay
            :active="isLoading"
            :can-cancel="false"
            :is-full-page="false"
            :opacity="1"
            :color="'#6894EC'"
            :background-color="'#363636'"
            :height="80"
            :width="80"
          ></loading-overlay>
        </Transition>
        <router-link
          class="card"
          v-for="tasks in alltasks"
          v-bind:key="tasks.id"
          :to="`/details/${tasks._id}`"
        >
          <div class="text">
            <h3>{{ tasks.title }}</h3>
            <p>{{ tasks.timet }}</p>
          </div>
          <div class="complete" v-bind:class="{ check: tasks.complete }">
            <img src="@/assets/iconos/check.svg" alt="check icon" />
          </div>
        </router-link>
      </div>

      <div class="footer">
        <button @click="Active = !Active">
          <img src="@/assets/iconos/plus.svg" alt="plus icono" />
          <span>Create New</span>
        </button>
      </div>

      <transition duration="550" name="nested">
        <div class="cardNew" v-if="Active">
          <div class="newTask inner">
            <div class="top">
              <div class="line"></div>
              <h3>New Task ToDo</h3>
            </div>

            <hr />

            <div class="form">
              <Form @submit="onSubmit()">
                <div class="primary">
                  <div class="inputs">
                    <label for="title">Title</label>
                    <Field
                      v-model="taskInfo.title"
                      type="text"
                      name="title"
                      id="title"
                    />
                  </div>
                  <div class="inputs">
                    <label for="Description">Description</label>
                    <textarea
                      v-model="taskInfo.descript"
                      name="description"
                      id="description"
                      cols="20"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <div class="secundary">
                  <div class="inputs">
                    <label for="date">Date</label>
                    <Field
                      type="date"
                      name="date"
                      id="date"
                      v-model="taskInfo.startDate"
                    />
                  </div>
                  <div class="inputs">
                    <label for="time">Time</label>
                    <Field
                      type="time"
                      name="time"
                      id="time"
                      v-model="taskInfo.time"
                    />
                  </div>
                </div>

                <div class="buttons">
                  <button
                    class="btn-secundary"
                    type="button"
                    @click="Active = !Active"
                  >
                    Cancel
                  </button>
                  <button class="btn-primary" type="submit">Guardar</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </transition>

      <!--<div class="cardDate" v-if="isActiveDate">
        <div class="datepicker">
          <div class="datepi">
            <DatePicker
              v-model="this.fecha"
              mode="date"
              title-position="left"
              is-dark
            />
          </div>

          <hr />
        </div>
        <div class="exitDate" @click="isActiveDate = !isActiveDate"></div>
      </div>-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BarNavegation from "@/components/BarNavegation.vue";
import cardMessageTP from "@/components/cardMessageTP.vue";
import { Form, Field } from "vee-validate";
import { mapState, mapActions } from "vuex";
import taskModule from "../store/modules/task";
import moment from "moment";
import LoadingOverlay from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
//import { DatePicker } from "v-calendar";
//import "v-calendar/style.css";
export default {
  data() {
    return {
      taskInfo: {
        title: "",
        startDate: new Date(),
        descript: "",
        time: "",
      },
      Active: false,
      alltasks: {},
      letterDays: ["S", "M", "T", "W", "T", "F", "S"],
      daysWeekend: [],
      fecha: new Date(),
      dayFecha: "",
      day_Format: "",
      isActiveDate: false,
      isLoading: true,
    };
  },
  created() {
    taskModule.actions.allTask().then((r) => (this.alltasks = r));
    if (this.$cookies.isKey("auth-sesion") === true) {
      taskModule.state.token = this.$cookies.get("auth-sesion");
    }

    this.findWeekend(this.fecha);
    this.dayFecha = moment(this.fecha).format("YYYY-MM-DD");
    this.dayFormat(this.dayFecha);

    setTimeout(() => {
      this.isLoading = !this.isLoading;
    }, 1000);
  },
  computed: {
    ...mapState("task", ["tasks"]),
  },
  name: "HomeView",
  components: {
    cardMessageTP,
    BarNavegation,
    //DatePicker,
    Form,
    Field,
    LoadingOverlay,
  },

  methods: {
    ...mapActions("task", ["obtenerToken", "allTask"]),
    onSubmit() {
      taskModule.actions.aggtask(this.taskInfo).then((Resultado) => {
        if (Resultado.msg != null) {
          this.alltasks.push(Resultado.data);
          this.taskInfo.title = "";
          this.taskInfo.descript = "";
          this.taskInfo.startDate = "";
          this.taskInfo.time = "";
        }
      });
    },
    findWeekend(fecha) {
      const diasemana = moment(fecha).day();
      const inicioSemana = moment(fecha).subtract(diasemana, "days");
      const diasSemana = [];

      for (let i = 0; i < 7; i++) {
        diasSemana.push(
          moment(inicioSemana).add(i, "day").format("YYYY-MM-DD")
        );
      }

      this.daysWeekend = diasSemana;
      /*diasSemana.forEach((element) => {
        this.daysWeekend.push(element.substring(0, 2));
      })*/
    },
    dayFormat(fecha) {
      this.day_Format = moment(fecha).format("LL");
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");

.sidebar {
  display: none;
}

.content {
  display: none;
}

.home {
  background-color: #202020;
  height: 100vh;
}

@media screen and (max-width: 901px) {
  .cardMessageTP {
    display: none;
  }

  .sidebar {
    display: flex;
  }
  .main {
    font-family: "Ubuntu", sans-serif;
    color: white;
  }
  .top {
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    margin-top: 15px;
  }
  .top h1 {
    font-size: 40px;
    font-weight: 500;
  }
  .top .date {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .top .date p {
    font-size: 15px;
    font-weight: 500;
    color: #949494;
  }
  .top .date img {
    width: 24px;
  }
  .calendar ul {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    list-style: none;
    margin-top: 20px;
  }
  .calendar ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 56px;
    border-radius: 10px;
    gap: 5px;
  }
  .calendar ul li.active {
    background-color: rgba(104, 148, 236, 0.5);
  }
  .calendar ul li.active .day {
    color: white;
  }
  .calendar ul li .day {
    color: #9f9f9f;
    font-weight: 500;
    font-size: 15px;
  }
  hr {
    border-color: rgba(151, 150, 150, 0.12);
  }
  .cards {
    margin-top: 30px;
    padding: 0 17px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 60vh;
    overflow: scroll;
  }
  .cards .card {
    text-decoration: none;
    background-color: #2d2d2d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;
    border-radius: 15px;
  }
  .cards .card .text h3 {
    font-size: 16px;
    font-weight: 500;
    color: white;
    text-decoration: none;
  }
  .cards .card p {
    font-size: 12px;
    font-weight: 400;
    color: rgba(124, 124, 124, 0.77);
    margin-top: 7px;
  }
  .cards .card .text h3.line {
    text-decoration: line-through;
  }
  .cards .card .complete {
    border: 2px solid #a1a0a0;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cards .card .complete img {
    display: none;
  }
  .cards .card .complete.check {
    border: none;
    background-color: rgba(104, 148, 236, 0.5);
  }
  .cards .card .complete.check img {
    display: block;
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 20px 26px;
  }
  .footer button {
    width: 100%;
    height: 45px;
    background-color: rgba(104, 148, 236, 0.5);
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    gap: 10px;
  }
  .footer button span {
    font-size: 14px;
    font-weight: 500;
  }
  .cardNew {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: rgba(217, 217, 217, 0.09);
    top: 0;
    backdrop-filter: blur(8px);
    z-index: 20;
  }
  .cardNew.active {
    display: block;
  }
  .cardNew .newTask {
    background-color: #292929;
    position: absolute;
    bottom: 0px;
    width: 100vw;
    height: 90%;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 -50 30 0 rgb(255, 255, 255);
    z-index: 30;
  }
  .cardNew .newTask .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cardNew .newTask .top .line {
    border: 2px solid #898989;
    width: 40%;
    border-radius: 50px;
    margin-bottom: 20px;
  }
  .cardNew .newTask .top h3 {
    font-weight: 500;
    font-size: 20px;
    font-family: "Ubuntu", sans-serif;
  }
  .cardNew .newTask hr,
  .cardDate .datepicker hr {
    margin: auto;
    margin-top: 15px;
    background-color: #3e3e3e;
    width: 90%;
  }
  .form {
    padding: 10px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form .inputs {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 15px;
  }
  .form .inputs label {
    font-size: 16px;
    color: #d2d2d2;
    font-weight: 400;
  }
  .form .inputs input {
    height: 40px;
    background-color: transparent;
    border: none;
    border: 2px solid rgba(71, 71, 71, 0.9);
    border-radius: 15px;
    padding: 0 20px;
    color: white;
  }
  .form .inputs input:focus,
  .form .inputs textarea:focus {
    outline: none;
    border-color: rgba(67, 98, 161, 0.8);
  }
  .form .inputs textarea {
    background-color: transparent;
    border-radius: 15px;
    border: 2px solid rgba(71, 71, 71, 0.9);
    color: white;
    padding: 15px 20px;
  }
  .form .secundary {
    display: flex;
    gap: 5%;
  }
  .form .secundary input {
    width: 9rem;
  }
  input[type="date"]::-webkit-calendar-picker-indicator,
  input[type="time"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
    border-radius: 4px;
    margin-right: 2px;
    opacity: 0.9;
    filter: invert(0.9);
  }
  .form .buttons {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    gap: 50px;
  }
  .form .buttons button {
    width: 150px;
    height: 45px;
    border-radius: 15px;
    border: none;
  }
  .form .buttons button.btn-primary {
    background-color: rgba(104, 148, 236, 0.5);
    color: white;
  }
  .form .buttons button.btn-secundary {
    background-color: transparent;
    border: 2px solid rgba(104, 148, 236, 0.5);
    color: #6894ec;
  }
  /*Transition animation form */
  .nested-enter-active,
  .nested-leave-active {
    transition: opacity 0.5s ease;
  }
  .nested-enter-from,
  .nested-leave-to {
    opacity: 0;
  }
  .nested-enter-active .inner,
  .nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
  }
  .nested-enter-from .inner,
  .nested-leave-to .inner {
    transform: translateY(30px);
    opacity: 0;
  }
  .cardDate {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    background-color: transparent;
    height: 100vh;
    width: 100vw;
  }
  .cardDate .datepicker {
    background-color: #292929;
    height: 60%;
    border-radius: 0 0 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cardDate .datepicker hr {
    margin: auto;
    margin-bottom: 30px;
    background-color: #3e3e3e;
    width: 70%;
    position: relative;
    bottom: 10;
  }
  .cardDate .exitDate {
    background-color: rgba(217, 217, 217, 0.09);
    backdrop-filter: blur(8px);
    width: 100%;
    height: 40%;
  }
  .cardDate .datepi {
    margin-top: 20%;
  }
  .vc-header .vc-arrow,
  .vc-header .vc-title {
    background-color: black;
  }

  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
