import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router.ts'
import store from './store'

const app = createApp(App) // Use the router

app.use(router)
app.use(store)
app.use(createPinia())
app.mount('#app')
