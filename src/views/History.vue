<!-- 历史板块 -->
<template>
	<div id="history">
		 <time-axis/>
		 <right/>
	</div>
</template>

<script>
	 // import timeAxis from '@/components/History/Left.vue'
	 // import right from '@/components/Base/Right.vue'
	 let timeAxis=()=>import('@/components/History/Left.vue')
	 let right=()=>import('@/components/Base/Right.vue')
	 export default{
		 components:{
			 timeAxis,
			 right
		 }
	 }
</script>

<style>
	#history{
		width: 75rem;
		display: flex;
		margin: 3rem auto;
	}
</style>
