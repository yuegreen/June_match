/**
 * 播放视频
 */
export default {
	playVideo(item){
		//添加到播放记录
		var saveData = item;
		saveData.time = (new Date()).getTime();
		dbUtil.add("scanHistory",[saveData]);
		//拉起播放器
		location.href = 'iqiyi://mobile/player?aid=' + item.a_id + '&tvid=' + item.tv_id + '&ftype=27&to=3&url=' + encodeURIComponent(location.href);
	},
	love(item,event){
		var saveData = item;
		saveData.time = (new Date()).getTime();
		event.target.classList.toggle("fa-star");
		event.target.classList.toggle("fa-star-o");
		dbUtil.add("loveHistory",[saveData]);
	},
	unlove(item,event){
		event.target.classList.toggle("fa-star");
		event.target.classList.toggle("fa-star-o");
		dbUtil.delete("loveHistory",item.id);			
	},
}