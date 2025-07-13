import '~/assets/styles/tailwind.css'

import { createApp } from 'vue'

import App from '~/App.vue'
import { query } from '~/lib/query/plugin'
import { router } from '~/lib/router/plugin'
import { theme } from '~/lib/theme/plugin'

const app = createApp(App)

app.use(theme) // TODO: a aplicação precisa ser pré-renderizada pra que isso daqui não cause FOUC (Flash of Unstyled Content)
app.use(router)
app.use(query)

app.mount('#__vue')
