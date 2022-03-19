import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import BootstrapVue3 from 'bootstrap-vue-3'
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

createApp(App)
    .use(store)
    .use(router)
    .use(BootstrapVue3)
    .component('BootstrapIcon', BootstrapIcon)
    .mount('#app')
