// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      msg:"金玉良缘"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        console.log(this.data.msg)
        this.setData({   //修改data中参数
          msg:"白首偕老"
        })
  },
handleParent: function (){
  console.log("parents")
},
handleChild: function (){
  console.log("child")
},
toLogs: function(){           //跳转页面
  wx.redirectTo({
    url: '/pages/logs/logs',
  })
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