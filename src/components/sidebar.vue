<template>
 <div class="sidebar">
   <div class="titles">
     <div class="close">
       <button>
         <img src="../assets/iconos/close.svg" alt="close icon">
       </button>
     </div>
     <h2>Todos</h2>
   </div>

   <nav>
     <ul>
       <li>
         <router-link to="/about">About</router-link>
       </li>
     </ul>
   </nav>
 </div>
</template>

<script>
export default {
  name: "sideBar",
  props: {

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@100;200;300;400;600&family=Roboto+Slab:wght@400;500;600;700&display=swap');
.sidebar{
  display: block;
  width: 250px;
  background-color: black;
  padding: 20px;
  height: 100vh;
  color: white;
}
.titles{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.titles button{
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  background-color: #1F1F1F;
  border: none;
  color:white;
  border-radius: 5px;
  box-shadow: rgba(52, 52, 52, 0.17) 0px 3px 6px, rgba(80, 70, 70, 0.24) 0px 3px 6px;
}
.titles button img{
  width: 20px;
}
.titles h2{
  font-family: 'Overpass', sans-serif;
  font-size: 24px;
  font-weight: 600;
}
</style>