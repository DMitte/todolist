<template>
  <div class="home">
    <cardMessageTP  class="cardMessageTP"/>

    <div class="sidebar">
      <sidebar :isVisible="isSidebarVisible" :items="items"/>
      <!--<button id="btn-sidebar" @click="toggleSidebar">{{ isSidebarVisible ? 'ocultar' : 'mostrar'}} Sidebar</button>-->
    </div>
    <div class="content">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import sidebar from '@/components/sidebar.vue'
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
    sidebar,
    cardMessageTP
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible
    }
  }

}
</script>
<style scoped>
.sidebar{
display: none;

}
.content{
  display: none;
}
@media screen and (min-width: 901px) {
  .cardMessageTP{
    display: none;
  }
  .sidebar{
    display: flex;
    flex-direction: column;
  }
  .content{
    display: block;
  }
}
</style>