// pages/chatweather/chatweather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logsView:"",
    day:"",
    today:"",
    fengli:"",
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    dacity: "北京",
    date: '2018-09-20',
    day1:"",
    day2: "",
    day3: "",
    day4: "",
    day1low:"",
    day1high:"",
    day2low: "",
    day2high: "",
    day3low: "",
    day3high: "",
    day4low: "",
    day4high: ""
  },
  
  changecity(e) {
    //点击切换城市 换成不同的城市天气;
    this.setData({
      //应为数据 上海市 上海市 虹口区 所有只需要最后一个即可  得到的是个数组
      logsView: e.detail.value[2],
    });
    //这个数据也只是需要 最后一个地区作为参数即可
    let logsView = e.detail.value[2];
    wx: wx.request({
      //天气接口
      url: 'http://wthrcdn.etouch.cn/weather_mini?city=' + logsView,
      success: (msg) => {
        let aa = msg.data.data.forecast[0].fengli;
        let aaa = aa.replace(/[\<![CDATA[|\]]|\>|"]/g, '');

        let aa1 = msg.data.data.forecast[1].fengli;
        let aaa1 = aa1.replace(/[\<![CDATA[|\]]|\>|"]/g, '');

        let aa2 = msg.data.data.forecast[2].fengli;
        let aaa2 = aa2.replace(/[\<![CDATA[|\]]|\>|"]/g, '');

        let aa3 = msg.data.data.forecast[3].fengli;
        let aaa3 = aa3.replace(/[\<![CDATA[|\]]|\>|"]/g, '');

        let aa4 = msg.data.data.forecast[4].fengli;
        let aaa4 = aa3.replace(/[\<![CDATA[|\]]|\>|"]/g, '');

        // let fengli = msg.data.data.forecast[0].fengli.substring(10, 12);
        this.setData({
          day: msg.data.data,
          today: msg.data.data.forecast[0],
          day1: msg.data.data.forecast[1],
          day1low: msg.data.data.forecast[1].low.substring(2),
          day1high: msg.data.data.forecast[1].high.substring(2),

          day2: msg.data.data.forecast[2],
          day2low: msg.data.data.forecast[2].low.substring(2),
          day2high: msg.data.data.forecast[2].high.substring(2),

          day3: msg.data.data.forecast[3],
          day3low: msg.data.data.forecast[3].low.substring(2),
          day3high: msg.data.data.forecast[3].high.substring(2),

          day4: msg.data.data.forecast[4],
          day4low: msg.data.data.forecast[4].low.substring(2),
          day4high: msg.data.data.forecast[4].high.substring(2),
          aaa: aaa,
          aaa1: aaa1,
          aaa2: aaa2,
          aaa3: aaa3,
          aaa4: aaa4,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      logsView: options.city
    })
    let aa = "<![CDATA[<3级]]>";
        let aaa = aa.replace(/[\<![CDATA[|\]]|\>|"]/g, '');
    wx: wx.request({
      //天气接口
      url: 'http://wthrcdn.etouch.cn/weather_mini?city='+ options.city,
      success: (msg) => {
        let aa = msg.data.data.forecast[0].fengli;
        let aaa = aa.replace(/[\<![CDATA[|\]]|\>|"]/g, '');

        let aa1 = msg.data.data.forecast[1].fengli;
        let aaa1 = aa1.replace(/[\<![CDATA[|\]]|\>|"]/g, '');

        let aa2 = msg.data.data.forecast[2].fengli;
        let aaa2 = aa2.replace(/[\<![CDATA[|\]]|\>|"]/g, '');

        let aa3 = msg.data.data.forecast[3].fengli;
        let aaa3 = aa3.replace(/[\<![CDATA[|\]]|\>|"]/g, '');

        let aa4 = msg.data.data.forecast[4].fengli;
        let aaa4 = aa3.replace(/[\<![CDATA[|\]]|\>|"]/g, '');

        this.setData({
          day: msg.data.data,
          today: msg.data.data.forecast[0],
          day1: msg.data.data.forecast[1],
          day1low: msg.data.data.forecast[1].low.substring(2),
          day1high: msg.data.data.forecast[1].high.substring(2),

          day2: msg.data.data.forecast[2],
          day2low: msg.data.data.forecast[2].low.substring(2),
          day2high: msg.data.data.forecast[2].high.substring(2),

          day3: msg.data.data.forecast[3],
          day3low: msg.data.data.forecast[3].low.substring(2),
          day3high: msg.data.data.forecast[3].high.substring(2),

          day4: msg.data.data.forecast[4],
          day4low: msg.data.data.forecast[4].low.substring(2),
          day4high: msg.data.data.forecast[4].high.substring(2),
          aaa: aaa,
          aaa1: aaa1,
          aaa2: aaa2,
          aaa3: aaa3,
          aaa4:aaa4,
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