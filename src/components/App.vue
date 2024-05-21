<template>
	<div id="app">
		<Header />

		<!-- view page shown here -->
		<router-view />
	</div>
</template>

<script>
export default Vue.defineComponent({
	name: "App",
	components: {
		Header: Vue.defineAsyncComponent(() =>
			loadModule("src/components/Header.vue", options),
		),
	},
	setup() {
		//set up i18n
		const {t} = VueI18n.useI18n()
		return {t}
	},
})
</script>
