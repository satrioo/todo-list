import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill, BiSquare, BiCheckSquare, BiTrash } from "oh-vue-icons/icons";

import App from './App.vue'
import router from './router'

import './index.css'

const app = createApp(App)
addIcons(FaFlag, RiZhihuFill, BiSquare, BiCheckSquare, BiTrash );

app.directive('bold', {
 mounted: (el) => el.style.fontWeight = 'bold'
})

app.use(createPinia())
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
