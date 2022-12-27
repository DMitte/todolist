<template>
  <div class="login">
      <div class="top">
        <img src="../assets/logo.svg" alt="Logo">
        <h1>Welcome Back!</h1>
        <p>Organize, store and have all your daily tasks organized in one place</p>
      </div>
      <div class="down">
        <h2>Sign in</h2>
        <form action="">
          <div class="input email">
            <input type="email" name="email" id="email" placeholder="Email...">
          </div>

          <div class="input pass">
            <input type="password" name="password" id="password" placeholder="Password...">
          </div>

          <div class="check">
            <input type="checkbox" id="check" value="1" >
            <label id="lbl" for="check">Remember me</label>
          </div>

          <input type="submit" value="Login" id="btn-login">
        </form>
        <div class="sign-up">
          <p>Don't have an account yet?</p> <router-link to="#">Sign up </router-link>
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
export default {
  name: "LoginView",
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
}
.down #lbl{
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  font-weight: 400;
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
  }
  .down #lbl{
    font-size: 18px;
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
  .top p{
    margin-left: 10%;
    font-size: 20px;
    max-width: 400px;
  }
  .down{
    padding: 5%;
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