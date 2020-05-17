<!-- 我和ta -->
<template>
	<div id="loveyou" class="r_box">
		<div class="r_title">我&ta</div>
		<div id="mylove">
			<div id="he">
				<!-- <img :src="this.$g.baseUrl+'img/he.jpg'"> -->
				<img :src="this.$g.baseUrl+'images/get.php?name=dog.png'">
			</div>
			<!-- <div id="heart">❤</div> -->
			<div id="heart"><i class="el-icon-loading"></i></div>
			<div id="she">
				<img :src="this.$g.baseUrl+'images/get.php?name=she.jpg'">
			</div>
		</div>
		<!-- <p id="love_time">{{time}}</p>
		<p id="love_text">--For In Love</p> -->
		<p id="noGirlFirend">单身，求带走</p>
	</div>
</template>

<script>
	export default {
		created() {
			// let ago = new Date("2002-7-24");
			// let getLoveTime = () => {
			// 	let now = new Date();
			// 	let time = Math.abs(Math.floor((ago.getTime() - now.getTime()) / 1000));
			// 	let day = Math.floor(time / (24 * 60 * 60));
			// 	let hour = Math.floor(time / (60 * 60) % 24);
			// 	let min = Math.floor(time / 60 % 60);
			// 	let smt = Math.floor(time % 60);
			// 	this.time = day + '天' + hour + '时' + min + '分' + smt + '秒'
			// }
			// getLoveTime()
			// setInterval(getLoveTime, 1000)

		},
		data() {
			return {
				time: ''
			}
		}
	}
</script>

<style>
	.r_box {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
		margin-bottom: 2rem;
	}

	.r_title {
		font-size: 1.25rem;
		padding: 20px 10px 5px;
		border-bottom: 2px solid #ccc;
	}
#loveyou{
	background-color: rgba(255,255,255,.3);
}
	#mylove {
		display: flex;
		justify-content: center;
	}

	#he,
	#she {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		border: 3px solid #eee;
		padding: 5px;
		display: inline-block;
		overflow: hidden;
	}

	#he img,
	#she img {
		width: 60px;
	}

	#heart {
		width: 100px;
		height: 40px;
		margin: 0 10px;
		border-bottom: 1px solid pink;
		color: pink;
		text-align: center;
		line-height: 80px;
	}

	#love_time {
		color: pink;
		padding: 5px 30px;
		font-size: 1.3rem;
	}

	#love_text {
		color: pink;
		padding: 0 25px 0 0;
		font-size: 1.2rem;
		text-align: right;
	}
	#noGirlFirend{
		color: pink;
		font-size: 1.25rem;
		padding: 5px 30px;
	}
</style>
