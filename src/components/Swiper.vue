/**
 * @author yibinxiong yibingxiong@126.com
 * @description 轮播
 */

<template>
 	<!-- Slider main container -->
	<div class="swiper-container">
	    <!-- Additional required wrapper -->
	    <div class="swiper-wrapper">
	        <!-- Slides -->
	        <div class="swiper-slide" v-for="item in swiperData">
	        	<img :src="item.img+'?sigin=iqiyi'" alt=""   @click="playVideo(item)">
	        </div>
	    </div>
	    <!-- If we need pagination -->
	    <div class="swiper-pagination"></div>	    
	    <!-- If we need navigation buttons -->
	</div>
</template>

<script>
import '../../node_modules/swiper/dist/js/swiper.jquery.min.js'
import '../../node_modules/swiper/dist/js/swiper.min.js'
import '../../node_modules/swiper/dist/css/swiper.min.css'
import Vue from 'vue'
import Methods from '../public/Methods.js'
let mySwiper;
export default {
	mounted(){
		this.createSwiper();
	},
	methods:{
		createSwiper:function(){
		 mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',			//滚动方向
		    loop: true,							//循环
		    pagination: '.swiper-pagination',	//控制点
		    nextButton: '.swiper-button-next',	//下一个
		    prevButton: '.swiper-button-prev',	//上一个
		    autoplay:2500,						//自动播放时间
		    effect : 'slide',					//播放效果
			speed:600,	          				//速度
			preloadImages:false,
			initialSlide :0,
		    observer:true,//修改swiper自己或子元素时，自动初始化swiper
		    observeParents:true//修改swiper的父元素时，自动初始化swiper
		  });
		},
		...Methods,
	},
	computed:{
		swiperData(){
			try{
				if(this.$store.state.recommendVideoList[0]['video_list']){
				return this.$store.state.recommendVideoList[0]['video_list'];	
				}		
			}catch(e){
				
			}
							
		}
	}
}
</script>

<style type="text/css" scoped>
.swiper-container .swiper-slide{
	width: 100%;
	height: 140px;
}

.swiper-container .swiper-pagination-bullet{
	background: rgba(255,255,255,0.8);
}

.swiper-container [class^=swiper-button]{
	background-image: unset;
	background-image:none;
	color: rgba(255,240,240,0.7);
}

.swiper-container .swiper-slide img{
	width: 100%;
	height: 100%;
}	
</style>