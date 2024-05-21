<template>
	<div id="TopPage">
		<ArticleButtons />
	</div>
</template>

<script>
export default {
	name: "Toppage",
	components: {
		ArticleButtons: Vue.defineAsyncComponent(() =>
			loadModule("src/components/Pages/TopPage/ArticleButtons.vue", options),
		),
	},
}
</script>
