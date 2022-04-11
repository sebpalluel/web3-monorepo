import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives
}) // Replaces new Vuetify(...)

app.use(vuetify)

app.mount('#app')
