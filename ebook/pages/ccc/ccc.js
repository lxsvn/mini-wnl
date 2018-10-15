Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let zhangjie = 0

    wx: wx.request({
      url: 'http://api.zhuishushenqi.com/toc?view=summary&book=5a9fb74bdf01ca1e8fe334c6' ,//+ data.id,
      success: (msg) => {
        console.log(msg)
        wx: wx.request({
          url: 'http://api.zhuishushenqi.com/toc/' + msg.data[1]._id + '?view=chapters',
          success: (msg) => {
            console.log(msg)

            let code = encodeURIComponent(msg.data.chapters[(zhangjie)].link)

            this.setData({
              title: msg.data.chapters[zhangjie].title,
              chapters: msg.data.chapters
            })

            wx: wx.request({
              url: 'http://chapter2.zhuishushenqi.com/chapter/' + code + '?k=2124b73d7e2e1945&t=1468223717',
              success: (msg) => {
                console.log(msg.data.chapter.body)
                var arr=[];
                var body = msg.data.chapter.body
                body = body.split("\n");
              
                console.log(body)
                this.setData({
                  body: body
                })
              }
            })
          }
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