// pages/chatweather/chatweather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logsView:"",
    day:"",
    today:"",
    fengli:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      logsView: options.city
    })
    console.log(options.city)
    wx: wx.request({
      //天气接口
      url: 'http://wthrcdn.etouch.cn/weather_mini?city='+options.city,
      success: (msg) => {
        console.log(msg.data);
        let fengli = msg.data.data.forecast[0].fengli.substring(10, 12);
        this.setData({
          day: msg.data.data,
          today: msg.data.data.forecast[0],
          fengli: fengli
        })
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