import {config} from './config.js'

class HTTP {
    request(params) {
        if (!params.method) {
            params.method = 'GET'
        }
        wx.request({
            url: config.app_base_url + params.url,
            method: params.method,
            data: params.data,
            header: {
                'content-type': 'application/json',
                'appkey': config.appkey
            },
            success:(res)=>{
                //获取状态码信息
                let code = res.statusCode
                if(code.startsWith('2')){

                }else{

                }
            },
            fail:(err)=>{

            }
        })
    }
}

export {HTTP}
