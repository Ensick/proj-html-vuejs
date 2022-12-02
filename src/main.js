import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faPhoneFlip,faFolder,faDollarSign} from '@fortawesome/free-solid-svg-icons'
/*Import icone regular */
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faFaceSmile,faPhoneFlip,faFolder,faDollarSign)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
