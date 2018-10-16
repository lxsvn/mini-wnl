// pages/center/center.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    more:4,
    jzgd:"加载更多",
    iftrue:true,
    a:100,
    
  },
  nowmore:function(e){
    if (this.data.more==4){
      this.setData({
        more: 0,
        jzgd:"收起"
      })
    }else if(this.data.more==0){
      this.setData({
        more: 4,
        jzgd: "加载更多"
      })
    }
  },
  content:function(e){
    console.log(this.data.book)
    wx.navigateTo({
      title: "goback",
      url: '../content/content?ccc=' + JSON.stringify(this.data.book)
    })
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.result)
    
    wx: wx.request({
      url: 'http://api.zhuishushenqi.com/book/' + options.result,
      success: (msg) => {
        let cc = msg.data.cover;
        let aa = decodeURIComponent(cc)
        let aaa = aa.replace("/agent/", "");
        console.log(msg.data)
        
        if (msg.data.wordCount>=10000){
          var word = ((msg.data.wordCount) / 10000).toFixed(1) + "万"
        }else{
          var word =msg.data.wordCount
        }
        this.setData({
          books: msg.data,
          cover: aaa,//图片
          word: word,
          title: msg.data.title,
          book:{
            cover: aaa,
            title: msg.data.title,
            id: msg.data._id
          }
        })
        if (msg.data.rating==null){
          this.setData({
            iftrue:false
          })
        }else{
          var width = msg.data.rating.score
        var bfb = Math.floor(width)
            bfb=bfb*10
          console.log(width)
          var pf = width.toFixed(1)
          console.log(pf)
          this.setData({
            pf: pf,
            bfb: bfb,
            iftrue: true
          })
        }
        
       
        
        
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