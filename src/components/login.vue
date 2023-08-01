<script setup lang="ts">
import { ref } from 'vue'
import  {login2} from './login2'

const username = ref('')
const password = ref('')

const submitForm = (event: Event) => {
  event.preventDefault()
  const isError = !login2(username.value, password.value)

  // Проверяем данные и выполняем логику авторизации здесь
  if (!isError) {
    console.log('Успешная авторизация!')
  } else {
    console.log('Неверное имя пользователя или пароль!')
  }

  // Очищаем поля после отправки формы
  username.value = ''
  password.value = ''
}
</script>

<template>
  <div class="container">
    <form class="login-form" @submit="submitForm">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" class="input-field" />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" class="input-field" />

      <button type="submit" class="submit-button">Login</button>
    </form>
  </div>
</template>

<style scoped>

</style>
./login2