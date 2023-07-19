///// vue app
import { createApp } from 'vue'
import App from './App.vue'


//////////// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
library.add()



//// router
import router from "./router.config.js";

//// pinia
import {createPinia} from "pinia";
const pinia = createPinia()


///// styles
import './assets/app.scss'




///// plugins
const app=createApp(App);
app.use(router)
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#v-app')
