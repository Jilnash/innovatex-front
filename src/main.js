import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Main from "./components/Main.vue";
import Adviser from "./components/Adviser.vue";
import Suggestion from "./components/Suggestion.vue";
import Map from "./components/Map.vue";

import './assets/main.css'

const routes = [
    { path: '/', component: Main },
    { path: '/adviser', component: Adviser },
    { path: '/suggestion', component: Suggestion },
    { path: '/map/:lng/:lat', component: Map },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
