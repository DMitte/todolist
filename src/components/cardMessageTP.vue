<template>
  <div class="cardMessage">
    <h1>Proximamente!</h1>
    <p>Por el momento esta web esta disponible para telefonos mobiles y tablets</p>
    <form>
      <input id="email-input" type="text" placeholder="Ingrese su email">
      <div class="submit-input">
        <button>Notificame</button>
      </div>
      
    </form>
    <div class="footer">
      <nav>
        <div class="polity-privacy">
          <router-link to="/">Privacy Policy</router-link>
        </div>
        <div class="social-networks">
          <a href="#"><img src="@/assets/iconos/btn-facebook.svg" alt=""></a>
          <a href="#"><img src="@/assets/iconos/icon-instagram.svg" alt=""></a>
          <a href="#"><img src="@/assets/iconos/icon-linkedin.svg" alt=""></a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardMessageTP"
}
</script>

<style scoped>
.cardMessage {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Ubuntu', sans-serif;
}

.cardMessage h1 {
  background: linear-gradient(90deg, #4B6CB7 16.03%, #182848 88%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 96px;
  font-weight: 600;
  margin-top: 150px;
}
.cardMessage p{
  color: white;
  font-size: 40px;
  width: 70%;
  text-align: center;
  font-weight: 400;
  margin-top: 15px;
}
.cardMessage form{
  margin-top: 18px;
  display: flex;
}
.cardMessage form input#email-input{
  width: 200px;
  height: 40px;
  background-color: #373434;
  border: none;
  border-radius: 10px 0 0 10px;
  font-family: 'Ubuntu', sans-serif;
  padding-left: 17px;
  padding-right: 17px;
  color: aliceblue;
}
.cardMessage form input#email-input:focus{
  border: none;
  border-collapse: collapse;
  outline: none;
}
.cardMessage form .submit-input{
  height: 40px;
  background-color: #373434;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 9px;
  border-radius: 0px 10px 10px 0;
  
}
.cardMessage form .submit-input button{
  height: 30px;
  width: 90px;
  border-radius: 5px;
  border: none;
  background-color: #F2F2F2;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  font-size: 12px;
}
.cardMessage .footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  
}
.cardMessage .footer nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px 50px 40px;
  align-items: center;

}
.cardMessage .footer nav .polity-privacy a{
  color: #969696;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
}
.cardMessage .footer nav .polity-privacy a:hover{
  color: #4B6CB7;
}
.cardMessage .footer .social-networks{
  display: flex;
  gap: 15px;
}
.cardMessage .footer .social-networks a{
  width: 40px;
  height: 40px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.cardMessage .footer .social-networks img{
  width: 25px;
  height: 25px;
}
</style>