<template>
<div class="registro">
    <div class="top">
      <img src="../assets/logo.svg" alt="Logo">
      <h1>0%</h1>
      <p>start creating and organizing your day in the form of lists</p>
    </div>
    <div class="down">
      <div class="textos">
        <h2>Set up your Hub account.</h2>
        <p>Invite your friends to collaborate on your to-do list for the day.</p>
      </div>
      <form action="">
        <div class="inputs">
        <div class="input">
          <span class="check"><img src="../assets/iconos/checkmark-circle.svg" alt="checkmark"></span>
          <span class="closem"><img src="../assets/iconos/close-circle.svg" alt="closemark"></span>
          <input type="email" placeholder="Email...">
        </div>
        <div class="input">
          <span class="check"><img src="../assets/iconos/checkmark-circle.svg" alt="checkmark"></span>
          <span class="closem"><img src="../assets/iconos/close-circle.svg" alt="closemark"></span>
          <input type="password" placeholder="Password...">
        </div>
        <div class="input">
          <span class="check"><img src="../assets/iconos/checkmark-circle.svg" alt="checkmark"></span>
          <span class="closem"><img src="../assets/iconos/close-circle.svg" alt="closemark"></span>
          <input type="password" placeholder="Confirm Password...">
        </div>
        <div class="input">
          <span class="check"><img src="../assets/iconos/checkmark-circle.svg" alt="checkmark"></span>
          <span class="closem"><img src="../assets/iconos/close-circle.svg" alt="closemark"></span>
          <input type="text" placeholder="Username...">
        </div>
        <div class="input">
          <span class="check"><img src="../assets/iconos/checkmark-circle.svg" alt="checkmark"></span>
          <span class="closem"><img src="../assets/iconos/close-circle.svg" alt="closemark"></span>
          <input type="tel" placeholder="Phone..." maxlength="10">
        </div>
        </div>
        <div class="check">
          <input type="checkbox" id="check" value="1" >
          <label id="lbl" for="check">I accept the <a href="">Terms</a>, <a href="">Privacy politicy</a> and <a href="">Conditions</a>.</label>
        </div>
        <input type="submit" value="Register" disabled>
      </form>
      <div class="separador">
        <div class="linea"></div>
      </div>

      <div class="sign-in">
        <p>Already have an account?</p> <router-link to="#">Sign in </router-link>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: "RegisterView"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@100;200;300;400&family=Roboto+Slab:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Ubuntu:wght@400;500;700&display=swap');
.registro{
  height: 100vh;
}
.top{
  background-color: #131313;
  color: white;
  height: 30%;
  display: flex;
  flex-direction: column;
  padding: 3%;
}
.top img{
  width: 30px;
  top: 0;
}
.top h1{
  margin-top: 25px;
  margin-left: 5%;
  font-family: 'Roboto Slab', serif;
  font-size: 36px;
  font-weight: 700;
}
.top p{
  margin-left: 5%;
  font-family: 'Overpass', sans-serif;
  font-size: 15px;
  font-weight: 300;
  margin-top: 5px;
  color: #C9C9C9;
}
/*down Styles*/
.down{
  background-color: #242424;
  color: white;
  padding: 25px;
}
.down h2{
  font-size: 24px;
  font-family: 'Lato', sans-serif;
  margin-top:7px;
}
.down p{
  font-size: 14px;
  font-family: 'Overpass', sans-serif;
  font-weight: 300;
  color: #929292;
  margin-top: 10px;
}
.down form .inputs{
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 20px;
  margin-bottom: 15px;
  position: relative;
}
.down form .inputs .input .check, .down form .inputs .input .closem{
  display: none;
}
.down form .inputs .input span{
  position: fixed;
  right: 14%;
  margin-top: 7px;
}
.down form .inputs input{
  width: 100%;
  height: 39px;
  background-color: transparent;
  border-collapse: collapse;
  border: 2px solid rgba(71,71,71,.89);
  border-radius: 10px;
  padding-left: 15px;
  color: white;
  font-family: 'Roboto Slab', serif;
}
.down form .inputs input:focus{
  outline: none;
  border-color: rgba(67, 98, 161, .8);
}
.down #check {
  display: none;
}
.down #lbl:before{
  content:"";
  border: solid 1.5px #474747;
  border-radius: 5px;
  width: 1em;
  height: 1em;
  position: absolute;
  left: 25px;
  margin-top: 2px;
}
.down #lbl{
  font-family: 'Roboto Slab', serif;
  font-size: 14px;
  font-weight: 400;
  padding-left: 25px;
}
.down #check:checked + #lbl:before{
  background-image: url("../assets/checkmark.svg");
  background-size: 15px 15px;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  background-color: #334363;
  width: 1.2em;
  height: 1.2em;
}
.down #lbl a{
  color: #4362A1;
  text-decoration: none;
}
.down form input[type="submit"]{
  margin-top: 10px;
  height: 40px;
  width: 100px;
  color: #B1B1B1;
  background-color: #334363;
  border: none;
  border-radius: 10px;
}
.separador{
  padding-top: 20px;
}
.separador .linea{
  border: 1px solid #363636;
}
.down .sign-in{
   display:flex;
   column-gap: 5px;
   margin-top: 10px;
   margin-bottom: 20px;
   font-family: 'Ubuntu', sans-serif;
   font-size: 12px;
   font-weight: 400;
 }
.down .sign-in a{
  color: #334363;
  text-decoration: none;
  padding-top:10px;
}
.down .sign-in a.router-link-exact-active{
  color: #334363;
  text-decoration: none;
}
@media only screen and (min-width: 600px ){
  .top{
    height: 35%;
  }
  .top h1{
    font-size: 48px;
  }
  .top p{
    font-size: 24px;
    max-width: 430px;
    margin-top: 15px;
  }
  .down{
    padding: 25px 10%;
  }
  .down h2{
    font-size: 32px;
    margin-top: 15px;
  }
  .down p{
    font-size: 20px;
    margin-top: 20px;
  }
  .down form .inputs{
    gap: 25px;
    margin-top: 30px;
  }
  .down form .inputs input{
    height: 50px;
    font-size: 16px;
    padding-left: 25px;
  }
  .down .check{
    margin: 30px 0px;
    padding-left: 20px;
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
  .down form input[type="submit"]{
    height: 50px;
    width: 131px;
    font-size: 16px;
  }
  .down .sign-in{
    font-size: 18px;
  }
  .down .sign-in a{
    font-size: 18px;
    margin-top: 10px;
    padding-left: 5px;
  }
}
@media only screen and (min-width: 901px){
  .registro{
    display: flex;
  }
  .top{
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .top img{
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .top h1, .top p{
    text-align: center;
  }
  .down{
    width: 70%;
  }
  .down #lbl{
    font-size: 16px;
    padding-left: 15px;
  }
  .down #lbl:before{
    left: 40%;
  }
  .down form .inputs{
    gap: 20px;
    margin-top: 20px;
  }
  .down form .inputs input{
    height: 45px;
  }
  .down .check{
    margin: 25px 0px;
    padding-left: 20px;
  }
  .down .sign-in p, .down .sign-in a{
    margin-top: 0;
    font-size:  18px;
  }
  .down .sign-in p{
    margin-top: 10px;
  }
  .down form input[type="submit"]{
    margin-top: 0px;
  }
}

</style>