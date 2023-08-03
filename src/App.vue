<script setup lang="ts">
import LoginForm from './components/LoginForm.vue'
import WorkingWindow from './components/WorkingWindow.vue'
import {isLogged} from './state'
</script>

<template>
  <WorkingWindow v-if="isLogged"/>
  <LoginForm v-else />
</template>

<style scoped>

</style>
