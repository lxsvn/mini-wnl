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
    weather1:[],
    weather2: [],
    weather3: [],
    data:[],
    suit:[],
    taboo:[],
    weather:[],
    high0:[],
    low0:[],
    high1: [],
    low1: [],
    high2: [],
    low2: [],
    date: '2018-09-20',
    year:[],   
    day:[],
  },
  onChangeShowState: function () {

    var that = this;

    that.setData({

      showView: (!that.data.showView)

    })
    that.setData({
      ifture:(!that.data.ifture)
    })

  },
  changeDate(e) {
    
    this.setData({ 
      date: e.detail.value,
       });
  },
  
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx:wx.request({
      
      url: 'https://www.sojson.com/open/api/weather/json.shtml?city=北京',
      success:(msg)=>{
       
        let high0 = msg.data.data.forecast[0].high.substring(2,5);
        let low0 = msg.data.data.forecast[0].low.substring(2, 5);
        let high1 = msg.data.data.forecast[1].high.substring(2, 5);
        let low1 = msg.data.data.forecast[1].low.substring(2, 5);
        let high2 = msg.data.data.forecast[2].high.substring(2, 5);
        let low2 = msg.data.data.forecast[2].low.substring(2, 5);
        
        this.setData({
          weather1: msg.data.data.forecast[0],
          weather2: msg.data.data.forecast[1],
          weather3: msg.data.data.forecast[2],
          weather:msg.data,
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var time = dateTimePicker.formatTime(new Date());
   
    wx: wx.request({
      url: 'http://v.juhe.cn/laohuangli/d?key=48d0e29d484984c057193f9a85b05be3&date=' + time,
      success: (msg) => {
        let day = msg.data.result.yangli.substring(8);
        console.log(msg);
        this.setData({
          year: msg.data.result,
          day: day,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx: wx.request({
      url: 'http://web.juhe.cn:8080/constellation/getAll?consName=%E7%8B%AE%E5%AD%90%E5%BA%A7&type=today&key=48d0e29d484984c057193f9a85b05be3' ,
      success: (msg) => {
        console.log(msg);
        this.setData({
         
        })
      }
    })
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