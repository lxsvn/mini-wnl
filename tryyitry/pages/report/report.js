// pages/index/lookrecord/lookrecord.js
var wxCharts = require("./wxcharts.js");   //引入wxChart文件
var dateTimePicker = require('../index/dateTimePicker.js');
var app = getApp();
var lineChart = null;
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
    _num: 1,
    arr:''
  },
  menuClick: function (e) {
    this.setData({
      _num: e.currentTarget.dataset.num
    })
  },
  torecord() {
    // wx.navigateTo({
    //   url: '../lookrecord/lookrecord',
    // })
    wx.navigateBack({
      delta: 1,
    })
  },
  touchHandler: function (e) {
    lineChart.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      },
    });

  },
  updateData: function (e) {
  },
  changeDate: function (e) {
    this.setData({
      ccc: e.detail.value
    })
  },
  changeDate2: function (e) {
    this.setData({
      aaa: e.detail.value
    })
  },
  next:function(){
    wx.navigateTo({
      title: "goback",
      url: '../nextp/nextp?data1='+this.data.ccc+"&data2="+this.data.aaa
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    //投资收益
    let tz = this.data.index.filter(item => {
      if (item.lx === "投资收益") {
        return item
      }
    })
    if (tz == "") {
      console.log("投资收益为空")
    } else {
      let tzz = tz.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var tzzz = tzz.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        tzsy: tzzz
      })
    }

    //工资
    let gz = this.data.index.filter(item => {
      if (item.lx === "工资") {
        return item
      }
    })
    if (gz == "") {
      console.log("工资为空")
    } else {
      let gzz = gz.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var gzzz = gzz.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        gongzi: gzzz
      })
    }

    //红包
    let hb = this.data.index.filter(item => {
      if (item.lx === "红包") {
        return item
      }
    })
    if (hb == "") {
      console.log("红包为空")
    } else {
      let hbb = hb.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var hbbb = hbb.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        hongbao: hbbb
      })
    }
    //兼职
    let jz = this.data.index.filter(item => {
      if (item.lx === "兼职") {
        return item
      }
    })
    if (jz == "") {
      console.log("兼职为空")
    } else {
      let jzz = jz.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var jzzz = jzz.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        jianzhi: jzzz
      })
    }
    //奖金
    let jj = this.data.index.filter(item => {
      if (item.lx === "奖金") {
        return item
      }
    })
    if (jj == "") {
      console.log("奖金为空")
    } else {
      let jjj = jj.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var jjjj = jjj.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        jiangjing: jjjj
      })
    }
    //利息
    let lx = this.data.index.filter(item => {
      if (item.lx === "利息") {
        return item
      }
    })
    if (lx == "") {
      console.log("利息为空")
    } else {
      let lxx = lx.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var lxxx = lxx.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        lixi: lxxx
      })
    }
    //其他收入
    let qtsr = this.data.index.filter(item => {
      if (item.lx === "其他收入") {
        return item
      }
    })
    if (qtsr == "") {
      console.log("其他收入为空")
    } else {
      let qtsrt = qtsr.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var qtsrtt = qtsrt.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        qtsr: qtsrtt
      })
    }
    let newobj = [
      {
        name: "投资收益",
        money: this.data.tzsy
      },
      {
        name: "工资",
        money: this.data.gongzi
      },
      {
        name: "红包",
        money: this.data.hongbao
      },
      {
        name: "兼职",
        money: this.data.jianzhi
      },
      {
        name: "奖金",
        money: this.data.jiangjing
      },
      {
        name: "利息",
        money: this.data.jiangjing
      },
      {
        name: "其他收入",
        money: this.data.qtsr
      }
    ]
    var mewobj11 = newobj.filter(item => {
      if (item.money != undefined) {
        return item
      }
    })
    this.setData({
      newobj: mewobj11
    })

    var windowWidth = '', windowHeight = '';    //定义宽高
    try {
      var res = wx.getSystemInfoSync();    //试图获取屏幕宽高数据
      windowWidth = res.windowWidth / 750 * 690;   //以设计图750为主进行比例算换
      windowHeight = res.windowWidth / 750 * 550    //以设计图750为主进行比例算换
    } catch (e) {
      console.error('getSystemInfoSync failed!');   //如果获取失败
    }
    new wxCharts({
      canvasId: 'lineCanvas',
      type: 'pie',
      series: [
        {   //具体坐标数据
          name: '成交量1',
          data: 25,
        }, {
          name: '成交量2',
          data: 35,
        }, {
          name: '成交量3',
          data: 78,
        }, {
          name: '成交量4',
          data: 11,
        }, {
          name: '成交量5',
          data: 80,
        }, {
          name: '成交量5',
          data: 48,
        }
      ],
      width: windowWidth,  //图表展示内容宽度
      height: windowHeight,  //图表展示内容高度
      dataLabel: true,
      animation: true,
    });

    new wxCharts({
      canvasId: 'lineCanvass',
      type: 'pie',
      series: [
        {   //具体坐标数据
        name: '成交量1',
        data: 25,
      }, {
          name: '成交量2',
          data: 35,
      }, {
          name: '成交量3',
          data: 78,
        }, {
          name: '成交量4',
          data: 11,
        }, {
          name: '成交量5',
          data: 80,
        }, {
          name: '成交量5',
          data: 48,
        }
      ],
      width: windowWidth,  //图表展示内容宽度
      height: windowHeight,  //图表展示内容高度
      dataLabel: true,
      animation: true, 
    });

    //获取当日时间
    var time = dateTimePicker.formatTime(new Date());
    var Y = new Date().getFullYear();
    var m = new Date().getMonth() + 1;
    var d = 1;
    let ymd = Y + '-' + m + '-' + d
    this.setData({
      aaa: time,
      ccc: ymd
    })

    //用于查找 index这个数组中 key为1的有那些
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
    this.setData({
      arr: arr,
      newarr: newarr,
      abb: abb,
      newbrr: newbrr,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //投资收益
    let tz = this.data.index.filter(item => {
      if (item.lx === "投资收益") {
        return item
      }
    })
    if (tz == "") {
      console.log("投资收益为空")
    } else {
      let tzz = tz.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var tzzz = tzz.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        tzsy: tzzz
      })
    }
    
    //工资
    let gz = this.data.index.filter(item => {
      if (item.lx === "工资") {
        return item
      }
    })
    if (gz == "") {
      console.log("工资为空")
    } else {
      let gzz = gz.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var gzzz = gzz.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        gongzi: gzzz
      })
    }
    
    //红包
    let hb = this.data.index.filter(item => {
      if (item.lx === "红包") {
        return item
      }
    })
    if (hb == "") {
      console.log("红包为空")
    } else {
      let hbb = hb.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var hbbb = hbb.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        hongbao: hbbb
      })
    }
    //兼职
    let jz = this.data.index.filter(item => {
      if (item.lx === "兼职") {
        return item
      }
    })
    if (jz == "") {
      console.log("兼职为空")
    } else {
      let jzz = jz.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var jzzz = jzz.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        jianzhi: jzzz
      })
    }
    //奖金
    let jj = this.data.index.filter(item => {
      if (item.lx === "奖金") {
        return item
      }
    })
    if (jj == "") {
      console.log("奖金为空")
    } else {
      let jjj = jj.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var jjjj = jjj.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        jiangjing: jjjj
      })
    }
    //利息
    let lx = this.data.index.filter(item => {
      if (item.lx === "利息") {
        return item
      }
    })
    if (lx == "") {
      console.log("利息为空")
    } else {
      let lxx = lx.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var lxxx = lxx.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        lixi: lxxx
      })
    }
    //其他收入
    let qtsr = this.data.index.filter(item => {
      if (item.lx === "其他收入") {
        return item
      }
    })
    if (qtsr == "") {
      console.log("其他收入为空")
    } else {
      let qtsrt = qtsr.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var qtsrtt = qtsrt.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        qtsr: qtsrtt
      })
    }
    let newobj = [
      {
        name:"投资收益",
        money: this.data.tzsy
      },
      {
        name: "工资",
        money: this.data.gongzi
      },
      {
        name: "红包",
        money: this.data.hongbao
      },
      {
        name: "兼职",
        money: this.data.jianzhi
      },
      {
        name: "奖金",
        money: this.data.jiangjing
      },
      {
        name: "利息",
        money: this.data.jiangjing
      },
      {
        name: "其他收入",
        money: this.data.qtsr
      }
    ]
    var mewobj11 = newobj.filter(item => {
      if (item.money != undefined) {
        return item
      }
    })
    this.setData({
      newobj: mewobj11
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //食物
    let sw = this.data.index.filter(item => {
      if (item.lx === "食物") {
        return item
      }
    })
    if(sw ==""){
    }else{
      //单独把key为1 里面的money拿出来
      let sww = sw.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var swww = sww.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        shiwu: swww
      })
    }
    //学费
    let xf = this.data.index.filter(item => {
      if (item.lx === "学费") {
        return item
      }
    })
    if (xf == "") {
      console.log("学费为空")
    } else {
      let xff = xf.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var xfff = xff.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        xuefei: xfff
      })
    }
    //衣服
    let yf = this.data.index.filter(item => {
      if (item.lx === "衣服") {
        return item
      }
    })
    if (yf == "") {
      console.log("衣服为空")
    } else {
      let yff = yf.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var yfff = yff.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        yifu: yfff
      })
    }
    //医疗
    let yl = this.data.index.filter(item => {
      if (item.lx === "衣服") {
        return item
      }
    })
    if (yl == "") {
      console.log("医疗为空")
    } else {
      let yll = yl.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var ylll = yll.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        tiliao: ylll
      })
    }
    //娱乐
    let yn = this.data.index.filter(item => {
      if (item.lx === "娱乐") {
        return item
      }
    })
    if (yn == "") {
      console.log("娱乐为空")
    } else {
      let ynn = yn.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var ynnn = ynn.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        yulei: ynnn
      })
    }
    //租金
    let zj = this.data.index.filter(item => {
      if (item.lx === "租金") {
        return item
      }
    })
    if (zj == "") {
      console.log("租金为空")
    } else {
      let zjj = zj.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var zjjj = zjj.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        zujing: zjjj
      })
    }
    //交通
    let jt = this.data.index.filter(item => {
      if (item.lx === "交通") {
        return item
      }
    })
    if (jt == "") {
      console.log("交通为空")
    } else {
      let jtt = jt.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var jttt = jtt.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        jiaotong: jttt
      })
    }
    //其他支付
    let qt = this.data.index.filter(item => {
      if (item.lx === "其他支付") {
        return item
      }
    })
    if (qt == "") {
      console.log("其他支付为空")
    } else {
      let qtt = qt.map(item => {
        return item.money
      })
      //用于计算b里面money相加的值
      var qttt = qtt.reduce(function (sa, ed) {
        return sa + ed
      })
      this.setData({
        qtzf: qttt
      })
    }


    let newobj2 = [
      {
        name: "食物",
        money: this.data.shiwu
      },
      {
        name: "学费",
        money: this.data.xuefei
      },
      {
        name: "衣服",
        money: this.data.yifu
      },
      {
        name: "医疗",
        money: this.data.yiliao
      },
      {
        name: "娱乐",
        money: this.data.yulei
      },
      {
        name: "租金",
        money: this.data.zujing
      },
      {
        name: "交通",
        money: this.data.jiaotong
      },
      {
        name: "其他支付",
        money: this.data.qtzf
      }
    ]
    var mewobj22=newobj2.filter(item=>{
      if(item.money!=undefined){
        return item
      }
    })
   
    console.log(mewobj22)
    this.setData({
      newobj2: mewobj22
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

  },
})
