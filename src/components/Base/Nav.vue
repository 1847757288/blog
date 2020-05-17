<!-- 顶部导航 -->
<template>
	<div id="top_nav">
		<div id="nav_box">
			<router-link to="/" class="blog_name">胡立鹏的个人博客</router-link>
			<router-link to="/">首页</router-link>
			<router-link to="/history">历史</router-link>
			<router-link v-if="$store.state.user_info!=false" to="/diary">日记</router-link>
			<router-link to="/InformalEssay">随笔</router-link>
			<router-link to="/About">关于我</router-link>
			<login />
		</div>
	</div>
</template>

<script>
	// import login from '@/components/Base/Login.vue'
	let login = () => import('@/components/Base/Login.vue')
	import {
		GetUserInfo
	} from '@/network/home/home.js'
	export default {
		name: 'homenav',
		components: {
			login
		},
		created() {
			this.$GetUserInfo()
		},
		methods: {
			$GetUserInfo() {
				GetUserInfo().then(data => {
					if (data.data) {
						this.$store.commit('chageUserInfo', data.data)
					}
				})
			}
		}
	}
</script>

<style>
	#top_nav {
		position: sticky;
		top: 0;
		z-index: 5;
		background-color: rgba(0, 0, 0, .8);
		height: 50px;
		line-height: 50px;
	}

	#nav_box {
		width: 70rem;
		margin: 0 auto;
		display: flex;
		justify-content: flex-end;
		align-content: center;
	}

	#nav_box a {
		color: #fff;
		font-size: 1.2rem;
		padding: 0 1rem;
		font-weight: 300;
		height: 50px;
		text-decoration: none;
	}

	#nav_box .blog_name {
		margin: 0 auto 0 0;
		font-weight: 500;
		padding: 0;
	}
</style>
