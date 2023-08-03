<script setup lang="ts">
import { ref } from 'vue'
import login2 from '../login'
import {isLogged} from '..//state'

</script>

<template>
  
      <label>Вход в систему:</label>
      <input type="text"/>
      <input type="password" />
      <button @click="isLogged=true">Вход</button>
   
</template>

<style scoped>

</style>
