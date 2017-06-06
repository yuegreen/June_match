/**
 * @author yibinxiong yibingxiong@126.com
 * @description 入口
 */
import Vue from 'vue'
import App from './App'
import store from './store'
import {mapActions} from 'vuex'
import './public/css/animate.css'
import './public/css/reset.css'
import '../node_modules/uikit/dist/css/uikit.almost-flat.css'
import 'uikit'
import '../node_modules/uikit/dist/js/components/grid.js'
import '../node_modules/uikit/dist/css/components/slider.css'
import '../node_modules/uikit/dist/js/components/slider.js'
import router from './router'
import './public/dbUtil.js'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  store:store,
  components: { App },
  router,
  created(){
  	this.getChannelList();
  	this.getRecommendVideoList();
  	this.getRankVideoList();
  	this.getChannelVideoList(
  			{
  				type: 'detail',
                channel_name: '电影',
                mode: 1,
                version: 7.5
        }
    );
    
    //数据库初始化
    dbUtil.initDB("iqiyiDB",4,
      [
        {
          storeName:"searchHistory",

          key:{
            keyPath:'id',autoIncrement:true
          },
          idxs:[{
          indexName:'keyWordsIndex',
          keyPath:'keyWords',
          optionalParameters:{
            unique:true,
            multiEntry:false
          }
          },
          ]
        },
        {
          storeName:"scanHistory",

          key:{
            keyPath:'id',autoIncrement:true
          },
          idxs:[{
          indexName:'titleIndex',
          keyPath:'title',
          optionalParameters:{
            unique:false,
            multiEntry:false
          }
          }]
        },
        {
          storeName:"loveHistory",

          key:{
            keyPath:'id',autoIncrement:true
          },
          idxs:[{
          indexName:'titleIndex',
          keyPath:'title',
          optionalParameters:{
            unique:false,
            multiEntry:false
          }
          },
          ]
        }]
      );
    this.getLoveVideoList();
  },
  methods:{
  	...mapActions(['getLoveVideoList','getChannelList','getRecommendVideoList','getRankVideoList','getChannelVideoList'])
  },
  watch: {
    $route:function (to, from) {
      let cname = this.$route.params.cname;
        this.getChannelVideoList(
            {
              type: 'detail',
                    channel_name: cname,
                    mode: 1,
                    version: 7.5
            }
        );
      }
  }
});

