import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import i18n from "@/i18n/i18n.js";

async function prepareApp() {
    const {worker} = await import("./mocks/browser.js")
    return worker.start();
}

const app = createApp(App)

prepareApp().then(() => {
    app.mount('#app')
})


app.use(i18n)
app.use(createPinia())
app.use(router)


