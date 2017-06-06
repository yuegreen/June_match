/**
 * @author yibingxiong yibingxiong@126.com
 * @description 频道
 */

<template>
	<div>
		<i-header></i-header>
	    <navigation></navigation>
	    <channel></channel>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import Navigation from './components/Navigation.vue'
import Channel from './components/Channel.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default {
	name:'search',
	components:{
		iHeader:Header,
		Swiper:Swiper,
		Navigation:Navigation,
		Channel:Channel,		
	}
}	
</script>