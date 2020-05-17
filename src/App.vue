<template>
  <div id="app">
    <mynav/>
    <div id="app_body">
    	<router-view/>
    </div>
		 <back-top></back-top>
  </div>
</template>

<script>
	import mynav from '@/components/Base/Nav.vue'
	import backTop from '@/components/Base/BackTop.vue'
	export default{
		components:{
			mynav,
			backTop
		},
		created(){
			let load=document.getElementById('html-loading')
			if(load) load.remove()
		}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	#app{
	}
	body{
		background-image: url(assets/bg.png);
		overflow-y: scroll;
		overflow-x: auto;
	}
	#app_body{
		width: 70rem;
		margin: 0 auto;
	}
	
	::-webkit-scrollbar-track{
		background-color: pink;
	}
	::-webkit-scrollbar{
		width: 4px;
		height: 0;
		position: absolute;
	}
	::-webkit-scrollbar-thumb{
		width: 4px;
		border-radius: 10px;
		background-color: deepskyblue;
	}
	::-webkit-scrollbar-thumb:hover{
		background-color: skyblue;
	}
</style>
