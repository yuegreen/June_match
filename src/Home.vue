/**
 * @author yibingxiong yibingxiong@126.com
 * @description 首页、推荐、排行榜
 */

<template>
	<div>
		<i-header></i-header>
	    <swiper></swiper>
	    <navigation></navigation>
	    <recommend></recommend>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import Navigation from './components/Navigation.vue'
import Recommend from './components/Recommend.vue'
import {mapState,mapActions} from 'vuex'
export default {
	name:'home',
	components:{
		iHeader:Header,
		Swiper:Swiper,
		Navigation:Navigation,
		Recommend:Recommend,		
	},
	
}	
</script>