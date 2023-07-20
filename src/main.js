import Vue from 'vue'
import App from '@/App.vue'
import router from "@/utils/router";
import axios from '@/utils/axios'
import vuetify from '@/utils/vuetify'
import dayjs from '@/utils/dayjs'
import Nprogress from '@/utils/nprogress'

new Vue({
    router,
    vuetify,
    axios,
    render: h => h(App)
}).$mount('#app')
