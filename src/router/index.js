import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home.vue'
import ChannelPage from '@/ChannelPage.vue'
import Search from '@/Search.vue'
Vue.use(Router)

export default new Router({
  	linkActiveClass:'active',
	routes: [
	{
	  path: '/',
	  name: 'h',
	  component: Home
	},
	{
	  path: '/home',
	  name: 'home',
	  component: Home
	},
	{
	  path: '/recommend',
	  name: 'recommend',
	  component: Home
	},
	{
	  path: '/channel/:cname',
	  name: 'channelPage',
	  component: ChannelPage
	},
	{
		path:'/search',
		name:'search',
		component:Search
	}
	]
})
