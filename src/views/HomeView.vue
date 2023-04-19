<template>
  <div class="home">
    <cardMessageTP class="cardMessageTP" />

    <BarNavegation class="sidebar" />
    <div class="content">
      <div class="firts">
        <h1>UPCOMING EVENT</h1>
        <div class="btns">
          <button class="calendar-btn"><img src="@/assets/iconos/btn-calendar.svg" alt="calendar icon"></button>
          <button class="search-btn"><img src="@/assets/iconos/btn-search.svg" alt="search icon"></button>
        </div>
      </div>
      <div class="days-next">
        <div class="card">
          <img src="@/assets/defectImg/sandia.jpg" alt="Sandia Img">
          <div class="days-left">
            <h3>Marzo - <span>09</span></h3>
            <p>11 days left</p>
          </div>
        </div>
      </div>

      <section>
        <div class="separador">
          <div class="linea"></div>
          <div class="linea2"></div>
        </div>
        <div class="main">
          <div class="day-calendar">
            <h3 class="active">20</h3>
            <p class="month">Mar</p>
            <p class="day">lun</p>
          </div>
          <div class="card-main">
            <div class="card">
              <div class="left">
                <h4>11pm - 2pm</h4>
                <p class="title">Meeteng discord with sam</p>
                <div class="tags">
                  <div class="one">
                    <p>meet</p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="more-icon">
                  <button> <img src="@/assets/iconos/btn-more.svg" alt="more btn"> </button>
                </div>
              </div>
            </div>
            <hr>
            <div class="card">              
              <div class="left">
                <h4>11pm - 2pm</h4>
                <p class="title">Meeteng discord with sam</p>
                <div class="tags">
                  <div class="one">
                    <p>meet</p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="more-icon">
                  <button> <img src="@/assets/iconos/btn-more.svg" alt="more btn"> </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="separador">
          <div class="linea"></div>
          <div class="linea2"></div>
        </div>
        <div class="main">
          <div class="day-calendar">
            <h3 class="">31</h3>
            <p class="month">Ene</p>
            <p class="day">Vie</p>
          </div>
          <div class="card-main">
            <div class="card">
              <div class="left">
                <h4>11pm - 2pm</h4>
                <p class="title">Meeteng discord with sam</p>
                <div class="tags">
                  <div class="one">
                    <p>meet</p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="more-icon">
                  <button> <img src="@/assets/iconos/btn-more.svg" alt="more btn"> </button>
                </div>
              </div>
            </div>
            <hr>
            <div class="card">              
              <div class="left">
                <h4>11pm - 2pm</h4>
                <p class="title">Meeteng discord with sam</p>
                <div class="tags">
                  <div class="one">
                    <p>meet</p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="more-icon">
                  <button> <img src="@/assets/iconos/btn-more.svg" alt="more btn"> </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <AddTask/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BarNavegation from "@/components/BarNavegation.vue";
import cardMessageTP from "@/components/cardMessageTP.vue";
import AddTask from '@/components/add-task.vue';
export default {
  data() {
    return {
      isSidebarVisible: true,
      items: [
        { title: 'This Week', isOpen: false, todoList: [{ id: 1, title: 'Prueba de que funciona', complete: false }, { id: 2, title: 'Prueva2', complete: false }] },
        { title: 'This Month', isOpen: false, todoList: [] }
      ]
    }
  },
  name: 'HomeView',
  components: {
    cardMessageTP,
    BarNavegation,
    AddTask
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible
    }
  }

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

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

  .content {
    display: block;
    padding-bottom: 25px;
    background-color: #202020;
  }

  .firts {
    display: flex;
    justify-content: space-between;
    padding: 25px;
    color: white;
    font-family: 'Ubuntu', sans-serif;
  }

  .firts h1 {
    font-size: 20px;
    font-weight: 500;
    width: 120px;
  }

  .firts .btns {
    display: flex;
    gap: 16px;
  }

  .firts .btns button {
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 1px #fff solid;
    border-radius: 50%;
  }

  .days-next {
    padding: 0 25px;
    font-family: 'Ubuntu', sans-serif;
  }

  .days-next .card {
    height: 70px;
    display: flex;
    background-color: #fff;
    border-radius: 20px;
    position: relative;
  }

  .days-next .card img {
    width: 70px;
    height: 70px;
    border-radius: 20px 0 0 20px;
    object-fit: cover;
  }

  .days-next .card .days-left {
    position: absolute;
    right: 25px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
  }

  .days-left .card .days-left h3 {
    font-size: 16px;
    width: 400;
  }

  .days-left .card .days-left h3 span {
    width: 300;
  }

  .days-left .card .days-left p {
    font-size: 12px;

  }

  .separador {
    padding: 20px 30px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .separador .linea {
    height: 1px;
    width: 20%;
    background-color: #3E3A3A;
  }

  .separador .linea2 {
    height: 1px;
    width: 80%;
    background-color: #FFFFFF;
  }

  .day-calendar {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    padding: 0 0 0 25px;
  }

  .day-calendar h3 {
    font-size: 30px;
    font-weight: 400;
  }

  .day-calendar h3.active {
    position: relative;
    background-color: white;
    color: black;
    left: -25px;
    padding: 5px 0 5px 25px;
    width: 5rem;
    border-radius: 0 10px 10px 0;
  }
  .day-calendar h3{
    position: relative;
    background-color: transparent;
    color: white;
    left: -25px;
    padding: 5px 0 5px 25px;
    width: 5rem;
    border-radius: 0 10px 10px 0;
  }

  .day-calendar .month {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 400;
  }

  .day-calendar .day {
    margin-top: 1px;
    font-size: 300;
    color: #818181;
    font-size: 14px;
  }

  section .main {
    display: flex;
  }
  section .main .card-main{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
  }
  section .main .card-main hr{
    width: 93%;
    margin-left: -10px;
    border: 1px solid #3D3D3D
  }
  section .main .card-main .card {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    display: flex;
    justify-content: space-between;
    margin-left: -8px;
    width: 90%;
  }

  section .main .card-main .left h4 {
    font-size: .6rem;
    font-weight: 400;
  }

  section .main .card-main .left p.title {
    margin-top: 10px;
    font-size: .8rem;
  }

  section .main .card-main .left .tags {
    margin-top: 12px;
    display: flex;
    gap: 5px;
  }

  section .main .card-main .left .tags p {
    background-color: #5C69DB;
    padding: 4px 15px;
    border-radius: 10px;
    font-size: 12px;
  }

  section .main .card-main .right {
    right: 0px;
  }

  section .main .card-main .right button {
    background-color: transparent;
    border: none;
  }
  
}</style>