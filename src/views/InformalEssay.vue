<!-- 随笔板块 -->
<template>
	<div id="informal-essay">
		<left />
		<right />
	</div>
</template>

<script>
	let left = () => import('@/components/InformalEssay/Left.vue')
	let right = () => import('@/components/Base/Right.vue')
	export default {
		components: {
			left,
			right
		}
	}
</script>

<style>
	#informal-essay {
		width: 75rem;
		display: flex;
		margin: 3rem auto;
	}
</style>
