import { createApp } from 'vue'
import App from './App.vue'
import myrouter from './router' // <---

createApp(App).use(myrouter).mount('#app')
