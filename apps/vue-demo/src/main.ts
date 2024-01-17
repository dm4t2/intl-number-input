import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

const app = createApp(App)
app.use(createVuetify())
app.mount('#app')
