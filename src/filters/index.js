import store from '../store'
export default {
	videoLove(item){
		var loveVideoList = store.state.loveVideoList;
		for(var i = 0,len=loveVideoList.length;i<len;i++){
			if(item.id == loveVideoList[i]['id']){
				item.isLove = true;
				return '';
				break;
			}
		}
		item.isLove = false;
		return '';
		
	}
}