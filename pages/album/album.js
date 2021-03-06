// pages/album/album.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
     albumList:[],
     serviceUrl: getApp().globalData.serviceUrl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    var ta = this;
    wx.request({
      url: 'http://localhost:7725/photoAlbum/getAlbum/' + options.id,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        ta.setData(
          {
            albumList: res.data.rows
          }
        )
      }
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