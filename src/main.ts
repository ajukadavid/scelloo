import { createApp } from 'vue'
import './styles/app.css';
import { store, key } from './store'
import App from './App.vue'

createApp(App).use(store, key).mount('#app')
