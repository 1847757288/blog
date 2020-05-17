<template>
	<div id="home_right">
		<love />
		<r-tool />
	</div>
</template>

<script>
	let love = () => import('./Right/love.vue')
	let rTool = () => import('./Right/Tool.vue')
	export default {
		components: {
			love,
			rTool
		}
	}
</script>

<style>
	#home_right {
		margin-left: auto;
		width: 18.75rem;
		height: 100%;
		/* position: sticky; */
		/* top: 220px; */
	}
</style>
