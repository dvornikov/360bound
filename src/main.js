import Vue from 'vue'
import App from './App.vue'
import Color from './plugins/Color'

Vue.use(Color);

new Vue({
  el: '#app',
  render: h => h(App)
});
