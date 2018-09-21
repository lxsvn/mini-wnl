var dateTimePicker = require('./dateTimePicker.js');
const util = require('../../utils/util.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aaa: '2018-09-20',
    year:[],
    day:[],
    bigday:"八月初十" ,
    date: '2018-09-20',
  },
  changeDate(e) {
    console.log(e.detail.value);
    let aa = e.detail.value.replace(/^(.{4})(.{1})(.*)$/, '$1年$3');
    let aaa = aa.replace(/^(.{7})(.{1})(.*)$/, '$1月$3');
    console.log(aaa)
    this.setData({
      date: e.detail.value,
    });
    let date=e.detail.value;
    wx: wx.request({
      url: 'http://v.juhe.cn/laohuangli/d?key=48d0e29d484984c057193f9a85b05be3&date=' + date,
      success: (msg) => {
        let day = msg.data.result.yangli.substring(8);
        let bigday = msg.data.result.yinli.substring(6)
        this.setData({
          year: msg.data.result,
          day: day,
          bigday: bigday,
          date: date
        })
      }
    })
  },
  left: function () {
  var that = this    
  var Y = new Date().getFullYear(); 
  var m = new Date().getMonth()+1;
  var d = new Date().getDate(); 
    var str = '';
    d -= 1;
    if (m <= 0) {
      
      str = Y + '/' + (m - 1) + '/' + 30;
      if (m <= 0) {
        str = (Y - 1) + '/' + 12 + '/' + d;
      } else {
        str = Y + '/' + m + '/' + d
      }
    } else {
      str = Y + '/' + m + '/' + d
    }
    let aaa = new Date(str);
    // this.setData({
    //   currentDate: aaa.getFullYear() + '年' + (aaa.getMonth() + 1) + '月' + aaa.getDate() + '日',
    //   aaa: aaa
    // })
    let aac= aaa.getFullYear() + '年' + (aaa.getMonth() + 1) + '月' + aaa.getDate() + '日';
    console.log(aac)
  },
  right() {
      
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = dateTimePicker.formatTime(new Date());

    // wx: wx.request({
    //   url: 'http://v.juhe.cn/laohuangli/d?key=48d0e29d484984c057193f9a85b05be3&date=' + time,
    //   success: (msg) => {
    //     let day = msg.data.result.yangli.substring(8);
    //     let bigday = msg.data.result.yinli.substring(6)
    //     this.setData({
    //       year: msg.data.result,
    //       day: day,
    //       bigday: bigday
    //     })
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