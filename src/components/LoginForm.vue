<script setup lang="ts">
import { ref } from 'vue'
import login2 from '../login'
import { isLogged } from '..//state'
</script>

<template>
  <div class="root">
    <div class="form">
      <label class="label">Вход в систему:</label>
      <InputText class="input" />
      <InputText class="input" />
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
}
.form {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  /* box-shadow: 10px 10px 15px rgba(0,0,0,0.1);  Так в исходнике*/
  padding: 20px;
  /* padding: 40px 30px 50px 30px; Так в исходнике */
  border-radius: 5px;
  background: #fff;
}
.label {
  margin: 10px;
  /*margin-top: 10px;  верхний внешний отступ */
  /*margin-right: 10px;  правый внешний отступ */
  /*margin-bottom: 10px;  нижний внешний отступ */
  /*margin-left: 10px;  левый внешний отступ */
}
.input {
  margin: 10px;
}
.button {
  margin: 10px;
}
</style>
