<template>
  <div class="login">
      <div class="top">
        <img src="../assets/logo.svg" alt="Logo">
        <h1>Welcome Back!</h1>
        <p>Organize, store and have all your daily tasks organized in one place</p>
      </div>
      <div class="down">
        <h2>Sign in</h2>
        <Form @submit="login(usuario)">
          <div class="input email">
            <ErrorMessage class="check" name="email" v-slot="{ message }" ref="error-mail">
              <span class="closem">
                  <figure>
                    <img src="../assets/iconos/close-circle.svg" alt="closemark">
                    <figcaption> {{ message }} </figcaption>
                  </figure>
                </span>
            </ErrorMessage>
            <span v-show="msgError.email !== ''" id="span-err-email" class="closem">
                  <figure>
                    <img src="../assets/iconos/close-circle.svg" alt="closemark">
                    <figcaption>{{ msgError.email }}</figcaption>
                  </figure>
                </span>
            <Field v-model="usuario.email" type="email" name="email" id="email" placeholder="Email..." :rules="validateEmail"/>
          </div>

          <div class="input pass">
            <ErrorMessage name="password" class="check" v-slot="{ message }">
              <span class="closem">
                  <figure>
                    <img src="../assets/iconos/close-circle.svg" alt="closemark">
                    <figcaption> {{ message }} </figcaption>
                  </figure>
              </span>
            </ErrorMessage>
            <span v-show="msgError.password !== ''" id="span-err-email" class="closem">
                  <figure>
                    <img src="../assets/iconos/close-circle.svg" alt="closemark">
                    <figcaption>{{ msgError.password }}</figcaption>
                  </figure>
                </span>
            <Field v-model="usuario.password" type="password" name="password" id="password" placeholder="Password..." :rules="require"/>
          </div>

          <div class="check">
            <Field name="checkRemember" type="checkbox" id="check" value="1" />
            <label id="lbl" for="check">Remember me</label>
          </div>

          <input type="submit" value="Login" id="btn-login">
        </Form>
        <div class="sign-up">
          <p>Don't have an account yet?</p> <router-link to="/register">Sign up </router-link>
        </div>
        <!--<div class="separador">
          <div class="linea">&nbsp;</div>
          <div class="leyenda">Or</div>
          <div class="linea">&nbsp;</div>
        </div>-->
      </div>
  </div>
</template>

