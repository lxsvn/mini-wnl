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
        "name": "寒露",
        "day": "10月08日",
        "oldday": '12'
      },
      {
        "name": "霜降",
        "day": "10月23日",
        "oldday": '10'
      },
      {
        "name": "立冬",
        "day": "年11月07日",
        "oldday": '42'
      },
      {
        "name": "小雪",
        "day": "11月22日",
        "oldday": '57'
      },
      {
        "name": "大雪",
        "day": "12月7日",
        "oldday": '72'
      },
      {
        "name": "冬至",
        "day": "12月22日",
        "oldday": '87'
      },
      {
        "name": "小寒",
        "day": "01月05日",
        "oldday": '101'
      },
      {
        "name": "大寒",
        "day": "01月20日",
        "oldday": '357'
      },
      {
        "name": "立春",
        "day": "02月04日",
        "oldday": '131'
      },
      {
        "name": "雨水",
        "day": "02月19日",
        "oldday": '146'
      },
      {
        "name": "惊蛰",
        "day": "03月06日",
        "oldday": '161'
      },
      {
        "name": "春分",
        "day": "03月21日",
        "oldday": '176'
      },
      {
        "name": "清明",
        "day": "04月05日",
        "oldday": '191'
      },
      {
        "name": "谷雨",
        "day": "04月20日",
        "oldday": '206'
      },
      {
        "name": "立夏",
        "day": "05月06日",
        "oldday": '222'
      },
      {
        "name": "小满",
        "day": "05月21日",
        "oldday": '237'
      },
      {
        "name": "芒种",
        "day": "06月06日",
        "oldday": '253'
      },
      {
        "name": "夏至",
        "day": "06月21日",
        "oldday": '268'
      },
      {
        "name": "小暑",
        "day": "07月07日",
        "oldday": '284'
      },
      {
        "name": "大暑",
        "day": "07月23日",
        "oldday": '300'
      },
      {
        "name": "立秋",
        "day": "08月08日",
        "oldday": '316'
      },
      {
        "name": "处暑",
        "day": "08月23日",
        "oldday": '331'
      },
      {
        "name": "白露",
        "day": "09月08日",
        "oldday": '347'
      },
      {
        "name": "秋分",
        "day": "09月23日",
        "oldday": '362'
      },
      {
        "name": "寒露",
        "day": "10月08日",
        "oldday": '377'
      },
    ],
    hotday: [
      {
        "name": "世界旅游日",
        "day": "09月07日",
        "oldday": '1'
      },
      {
        "name": "孔子诞辰",
        "day": "9月28日",
        "oldday": '2'
      },
      {
        "name": "世界狂犬病日",
        "day": "09月28日",
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