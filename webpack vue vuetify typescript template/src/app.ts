import {createApp} from "vue";
import App from "./App.vue";


////// style
import './assets/style/app.scss';

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

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
const vuetify = createVuetify({components, directives,})
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(vuetify)
app.mount('#v-app')