<script>
import {Form, Field, ErrorMessage} from 'vee-validate';
import authModule from '../store/modules/auth';
import {mapActions} from "vuex";
export default {
  data(){
    return{
      usuario: {
        email: "",
        password: ""
      },
      msgError: {
        email: "",
        password: ""
      }
    }
  },
  name: "LoginView",
  methods: {
    ...mapActions('auth', ['login']),
    /*async onSubmit(usuario){
      const res = await authModule.actions.login(usuario);
      console.log(res);
      if(res.error !== true){
        await authModule.mutations.setToken(res.data.token)
        this.$cookies.set('auth-sesion', res.data.token, '2d', '/', '','true')
      }else{
        if(res.msg.indexOf('Usuario') !== -1) {this.msgError.email = res.msg}
        else this.msgError.password = res.msg
      }



    },*/
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    },
    require(value) {
      if (!value || !value.length) {
        return 'This field is required';
      }
      return true;
    }
  },
  components: {
    Form,
    Field,
    ErrorMessage
  },
  module: {
    authModule
  },
  created() {
    if(this.$cookies.isKey('auth-sesion') === true){
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@100;200;300;400&family=Roboto+Slab:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
.login{
  display: flex;
  flex-direction: column;
}
/*Top style*/
.top{
  background-color: #131313;
  color: white;
  height: 35vh;
  padding: 20px;
}
.top h1{
  margin-top: 25px;
  font-size: 20px;
  font-family: 'Roboto Slab', serif;
  font-weight: 600;
}
.top p{
  font-size: 15px;
  margin-top: 10px;
  font-family: 'Overpass', sans-serif;
  color: #C9C9C9;
  font-weight: 400;
}
/*down style*/
.down{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #242424;
  color: white;
  height: 65vh;
  padding: 10%;
}
/*.separador{
  margin: auto;
  width: 100%;
  height: 1px;
}
.linea{
  width:45%;
  border-top: 1px solid #999;
  position: relative;
  top: 10px;
  float: left;
}
.leyenda{
  float: left;
  margin: 0px 1%;
}*/
.down h2{
  text-align: center;
  font-size: 32px;
  font-family: 'Roboto Slab', serif;
  font-weight: bold;
}
.down form .input span {
  position: absolute;
  right: 11%;
  margin-top: 8px;
}
.down form .input figcaption {
  display: none;
  transition: all .5s;
}
.down form .input figure:hover > figcaption{
  display: block;
  position: absolute;
  transition: all .5s;
  top: -90%;
  background-color: black;
  width: 120px;
  font-size: 10px;
  padding: 7px 5px;
  border-radius: 5px;
  font-family: 'Overpass', sans-serif;
  text-align: center;
}

.down .input input{
  height: 40px;
  width: 100%;
  border-radius: 10px;
  background-color: transparent;
  border: 1.5px solid  rgba(71, 71, 71, .8);
  padding-left: 15px;
  color: white;
}
.down .input input:focus{
  outline: none;
  border-color: rgba(67, 98, 161, .8);
}
.down .input:first-child{
  margin-top: 25px;
}
.down .input.pass{
  margin-top: 10px;
}
.down .check{
  margin: 15px 0px;
  padding-left: 25px;
}
.down #check {
  display: none;
}
.down #lbl:before{
  content:"";
  border: solid 1.5px #474747;
  border-radius: 5px;
  width: 0.8em;
  height: 0.8em;
  position: absolute;
  left: 10%;
  margin-top: 4px;
}
.down #lbl{
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  font-weight: 400;
}
.down #check:checked + #lbl:before{
  background-image: url("../assets/checkmark.svg");
  background-size: 15px 15px;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  background-color: #334363;
  width: 0.99em;
  height: 0.99em;
}
.down #btn-login{
  background-color: #334363;
  width: 100%;
  height: 43px;
  border: none;
  border-radius: 10px;
  color: white;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 15px;
  cursor: pointer;
}
.down .sign-up{
  display:flex;
  column-gap: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 12px;
  font-weight: 400;
}
.down .sign-up a{
  color: #334363;
  text-decoration: none;
}
.down .sign-up a.router-link-exact-active{
  color: #334363;
  text-decoration: none;
}
@media only screen and (min-width: 600px ){
  .top h1{
    font-size: 32px;
    padding-left: 4%;
  }
  .top p{
    font-size: 20px;
    padding-left: 4%;
    max-width: 459px;
  }
  .down{
    padding: 5% 10%;
  }
  .down h2{
    font-size: 48px;
  }
  .down .input input{
    height: 50px;
    font-size: 16px;
    border-width: 2px;
  }
  .down form .input span {
    position: absolute;
    right: 12%;
    margin-top: 10px;
  }
  .down .input.pass{
    margin-top: 30px;
  }
  .down .check{
    margin: 30px 0px;
    padding-left: 40px;
  }
  .down #lbl:before{
    width: 1em;
    height: 1em;
    left: 10%;
    border: solid 2px #474747;
  }
  .down #lbl{
    font-size: 18px;
    cursor: pointer;
  }
  .down #check:checked + #lbl:before{
    background-size: 18px 18px;
  }
  .down #btn-login{
    width: 100%;
    height: 50px;
    font-size: 18px;
  }
  .down .sign-up{
    font-size: 16px;
  }

}

@media only screen and (min-width: 901px){
  .login{
    display: flex;
    flex-direction: row;
  }
  .top, .down{
    height: 100vh;
    width: 50%;
  }
  .top h1{
    margin-top: 15%;
    margin-left: 10%;
    font-size: 32px;
  }
  .down form .input span {
    position: absolute;
    right: 7%;
    margin-top: 10px;
  }
  .top p{
    margin-left: 10%;
    font-size: 20px;
    max-width: 400px;
  }
  .down{
    padding: 5%;
  }
  .down form .input figure:hover > figcaption{
    left: -80%;
  }
  .down #lbl:before{
    content:"";
    border: solid 1.5px #474747;
    border-radius: 5px;
    width: 15px;
    height: 15px;
    position: fixed;
    left: 55%;
    margin-top: 3px;
  }
  .down h2{
    margin-bottom: 50px;
  }
}
</style>