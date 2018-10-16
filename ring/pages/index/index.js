Page({

  /**
   * 页面的初始数据
   */
  data: {
    _num: 1,
    ifshow:false,
    iftrue:false,
    title:"铃声听听",
    bitrate_fee:'好的铃声听听',
    scrollTop: 0,
    pages:20
  },
  changeDate: function() {
    this.setData({
      ifture: (!this.data.ifture)
    })
  },
  lower: function (e) {
    if (this.data.index.length>=40){

    }else{
      wx: wx.request({
        url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.billboard.billList&type=2&size=40&offset=0',
        success: (msg) => {

          console.log(msg.data.song_list)
          this.setData({
            index: msg.data.song_list
          })
        }
      })
    }
    
    
  },
  newss: function (e) {
    if (this.data.news.length >= 40){

    }else{
    wx: wx.request({
      url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.billboard.billList&type=1&size=40&offset=0',
      success: (msg) => {

        console.log(msg.data.song_list)
        this.setData({
          news: msg.data.song_list
        })
      }
    })
    }
  },
  hottt:function(e){
    if (this.data.hott.length >= 40){

    }else{
      wx: wx.request({
        url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.billboard.billList&type=25&size=40&offset=0',
        success: (msg) => {

          console.log(msg.data.song_list)
          this.setData({
            hott: msg.data.song_list
          })
        }
      })
    }
    
  },
  // djjj:function(e){
  //   if (this.data.djj.length >= 40){

  //   }else{
  //     wx: wx.request({
  //       url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.billboard.billList&type=12&size=40&offset=0',
  //       success: (msg) => {

  //         console.log(msg.data.song_list)
  //         this.setData({
  //           djj: msg.data.song_list
  //         })
  //       }
  //     })
  //   }
    
  // },
  oumeii:function(e){
    if (this.data.oumei.length >= 40){

    }else{
      wx: wx.request({
        url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.billboard.billList&type=21&size=40&offset=0',
        success: (msg) => {

          console.log(msg.data.song_list)
          this.setData({
            oumei: msg.data.song_list
          })
        }
      })
    }
    
  },
  menuClick: function(e) {
    this.setData({
      _num: e.currentTarget.dataset.num
    })
  },
  onShareAppMessage: function(ops) {
    if (ops.from === 'button') { // 来自页面内转发按钮     
      console.log(ops.target)
    }
    return {
      title: 'XXX小程序',
      path: 'pages/index/index',
      success: function(res) { // 转发成功        
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function(res) { // 转发失败       
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  },
  bccc:function(){
    wx.pauseBackgroundAudio();
  },
  bcaa: function () {
    wx.playBackgroundAudio();
  },
  //点击列表播放 
  open: function(e) {
    console.log(e.currentTarget.dataset.text)

    wx: wx.request({
      url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.song.playAAC&songid=' + e.currentTarget.dataset.text,
      success: (msg) => {
        console.log(msg)
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
      ifture:true
    })
  },
  //点击播放框 进入播放页面
  lists:function(e){
    if (e.currentTarget.dataset.text ==undefined){
      
    }else{
      wx.navigateTo({
        title: "goback",
        url: '../lists/lists?result=' + e.currentTarget.dataset.text
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    wx: wx.request({
      url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.billboard.billList&type=2&size=' + this.data.pages+'&offset=0',
      success: (msg) => {

        console.log(msg.data.song_list)
        this.setData({
          index: msg.data.song_list
        })
      }
    })

    
    wx: wx.request({
      url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.billboard.billList&type=1&size=20&offset=0',
      success: (msg) => {

        console.log(msg.data.song_list)
        this.setData({
          news: msg.data.song_list
        })
      }
    })


    wx: wx.request({
      url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.billboard.billList&type=12&size=20&offset=0',
      success: (msg) => {

        console.log(msg.data.song_list)
        this.setData({
          djj: msg.data.song_list
        })
      }
    })
    wx: wx.request({
      url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.billboard.billList&type=21&size=20&offset=0',
      success: (msg) => {

        console.log(msg.data.song_list)
        this.setData({
          oumei: msg.data.song_list
        })
      }
    })
    wx: wx.request({
      url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.billboard.billList&type=25&size=20&offset=0',
      success: (msg) => {

        console.log(msg.data.song_list)
        this.setData({
          hott: msg.data.song_list
        })
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
    console.log(1)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})