<!-- 随机字符串 -->
<template>
	<div id="tool-randstr">
		<el-input v-model="text" placeholder="" id="rand-str-inp"></el-input>
		<el-button type="primary" @click='get'>获取</el-button>
		<el-button type="primary" @click='copy($event)'>复制到剪贴板</el-button>
	</div>
</template>

<script>
	import {
		RandStr1
	} from '@/network/Tool/Tool.js'
	export default {
		created() {
			this.get()
		},
		data() {
			return {
				text: '',
				able:false
			}
		},
		methods: {
			get(e) {
				if(this.able==true){
					this.$message({
						message: '一秒只能获取一次',
						type: 'error',
						duration: 1500
					})
					return
				}
				this.able=true
				setTimeout(()=>this.able=false,1000)
				RandStr1().then(res => {
					this.text = res.data
				})
			},
			copy() {
				let inp=document.getElementById('rand-str-inp')
				inp.select()
				document.execCommand('copy');
				this.$message({
					message: '复制成功',
					type: 'success',
					duration: 1000
				})
			}
		}
	}
</script>

<style>
</style>
