import { createApp } from "vue";
import App from "./App.vue";
import "nprogress/nprogress.css";

import { createRouter, createWebHistory } from "vue-router";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Logout from "./components/Logout.vue";
import Phuket from "./components/Phuket.vue";
import Chiang_Mai from "./components/Chiangmai.vue";
import Pai from "./components/Pai.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/login" },
        { path: "/register", component: Register },
        { path: "/login", component: Login },
        { path: "/logout", component: Logout,  meta: { requireAuthen: true } },
        { path: "/phuket", component: Phuket},
        { path: "/chiangmai", component: Chiang_Mai},
        { path: "/pai", component: Pai}
    ],
});

router.beforeEach(function (to, from, next) {
    if (to.meta.requireAuthen) {
        if (app.config.globalProperties.$authenticated) {
            next();
        }
        else {
          alert("Please login first");
          next("/login");  
        }
    }
    else {
        next();
    }
})

const app = createApp(App);
app.use(router);
app.mount('#app');

app.config.globalProperties.$displayName = "";
app.config.globalProperties.$idToken = "";
app.config.globalProperties.$expiresIn = "";
app.config.globalProperties.$authenticated = "";

export { app };