import {createApp} from "vue";
import App from "./App.vue";


//////////// Tailwind.config
import './assets/style/Tailwind.config/Tailwind.base.scss'
import './assets/style/Tailwind.config/Tailwind.component.scss'
import './assets/style/Tailwind.config/Tailwind.utilities.scss'

/////////// main style
import './assets/style/app.scss';


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
app.mount('#v-app')
