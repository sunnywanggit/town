import {config} from '../config.js'

const tips={
    1:'抱歉，出现了一个错误',
    0:'OK, 成功',
    1000:'输入参数错误',
    1001:'输入的json格式不正确',
    1002:'找不到资源',
    1003:'未知错误',
    1004:'禁止访问',
    1005:'不正确的开发者key',
    1006:'服务器内部错误',
    2000:'你已经点过赞了',
    2001:'你还没点过赞',
    3000:'该期内容不存在'
}

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
                let code = res.statusCode.toString()
                if(code.startsWith('2')){
                    // console.log(res);
                    // TODO 这里我不懂，为什么这里这样写了之后，就可以在 classic 里面去调用success了？
                    params.success(res)
                }else{
                    // 服务器异常时需要处理的错误
                    let error_code = res.data.error_code
                    this._show_error(error_code)
                }
            },
            fail:(err)=>{
                // api 调用失败时的错误处理
                this._show_error(1)

            }
        })
    }

    //我这里加上下划线表示这里是一个私有的方法
    _show_error(error_code){
        if(!error_code){
            error_code = 1
        }
        wx.showToast({
            title:tips[error_code],
            duration:2000
        })
    }
}

export {HTTP}
