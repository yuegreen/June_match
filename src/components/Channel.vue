/**
 * @author yibingxiong yibingxiong@126.com
 * @description 频道组件
 */
<template>
<div>
	<section class="category">
		<ul class="video-box">
			<li v-for='item in videoList'>
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
import Methods from '../public/Methods.js'
import filters from '../filters'
export default {
	name: 'channel',
	filters:filters,
	computed:{
		videoList(){
			try{
				if(this.$store.state.channelVideoList){
				return this.$store.state.channelVideoList.video_list;	
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
.category {
	margin-top: 12px;
}
</style>

