import { createApp } from 'vue'

import App from '@/App.vue'
import aside from '@/components/pages/aside.vue'
import top from '@/components/pages/top.vue'
import login from '@/components/pages/login.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/reset.scss'
import router from '@/router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import locale from 'element-plus/lib/locale/lang/zh-cn' 
const app = createApp(App);
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.component('asid', aside);
app.component('top', top);
app.component('login', login);
app.use(router);
app.mount('#app')
