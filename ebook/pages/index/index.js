Page({
  obccca: '',
  /**
   * 页面的初始数据
   */
  data: {
    _num: 1,
    ifif: true,
  },
  center: function(e) {
    wx.navigateTo({
      title: "goback",
      url: '../center/center?result=' + this.data.obccca
    })
  },
  menuClick: function(e) {
    this.setData({
      _num: e.currentTarget.dataset.num
    })
  },
  bindKeyInput: function(e) {
    this.setData({
      obccca: e.detail.value
    })
    wx: wx.request({
      url: 'http://api.zhuishushenqi.com/book/auto-complete?query=' + e.detail.value,
      success: (msg) => {
        this.setData({
          keywords: msg.data.keywords
        })
      }
    })
  },
  itemlists(e) {
    console.log(e.currentTarget.dataset.text)
    wx.navigateTo({
      title: "goback",
      url: '../search/search?result=' + e.currentTarget.dataset.text
    })
    this.setData({
      ifif: false
    })
  },
  search: function(e) {
    wx.navigateTo({
      title: "goback",
      url: '../search/search?result=' + this.data.obccca
    })
    this.data.obccca = ""
  },
  ccc: function(e) {
    var storage = JSON.stringify(e.currentTarget.dataset)
   
    wx.navigateTo({
      title: "goback",
      url: '../content/content?storage=' + storage
    })
  },
  deletediv:function(e){
    
    var that = this;
    var index = that.data.cc;
    var indexx = e.currentTarget.dataset.id;//获取当前长按图片下标
    var no = e.currentTarget.dataset.no;
    wx.showModal({
      title: '提示',
      content: '确定删除这条记录吗？',
      success: function (res) {
        if (res.confirm) {
          console.log(indexx);
          wx.removeStorageSync(indexx);
          index.splice(no, 1);
          
        } else if (res.cancel) {
          console.log(indexx);
          return false;
        }
        that.setData({
          cc: index
        });
      }
    })
    console.log(e.currentTarget.dataset)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.removeStorageSync("logs");
    wx: wx.request({
      url: 'https://www.apiopen.top/novelApi',
      success: (msg) => {
        this.setData({
          books: msg.data.data
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
    var res = wx.getStorageInfoSync()
    var cc = [];
    for (var i = 0; i < res.keys.length; i++) {
      var value = wx.getStorageSync(res.keys[i])
      cc.push(value)
    }
    this.setData({
      cc: cc
    })
    console.log(cc)
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
    console.log(2)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})