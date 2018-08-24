//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    banners: [], //初始化一个 banners 数组
    shelfNavList:[],
    shelf: {
      english_name: "New Arrivals",
      name: "新品上架"
    },
    productNewList:[],
    //以下四项设置 swiper 组件的参数值
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500
  },
  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    // wx.authorize({ scope: "scope.userInfo" })
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }

    var ta = this;
    wx.request({
      url: 'http://localhost:7725/productGoods/getList',
      header: {
        'content-type': 'application/json'
      },
      method:'POST',
      data:{
        page:1,
        limit:15
      },
      success: function (res) {
        console.log(res.data)
        ta.setData(
          {
            banners: res.data.rows,
            productNewList: res.data.rows
          }
        )
        console.log(ta.data)
      }
    })

    wx.request({
      url: 'http://localhost:7725/showCategory/getLevOne',
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      data: {
        page: 1,
        limit: 5
      },
      success: function (res) {
        console.log(res.data)
        ta.setData(
          {
            shelfNavList: res.data.rows
          }
        )
        console.log(ta.data)
      }
    })
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
  
})
