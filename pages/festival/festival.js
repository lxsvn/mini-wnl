// pages/festival/festival.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        "name": "元旦节",
        "day": "01月01日",
        "oldday": '公历1月1日'
      },
      {
        "name": "春节",
        "day": "02月05日",
        "oldday": '农历 大年三十'
      },
      {
        "name": "清明",
        "day": "04月05日",
        "oldday": "冬至过了106天"
      },
      {
        "name": "劳动节",
        "day": "05月01日",
        "oldday": '公历5月1日'
      },
      {
        "name": "端午节",
        "day": "06月07日",
        "oldday": '农历 五月初五'
      },
      {
        "name": "中秋节",
        "day": "09月13日",
        "oldday": '农历 八月十五'
      },
      {
        "name": "国庆节",
        "day": "10月01日",
        "oldday": '公历10月1日'
      }
    ],
    index:'',
    twoer: [
      {
        "name": "立春",
        "day": "02月04日",
        "oldday": '315'
      },
      {
        "name": "雨水",
        "day": "02月19日",
        "oldday": '330'
      },
      {
        "name": "惊蛰",
        "day": "03月06日",
        "oldday": '345'
      },
      {
        "name": "春分",
        "day": "03月21日",
        "oldday": '0'
      },
      {
        "name": "清明",
        "day": "04月05日",
        "oldday": '15'
      },
      {
        "name": "谷雨",
        "day": "04月20日",
        "oldday": '30'
      },
      {
        "name": "立夏",
        "day": "05月06日",
        "oldday": '45'
      },
      {
        "name": "小满",
        "day": "05月21日",
        "oldday": '60'
      },
      {
        "name": "芒种",
        "day": "06月06日",
        "oldday": '75'
      },
      {
        "name": "夏至",
        "day": "06月21日",
        "oldday": '90'
      },
      {
        "name": "小暑",
        "day": "07月07日",
        "oldday": '105'
      },
      {
        "name": "大暑",
        "day": "07月23日",
        "oldday": '120'
      },
      {
        "name": "立秋",
        "day": "08月08日",
        "oldday": '135'
      },
      {
        "name": "处暑",
        "day": "08月23日",
        "oldday": '150'
      },
      {
        "name": "白露",
        "day": "09月08日",
        "oldday": '165'
      },
      {
        "name": "秋分",
        "day": "09月23日",
        "oldday": '180'
      },
      {
        "name": "寒露",
        "day": "10月08日",
        "oldday": '195'
      },
      {
        "name": "霜降",
        "day": "10月23日",
        "oldday": '210'
      },
      {
        "name": "立冬",
        "day": "年11月07日",
        "oldday": '225'
      },
      {
        "name": "小雪",
        "day": "11月22日",
        "oldday": '240'
      },
      {
        "name": "大雪",
        "day": "12月7日",
        "oldday": '255'
      },
      {
        "name": "冬至",
        "day": "12月22日",
        "oldday": '270'
      },
      {
        "name": "小寒",
        "day": "01月05日",
        "oldday": '285'
      },
      {
        "name": "大寒",
        "day": "01月20日",
        "oldday": '300'
      },
    ],
    hotday: [
      {
        "name": "腊八节",
        "day": "1月13日",
        "oldday": '1'
      },
      {
        "name": "北方小年",
        "day": "1月28日",
        "oldday": '2'
      },
      {
        "name": "南方小年",
        "day": "1月29日",
        "oldday": '2'
      }
    ],
  },
  twoacc:function(){
    wx.navigateTo({
      title: "goback",
      url: '../festivalcenter/festivalcenter'
    })
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
    // wx: wx.request({
    //   url: "http://www.sojson.com/tianqi/api/"+"1011-58414"+".shtml" ,
    //   success: (msg) => {
    //     console.log(msg)
    //   }
    // })
    wx: wx.request({
      url: "http://wthrcdn.etouch.cn/weather_mini?city=北京",
      success: (msg) => {
        console.log(msg)
      }
    })
    // wx: wx.request({
    //   url: 'http://route.showapi.com/9-5',
    //   data: {
    //     showapi_appid: '11697',
    //     showapi_sign: '6c0c15c5ec61454dac5288cea2d32881',
    //   },
    //   success: (msg) => {
    //     console.log(msg)
    //   }
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