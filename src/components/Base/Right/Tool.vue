<!-- 右侧工具板块 -->
<template>
	<div id="r_tool" class="r_box">
		<div class="r_title">小工具</div>
		<div id="tool-box">
			<router-link :to="{name:'jzzh'}" style="background-color: #42B983;">进制转换</router-link>
			<router-link :to="{name:'randstr'}" style="background-color: #00BFFF;">随机字符串</router-link>
			<el-button type="danger">待开发...</el-button>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#tool-box{
		padding: 1rem;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	#tool-box a{
		display: inline-block;
		    line-height: 1;
		    white-space: nowrap;
		    cursor: pointer;
		    background: #FFF;
		    border: 1px solid #DCDFE6;
		    color: #606266;
		    -webkit-appearance: none;
		    text-align: center;
		    box-sizing: border-box;
		    outline: 0;
		    margin: 0;
		    transition: .1s;
		    font-weight: 500;
		    padding: 12px 20px;
		    font-size: 14px;
		    border-radius: 4px;
				text-decoration: none;
				margin-bottom: 0.5rem;
				margin-right: 0.5rem;
	}
</style>
