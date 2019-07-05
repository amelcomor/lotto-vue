import Vue from 'vue'
import App from './App.vue'
import store from './store';
import VueSocketIO from 'vue-socket.io';
import io from 'socket.io-client'

Vue.config.productionTip = false

// Vue.use(VueSocketIO, io('http://metinseylan.com:19https://gcm-fra-staging-2.7platform.com:800892', {
//   'query': 'token="token"&clientType="user"'
// }), store)

Vue.use(new VueSocketIO({
  debug: true,
  connection: io('https://gcm-fra-staging-2.7platform.com:8008', {query:'token="token"&clientType="user"'}),
  vuex: {
    store,
    actionPrefix: 'SOCKET_', 
    mutationPrefix: 'SOCKET_'
  }
})
);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
