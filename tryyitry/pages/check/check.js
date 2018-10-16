// pages/check/check.js
var dateTimePicker = require('../index/dateTimePicker.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    index: [
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
      }

    ],
    
  },
  changeDate:function(e){
    console.log(2)
    this.setData({
      ccc: e.detail.value
    })
  },
  changeDate2: function (e) {
    console.log(e.detail.value)
    this.setData({
       aaa: e.detail.value
     })
  },
  deletediv:function(e){
    var that = this;
    var index = that.data.index;
    var indexx = e.currentTarget.dataset.index;//获取当前长按图片下标
    wx.showModal({
      title: '提示',
      content: '确定删除这条记录吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          index.splice(indexx, 1);
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        that.setData({
          index
        });
      }
    })
    console.log(index)
    console.log(indexx)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = dateTimePicker.formatTime(new Date());
    
    var Y = new Date().getFullYear();
    var m = new Date().getMonth() + 1;
    var d = 1; 
    let ymd=Y+'-'+m+'-'+d
    this.setData({
      aaa: time,
      ccc: ymd
    })

    //用于查找 index这个数组中 key为1的有那些
    let arr = this.data.index.filter(item=>{
     if(item.key===1){
       return item
     }else if(item.key===2){
       return item
     }
   })
   //单独把key为1 里面的money拿出来
    let b = arr.map(item =>{
      return item.money
    })
    //用于计算b里面money相加的值
    var newarr=b.reduce(function(sa,ed){
      return sa+ed
    })
    this.setData({
      newarr: newarr,
      b: b.length
    })


    let abb = this.data.index.filter(item => {
      if (item.key == 2) {
        return item
      }
    })
    if(abb==""){
      let acc = 0 - newarr
      this.setData({
        newbrr: 0,
        c: 0,
        acc: acc
      })
    }
    let c = abb.map(item => {
      return item.money
    })
    var newbrr = c.reduce(function (sa, ed) {
      return sa + ed
    })
    let acc = newbrr - newarr
    this.setData({
      newbrr: newbrr,
      c: c.length,
      acc: acc
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
  onShow: function (options) {
    
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