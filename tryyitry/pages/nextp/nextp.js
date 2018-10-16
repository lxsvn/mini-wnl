// pages/nextp/nextp.js

var wxCharts = require('../report/wxcharts.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: [
      {
        key: 1,
        name: "收入",
        money: 325,
        lx: "工资",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#236f7f",
      },
      {
        key: 1,
        name: "花费",
        money: 25,
        lx: "交通",
        sj: "2018-9-6",
        sm: "",
        co: "#c3572d",
      },
      {
        key: 1,
        name: "收入",
        money: 325,
        lx: "红包",
        sj: "2018-9-28",
        sm: "thisk",
        co: "#236f7f",
      },
      {
        key: 1,
        name: "花费",
        money: 25,
        lx: "食物",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#c3572d",
      },
      {
        key: 2,
        name: "收入",
        money: 325,
        lx: "工资",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#236f7f",
      },
      {
        key: 1,
        name: "花费",
        money: 25,
        lx: "食物",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#c3572d",
      },
      {
        key: 2,
        name: "收入",
        money: 325,
        lx: "工资",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#236f7f",
      },
      {
        key: 1,
        name: "花费",
        money: 25,
        lx: "交通",
        sj: "2018-9-6",
        sm: "",
        co: "#c3572d",
      },
      {
        key: 2,
        name: "收入",
        money: 325,
        lx: "红包",
        sj: "2018-9-28",
        sm: "thisk",
        co: "#236f7f",
      },
      {
        key: 1,
        name: "花费",
        money: 25,
        lx: "食物",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#c3572d",
      },
      {
        key: 1,
        name: "收入",
        money: 325,
        lx: "工资",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#236f7f",
      },
      {
        key: 1,
        name: "花费",
        money: 25,
        lx: "食物",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#c3572d",
      },
      {
        key: 2,
        name: "收入",
        money: 325,
        lx: "工资",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#236f7f",
      },
      {
        key: 1,
        name: "花费",
        money: 25,
        lx: "交通",
        sj: "2018-9-6",
        sm: "",
        co: "#c3572d",
      },
      {
        key: 1,
        name: "收入",
        money: 325,
        lx: "红包",
        sj: "2018-9-28",
        sm: "thisk",
        co: "#236f7f",
      },
      {
        key: 1,
        name: "花费",
        money: 25,
        lx: "食物",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#c3572d",
      },
      {
        key: 2,
        name: "收入",
        money: 325,
        lx: "工资",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#236f7f",
      },
      {
        key: 1,
        name: "花费",
        money: 25,
        lx: "食物",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#c3572d",
      },
      {
        key: 2,
        name: "收入",
        money: 325,
        lx: "工资",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#236f7f",
      },
      {
        key: 1,
        name: "花费",
        money: 25,
        lx: "交通",
        sj: "2018-9-6",
        sm: "",
        co: "#c3572d",
      },
      {
        key: 2,
        name: "收入",
        money: 325,
        lx: "红包",
        sj: "2018-9-28",
        sm: "thisk",
        co: "#236f7f",
      },
      {
        key: 1,
        name: "花费",
        money: 25,
        lx: "食物",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#c3572d",
      },
      {
        key: 1,
        name: "收入",
        money: 325,
        lx: "工资",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#236f7f",
      },
      {
        key: 1,
        name: "花费",
        money: 25,
        lx: "食物",
        sj: "2018-9-28",
        sm: "this.data.remark",
        co: "#c3572d",
      }

    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
let arr = this.data.index.filter(item => {
      if (item.key === 1) {
        return item
      }
    })
    //单独把key为1 里面的money拿出来
    let b = arr.map(item => {
      return item.money
    })
    //用于计算b里面money相加的值
    var newarr = b.reduce(function (sa, ed) {
      return sa + ed
    })
    console.log(newarr)
    

    let abb = this.data.index.filter(item => {
      if (item.key == 2) {
        return item
      }
    })
    let c = abb.map(item => {
      return item.money
    })
    var newbrr = c.reduce(function (sa, ed) {
      return sa + ed
    })
    let ye = newbrr - newarr;
    
    console.log(newbrr)
    this.setData({
      abb: newbrr,
      newarr: newarr,
      ye: ye
    })
    new wxCharts({
    canvasId: 'columnCanvas',
    type: 'column',
      subtitle: {
        name: '2113213232',
        color: '#666666',
        fontSize: 15
      },
      categories: [options.data1 + "-" + options.data2],
    series: [{
        name: '收入',
      data: [this.data.abb]
    }, {
        name: '支出',
        data: [this.data.newarr]
    },
    {
      name: '余额',
      data: [this.data.ye] 
    }
    ],
    yAxis: {
        format: function (val) {
            return val + '元';
        },
      title: 'hello',
      min: 0
    },
    width: 320,
    height: 200
});
    
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