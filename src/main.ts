/*
 * @Author: yxx
 * @Date: 2022-10-24 09:05:03
 * @LastEditTime: 2022-11-22 14:56:12
 * @LastEditors: yxx
 * @Description:
 * @FilePath: \project20221116\src\main.ts
 */
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import axios from './api/ajax'
import './styles/main.less'
import App from './pages/index.vue'
import routes from './routes'
import 'uno.css'

const app = createApp(App)
const pinia = createPinia()
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

app.use(router)
app.use(pinia)
app.mount('#app')
app.config.globalProperties.$axios = axios
