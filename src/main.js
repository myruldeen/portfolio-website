import './assets/main.css'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './pwa'

const app = createApp(App)

app.use(router)

app.mount('#app')