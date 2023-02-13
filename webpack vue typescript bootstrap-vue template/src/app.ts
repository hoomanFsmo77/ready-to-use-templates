import {createApp} from "vue";
import App from "./App.vue";


////// style
import './assets/style/app.scss';

////// bootstrap
import BootstrapVue3 from 'bootstrap-vue-3'

//// router
import router from "./router";


//////////// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
library.add()


///// app
const app=createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(BootstrapVue3)
app.mount('#v-app')
