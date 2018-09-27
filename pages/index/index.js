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
    aaa: ' ',
     dayStyle: [
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#AAD4F5' },
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#AAD4F5' }
    ],
  },

  //点击日历每次点击都会打开一次接口
  dayClick: function (event) {
    let clickDay = event.detail.day;
    let changeDay = `dayStyle[1].day`;
    let changeBg = `dayStyle[1].background`;
    this.setData({
      [changeDay]: clickDay,
      [changeBg]: "#84e7d0"
    })
    let ymd = event.detail.year + "-" + event.detail.month + "-" + event.detail.day
    // wx: wx.request({
    //   url: 'http://v.juhe.cn/laohuangli/d?key=48d0e29d484984c057193f9a85b05be3&date=' + ymd,
    //   success: (msg) => {
    //     let day = msg.data.result.yangli.substring(8);
    //     this.setData({
    //       year: msg.data.result,
    //       day: day,
         
    //     })
    //   }
    // })
    
  },
  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView),
      ifture: (!that.data.ifture)
    })

  },
  chatweather:function(){
    wx.navigateTo({
      title: "goback",
      url: '../chatweather/chatweather?city=' + this.data.dacity 
    })
    
  },
  //点击弹出影藏的时间选择器
  changeDate(e) {

    // 点击时间切换接口 获取当日的万年历数据
    let aa = e.detail.value.replace(/^(.{4})(.{1})(.*)$/, '$1年$3');
    //应为得到的是 2018-09-30 所有要让两个-换成 年月
    let aaa = aa.replace(/^(.{7})(.{1})(.*)$/, '$1月$3');
    let aaa1 = aaa + "日";
    let time = e.detail.value;
    this.setData({
      
      aaa: aaa1,
    })
        //获取当日的万年历数据
    // wx: wx.request({
    //   url: 'http://v.juhe.cn/laohuangli/d?key=48d0e29d484984c057193f9a85b05be3&date=' + time,
    //   success: (msg) => {
    //     let day = msg.data.result.yangli.substring(8);
    //     this.setData({
    //       year: msg.data.result,
    //       day: day,
         
    //     })
    //   }
    // })
  },
  //点击弹出城市选择器
  changecity(e) {
    //点击切换城市 换成不同的城市天气
    this.setData({
      //应为数据 上海市 上海市 虹口区 所有只需要最后一个即可  得到的是个数组
      dacity: e.detail.value[2],
    });
    //这个数据也只是需要 最后一个地区作为参数即可
    let dacity = e.detail.value[2];
    wx: wx.request({
      //天气接口
      
      url: 'http://wthrcdn.etouch.cn/weather_mini?city=' + dacity,
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
  //点击按钮弹出影藏的普通——星座选择器
  // bindPickerChange(e) {
    
  //   this.setData({
  //     index: e.detail.value
  //   })
  // },

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

      url: 'http://wthrcdn.etouch.cn/weather_mini?city=东城区',
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
    // 点击时间切换接口 获取当日的万年历数据
    let aa = time.replace(/^(.{4})(.{1})(.*)$/, '$1年$3');
    //应为得到的是 2018-09-30 所有要让两个-换成 年月
    let aaa = aa.replace(/^(.{7})(.{1})(.*)$/, '$1月$3');
    let aaa1 = aaa+"日";
    this.setData({
          
          aaa: aaa1
        })
    // wx: wx.request({
    //   url: 'http://v.juhe.cn/laohuangli/d?key=48d0e29d484984c057193f9a85b05be3&date=' + time,
    //   success: (msg) => {
    //     let day = msg.data.result.yangli.substring(8);
    //     this.setData({
    //       year: msg.data.result,
    //       day: day,
    //      
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