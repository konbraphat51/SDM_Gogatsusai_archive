const router = VueRouter.createRouter({
    mode: "hash",
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "FirstPage",
            component: Vue.defineAsyncComponent(() => loadModule("src/components/Pages/FirstPage.vue", options))    //default page
        },
        {
            path: "/second",
            name: "SecondPage",
            component: Vue.defineAsyncComponent(() => loadModule("src/components/Pages/SecondPage.vue", options))
        },
    ]
})