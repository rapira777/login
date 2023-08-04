import './assets/main.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext';
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue)
app.component('Button', Button)
app.component('InputText', InputText)
app.mount('#app')
