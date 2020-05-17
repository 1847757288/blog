<!-- 博客设置按钮 -->
<template>
	<div id="set">
		<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
			设置
		</el-button>
		<el-drawer
		  :visible.sync="drawer"
		  direction="btt"
		  size="50%">
			<div class="drawer_buts">
				<el-button type="danger" @click='del()'>删除</el-button>
				<el-button type="success" @click='download()' style="margin: 0;">下载</el-button>
				<div>
					<el-upload
					  :action="this.$g.baseUrl+'home/up_home_log_fm.php'"
						:before-upload="before_upfm"
						:on-success="upfm_success"
						:data='{id}'
						:show-file-list=false
						>
					  <el-button size="medium" type="primary" class="upfm">上传封面</el-button>
						</el-upload>
				</div>
				<div>
					<el-upload
					  :action="this.$g.baseUrl+'home/upmd.php'"
						:before-upload="before_upmd"
						:on-success="upmd_success"
						:data='{id}'
						:show-file-list=false
						>
					  <el-button size="medium" type="primary" class="upfm">更新讲义</el-button>
						</el-upload>
				</div>
			</div>
		</el-drawer>
	</div>
</template>

<script>
		export default {
			data() {
				return {
					drawer: false,
				}
			},
			methods:{
				del(){
					this.$emit('del')
				},
				download(){
					this.$emit('download')
				},
				upfm_success(response){
					if(response=='ok'){
						this.$store.commit('clear_homeBuffer')
						this.$message({
							message: '上传成功',
							type: 'success',
							duration:500
						})
						this.drawer=false
					}else{
						this.$message({
							message: '上传失败',
							type: 'error',
							duration:1500
						})
						console.log("response:"+response)
					}
				},
				before_upfm(file){
					if (file.type!="image/jpeg"&&file.type!="image/png") {
						this.$message({
							message: '只能上传jpg或png',
							type: 'warning'
						})
						return false
					} else {
						return true
					}
				},
				upmd_success(response){
						if(response=='ok'){
							this.$message({
								message: '上传成功',
								type: 'success',
								duration:500
							})
							this.$router.push('/')
						}else{
							this.$message({
								message: '上传失败',
								type: 'error',
								duration:1500
							})
							console.log("response:"+response)
						}
				},
				before_upmd(file){
					let hzm=file.name
					hzm=hzm.substr(hzm.length-3)
						if (hzm!='.md') {
							this.$message({
								message: '只能上传jpg或png',
								type: 'warning'
							})
							return false
						} else {
							return true
						}
					
				}
			},
			props:{
				id:{
					type:Number|String,
					default:'-1'
				}
			}
		}
</script>

<style>
	.drawer_buts{
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
	.upfm{
		padding:0.75rem 1.25rem !important;
	}
</style>
