import './assets/main.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import '/node_modules/primeflex/primeflex.css'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue)
app.mount('#app')
