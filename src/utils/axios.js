import axios from "axios";
import NProgress from "@/utils/nprogress";
import VueAxios from 'vue-axios'
import Vue from "vue";

Vue.use(VueAxios, axios);

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
axios.interceptors.request.use((config) => {
    NProgress.start()
    return config
})
axios.interceptors.response.use(
    (response) => {
        NProgress.done()
        return response
    },
    (error) => {
        console.error(error)
        NProgress.done()
    }
)
export default axios;
