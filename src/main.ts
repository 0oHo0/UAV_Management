import { createApp } from 'vue'

import App from '@/App.vue'

import aside from '@/components/aside/index.vue'
import top from '@/components/top/index.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/reset.scss'
import router from '@/router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App);
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.component('asid', aside);
app.component('top', top);
app.use(router);
app.mount('#app')
