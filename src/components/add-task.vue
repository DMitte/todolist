<template lang="es">
    <div class="addTask">
        <div class="btn-add" @click="toggleAdd">
            <button> <img src="@/assets/iconos/btn-add.svg" alt="Add Icons"> </button>
        </div>

        <div class="add-task" v-bind:class="{isActive: Addclass}">
            <div class="add-model">
                <div class="top">
                    <button class="btn-close" @click="toggleAdd"><img src="@/assets/iconos/btn-close.svg" alt="btn close"></button>
                    <h2>Add Event</h2>
                </div>
                
                <form action="#">
                    <div class="inputs">
                        <label for="title">title *</label>
                        <input type="text" name="title" v-model="taskInfo.title" id="title" placeholder="Type here">
                    </div>
                    <div class="inputs">
                        <label for="title">Tags *</label>
                        <div class="input-wrapper">
                            <img src="@/assets/iconos/btn-search.svg" alt="search btn" class="input-icon">
                            <input v-model="newTag" @keydown.enter="addTags" type="text" name="title" id="title" class="input-with-icon" placeholder="Add tag" v-bind:class="{isError: msgErro.tag}">

                        </div>
                        
                        <div class="tags" >
                            <div class="tag" v-for="(tag, index) in taskInfo.tags" :key="index">
                                <p>{{tag}}</p>
                            </div>                                                                                                      
                        </div>
                        <div class="date-inputs">
                            <div class="date">
                                <label for="startDate">Date event</label>
                                
                                <!--//! LOS ESTILOS ESTAN EN LINEA PORQUE NO ENCUENTRO LA FORMA DE PONERLO EN OTRA PARTE-->                                
                                <datepicker v-model="taskInfo.startDate" name="startDate"  :startingView="'year'"  type="picker" placeholder="Select Date" class="inputdate" style="width:80vw; height:35px; background-color: transparent; border-radius:10px; border:none; border: 2px solid rgba(172, 172, 172, .33); color:white; margin-top:5px; padding-left:8px">
                                
                                </datepicker>
                            </div>                            
                            
                        </div>
                        <div class="descript">
                            <label for="description">Description *</label>                    
                            <textarea name="description" cols="30" rows="10" v-model="taskInfo.descript"></textarea>
                        </div>

                        <div class="btn">
                            <button>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import Datepicker from 'vue3-datepicker'
export default {
    components:{Datepicker},
    data() {
        return {
            taskInfo:{
                title: '',
                startDate: '', 
                tags: [],
                descript: ''
            },
            Addclass: false,            
            newTag: "",
            msgErro: {
                tag : false
            },
            dates: {
                              
            },            
        }
    },
    name: "AddTask",    
    methods: {
        toggleAdd() {
            this.Addclass = !this.Addclass
        },
        addTags(){
            if(this.newTag != ''){
                if (this.taskInfo.tags.length < 3) {
                    this.taskInfo.tags.push(this.newTag)
                    this.newTag = ''
                }else{
                    this.msgErro.tag = !this.msgErro.tag
                }
                
            }
        }
    }

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

@media screen and (max-width: 901px) {
    .btn-add {
        position: fixed;
        right: 35px;
        bottom: 25px;

    }

    .btn-add button {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #D9D9D9;
        border: none;
    }

    .add-task {
        display: none;
    }

    .add-task.isActive {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(172, 172, 172, .33);
        width: 100vw;
        height: 100vh;
        padding: 35px 25px;
        justify-content: center;
        align-items: center;
    }

    .add-task.isActive .add-model {
        background-color: black;
        width: 100vw;
        height: 93vh;
        border-radius: 15px;
    }

    .add-model .top {
        display: flex;
        color: white;
        align-items: center;
        gap: 15%;
    }

    .add-model .btn-close {
        background-color: transparent;
        border: none;
        width: 50px;
        height: 50px;
        margin-top: 15px;
        margin-left: 15px;
    }

    .add-model .top h2 {
        font-family: 'Ubuntu', sans-serif;
        margin-top: 5%;
        font-weight: 500;
    }
    .add-model form .input-wrapper{
        display: relative;
    }
    .add-model form .input-wrapper .input-icon{
        position: absolute;
        padding: 8px 15px;
    }
    .add-model form .input-wrapper .input-with-icon{
        height: 35px;
        padding-left: 15%;
        width: 100%;
    }
    .add-model form .input-wrapper .input-with-icon.isError{
        border: 2px solid rgba(168, 18, 18, 0.89);
    }
    .add-model form .inputs {
        color: white;
        display: flex;
        flex-direction: column;
        padding: 10px 25px;
    }

    .add-model form .inputs label {
        font-family: 'Ubuntu', sans-serif;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 10px;
    }

    .add-model form .inputs input {
        height: 35px;
        border-radius: 10px;
        border: none;
        background-color: transparent;
        border: 2px solid rgba(66, 66, 66, .89);
        padding: 0px 15px;
        font-size: 15px;
        color: white;
    }

    .add-model form .inputs input:focus {
        border: 2px solid rgba(67, 98, 161, .89);
        outline: none;
    }

    .add-model form .inputs .tags {
        margin-top: 15px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-column-gap: 3px;
        grid-row-gap: 5px;
    }

    .add-model form .inputs .tags .tag {
        background-color: #5C69DB;
        width: 80px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        font-size: 14px;
    }
    .date label{
        margin-bottom: 10px;
    }
    .add-model form .date-inputs{
        display: flex;
        gap: 8px;
        margin-top: 20px;
    }
    .separacion{
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1.5rem
    }
    .separacion .line{
        width: 15px;        
        border: 1.8px solid #424242;
        
    }
    .inputdate:focus{
        outline: none;
        border: 2px solid #5C69DB
    }
    .descript{
        margin-top: 25px;
        font-family: 'Ubuntu' sans-serif;
        font-weight: 500;        
    }
    .descript textarea{
        margin-top: 10px;
        width: 100%;
        background-color: transparent;
        border: 2px solid #424242;
        border-radius: 10px;
        color: white;
        font-family: 'Ubuntu' sans-serif;
        padding: 10px;
    }
    .descript textarea:focus{
        outline: none;
        border: 2px solid #5C69DB
    }
    .btn button{
        width: 100%;
        height: 35px;
        margin-top: 25px;
        background-color: #5C69DB;
        border: none;
        border-radius: 10px;
        color: white;
        font-family: 'Ubuntu' sans-serif;
        font-size: 16px;
    }
}</style>
