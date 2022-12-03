import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faPhoneFlip,faFolder,faDollarSign,faCircle,faHouse,faLink,faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
/*Import icone regular */
import { faFaceSmile,faEnvelope,faCopyright} from '@fortawesome/free-regular-svg-icons'

import { faFacebookF,faTwitter,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faFaceSmile,faPhoneFlip,faFolder,faDollarSign,faFacebookF,faTwitter,faInstagram,faCircle,faHouse,faEnvelope,faLink,faCircleArrowRight,faCopyright,faYoutube)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
