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
                <button class="edit-btn" @click="editButtom()">
                    <img src="@/assets/iconos/edit.svg" alt="edit icon">
                    <span>Editar</span>
                </button>
                <button class="delete-btn" @click="deleteButtom()">
                    <img src="@/assets/iconos/delete.svg" alt="delete icon">
                    <span>Delete</span>
                </button>
            </div>
        </div>
    </div>

    <div class="main"> 
      
     <form v-for="item in dataTask" :key="item._id">
      <input type="text" v-model="item.title" name="titulo" id="titulo" :disabled="isDisabledInput">
      <div class="items">
        <div class="item">
          <label for="createDate">Created Date</label>
          <p>30 may 2023</p>
        </div>        
      </div>
      <div class="mostDetails">
        <div class="descrip">
          <label for="description">Description</label>    
          <textarea name="description" v-model="item.description" id="description" cols="30" rows="10" :disabled="isDisabledInput"></textarea>
        </div>
        <div class="dateandtime">
          <div class="date" v-bind:class="{edit: !this.isDisabledInput}">
            <label for="date">Date</label>
            <div class="icon-input">
              <input type="date" name="date" v-model="item.datet" id="date" :disabled="isDisabledInput" >
            <span id="ico" v-if="this.isDisabledInput">
              <img src="@/assets/iconos/calendar-icon.svg" alt="calendar icon">
            </span>
            </div>
            
          </div>
          <div class="time" v-bind:class="{edit: !this.isDisabledInput}">
            <label for="time">Time</label>
            <div class="icon-input">
              <input type="time" name="time" v-model="item.timet" id="time" :disabled="isDisabledInput">
            <span id="ico" v-if="this.isDisabledInput">
              <img src="@/assets/iconos/time-icon.svg" alt="calendar icon">
            </span>
            </div>
           
          </div>

          
        </div>
        <div class="buttons">
            <button v-if="this.isDisabledInput" type="button" class="done" @click="onSubmitComplete" v-bind:class="{unmark: item.complete}">{{this.textButtom}}</button>
            <button v-if="!this.isDisabledInput" type="button" class="save" @click="onSubmitEdit">Save edit</button>
          </div>
      </div>
     </form>
      
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
      isDisabledInput: true,
      createdDate: "12 may 2023",
      completeTask: false,
      textButtom: "Mark Done",
    };
  },
  created() {
    taskModule.actions.onetask(this.$route.params.id).then((data) => {
      this.dataTask.push(data);
      if (data.complete) {
        this.textButtom = "Unmark Done";
      }
      this.completeTask = data.complete;
    });

    this.idTask = this.$route.params.id;
  },
  methods: {
    editButtom() {
      this.isDisabledInput = !this.isDisabledInput;
      this.openOption = !this.openOption;
    },
    onSubmitEdit() {
      taskModule.actions
        .editTask(this.$route.params.id, this.dataTask[0])
        .then((data) => {
          if (data.error == null) {
            this.$router.go(0);
          }
        });
    },
    onSubmitComplete() {
      this.dataTask[0].complete = !this.dataTask[0].complete;
      taskModule.actions.editTask(this.$route.params.id, this.dataTask[0]);
      if (!this.dataTask[0].complete) {
        this.textButtom = "Mark Done";
      } else {
        this.textButtom = "Unmark Done";
      }
      console.log("si");
    },
    deleteButtom() {
      taskModule.actions.deleteTask(this.$route.params.id).then((data) => {
        if (data.error == null) {
          this.$router.push("/");
        }
      });
    },
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
  .main {
    padding: 5% 2%;
    font-family: "Ubuntu", sans-serif;
  }
  .main form {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 20px 0 20px 0;
    height: 100%;
  }
  .main form input:disabled,
  .main form textarea:disabled {
    background-color: transparent;
    color: white;
    font-size: 20px;
    border: none;
    padding-left: 0;
  }
  .main form input#titulo:disabled {
    font-size: 22px;
    font-weight: 600;
    height: 40px;
  }
  .main form .item {
    display: flex;
  }
  .main form .item label {
    color: rgba(136, 136, 136, 0.93);
    width: 40%;
  }
  .main form input {
    height: 40px;
    padding: 20px;
    border-radius: 15px;
    background-color: transparent;
    border: none;
    border: 2px solid rgba(71, 71, 71, 0.9);
    color: white;
  }
  .main form textarea {
    background-color: transparent;
    border-radius: 15px;
    border: 2px solid rgba(71, 71, 71, 0.9);
    color: white;
    padding: 15px 20px;
  }
  .main form .mostDetails {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .main form input:focus,
  .main form textarea:focus {
    outline: none;
    border-color: rgba(67, 98, 161, 0.8);
  }
  .main form input#createDate:disabled {
    width: 60%;
  }
  .main form .descrip {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .main form .descrip #description:disabled {
    color: #858585;
    font-size: 15px;
  }
  .main form .dateandtime {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .main form .dateandtime .date,
  .main form .dateandtime .time {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
  }
  .main form .dateandtime .date input:disabled,
  .main form .dateandtime .time input:disabled {
  }
  .main form .dateandtime .date input,
  .main form .dateandtime .time input {
    background-color: #2d2d2d;
    width: 90%;
    height: 51px;
    border-radius: 10px;
    font-size: 15px;
    padding-left: 30%;
  }
  .main form .dateandtime .date.edit input,
  .main form .dateandtime .time.edit input {
    padding-left: 20px;
  }
  .main
    form
    .dateandtime
    .date
    input[type="date"]::-webkit-calendar-picker-indicator,
  .main
    form
    .dateandtime
    .time
    input[type="time"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
    border-radius: 4px;
    margin-right: 2px;
    opacity: 0.9;
    filter: invert(0.9);
  }
  .main form .dateandtime .time input {
    padding-left: 25%;
  }
  .main form .dateandtime .date .icon-input,
  .main form .dateandtime .time .icon-input {
    position: relative;
  }
  .main form .dateandtime .date #ico,
  .main form .dateandtime .time #ico {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
  .main form .buttons {
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  .main form .buttons button {
    height: 45px;
    border-radius: 15px;
    border: none;
    color: white;
    font-size: 16px;
  }
  .main form .buttons button.done {
    background-color: rgba(34, 168, 31, 0.5);
  }
  .main form .buttons button.done.unmark {
    background-color: rgba(211, 16, 16, 0.5);
  }
  .main form .buttons button.save {
    background-color: rgba(104, 148, 236, 0.5);
  }
}
</style>
