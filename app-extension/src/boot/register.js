import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-toggle'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
