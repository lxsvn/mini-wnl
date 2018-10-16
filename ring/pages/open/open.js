// pages/open/open.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obccca:'',
  },
  //关键词点击搜索
  lisy:function(e){
    console.log(e.currentTarget.dataset.text)
    wx.navigateTo({
      title: "goback",
      url: '../search/search?result=' + e.currentTarget.dataset.text
    })
  },
  //input内容点击按钮搜索
  search:function(e){
    wx.navigateTo({
      title: "goback",
      url: '../search/search?result=' + this.data.obccca
    })
  },
  //input框 内容进行改变的时候 打印其内容
  bindKeyInput:function(e){
    console.log(e.detail.value)
    this.setData({
      obccca: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx: wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.song.getRecommandSongList&song_id=877578&num=100',
      success: (msg) => {

        console.log(msg.data.result.list)
        this.setData({
          index: msg.data.result.list
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