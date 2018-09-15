
//获取应用实例
const app = getApp()

Page({
  data: {
    goodsList: [],
    serviceUrl: app.globalData.serviceUrl
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    console.log(options)
    var ta = this;
    wx.request({
      url: 'http://localhost:7725/productGoods/getList',
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      data: {
        page: 1,
        limit: 15,
        categoryId: options.id,
      },
      success: function (res) {
        ta.setData(
          {
            goodsList: res.data.rows
          }
        )
      }
    })
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})