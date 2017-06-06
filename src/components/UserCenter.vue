/**
 * 个人中心
 */
<template>
	<div id="userCenter" class="uk-offcanvas">
		    <div class="uk-offcanvas-bar uk-offcanvas-bar-flip usercenter-box">
		    	<header>
		    		<div class="button-img">
		    			<div class="user-img">
		    				<img src="../assets/img/g.png" alt="">
		    			</div>
		    			<span class="motto-edit">
		    				<img src="../assets/img/edit.png">
		    			</span>
		    			<span class="motto-edit" id="img-moon">
		    				<img src="../assets/img/moon.png">
		    			</span>
		    		</div>
		    		<div class="motto-box">
		    			<span class="motto-content">
		    				都是时辰的错
		    			</span>
		    			
		    		</div>
		    	</header>
		    	<ul class="menu uk-nav">
				    <li><i class="fa fa-clock-o"></i>最近浏览</li>
				    <li><i class="fa fa-star-o"></i>我的收藏</li>
				   <li><i class="fa fa-trash-o"></i>清空浏览记录</li>
				   <li><i class="fa fa-cog"></i>主题设置</li>
				</ul>
		    </div>
	</div>	
</template>

<script>
	export default {
		name:"userCenter",
	}
</script>

<style scoped>
	.usercenter-box{
		background: #F5F5F5;
		width: 280px;
		box-shadow: 0 0  5px 5px rgba(0,0,0,0.3);
	}
	
	.usercenter-box::after{
	    display: none;
	}

	.usercenter-box header{
		height: 180px;
		width: 100%;
		background:url(../assets/img/headerGreen.jpg);
		overflow: hidden;
		font-family:"微软雅黑";
	}
	.usercenter-box .button-img{
		width:100%;
		height:100px;
	}
	
	.usercenter-box .user-img{
		width: 80px;
		height: 80px;
		overflow: hidden;
		border-radius: 50px;
		margin: 10px 50px 10px 10px;
		padding:10px;
		float:left;
	}

	.usercenter-box img{
		width: 100%;
		height: 100%;
	}

	.usercenter-box .menu{
		padding: 0;
		margin: 10px auto;
		width: 100%;
		font-size: 18px;
		color:#565756;
		font-family:"微软雅黑";
	}

	.usercenter-box .menu i{
		font-size: 20px;
		margin-right: 20px;
	}
	.usercenter-box .menu>li{
		height: 48px;
		line-height: 48px;
		padding: 0 10px;
		background: #efecec;
		-webkit-touch-callout:none;
		-webkit-user-select:none;
		-khtml-user-select:none;
		-moz-user-select:none;
		-ms-user-select:none;
		user-select:none;
		border:none;
	}

	.usercenter-box .menu>li::after{
		float: right;
		color: #EBEBEB;
	}
	.usercenter-box .menu>li:hover{
		font-family:"微软雅黑";
		color: #89c348;
		background:#d2d2d2;
	}
	/*.usercenter-box .menu>li:active{
		background: #F5F5F5;
	}
	.usercenter-box .menu>li+li{
		border-bottom: 1px solid #ccc;
	}

	.usercenter-box .menu>li:nth-child(1){
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #ccc;
	}*/

	.motto-box{
		margin: 10px;
		font-size: 18px;
		line-height: 20px;
		color: #fff;
	}

	.motto-content{
		width: 200px;
		height: 20px;
		display: inline-block;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		padding-left:10px;
	}

	.motto-edit{
		width:20px;
		height:20px;
		display: inline-block;
		overflow: hidden;
		float:left;
		margin:20px 15px;
		color:#fff;
	}
</style>