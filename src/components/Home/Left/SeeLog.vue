<template>
	<div id="see">
		<div class="location">
			<span class="a">你现在的位置是:</span><span class="b" @click="$router.push('/')">主页</span>-><span class="c">{{title}}</span>
		</div>
		<mkd :initialValue='text' theme='oneDark' />
		<setup v-if="$store.state.user_info!=false" @download='download()' @del='del()' :id='this.$route.query.id' />
	</div>
</template>

<script>
	import {
		MarkdownPreview as mkd
	} from 'vue-meditor'
	import {
		DelHomeLog,
		DownLoad,
		GetHomeLogById
	} from '@/network/home/home.js'

	import setup from './Set.vue'
	export default {
		components: {
			mkd,
			setup
		},
		created() {
			this.getdata(this.$route.query.id)
		},
		data() {
			return {
				text: '',
				id: this.$route.query.id,
				title: ''
			}
		},
		methods: {
			getdata(id) {
				let buffer = this.$store.state.home_buffer
				//缓存里有数据直接从缓存拿，用户刷新浏览器则缓存清空，就需要手动请求数据
				if (!buffer) {
					GetHomeLogById(id).then(res => {
						this.title = res.data.title
						this.text = res.data.text
					})
				} else {
					for (let i = 0, l = buffer.length; i < l; i++) {
						if (buffer[i][0] == id) {
							this.title = buffer[i][1]
							this.text = buffer[i][3]
						}
					}
				}
			},
			download() {
				if (this.$store.state.user_info == false) {
					this.$message({
						type: 'error',
						message: '请先登录!',
						duration: 1000
					})
					return
				}
				this.$confirm('确定下载?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					lockScroll: false
				}).then(() => {
					DownLoad(this.id, this.title)
				}).catch(() => {});

			},
			del() {
				if (this.$store.state.user_info == false) {
					this.$message({
						type: 'error',
						message: '请先登录!',
						duration: 1000
					})
					return
				}
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					lockScroll: false
				}).then(() => {
					DelHomeLog(this.id).then(data => {
						if (data.data == 'ok') {
							this.$store.commit('clear_homeBuffer')
							this.$message({
								type: 'success',
								message: '删除成功!',
								duration: 1000
							})
							this.$router.push('/')
						} else {
							this.$message({
								type: 'error',
								message: '删除失败!',
								duration: 1500
							})
						}
					})
				}).catch(() => {});
			},
		}
	}
</script>

<style>
	#see {
		margin: 0 0 200px;
	}
	#see .location{
		padding: 3px 10px;
	}
	#see .location .a{
		
	}
	#see .location .b:hover{
		color: red;
		cursor: pointer;
		text-decoration: underline;
	}
	#see .location .c{
		color: red;
		cursor: pointer;
	}
</style>
