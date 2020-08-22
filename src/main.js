import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './styles/style.scss';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount('#app');
