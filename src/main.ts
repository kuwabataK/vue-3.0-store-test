import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import StoreUtil from './stores/StoreUtil'


StoreUtil.provideAllStore(
  createApp(App)
    .use(router)
).mount('#app')
