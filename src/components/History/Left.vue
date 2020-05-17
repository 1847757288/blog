<!-- 历史左边(正文) -->
<template>
	<div id="timeaxis" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
		<span v-if="$store.state.user_info==false"></span>
		<el-button v-else type="primary" plain @click='add=true'>添加</el-button>
		<h1 id="history_title">博客历史</h1>
		<el-timeline :reverse="true">
			<el-timeline-item v-for="(item, index) in arr" :key="index" :timestamp="item[1]">
				{{item[2]}}
			</el-timeline-item>
		</el-timeline>
		<el-dialog title="书写历史" :visible.sync="add">
			<el-form>
				<el-form-item label="选择发布时间" label-width="100px">
					<el-date-picker v-model="time" type="date" placeholder="选择日期" :picker-options="pickerOptions" value-format="yyyy-MM-dd" :editable=false>
					</el-date-picker>
				</el-form-item>
				<el-form-item label="发布的文字" label-width="100px">
					<el-input v-model="text" autocomplete="off"></el-input>
				</el-form-item>

			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="add = false">取 消</el-button>
				<el-button type="primary" @click="sub()">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import {
		GetHistory,
		AddHistory
	} from '@/network/history/history.js'
	export default {
		created() {
			//如果有缓存，直接拿缓存，不需要再发送网络请求
			if(this.$store.state.history_buffer){
				this.arr=this.$store.state.history_buffer
			}else{
			this.getdata()
			}
		},
		data() {
			return {
				loading: false,
				arr: [],
				add: false,
				time: '',
				text: '',
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
				activities: [{
						content: '由于觉得原来的博客界面不好看，于是花了一天时间再次重构，将页面风格优化',
						timestamp: '2018-05-5'
					},
					{
						content: '购买了腾讯云服务器，并将博客项目第一次放在互联网上',
						timestamp: '2018-05-4'
					}, {
						content: '使用Vue重构的博客项目出炉，并且使用PHP作为服务器接口（写接口好累）',
						timestamp: '2018-04-24'
					},
					{
						content: '开始使用Vue重构博客项目',
						timestamp: '2018-04-21'
					}, {
						content: '第一个基于node.js作为服务器的博客出炉，但是没有继续维护，功能也很少',
						timestamp: '2020-3-24'
					}, {
						content: '有着写博客项目的想法',
						timestamp: '2020-03-20'
					}
				]
			};
		},
		methods: {
			getdata() {
				let timeout=setTimeout(()=>{
					this.$message({
						message: '加载超时',
						type: 'error'
					})
					},this.$g.loadTimeOut)
				this.loading = true
				GetHistory().then(res => {
					clearTimeout(timeout)
					this.loading = false
					if ((typeof res.data) == 'object') {
						this.$store.commit('change_historyBufer',res.data)
						this.arr = res.data
					} else {

					}

				})
			},
			sub() {
				if (this.$store.state.user_info == false) {
					this.$message({
						message: '请登录！',
						type: 'warning',
						duration: 1500
					})
					return
				}
				let time = this.time
				let text = this.text
				if (!(time && text)) {
					this.$message({
						message: '内容不能为空',
						type: 'warning',
						duration: 1500
					})
					return
				} else {
					AddHistory(time, text).then(res => {
						if (res.data == 'ok') {
							this.getdata()
							this.add = false
							this.time = ''
							this.text = ''
							this.$message({
								message: '历史已书写',
								type: 'success',
								duration: 1000
							})
						} else {
							this.$message({
								message: '历史书写失败',
								type: 'error',
								duration: 2000
							})
							console.log(res)
						}
					})
				}
			}
		}
	}
</script>

<style>
	#timeaxis {
		flex: 1;
		margin-right: 2rem;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		padding: 1.5rem 0.5rem;
		min-height: 450px;
	}

	#history_title {
		text-align: center;
		padding: 0 0 2rem 0;
	}
</style>
