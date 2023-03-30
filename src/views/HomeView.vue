<template>
  <div class="home">
    <cardMessageTP  class="cardMessageTP"/>

    <BarNavegation class="sidebar"/>
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
        
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BarNavegation from "@/components/BarNavegation.vue";
import cardMessageTP from "@/components/cardMessageTP.vue";
export default {
  data(){
    return {
      isSidebarVisible: true,
      items: [
        {title: 'This Week',isOpen: false ,todoList: [{ id: 1, title: 'Prueba de que funciona', complete: false}, { id: 2, title: 'Prueva2', complete: false} ]},
        {title: 'This Month', isOpen: false , todoList: []}
      ]
    }
  },
  name: 'HomeView',
  components: {
    cardMessageTP,
    BarNavegation
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
.sidebar{
display: none;

}
.content{
  display: none;
}
.home{
  background-color: #202020;
}
@media screen and (max-width: 901px) {
  .cardMessageTP{
    display: none;
  }
  .sidebar{
    display: flex;
   
  }
  .content{
    display: block;
  }
  .firts{
    display: flex;
    justify-content: space-between;
    padding: 25px;
    color: white;
    font-family: 'Ubuntu', sans-serif;
  }
  .firts h1{
    font-size: 20px;
    font-weight: 500;
    width: 120px;    
  }
  .firts .btns{
    display: flex;
    gap: 16px;
  }
  .firts .btns button{
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 1px #fff solid;
    border-radius: 50%;
  }
  .days-next{
    padding: 0 25px;
    font-family: 'Ubuntu', sans-serif;
  }
  .days-next .card{
    height: 70px;
    display: flex;
    background-color: #fff;
    border-radius: 20px;
    position: relative;
  }
  .days-next .card img{
    width: 70px;
    height: 70px;
    border-radius: 20px 0 0 20px;
    object-fit: cover;
  }
  .days-next .card .days-left{
    position: absolute;
    right: 25px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
  }
  .days-left .card .days-left h3{
    font-size: 16px;
    width: 400;
  }
  .days-left .card .days-left h3 span{
    width: 300;
  }
  .days-left .card .days-left p{
    font-size: 12px;
  
  }
}
</style>