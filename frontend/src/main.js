import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import columnSortable from 'vue-column-sortable'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-material-design-icons/styles.css'
import './icons.js'



import store from './store'

Vue.config.productionTip = false;

// Bootstrap
Vue.use(BootstrapVue);
Vue.use(columnSortable)

new Vue({
    el: "#app",
    data() {
        return {
            mystyles: {
                backgroundColor: "#05d"
            }
        };
    },
    router,
    store,
    render: h => h(App)
}).$mount('#app');

