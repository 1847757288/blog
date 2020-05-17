<!-- 主页板块 -->
<template>
	<div id="home">
		<home-left/>
		<right/>
	</div>
</template>

<script>
	import homeLeft from './../components/Home/Left.vue'
	import right from './../components/Base/Right.vue'
	// let homeLeft=()=>import('./../components/Home/Left.vue')
	// let right=()=>import('./../components/Base/Right.vue')
	export default {
		components:{
			homeLeft,
			right
		}
	}
</script>

<style>
	#home {
		width: 75rem;
		display: flex;
		margin: 3rem auto;
	}
</style>
