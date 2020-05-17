<!-- 首页左边内容 -->
<template>
	<div id="home_left">
		<div class="title">博客列表
			<el-button v-if="$store.state.user_info!=false"  type="primary" round @click='release'>发布</el-button>
		</div>
		<home-content />
	</div>
</template>

<script>
	// import homeContent from './Left/Content.vue'
	let homeContent = () => import('./Left/Content.vue')
	export default {
		components: {
			homeContent
		},
		methods: {
			release() {
				this.$router.push({
					path: '/release'
				})
			}
		}
	}
</script>

<style>
	#home_left {
		flex: 1;
		margin-right: 2rem;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		padding: 1.5rem 0.5rem;
	}

	#home_left .title {
		font-size: 1.2rem;
		padding: 0 0 0.625rem 0;
		border-bottom: 2px solid #e9eaed;
		margin: 0;
	}

	.home_content {}
</style>
