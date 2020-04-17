import {ClassicModel} from "../../models/classic";
import {LikeModel} from "../../models/like";

let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Page({
    data: {
        classicData: null,
        latest: true,
        first: false,
        likeData:null
    },

    onLoad: function (options) {
        // 用回调函数的方式去获取异步操作的return结果，这个操作真的骚啊，记下来
        // 这个方法就叫做，使用回调函数剥夺了我们使用return的能力
        //获取最新一期内容
        classicModel.getLatest((res) => {
            console.log(res.data);
            this.setData({
                classicData: res.data,
                likeData:res.data
            })
        })

    },


    //监听子组件传过来的自定义事件，并作出相应处理
    onLike(e) {
        // console.log(this.data.date.year);

        let behavior = e.detail.behavior
        let classicData = this.data.classicData
        // console.log(this.data.classicData);

        //如果用户点赞了
        likeModel.like(behavior, classicData.id, classicData.type)
    },

    //上一期
    onPrev() {
        this._getClassic('previous')
    },
    //下一期
    onNext() {
        this._getClassic('next')
    },

    //获取期刊
    _getClassic(nextOrPrev){
        //获取当前期刊数
        let index = this.data.classicData.index
        classicModel.getClassic(index,nextOrPrev, (res) => {
            this._getLikeStatus(res.data.type,res.data.id)
            this.setData({
                classicData: res.data,
                first:classicModel.isFirst(res.data.index),
                latest:classicModel.isLatest(res.data.index)
            })
        })

    },

    //单独的获取点赞的状态， 避免该部分数据从缓存中读取时造成的bug，因为该部分的数据
    //是需要实时更新的
    _getLikeStatus(category,artID){
        likeModel.getClassicLikeStatus(category,artID,(res)=>{
            // console.log(res.data);
            this.setData({
                likeData:res.data
            })
        })
    }

})