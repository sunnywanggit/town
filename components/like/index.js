// components/like/index.js
Component({
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

      }

  }
})
