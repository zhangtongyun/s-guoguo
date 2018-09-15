// pages/albumDetail/albumDetail.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    albumList: [],
    serviceUrl: app.globalData.serviceUrl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var ta = this;
    wx.request({
      url: 'http://localhost:7725/photoAlbumDetail/getAlbumDetail/' + options.id,
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
imgYu:function(event){
  var src = event.currentTarget.dataset.src;//获取data-src
  var imgList = event.currentTarget.dataset.list;//获取data-list
  var urls = [];
  for (var i = 0; i < imgList.length; i++){
    urls[i] = 'http://localhost:7725'+imgList[i].picUrl;
  }
  wx.previewImage({
    current: src, // 当前显示图片的http链接
    urls: urls // 需要预览的图片http链接列表
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