// pages/lists/lists.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    time: '',
    n: '',
    _num:2
  },
  changeDate: function() {
    this.setData({
      ifshow: (!this.data.ifshow),
      ifture: (!this.data.ifture)
    })
  },
  ccc: function(e) {
    this.setData({
      _num: e.currentTarget.dataset.num
    })
  },
  bccc: function() {
    wx.playBackgroundAudio();
    
    var n = this.data.n;
    this.data.time = setInterval(function() {
      // animation.translateY(-60).step()

      n = n + 1;

      this.animation.rotate(2 * (n)).step()
      this.setData({
        animationData: this.animation.export(),
        n: n
      })
    }.bind(this), 200)


  },
  bcaa: function() {
    wx.pauseBackgroundAudio();
    clearInterval(this.data.time)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options, id, cb) {
    console.log(options.result)
    wx: wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.song.playAAC&songid='+ options.result,
      success: (msg) => {

        console.log(msg.data)
        this.setData({
          index: msg.data
        })
      }
    })
    //请求歌词
    wx: wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.song.lry&songid='+ options.result,
      success: (msg) => {
        console.log(msg)
        if (msg.data.lrcContent == undefined) {
          this.setData({
            lry: msg.data,
            lyricArr: "暂无歌词"
          })
        } else {
          let lrys = msg.data.lrcContent;
          let timearr = lrys.split('[')
          let obj = {}
          let lyricArr = []
          timearr.forEach((item) => {
            let key = parseInt(item.split(']')[0].split(':')[0]) * 60 + parseInt(item.split(']')[0].split(':')[1])
            let val = item.split(']')[1];
            obj[key] = val
          })

          for (let key in obj) {
            // obj[key] = obj[key].split('\n')[0]
            lyricArr.push(obj[key])
          }
          this.setData({
            lry: msg.data,
            lyricArr: lyricArr
          })
        }

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease',
    })

    this.animation = animation

    // animation.scale(2, 2).rotate(45).step()



    var n = 0;
    //连续动画需要添加定时器,所传参数每次+1就行
    clearInterval(time)
    var time = setInterval(function() {
      // animation.translateY(-60).step()

      n = n + 1;

      this.animation.rotate(2 * (n)).step(),

        this.setData({
          animationData: this.animation.export(),
          n: n
        })
    }.bind(this), 200)

    this.setData({
      time: time,

    })
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    var that = this;
    //清除计时器  即清除setInter
    clearInterval(this.data.time)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})