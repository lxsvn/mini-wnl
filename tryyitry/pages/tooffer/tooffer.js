// pages/tooffer/tooffer.js
Page({
  text: '',
  /**
   * 页面的初始数据
   */
  data: {
    text:''
  },
  btn:function(){
    console.log(this.data.text)
    if (this.data.text==""){
      wx.showToast({
        title: '建议框不能为空',
        image: "../../assets/imgs/tishi.png",
        duration: 1000,
        mask: true
      })
    }else{
      wx.showToast({
        title: '提交成功，感谢您的支持',
        icon: "success",
        duration: 1000,
        mask: true,
      })
      this.setData({
        text: ''//将data的inputValue清空
      });
    }



    
  },
  text:function(e){
    this.setData({
      text: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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