import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import { themeConfig } from './theme'
import { aliases, md } from 'vuetify/lib/iconsets/md'

export default defineNuxtPlugin(({ vueApp }) => {
    const vuetify = createVuetify({
        components,
        directives,
        icons: {
            defaultSet: 'md',
            aliases,
            sets: {
                md
            }
        }

        // theme: themeConfig,
    })
    vueApp.use(vuetify)
})
