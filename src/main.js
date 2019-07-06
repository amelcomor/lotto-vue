import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueSocketIO from 'vue-socket.io';
import io from 'socket.io-client';
import 'vue-progress-path/dist/vue-progress-path.css';
import VueProgress from 'vue-progress-path';

Vue.config.productionTip = false;

Vue.use(VueProgress);

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: io('https://gcm-fra-staging-2.7platform.com:8008', {
      query: 'token="token"&clientType="user"'
    }),
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
  })
);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
