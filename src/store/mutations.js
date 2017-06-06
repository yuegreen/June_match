import state from './state'
export default {
	getChannelList(state,channelList){
		state.channelList = channelList;
	},

	getRecommendVideoList(state,videoList){
		state.recommendVideoList = videoList;
	},

	getRankVideoList(state,videoList){
		state.rankVideoList = videoList;
	},

	getChannelVideoList(state,videoList){
		state.channelVideoList = videoList;
	},
	
	getLoveVideoList(state,videoList){
		state.loveVideoList = videoList;
	}

}