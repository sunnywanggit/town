import {HTTP} from '../../util/http.js'

//如果想要使用类里面的方法，首先要做的是实例化一个类
let http = new HTTP()

Page({

  /**
   * 页面的初始数据
   */
  data: {
      test:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      http.request({
        url:'/classic/latest',
        success:(res)=>{
          console.log(res);
        }
      })
    // console.log(http.request);
    // console.log(options);
    // wx.request({
    //   url:'http://bl.7yue.pro/v1',
    //   header:{
    //     appkey:'VzyfROWyHh5I74Sd'
    //   },
    // })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})