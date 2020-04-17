import {HTTP} from '../util/http.js'


class ClassicModel extends HTTP {
    getLatest(sCallback) {
        this.request({
            url: '/classic/latest',
            success: (res) => {
                sCallback(res)
                this._setLatestIndex(res.data.index)
                let key = this._getKey(res.data.index)
                wx.setStorageSync(key,res)
            }
        })
    }

    //获取期刊
    getClassic(index, nextOrPrev, sCallback) {
        //当我们获取一个期刊的时候，我们首先应该去缓存中寻找
        //如果缓存中没有，我们则向服务器发送要求，获取相关的期刊数据，并保存到缓存中
        let key = nextOrPrev === 'next' ? this._getKey(index+1) : this._getKey(index-1)
        let classic = wx.getStorageSync(key)
        console.log('classic',classic);
        if (!classic) {
            this.request({
                url: `/classic/${index}/${nextOrPrev}`,
                success: (res) => {
                    wx.setStorageSync(this._getKey(res.data.index),res)
                    sCallback(res)
                }
            })
        }else{
            sCallback(classic)
        }
    }

    //判断是不是第一期期刊
    isFirst(currentIndex) {
        return currentIndex === 1 ? true : false
    }


    //判断是不是最新的一期期刊
    isLatest(currentIndex) {
        let latestIndex = this._getLatestIndex('latestIndex')

        return currentIndex === latestIndex ? true : false
    }

    //保存最新的期刊
    //有时候我们封装一个函数，并不是因为它的代码太多了，函数名字有时候本身就是一个很好的注释
    _setLatestIndex(index) {
        //该方法用于同步写入缓存,如果写入的数据类型非常少，还是建议使用同步的方法
        //那么一步写入缓存的方法就是把最后的Sync给去掉
        wx.setStorageSync('latestIndex', index)
    }

    //获取最新的期刊
    _getLatestIndex() {
        return wx.getStorageSync('latestIndex')
    }


    //给每个期刊一个不同的key值
    _getKey(index) {
        let key = `classic${index}`
        return key
    }

}

export {ClassicModel}



















