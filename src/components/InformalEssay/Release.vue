<!-- 发布随笔 -->
<template>
	<div id="informal-essay-release">
		<el-button type="primary" plain style="margin-bottom: 1rem;" @click="back">返回</el-button>
		<el-input
		  type="textarea"
		  placeholder="请输入内容"
		  v-model="inp"
			:rows="3"
			>
		</el-input>
		<el-button type="primary" style="margin-top: 1rem;" @click="release">发布</el-button>
	</div>
</template>

<script>
	import {
		Release
	} from '@/network/InformalEssay/informal_essay.js'
	
	export default {
		created(){
			if(this.$store.state.user_info==false){
				alert("只有登录的管理员才能发布随笔")
				this.$router.push('/InformalEssay')
			}
		},
		data(){
			return {
				inp:''
			}
		},
		methods:{
			release(){
				if(!this.inp){
					this.$message({
						message:"发布的内容不能为空",
						type:"warning",
						duration:1000
					})
					return
				}
				Release(this.inp).then(res=>{
					if(res.data=="ok"){
						this.$store.commit('clear_InformalEssayBuffer')
						this.$message({
							message:"发布成功",
							type:"success",
							duration:1500
						})
						this.$router.push({
							path:'/InformalEssay'
						})
					}else{
						this.$message({
							message:"发布失败",
							type:"error",
							duration:1500
						})
						console.log(res)
					}
				})
			},
			back(){
				this.$router.push({
					path:'/InformalEssay'
				})
			}
		}
	}
</script>

<style>
</style>
