<template lang="es">
<div class="details">
    <div class="top">
        <div class="left">
            <button @click="this.$router.push('/')"><img src="@/assets/iconos/chevron-back.svg" alt="Back icon"></button>
        </div>
        <div class="center">
            <h3>Details</h3>
        </div>
        <div class="right">
            <button @click="openOption = !openOption"><img src="@/assets/iconos/ellipsis-vertical.svg" alt="Vertical Ellipsis"></button>
            <div class="dropdown" v-if="openOption">
                <button class="edit-btn">
                    <img src="@/assets/iconos/edit.svg" alt="edit icon">
                    <span>Editar</span>
                </button>
                <button class="delete-btn">
                    <img src="@/assets/iconos/delete.svg" alt="delete icon">
                    <span>Delete</span>
                </button>
            </div>
        </div>
    </div>

    <div class="main">          
      <h3>Titulo</h3>
      <div class="items">
        <div class="item">
          <label for="created">Created Date</label>
          <input type="text">
        </div>        
      </div>
      <div class="mostDetails">
        <div class="descrip">
          <label for="description">Description</label>    
          <textarea name="description" id="description" cols="30" rows="10"></textarea>
        </div>
        <div class="dateandtime">
          <div class="date">
            <label for="date">Date</label>
            <input type="date" name="date" id="date">
          </div>
          <div class="time">
            <label for="time">Time</label>
            <input type="time" name="time" id="time">
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import taskModule from "../store/modules/task";
export default {
  data() {
    return {
      idTask: "",
      dataTask: [],
      openOption: false,
    };
  },
  created() {
    taskModule.actions
      .onetask(this.$route.params.id)
      .then((r) => (this.dataTask = r));
    this.idTask = this.$route.params.id;
  },
};
</script>
<style scoped>
@media screen and (max-width: 901px) {
  .details {
    background-color: #202020;
    height: 100vh;
    width: 100vw;
    padding: 20px 30px;
    color: white;
    font-family: "Ubuntu", sans-serif;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top button {
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 1px solid #7a7a7a;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .top button img {
    width: 20px;
    color: white;
  }
  .top h3 {
    font-size: 20px;
    font-weight: 500;
  }
  .top .dropdown {
    position: absolute;
    background-color: #2d2d2d;
    width: 150px;
    left: 55%;
    padding: 15px 20px;
    margin-top: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
  .top .dropdown button {
    border-radius: 0;
    width: 100%;
    justify-content: left;
    gap: 10px;
    color: white;
    border: none;
  }
  .top .dropdown button.delete-btn {
    color: #c60e0e;
  }
}
</style>
