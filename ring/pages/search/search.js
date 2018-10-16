// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"铃声听听",
    ifshow:false,
    iftrue:false,
    title:"铃声听听",
    bitrate_fee:'好的铃声听听',
    setInter: '',
  },
  changeDate:function(){
    this.setData({
      ifture: (!this.data.ifture)
    })
  },
  bccc: function () {
    wx.pauseBackgroundAudio();
  },
  bcaa: function () {
    wx.playBackgroundAudio();
  },
  open: function(e) {
    console.log(e.currentTarget.dataset.text)

    wx: wx.request({
      url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.song.playAAC&songid=' + e.currentTarget.dataset.text,
      success: (msg) => {
        wx.playBackgroundAudio({ //播放地址			
          dataUrl: msg.data.bitrate.file_link,
          title: msg.data.songinfo.title, //图片地址,
          coverImgUrl: msg.data.songinfo.album_500_500,
        })
        this.setData({
          title: msg.data.songinfo.title, //图片地址,
          coverImgUrl: msg.data.songinfo.album_500_500,
          distribution: msg.data.songinfo.distribution,
          bitrate_fee: msg.data.songinfo.author,
          song_id: e.currentTarget.dataset.text
        })

      }
    })
    this.setData({
      ifture: true
    })
  },
  listenerButtonGetPlayState: function() {
    wx.getBackgroundAudioPlayerState({
      success: function(res) {
         //duration 总时长	  
        //currentPosition 当前播放位置	        
        //status 播放状态	       
        //downloadPercent 下载状况 100 即为100%	         
        //dataUrl 当前播放音乐地址	       
      }
    })
  },
  lists: function (e) {
    if (e.currentTarget.dataset.text == undefined) {

    } else {
      wx.navigateTo({
        title: "goback",
        url: '../lists/lists?result=' + e.currentTarget.dataset.text
      })
    }
    console.log(e.currentTarget.dataset.text)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.result)
    
    if (options.result==""){
      wx.showToast({
        title: '该搜索为空哦 ~ ',
        image: "../imgs/tishi.png",
        duration: 1000,
        mask: true
      })
      var that = this;
      clearInterval(that.data.setInter)
      that.data.setInter = setInterval(
        function () {
          wx.reLaunch({
            title: "goback",
            url: '../open/open'
          })
        }
        , 1500);   
      
    }else{
      
      wx: wx.request({
        url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.search.catalogSug&query=' + options.result,
        success: (msg) => {
          if (msg.data.error_code==22001) {
            wx.showToast({
              title: '该搜索为空哦 ~ ',
              image: "../imgs/tishi.png",
              duration: 1000,
              mask: true
            })
            var that = this;
            clearInterval(that.data.setInter)
            that.data.setInter = setInterval(
              function () {
                wx.reLaunch({
                  title: "goback",
                  url: '../open/open'
                })
              }
              , 1500);   
          } else {
            console.log(msg)
            this.setData({
              song: msg.data.song
            })
          }
          
        }
      })
    }
    
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
    clearInterval(that.data.setInter)
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