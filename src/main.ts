import { createApp } from 'vue'
import { BootstrapVue3 } from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import App from './App.vue'
// @ts-ignore
import store from './store'

import './assets/main.scss'

const app = createApp(App)

app.use(BootstrapVue3)
app.use(store)
app.mount('#app')
