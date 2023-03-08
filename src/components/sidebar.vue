<template>
 <div class="sidebar" :class="{'sidebar--hidden': !isVisible}">
   <div class="titles">
     <div class="close">
       <button>
         <img src="../assets/iconos/close.svg" alt="close icon">
       </button>
     </div>
     <h2>Todos</h2>
   </div>
    <div class="main">
      <div class="acordeon">
        <div class="accordion">
          <div class="container">
            <div class="content">
              <ul id="items">
                <li v-for="(item, index) in items" :key="index" class="item_accor">
                  <h3 @click="item.isOpen = !item.isOpen" v-bind:class="{'open': item.isOpen}">{{ item.title }} <span id="icon_mas_menos"> <span  class="linea1"></span><span v-show="!item.isOpen" class="linea2"></span> </span></h3>
                  <ul id="lista" v-show="item.isOpen">
                    <li v-for="(childitem, childindex) in item.todoList" :key="childindex"><input @click="childitem.complete = !childitem.complete" type="checkbox" name="check" id="check"> <span v-bind:class="{'complete': childitem.complete}" class="todoTitle">{{childitem.title}}</span> </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
   <div class="footer">
     <button> username <span>Fullstack Developer</span></button>
   </div>
 </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  name: "sideBar",
  props: ['isVisible', 'items']
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
  transition: all 0.3s ease-out;
}

.sidebar--hidden {
  transform: translateX(-100%);
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
.main .accordion{
  padding: 20px 0;
}
.main #items{
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
}
.main .item_accor{
  background-color: #1F1F1F;
  padding: 10px 12px;
  border-radius: 10px;
}
.main .item_accor h3{
  font-family: 'Overpass', sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #969696;
}
.main .item_accor h3.open{
  color: #7F9FDE;
}
.main .item_accor h3 .linea1{
  height: 2px;
  display: inline-block;
  width: 15px;
  background-color: #969696;
  border-radius: 50px
}
.main .item_accor h3 .linea2{
  height: 2px;
  display: inline-block;
  width: 15px;
  transform: rotate(90deg) ;
  background: #969696;
  position: absolute;
}
.main .item_accor h3 #icon_mas_menos{
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main .item_accor #lista{
  list-style: none;
}
.main #lista .todoTitle.complete{
  text-decoration: line-through;
}


</style>