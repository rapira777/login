<script setup lang="ts">
import { ref, watch } from 'vue'
import login2 from '../login'
import { isLogged } from '..//state'

const isPasswordHide = ref(true);
const user =ref('')
const password=ref('')
const pwdAlertMsg=ref('')
const usrAlertMsg= ref('')
// usrAlertMsg.value = 'Введите имя пользователя'
// pwdAlertMsg.value = 'Введите пароль'
watch(() =>user,(user)=> {
  if (user.value.length>3) {
  console.log("Query server - "+user.value)
  usrAlertMsg.value = ""
  } else {
    console.log("No query -" + user.value)
    usrAlertMsg.value = "Маловато символов!"
  }
},
  { deep: true })
</script>

<template>
  <div class="root">
    <div class="form">
      <label class="label">Вход в систему:</label>
      <div class="flex flex-column gap-2">
        <span class="p-input-icon-right">
          <i class="pi pi-user" />
          <InputText class="inputText"  v-model="user" placeholder="Введите имя пользователя" />
        </span>
      
      <small class="smallMsg">{{usrAlertMsg}}</small></div>
      <div class="flex flex-column gap-2">
        <span class="p-input-icon-right">
          <i class="cursor-pointer" :class="{'pi pi-eye': isPasswordHide, 'pi pi-eye-slash': !isPasswordHide}" @click="isPasswordHide=!isPasswordHide"/>
          <InputText class="inputText" :type="isPasswordHide ? 'password' : 'text'" v-model="password" placeholder="Введите пароль" />
        </span>
        <small class="smallMsg">{{pwdAlertMsg}}</small>
      </div>
      <Button class="button" @click="isLogged = true">Вход</Button>
    </div>
  </div>
</template>

<style scoped>
.root {
  /* position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 display: flex;
 flex-direction: column;      */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5372f0;
  font-family: 'Poppins', sans-serif;
}

.form {
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
  /* Так в исходнике */
  padding: 20px;
  /* padding: 40px 30px 50px 30px; Так в исходнике */
  border-radius: 5px;
  background: #fff;
  text-align: center;
}

.form>* {
  margin: 10px;
}


.label {
  font-size: 35px;
  font-weight: 600;
}

.p-invalid {
  font-size: 18px;
  width: 100%;
  /* padding-right: 55px;  Убираю магию*/
  /* Здесь учитывается ширина иконки и дается немного дополнительного пространства */
}
.inputText {
  font-size: 18px;
  width: 100%;
}
.button {
  justify-content: center;
}
.smallMsg{
  height: 20px;
}
</style>
