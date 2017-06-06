import Vue from 'vue'
import VueResource from 'vue-resource'  
Vue.use(VueResource);
const defaultParam = {
    app_k: 'f0f6c3ee5709615310c0f053dc9c65f2',
    app_v: 8.4,
    app_t: 0,
    platform_id: 12,
    dev_os: '10.3.1',
    dev_ua: 'iPhone9,3',
    dev_hw: '{"cpu":0,"gpu":"","mem":"50.4MB"}',
    net_sts: 1,
    scrn_sts: 1,
    scrn_res: '1334*750',
    scrn_dpi: 153600,
    qyid: '87390BD2-DACE-497B-9CD4-2FD14354B2A4',
    secure_v: 1,
    secure_p: 'iPhone',
    core: 1,
    req_sn: 1493946331320,
    req_times: 1,
    version:7.5
};

function encodeParams (obj) {
    let param = '';
    for (let key in obj) {
        param += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
    }
    return '?' + param.slice(1);
}

export default {
    get:function(url, options, callback){
        Object.assign(options, defaultParam);
        Vue.http.get(url+encodeParams(options)).then(response=>callback(response.body), response=>console.log(response));
    }

}