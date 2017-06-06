/**
 * @author yibinxiong yibingxiong@126.com
 * @description 滚动导航
 */

<template>
	<div data-uk-slider="{infinite: false}" class="nav-wraper">
	  <nav class="uk-slider-container nav">
	    <ul class="uk-slider uk-grid-width-1-6 i-slider">
	      <router-link to="/" tag="li" exact>推荐</router-link>
	      <router-link :to="'/channel/'+item.name" tag="li"  v-for="item in channelList" exact :key="item.id">{{ item.name }}</router-link>
	    </ul>
	  </nav> 
	</div>	
</template>

<script>
import Vue from 'vue'
import {mapState} from 'vuex'
export default {
	computed:{
	    ...mapState(['channelList'])
	},
}	
</script>

<style scoped>
.i-slider li{
	height: 40px;
	text-align: center;
	line-height: 40px;
}
.nav-wraper{
	border-bottom: 1px solid #F0F0F0;
}
.i-slider li.active::after{
	content: "";
	display:inline;
	width: 100%;
	height: 1px;
	background: #ADFF2F;
	position: absolute;
	bottom: 0;
	left: 0;
}
</style>