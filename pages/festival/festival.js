// pages/festival/festival.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        "name": "中秋节",
        "day": "9月24日",
        "oldday":'3'
      },
      {
        "name": "国庆节",
        "day": "10月01日",
        "oldday": '10'
      },
      {
        "name": "元旦节",
        "day": "2019年01月01日",
        "oldday": '102'
      },
      {
        "name": "春节",
        "day": "2019年02月05日",
        "oldday": '137'
      },
      {
        "name": "清明",
        "day": "2019年04月05日",
        "oldday": '196'
      },
      {
        "name": "劳动节",
        "day": "2019年05月01日",
        "oldday": '222'
      },
      {
        "name": "端午节",
        "day": "2019年06月07日",
        "oldday": '259'
      },
      {
        "name": "中秋节",
        "day": "2019年09月13日",
        "oldday": '357'
      },
    ],
    index:'',
    
  },
  onChangeShowState: function () {
    var that = this;
    that.setData({
      ifture: (!that.data.ifture)
    })
  },
  onChangeShowtwo: function () {
    var that = this;
    that.setData({
      iftwo: (!that.data.iftwo)
    })
  },
  onChangeShowhot: function () {
    var that = this;
    that.setData({
      ifhot: (!that.data.ifhot)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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