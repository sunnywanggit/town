import {ClassicModel} from "../../models/classic";

Component({
    //properties 里面的属性可以被外部设置，但是data不行，因为data是私有的
  properties: {
      like:{
          type:Boolean,
          value:false,
          observe:function () {
          }
      },
      count:{
          type:Number,
      }
  },

  data: {
      yesSrc:'./imgs/like.png',
      noSrc:'./imgs/like@dis.png'
  },

  methods: {
      //点赞
      onLike(){
          let like = this.properties.like
          let count = this.properties.count

          count = like ? count - 1 : count + 1

          this.setData({
              like:!like,
              count:count
          })

          //获取用户点赞的状态
          let behavior = this.properties.like ? 'like' : 'cancel'
          //激活自定义事件,用于将子组件状态传递给父组件
          this.triggerEvent('like',{
              behavior:behavior
          },{})

      }

  }
})
