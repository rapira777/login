<script setup lang="ts">
import { ref } from 'vue'
import login2 from '../login'
import { isLogged } from '..//state'
</script>

<template>
  <div class="root">
    <div class="form">
      <label>Вход в систему:</label>
      <input type="text" />
      <input type="password" />
      <button @click="isLogged = true">Вход</button>
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
  background: #5372F0;
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
</style>
