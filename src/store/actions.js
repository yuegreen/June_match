import Util from '../public/Util'
export default {
	getChannelList(context){
		Util.get('http://iface.qiyi.com/openapi/batch/channel',{
                type: 'list',
                version: 7.5
            },(data)=>context.commit('getChannelList',data.data));
	},

	getRecommendVideoList(context){
		Util.get('http://iface.qiyi.com/openapi/batch/recommend',
			{},(data)=>context.commit('getRecommendVideoList',data.data));
	},

	getRankVideoList(context){
		Util.get('http://iface.qiyi.com/openapi/batch/recommend',{},(data)=>context.commit('getRankVideoList',data.data));
	},

	getChannelVideoList(context,options){
		Util.get('http://iface.qiyi.com/openapi/batch/channel',options,(data)=>context.commit('getChannelVideoList',data.data));
	},
	getLoveVideoList(context){
		dbUtil.select("loveHistory",Number.MAX_VALUE,function(data){
			context.commit("getLoveVideoList",data);
		})
	}
}