<!-- 回到顶部按钮 -->
<template>
	<div id="backtop" class="el-icon-caret-top">
	</div>
</template>

<script>
	export default {
		mounted() {
			this.init_backtop()
		},
		methods: {
			init_backtop() {
				let obtn = document.getElementById('backtop'); //获取回到顶部按钮的ID

				let timer = null; //定义一个定时器
				let isTop = true; //定义一个布尔值，用于判断是否到达顶部

				window.onscroll = function() { //滚动条滚动事件
					let clientHeight = document.documentElement.clientHeight; //获取可视区域的高度
					//获取滚动条的滚动高度
					let osTop = document.documentElement.scrollTop || document.body.scrollTop;

					//主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
					if (!isTop) {

						clearInterval(timer);
					}
					isTop = false;

				}

				obtn.onclick = function() { //回到顶部按钮点击事件
					//设置一个定时器
					timer = setInterval(function() {
						//获取滚动条的滚动高度
						let osTop = document.documentElement.scrollTop || document.body.scrollTop;
						//用于设置速度差，产生缓动的效果
						let speed = Math.floor(-osTop / 10);
						document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
						isTop = true; //用于阻止滚动事件清除定时器
						if (osTop <= 1) {
							clearInterval(timer);
						}
					}, 20);
				}
			}
		}
	}
</script>

<style>
	#backtop {
		position: fixed;
		background-color: #fff;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		color: #409eff;
		font-size: 20px;
		box-shadow: 0 0 6px rgba(0, 0, 0, .12);
		cursor: pointer;
		z-index: 5;
		right: 50px;
		bottom: 50px;
		text-align: center;
		line-height: 40px;
	}
</style>
