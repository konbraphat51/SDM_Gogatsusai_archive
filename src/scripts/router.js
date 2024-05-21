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

			path: "/car2022",
			name: "Car2022",
			component: Vue.defineAsyncComponent(() =>
				loadModule("src/components/Pages/Car2022/Car2022.vue", options),
			),
		},
	],
})
