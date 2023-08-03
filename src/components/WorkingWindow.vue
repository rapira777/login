<script setup lang="ts">
import {isLogged} from '../state'

</script>

<template>
    <p>Вы в программе</p>
    <button @click="isLogged=false">Выход</button>
</template>
