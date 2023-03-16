require('./bootstrap')

import axios from "axios";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueProgressBar from "@aacassandra/vue3-progressbar";
import Swal from 'sweetalert2';

// Fire
// let Fire = new Vue();
// window.Fire = Fire;


// Sweet Alert
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
});
window.Toast = Toast;




axios.defaults.withCredentials = true;

const options = {
    color: 'rgb(141,255,199)',
    failedColor: 'red',
    thickness: "5px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 300,
    },
    autoRevert: true,
    location: "top",
    inverse: false,
};

createApp(App)
    .use(VueProgressBar, options)
    .use(router)
    .use(store)
    .mount("#app");