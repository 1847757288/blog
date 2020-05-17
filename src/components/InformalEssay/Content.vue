<template>
	<div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
		<el-button type="primary" round @click='release'>发布</el-button>
		<h1 style="text-align: center;">心情随笔</h1>
		<div class="sb_box">
			<el-timeline>
				<el-timeline-item v-for='(item,index) in arr' :key="index" :timestamp="item[1]" placement="top">
					<el-card>
						<p>{{item[2]}}</p>
					</el-card>
				</el-timeline-item>
			</el-timeline>
		</div>
	</div>
</template>

<script>
	import {
		Get
	} from '@/network/InformalEssay/informal_essay.js'
	export default {
		created() {
			//如果缓存有，直接拿缓存
			if (this.$store.state.informal_essay_buffer) {
				this.arr = this.$store.state.informal_essay_buffer
			} else {
				this.getdata()
			}
		},
		methods: {
			getdata() {
				this.loading = true
				let timeout = setTimeout(() => {
					this.$message({
						message: '加载超时',
						type: 'error'
					})
					this.loading = false
				}, this.$g.loadTimeOut)
				Get().then(res => {
					this.loading = false
					clearTimeout(timeout)
					this.$store.commit('change_InformalEssayBuffer', res.data.reverse())
					this.arr = res.data
				})
			},
			release() {
				this.$router.push({
					path: '/InformalEssay/release'
				})
			}
		},
		data() {
			return {
				loading: false,
				arr: []
			}
		}
	}
</script>

<style>

</style>
