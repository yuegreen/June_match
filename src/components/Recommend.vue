/**
 * @author yibingxiong
 * @description 推荐
 */

<template>
	<div>
	<section class="category" v-for='cat in videoCatList'>
		<h2 class="cat-title">{{cat.title}}</h2>
		<ul class="video-box">
			<li v-for="item in cat['video_list']">
				<div>
					{{item|videoLove}}
				</div>
				<dl>
					<dt>
						<div class="img-box">
							<img :src="item.img+'?sign=iqiyi'" alt=""   @click="playVideo(item)">
							<span class="vip" v-if="item['is_vip']!='0'">vip</span>
							<span v-if="item.sns_score!=''" class="score">{{item.sns_score}}</span>
						</div>				
					</dt>
					<dd class="video-info">
						<h2   @click="playVideo(item)">{{item.short_title}}</h2>
						<ul class="meta">
							<li>
								<i class="fa fa-youtube-play"></i><span>{{item.play_count_text}}</span>
							</li>
							<li>
								<i class="fa fa-comments-o"></i><span>33</span>
							</li>
							<li>
								<span v-if="!item['isLove']" class="star" @click="love(item,$event)"><i class="fa fa-star-o"></i></span>
								<span v-if="item['isLove']" class="star" @click="unlove(item,$event)"><i class="fa fa-star"></i></span>
							</li>								
						</ul>
					</dd>
				</dl>				
			</li>
		</ul>
	</section>
	</div>
</template>

<script>
import './css/channel-recommend.css'
import filters from '../filters'
import Methods from '../public/Methods.js'
export default {
	name:'recommend',
	filters:filters,
	computed:{
		videoCatList(){
			try{
				if(this.$store.state.recommendVideoList){
					return this.$store.state.recommendVideoList.slice(1);
				}		
			}catch(e){
				
			}
		}
	},
	methods:{
		...Methods,
	}
}
</script>

<style scoped>
.category .video-box>li{
	width: 48%;
}
</style>