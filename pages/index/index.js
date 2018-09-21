//index.js
//获取应用实例

var dateTimePicker = require('./dateTimePicker.js');
const app = getApp()
var config = require('../../config.js');
var pageIndex = 1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['白羊座', '金牛座', '双子座', '巨蟹座', "狮子座", '处女座', '天蝎座', '射手座', '摩羯座', "水瓶座", "双鱼座"],
    weather1: [],
    weather2: [],
    weather3: [],
    data: [],
    suit: [],
    taboo: [],
    weather: [],
    high0: [],
    low0: [],
    high1: [],
    low1: [],
    high2: [],
    low2: [],
    date: '2018-09-20',
    year: [],
    day: [],
    dacity: "北京",
    index: 3,
    currentDate: "2017年05月03日",
    dayList: '',
    currentDayList: '',
    currentObj: '',
    currentDay: '',
    aaa: '2018年9月21 '
  },
  onChangeShowState: function () {

    var that = this;

    that.setData({

      showView: (!that.data.showView)

    })
    that.setData({
      ifture: (!that.data.ifture)
    })

  },
  changeDate(e) {

    // 
    let aa = e.detail.value.replace(/^(.{4})(.{1})(.*)$/, '$1年$3');
    let aaa = aa.replace(/^(.{7})(.{1})(.*)$/, '$1月$3');
    console.log(aaa)
    this.setData({
      aaa: aaa,
    });
  },
  changecity(e) {
    console.log(e.detail.value);
    this.setData({
      dacity: e.detail.value[2],
    });
    let dacity = e.detail.value[2];
    wx: wx.request({

      url: 'https://www.sojson.com/open/api/weather/json.shtml?city=' + dacity,
      success: (msg) => {
        let high0 = msg.data.data.forecast[0].high.substring(2, 5);
        let low0 = msg.data.data.forecast[0].low.substring(2, 5);
        let high1 = msg.data.data.forecast[1].high.substring(2, 5);
        let low1 = msg.data.data.forecast[1].low.substring(2, 5);
        let high2 = msg.data.data.forecast[2].high.substring(2, 5);
        let low2 = msg.data.data.forecast[2].low.substring(2, 5);

        this.setData({
          weather1: msg.data.data.forecast[0],
          weather2: msg.data.data.forecast[1],
          weather3: msg.data.data.forecast[2],
          weather: msg.data,
          high0: high0,
          low0: low0,
          high1: high1,
          low1: low1,
          high2: high2,
          low2: low2,
        })
      }
    })
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },
  bindPickerChange(e) {

    // this.setData({
    //   date: e.detail.value,
    // });
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  doDay: function (e) {
    var that = this
    var currentObj = that.data.currentObj
    var Y = currentObj.getFullYear();
    var m = currentObj.getMonth() + 1;
    var d = currentObj.getDate();
    var str = ''
    if (e.currentTarget.dataset.key == 'left') {
      m -= 1
      if (m <= 0) {
        str = (Y - 1) + '/' + 12 + '/' + d
      } else {
        str = Y + '/' + m + '/' + d
      }
    } else {
      m += 1
      if (m <= 12) {
        str = Y + '/' + m + '/' + d
      } else {
        str = (Y + 1) + '/' + 1 + '/' + d
      }
    }
    currentObj = new Date(str)
    this.setData({
      currentDate: currentObj.getFullYear() + '年' + (currentObj.getMonth() + 1) + '月' + currentObj.getDate() + '日',
      currentObj: currentObj
    })
    this.setSchedule(currentObj);
  },

  getCurrentDayString: function () {
    var objDate = this.data.currentObj
    if (objDate != '') {
      return objDate
    } else {
      var c_obj = new Date()
      var a = c_obj.getFullYear() + '/' + (c_obj.getMonth() + 1) + '/' + c_obj.getDate()
      return new Date(a)
    }
  },
  setSchedule: function (currentObj) {
    var that = this
    var m = currentObj.getMonth() + 1
    var Y = currentObj.getFullYear()
    var d = currentObj.getDate();
    var dayString = Y + '/' + m + '/' + currentObj.getDate()
    var currentDayNum = new Date(Y, m, 0).getDate()
    var currentDayWeek = currentObj.getUTCDay() + 1
    var result = currentDayWeek - (d % 7 - 1);
    var firstKey = result <= 0 ? 7 + result : result;
    var currentDayList = []
    var f = 0
    for (var i = 0; i < 42; i++) {
      let data = []
      if (i < firstKey - 1) {
        currentDayList[i] = ''
      } else {
        if (f < currentDayNum) {
          currentDayList[i] = f + 1
          f = currentDayList[i]
        } else if (f >= currentDayNum) {
          currentDayList[i] = ''
        }
      }
    }
    that.setData({
      currentDayList: currentDayList
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = dateTimePicker.formatTime(new Date());

    let day = time.substring(8);
    this.setData({
      day: day
    })
    wx: wx.request({

      url: 'https://www.sojson.com/open/api/weather/json.shtml?city=小店区',
      success: (msg) => {
        console.log(msg)
        let high0 = msg.data.data.forecast[0].high.substring(2, 5);
        let low0 = msg.data.data.forecast[0].low.substring(2, 5);
        let high1 = msg.data.data.forecast[1].high.substring(2, 5);
        let low1 = msg.data.data.forecast[1].low.substring(2, 5);
        let high2 = msg.data.data.forecast[2].high.substring(2, 5);
        let low2 = msg.data.data.forecast[2].low.substring(2, 5);

        this.setData({
          weather1: msg.data.data.forecast[0],
          weather2: msg.data.data.forecast[1],
          weather3: msg.data.data.forecast[2],
          weather: msg.data,
          high0: high0,
          low0: low0,
          high1: high1,
          low1: low1,
          high2: high2,
          low2: low2,
        })
      }
    })
    var currentObj = this.getCurrentDayString()
    this.setData({
      currentDate: currentObj.getFullYear() + '年' + (currentObj.getMonth() + 1) + '月' + currentObj.getDate() + '日',
      currentDay: currentObj.getDate(),
      currentObj: currentObj
    })
    this.setSchedule(currentObj)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var time = dateTimePicker.formatTime(new Date());

    // wx: wx.request({
    //   url: 'http://v.juhe.cn/laohuangli/d?key=48d0e29d484984c057193f9a85b05be3&date=' + time,
    //   success: (msg) => {
    //     let day = msg.data.result.yangli.substring(8);
    //     console.log(msg);
    //     this.setData({
    //       year: msg.data.result,
    //       day: day,
    //     })
    //   }
    // })
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