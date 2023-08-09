<script setup lang="ts">
import { ref } from 'vue'
import login2 from '../login'
import { isLogged } from '..//state'
</script>

<template>
  <div class="root">
    <div class="form">
      <label class="label">Вход в систему:</label>
      <div class="flex flex-column gap-2">
<<<<<<< HEAD
        <div class="icon-input">
          <span class="p-input-icon-right">
            <i class="pi pi-user" />
            <InputText class="p-invalid" />
          </span>
        </div>
        <small>Введите имя пользователя</small>
      </div>
      <div class="flex flex-column gap-2">
        <div class="icon-input">
          <span class="p-input-icon-right">
            <i class="pi pi-eye" />
            <InputText class="p-invalid" />
          </span>
        </div>
        <small>Введите пароль</small>
=======
        <span class="p-input-icon-left">
          <i class="pi pi-user" />
          <InputText class="p-invalid" />
        </span>
        <small>Введите имя пользователя</small>
      </div>
      <div class="flex flex-column gap-2">
      <span class="p-input-icon-left">
        <i class="pi pi-lock" />
        <InputText class="p-invalid" />
      </span>
      <small>Введите пароль</small>
>>>>>>> parent of b6570e0 (Начальная верстка(Советы №3, конечный вариант))
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
<<<<<<< HEAD

/* .p-invalid {
  /* font-size: 18px;
  padding-right: 55px; */
/* Здесь учитывается ширина иконки и дается немного дополнительного пространства 
} 
*/
.icon-input {
=======
.p-invalid {
>>>>>>> parent of b6570e0 (Начальная верстка(Советы №3, конечный вариант))
  font-size: 18px;
}

.button {
  justify-content: center;
}
</style>
