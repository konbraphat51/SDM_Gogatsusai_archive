<template>
	<div id="Header">
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
