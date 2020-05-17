<!-- 进制转换工具 -->
<template>
	<div id="jzzh">
		<div id="jzzh_title">
			进制转换工具
		</div>
		<div id="jzzh_body">
			<div style="display: flex;">
				<el-input placeholder="请输入内容" v-model="v1" clearable @input='input1()'>
				</el-input>
				<el-select v-model="a" placeholder="请选择">
					<el-option v-for="item in options" :key="item" :label="item" :value="item">
					</el-option>
				</el-select>
			</div>
			<div style="display: flex;">
				<el-input placeholder="转换结果" v-model="v2" clearable>
				</el-input>
				<el-select v-model="b" placeholder="请选择">
					<el-option v-for="item in options" :key="item" :label="item" :value="item">
					</el-option>
				</el-select>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				v1: '',
				v2: '',
				options:this.init_options(),
				a: '10',
				b: '2'
			}
		},
		methods: {
			init_options(){
				let arr=[]
				for(let i=2;i<=36;i++){
					arr.push(i)
				}
				return arr
			},
			input1() {
				this.v2 = Number.parseInt(this.v1,this.a).toString(this.b)
			}
		}
	}
</script>

<style>
</style>
