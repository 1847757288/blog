<!-- 工具板块 -->
<template>
	<div id="tool">
		<div id="tool_body">
			<div class="tool_title">
				工具
			</div>
			<router-view></router-view>
		</div>
		<right/>
	</div>
</template>

<script>
	let right=()=>import('@/components/Base/Right.vue')
	export default{
			 components:{
				 right
			 }
	}
</script>

<style>
	#tool{
		width: 75rem;
		display: flex;
		margin: 3rem auto;
	}
</style>
