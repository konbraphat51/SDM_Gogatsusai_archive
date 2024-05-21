<template>
	<div id="Header">
		<button @click="$router.push('/')">Home</button>
		<LanguageSelection />
	</div>
</template>
<script>
export default {
	name: "Header",
	components: {
		LanguageSelection: Vue.defineAsyncComponent(() =>
			loadModule("src/components/LanguageSelection.vue", options),
		),
	},
}
</script>
