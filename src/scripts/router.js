const router = VueRouter.createRouter({
	mode: "hash",
	history: VueRouter.createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "TopPage",
			component: Vue.defineAsyncComponent(() =>
				loadModule("src/components/Pages/TopPage.vue", options),
			), //default page
		},
	],
})
