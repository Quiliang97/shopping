import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import '@/assets/rem/rem.js'

// 引入vant插件
import { Button } from 'vant';
import 'vant/lib/index.css';
import { Search } from 'vant';

Vue.use(Search);

Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



