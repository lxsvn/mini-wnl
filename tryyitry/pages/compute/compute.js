var app = getApp()
var calc = require("./calc")
Page({
  data: {
    calc: {},
    tapped: {}
  },
  showAbout: function (e) {
    wx.showModal({
      title: '关于',
      content: '一个简单的计算器 @V1.0',
      showCancel: false
    })
  },
  //把数据传给上一页
  navigateBackFunc: function () {
    var pages = getCurrentPages()
    var prevPage = pages[pages.length - 1]  //当前界面
    var prevPage = pages[pages.length - 2]  //上一个页面
    var that = this
    prevPage.setData({
      object: that.data.object
    })
  },
  btnClicked: function (e) {
    var code = e.target.dataset.op
    calc.addOp(code)
    console.log(calc.getVars())
    this.setData({ calc: calc.getVars() })
  },
  btnTouchStart: function (e) {
    var code = e.target.dataset.op
    var tapped = { [code]: 'active' }
    this.setData({ tapped: tapped })
  },
  btnTouchEnd: function (e) {
    var code = e.target.dataset.op
    var tapped = {}
    this.setData({ tapped: tapped })
  },
  onLoad: function (options) {
    console.log(options.city)
    calc.reset()
    var that = this;
  }
})