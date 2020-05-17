<!-- 展示博客文章列表 -->
<template>
	<div id="home_content" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
		<div class="home_card" v-for="item in arr" @click="see(item)">
			<img v-if="item[6]" :src="$g.baseUrl+'images/get.php?name='+item[6]">
			<img v-else :src="$g.baseUrl+'images/default.png'" >
			<mkd class="log_title" :initialValue='item[3]' />
			<div class="log_feet">
				<span class="land"><i class="el-icon-connection"></i>{{item[7]}}</span>
				<span class="land"><i class="el-icon-time"></i>{{item[2]}}</span>
				<span class="land"><i class="el-icon-view"></i>{{item[5]}}</span>
				<span class="land"><i class="el-icon-user-solid"></i>{{item[8]}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		get_home_data
	} from '@/network/home/home.js'
	import {
		MarkdownPreview as mkd
	} from 'vue-meditor'
	export default {
		created() {
			//如果有缓存，直接拿缓存，不需要再发送网络请求
			if (this.$store.state.home_buffer) {
				this.arr = this.$store.state.home_buffer
			} else {
				this.getdata()
			}
		},
		data() {
			return {
				loading: false,
				arr: []
			}
		},
		components: {
			mkd
			// mkd:MarkdownPreview=>require(['vue-meditor'],MarkdownPreview)
		},
		methods: {
			see(item) {
				this.$router.push({
					path: '/seelog',
					query: {
						id: item[0]
					}
				})
			},
			getdata() {
				this.loading = true
				let timeout = setTimeout(() => {
					this.loading = false
					this.$message({
						message: '加载超时',
						type: 'error'
					})
				}, this.$g.loadTimeOut)
				get_home_data().then(res => {
					// console.log(res)
					this.loading = false
					clearTimeout(timeout)
					this.$store.commit('change_homeBufer', res.data.reverse())
					this.arr = res.data
				})
			}
		}
	}
</script>

<style>
	#home_content {
		min-height: 500px;
		padding: 20px;
		background-color: rgba(255, 255, 255, .5);
	}

	.home_card {
		border-bottom: 2px solid #ccc;
		display: flex;
		padding: 20px 20px 10px;
		flex-wrap: wrap;
	}

	.home_card img {
		width: 15.625rem;
		height: 9.375rem;
		margin-right: 1rem;
	}

	.home_card .log_title {
		flex: 1;
		height: 9.375rem;
		overflow: hidden;
	}

	.home_card .log_feet {
		width: 95%;
		padding: 10px 0 0;
	}

	.home_card .log_feet span {
		padding: 10px;
	}
</style>
