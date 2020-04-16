import {ClassicModel} from "../../models/classic";
import {LikeModel} from "../../models/like";

let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Page({

  data: {
    classicData:null
  },

  onLoad: function (options) {
    // 用回调函数的方式去获取异步操作的return结果，这个操作真的骚啊，记下来
    // 这个方法就叫做，使用回调函数剥夺了我们使用return的能力
    classicModel.getLatest((res)=>{
      console.log(res.data);
      this.setData({
        classicData:res.data
      })
    })
  },

  //监听子组件传过来的自定义事件，并作出相应处理
  onLike(e){
    console.log(e.detail.behavior);
    let behavior = e.detail.behavior
    let classicData = this.data.classicData
    console.log(this.data.classicData);

    //如果用户点赞了
      likeModel.like(behavior,classicData.id,classicData.type)
  }

})