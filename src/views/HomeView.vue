<template>
  <div class="home">
    <sidebar/>
  </div>
</template>

<script>
// @ is an alias to /src
import sidebar from '@/components/sidebar.vue'
export default {
  name: 'HomeView',
  components: {
    sidebar
  },


}
</script>
<style scoped>
.home{
  display: flex;

}

</style>