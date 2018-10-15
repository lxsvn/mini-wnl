// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iftrue:false
  },
  center:function(e){
    console.log(e.currentTarget.dataset.text)
    wx.navigateTo({
      title: "goback",
      url: '../center/center?result=' + e.currentTarget.dataset.text
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.result)
    this.setData({
     
      iftrue: true
    })
    wx: wx.request({
      url: 'http://api.zhuishushenqi.com/book/fuzzy-search?query=' + options.result+'&start=0&limit=25',
      success: (msg) => {

        console.log(msg.data.books)

        let tz = msg.data.books.map(item => {
          return item.cover
        })
        
        var query_clone = JSON.parse(decodeURIComponent(JSON.stringify(tz)));
        
         
        var ccc = JSON.stringify(query_clone)
        // let aaa = ccc.replace("/agent/","");
        let ddd = ccc.split("/agent/").join("");
        let bbb = JSON.parse(ddd)
        
        this.setData({
          books1: msg.data.books,
          cover: bbb,
          iftrue:false
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