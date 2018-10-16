var dateTimePicker = require('./dateTimePicker.js');
Page({
  obccca:"",
  remark:"",
  /**
   * 页面的初始数据
   */
  data: {
    index:"食物",
    array: ['食物', '学费', '衣服', '医疗', '娱乐', '租金', '交通', '其他支付'],
    objectArray: [{ id: 0, name: '食物' }, { id: 1, name: '学费' }, { id: 2, name: '衣服' }, { id: 3, name: '医疗' }, { id: 4, name: '娱乐' }, { id: 5, name: '租金 ' }, { id: 6, name: '交通' }, { id: 7, name: '其他支付' }],
    _num:1,
    arrayy: ['投资收益', '工资', '红包', '兼职', '奖金', '利息', '其他收入'],
    objectArrayy: [{ id: 0, name: '投资收益' }, { id: 1, name: '工资' }, { id: 2, name: '红包' }, { id: 3, name: '兼职' }, { id: 4, name: '奖金' }, { id: 5, name: '利息 ' }, { id: 6, name: '其他收入' }],
    indexx:"投资收益",
    inputValue:"",
    obccca:"",
    remark:''
  },
  //时间选择器
  changeDate: function (e) {
    this.setData({
      aaa: e.detail.value
    })
  },
  //花费页面的普通选择器
  bindPickerChange: function (e) {
    console.log( e.detail.value)
    console.log( this.data.array[e.detail.value])  
    console.log(this.data.array[e.detail.value])
    
    this.setData({
      index: this.data.array[e.detail.value]
    })

  },
  //收入页面的普通选择其
  bindPickerChangee: function (e) {
    console.log(e.detail.value)
    console.log(this.data.arrayy[e.detail.value])
    console.log(this.data.arrayy[e.detail.value])

    this.setData({
      indexx: this.data.arrayy[e.detail.value]
    })

  },
  //花费收入的动态内名切换
  menuClick: function (e) {
    this.setData({
      _num: e.currentTarget.dataset.num
    })
  },
  //点击确定按钮 传递一个对象 目前传的过去 但是宁一个页面不显示
  obccca:function(){
    var boj={
      key:2,
      name:"收入",
      money: this.data.obccca,
        lx: this.data.indexx,
      sj: this.data.aaa,
      sm: this.data.remark,
      co: "#236f7f",
    }
    //把这个对象进行字符串转换
    var cac = JSON.stringify(boj);
    // wx.navigateTo({
    //   url: '../check/check?data=1' 
    // })
    if (this.data.obccca==""){
      wx.showToast({
        title: '请输入金额 ~',
        image:"../../assets/imgs/tishi.png",
        duration: 1000,
        mask: true
      })
    } else if (!(/^[0-9]+(.[0-9]{1,3})?$/.test(this.data.obccca))){
      wx.showToast({

        title: '请输入最多两位小数的金额',
        duration: 2000,

        icon: 'none'

      });
    }else{
      wx.showToast({
        title: '保存成功了 ~',
        icon: "success",
        duration: 1000,
        mask: true
      })
      this.setData({
        obccca: '',//将data的inputValue清空,
        remark:''
      });
    }

  },
  obcccb: function () {
    var boj = {
      key:1,
      name:"花费",
      money: this.data.obccca,
      lx: this.data.index,
      sj: this.data.aaa,
      sm: this.data.remark,
      co: "#c3572d",
    }
    //把这个对象进行字符串转换
    var cac = JSON.stringify(boj);
    
    
    if (this.data.obccca == "") {
      wx.showToast({
        title: '请输入金额 ~',
        image: "../../assets/imgs/tishi.png",
        duration: 1000,
        mask: true
      })
    } else if (!(/^[0-9]+(.[0-9]{1,3})?$/.test(this.data.obccca))) {
      wx.showToast({

        title: '请输入最多两位小数的金额',
        duration: 2000,

        icon: 'none'

      });
    }else {
      wx.showToast({
        title: '保存成功了 ~',
        icon: "success",
        duration: 1000,
        mask: true,
      })
      this.setData({
        obccca: '',//将data的inputValue清空,
        remark: ''
      });
      console.log(cac);
      
    }
  },
  //
  compute: function () {
    wx.navigateTo({
      title: "goback",
      url: '../compute/compute?city=' + this.data.obccca
    })
    console.log(this.data.inputValue)
  },
  bindKeyInput:function(e){
    console.log(e.detail.value);
    this.setData({
      obccca: e.detail.value
    })
  },
  text:function(e){
    console.log(e.detail.value);
    this.setData({
      remark: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取当日时间放弃时间选择器里面
    var time = dateTimePicker.formatTime(new Date());
    console.log(time)
    this.setData({
      aaa: time
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