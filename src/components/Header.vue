/**
 * @author yibingxiong yibingxiong@126.com
 * @description 公共头
 */

<template>
   <header class='header'>
  <!--  <div class="uk-autocomplete uk-form"  id='auto'>
    <input type="text">
	</div> -->
   	<img src="../assets/img/logo108x35_black.png" alt='爱奇艺'>
   	<div class='search-box'>
   		<div class="input-box uk-autocomplete" id="auto">
   			<input id='search-text' type='text' name='search' class='search-text' :class="{'isSearch':isSearch}"/>  			
   		</div>  		
   		<span class='search-icon' @click='changeSearchStatus' :class="{'search-icon-rotate':isSearch}">
   			<i class="fa fa-search fa-lg"></i>
   		</span>       		
   	</div>

   	<div class='icon-box'>      		
       	<button class='user-icon' data-uk-offcanvas="{target:'#userCenter'}">
       		<i class="fa fa-bars fa-lg"></i>
       	</button>	
   	</div>
	<!-- 用户中心 -->
	<user-center></user-center>
	</div>
   </header>	
</template>

<script>
	import Vue from 'vue'
	import '../public/font-awesome-4.7.0/css/font-awesome.min.css'
	import '../../node_modules/uikit/dist/js/components/autocomplete.js'
	import '../../node_modules/uikit/dist/css/components/autocomplete.css'
	import UserCenter from './UserCenter'
	import Util from '../public/Util'
	import router from '../router'
	export default {
		name:'header',
		mounted(){
			var element = document.getElementById('auto');
			var autocomplete = 
			UIkit.autocomplete(element, 
				{source: [
				{value:"哈哈哈方f法芳"},{value:"哈哈哈方a法芳"},{value:"哈哈哈方法f芳f"},{value:"哈哈哈方s法芳"}
				]});
		},
		data:function(){
			return {'isSearch':false};
		},
		components:{
			UserCenter:UserCenter,
		},
		methods:{
			changeSearchStatus:function(){
				var isSearch = this.isSearch;
				if(!isSearch){				
					this.isSearch = true;
				}else{
					let searchText = document.getElementById('search-text');
					let keyWords = searchText.value.trim();
					if(keyWords == ""){
						keyWords = "最新";
					}
					let self = this;
					let saveData = {};
					saveData.keyWords = keyWords;
					saveData.time = (new Date()).getTime();
					dbUtil.add("searchHistory",[saveData]);
					Util.get('http://iface.qiyi.com/openapi/realtime/search',{key:keyWords,from:'mobile_list',page_size:30},function(data){
						var obj = {};
						obj.video_list = data.data;
						self.$store.commit('getChannelVideoList',obj);
					});
					router.push({name:'search'})
				}
			},
			changeFocus:function(newValue,oldValue){
				//这是一件糟糕的事，请帮忙想个好方法
				let searchText = document.getElementById('search-text');
				if(newValue){				
					searchText.focus();
				}
			}
		},

		watch:{
			'isSearch':'changeFocus'
		}
	}
</script>

<style type="text/css" scoped>
	.header{
		width: 100%;
		height: 40px;
		background:#222222;
		display: box;              /* OLD - Android 4.4- */
		display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
		display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
		display: -ms-flexbox;      /* TWEENER - IE 10 */
		display: -webkit-flex;     /* NEW - Chrome */
		display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
		/* 09版 */
		-webkit-box-align: center;
		/* 12版 */
		-webkit-align-items: center;
		-moz-align-items: center;
		-ms-align-items: center;
		-o-align-items: center;
		align-items: center;
		position: relative;
	}

	.header img{
		margin: 0 10px;
		height: 60%;
		width: auto;
		display: inline-block;
		float: left;
		/* 09版 */
		-webkit-box-align: center;
		/* 12版 */
		-webkit-align-self: center;
		-moz-align-self: center;
		-ms-align-self: center;
		-o-align-self: center;
		align-self: center;

	}

	.header .icon-box{
		display: box;              /* OLD - Android 4.4- */
	  	display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
	  	display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
	  	display: -ms-flexbox;      /* TWEENER - IE 10 */
	  	display: -webkit-flex;     /* NEW - Chrome */
	  	display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
		height: 100%;
		/* 09版 */
		-webkit-box-align: center;
		/* 12版 */
		-webkit-align-items: center;
		-moz-align-items: center;
		-ms-align-items: center;
		-o-align-items: center;
		align-items: center;
		width: 40px;
		justify-content: space-around;
		-webkit-justify-content: space-around;
		position: absolute;
		right: 0;
	}

	.header .user-icon{
		color: #ccc;
		-webkit-box-flex: 1;      /* OLD - iOS 6-, Safari 3.1-6 */
	  	-moz-box-flex: 1;         /* OLD - Firefox 19- */
	  	-webkit-flex: 1;          /* Chrome */
	  	-ms-flex: 1;              /* IE 10 */
	  	flex: 1;  
	  	background: none;
		border: none;
	}

	.header .search-icon{
		color: #ccc;
		z-index: 30;
		display: inline-block;
		transition: all 0.4s ease;
	}

	.header .search-icon-rotate{
		transform: rotate(361deg);
		-webkit-transform: rotate(361deg);
	}

	.search-box .search-text{
		width: 0px;
		height: 24px;
		outline: none;
		border: none;
		display: inline-block;
		box-sizing: border-box;
		border-radius: 2px;
		transition: width .4s ease-out;
		z-index: 2000;
	}

	/*
		搜索状态，展开
	 */
	.search-box .isSearch{
		padding: 0 4px;
		width: 200px;
	}

	.search-text:focus{
		box-shadow: 0 0 5px #ccc;
	}
</style>