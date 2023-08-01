import './assets/main.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import '/node_modules/primeflex/primeflex.css'
import App from './App.vue'

createApp(App).mount('#app')
App.use(PrimeVue)
