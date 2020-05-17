<!-- 在主页发表文章 -->
<template>
	<div id="home_release">
		<div class="tijiao">
			<div class="" style="margin: 0 0 1rem 0; ">
				注:必须有一个标题，必须且只能上传一个md文件
			</div>
			<div class="">
				<el-input v-model="input" placeholder="请输入标题" class="title"></el-input>
			</div>

			<div class="upmd">
				<el-upload 
				:on-change='onchange' 
				:auto-upload=false 
				class="upload-demo" 
				:action="this.$g.baseUrl+'home/upfile.php'" 
				:on-remove="handleRemove" 
				:on-success="handleSuccess" 
				ref="upload" 
				:before-upload="beforeAvatarUpload" 
				:with-credentials=true 
				:on-exceed='chaochu' 
				:file-list="filelist"   
				>
					<el-button size="small" type="primary">上传讲义</el-button>
					<div slot="tip" class="tip" v-if="filelist.length==0">*请上传一个MD文件</div>
					<div slot="tip" class="el-upload__tip" v-if="false">讲义只能是.md文件</div>
				</el-upload>
			</div>
			<el-button type="primary" round @click='sub()' class="sub" :disabled="filelist.length!=1||input.length==0">提交</el-button>
		</div>
	</div>
</template>

<script>
	import {
		home_sub
	} from '@/network/home/home.js'
	
	export default {
		created(){
			if(this.$store.state.user_info==false){
				alert("只有登录的管理员才能发布日志")
				this.$router.push('/')
			}
		},
		data() {
			return {
				input: '',
				filelist: [],
				upmd:false,
				value:''
			}
		},
		methods: {
			sub() {
				if (!this.input) {
					this.$message({
						message: '请输入标题',
						type: 'warning'
					})
					return
				}
				this.$refs.upload.submit()
			},
			handleRemove(file, fileList) {
				this.filelist = fileList
			},
			handleSuccess(response, file, fileList) {
				if (response == 'ok') {
					home_sub(this.input).then(data => {
						if (data.data == 'ok') {
							this.$message({
								message: '发布成功！',
								type: 'success'
							})
							this.$store.commit('clear_homeBuffer')
							this.$router.push('/')
						}
					})
				} else {
					this.$message({
						message: '发布失败',
						type: 'error'
					})
				}
			},
			beforeAvatarUpload(file) {
				console.log(this.$g)
				let name = file.name
				if (name.substr(name.length - 3) != '.md') {
					this.$message({
						message: '讲义只能是.md文件',
						type: 'warning'
					})
					return false
				} else {
					return true
				}
			},
			chaochu() {
				this.$message({
					message: '只允许上传一个文件',
					type: 'warning'
				})
			},
			onchange(file, fileList) {
				this.filelist = fileList
			}
		}
	}
</script>

<style>
	.title {
		display: block;
		margin: 0 auto 2rem;
	}

	.tijiao {
	}

	.upload-demo {
		/* display: inline-block; */
	}

	.sub {
		margin: 2rem;
	}
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    height: 178px;
	    line-height: 178px;
	    text-align: center;
	  }
	  .avatar {
	    width: 178px;
	    height: 178px;
	    display: block;
	  }
		.tip{
			color: red;
			display: inline-block;
			font-size: 0.875rem;
			padding: 0 0.5rem;
		}
</style>
