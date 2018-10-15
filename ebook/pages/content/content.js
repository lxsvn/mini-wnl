// pages/content/content.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifif: false,
    iftrue: false
  },
  catalog: function(e) {
    this.setData({
      ifif: true
    })
  },
  cataloglists: function(e) {
    var value = wx.getStorageSync(this.data.id)
    console.log(e.currentTarget.dataset)
    let listscode = encodeURIComponent(e.currentTarget.dataset.text)
    wx: wx.request({
      url: 'http://chapter2.zhuishushenqi.com/chapter/' + listscode + '?k=2124b73d7e2e1945&t=1468223717',
      success: (msg) => {
        console.log(msg.index)
        wx.pageScrollTo({
          scrollTop: 0
        })
        var body = msg.data.chapter.body
        body = body.split("\n");
        this.setData({
          content: "",
          content: body,
          ifif: false,
          title: '',
          title: e.currentTarget.dataset.id
        })

        wx.setStorage({ //存储到本地
          key: this.data.id,
          data: {
            "value": e.currentTarget.dataset.index,
            "img": this.data.img,
            "title": value.title,
            "id": this.data.id
          },
        })
      }
    })
  },
  catalogclose: function(e) {
    this.setData({
      ifif: false
    })
  },
  next: function(e) {
    var value = wx.getStorageSync(this.data.id)
    var value1 = value.value
    value1 = value1 + 1
    console.log(value)
    wx: wx.request({
      url: 'http://api.zhuishushenqi.com/toc?view=summary&book=' + this.data.ccc,
      success: (msg) => {
        console.log(msg.data[1]._id)
        wx: wx.request({
          url: 'http://api.zhuishushenqi.com/toc/' + msg.data[1]._id + '?view=chapters',
          success: (msg) => {
            console.log(msg.data.chapters)

            let code = encodeURIComponent(msg.data.chapters[value1].link)

            this.setData({
              title: msg.data.chapters[value1].title,
              chapters: msg.data.chapters
            })

            wx: wx.request({
              url: 'http://chapter2.zhuishushenqi.com/chapter/' + code + '?k=2124b73d7e2e1945&t=1468223717',
              success: (msg) => {
                console.log(msg)
                var body = msg.data.chapter.body
                body = body.split("\n");
                this.setData({
                  content: body,

                })
                wx.pageScrollTo({
                  scrollTop: 0
                })
                wx.setStorage({ //存储到本地
                  key: this.data.id,
                  data: {
                    "value": value1,
                    "img": this.data.img,
                    "title": value.title,
                    "id": this.data.id
                  },
                })
              }
            })
          }
        })

      }
    })
  },
  last: function() {
    var value = wx.getStorageSync(this.data.id)
    var value1 = value.value
    if (value1 < 1) {} else {
      var value1 = value1 - 1
      console.log(value)
      wx: wx.request({
        url: 'http://api.zhuishushenqi.com/toc?view=summary&book=' + this.data.ccc,
        success: (msg) => {
          console.log(msg.data[1]._id)
          wx: wx.request({
            url: 'http://api.zhuishushenqi.com/toc/' + msg.data[1]._id + '?view=chapters',
            success: (msg) => {
              console.log(msg.data.chapters)

              let code = encodeURIComponent(msg.data.chapters[value1].link)

              this.setData({
                title: msg.data.chapters[value1].title,
                chapters: msg.data.chapters
              })

              wx: wx.request({
                url: 'http://chapter2.zhuishushenqi.com/chapter/' + code + '?k=2124b73d7e2e1945&t=1468223717',
                success: (msg) => {
                  console.log(msg)
                  var body = msg.data.chapter.body
                  body = body.split("\n");
                  this.setData({
                    content: body,

                  })
                  wx.pageScrollTo({
                    scrollTop: 0
                  })
                  wx.setStorage({ //存储到本地
                    key: this.data.id,
                    data: {
                      "value": value1,
                      "img": this.data.img,
                      "title": value.title,
                      "id": this.data.id
                    },
                  })
                }
              })
            }
          })

        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      iftrue: true
    })
    if (options.ccc == undefined) {
     
     
      let data = JSON.parse(options.storage)
      console.log(data)
      wx.setNavigationBarTitle({
        title: data.title,    //页面标题
      })
      var value = wx.getStorageSync(data.id)
      var zhangjie = value.value
      console.log(value) //章节
      wx: wx.request({
        url: 'http://api.zhuishushenqi.com/toc?view=summary&book=' + data.id,
        success: (msg) => {
          console.log(msg.data[1])
          wx: wx.request({
            url: 'http://api.zhuishushenqi.com/toc/' + msg.data[1]._id + '?view=chapters',
            success: (msg) => {
              console.log(msg.data.chapters[zhangjie])

              let code = encodeURIComponent(msg.data.chapters[zhangjie].link)

              this.setData({
                title: msg.data.chapters[zhangjie].title,
                chapters: msg.data.chapters
              })
              wx: wx.request({
                url: 'http://chapter2.zhuishushenqi.com/chapter/' + code + '?k=2124b73d7e2e1945&t=1468223717',
                success: (msg) => {
                  console.log(msg)
                  var body = msg.data.chapter.body
                  body = body.split("\n");
                  this.setData({
                    content: body,
                    ccc: data.id,
                    iftrue: false,
                    id: data.id,
                    img: value.img,

                  })
                  wx.setStorage({ //存储到本地
                    key: data.id,
                    data: {
                      "value": zhangjie,
                      "img": value.img,
                      "title": data.title,
                      "id": value.id
                    },
                  })
                }
              })
            }
          })

        }
      })




    } else if (options.storage == undefined) {
      let data = JSON.parse(options.ccc)
      console.log(data)
      wx.setNavigationBarTitle({
        title: data.title,    //页面标题
      })
      var value = wx.getStorageSync(data.id)
      var zhangjie = value.value
      console.log(value) //章节

      this.setData({
        img: data.cover,
        bookname: data.title,
        id: data.id
      })
      console.log(data)
      if (value == "") {
        console.log(1)

        let zhangjie = 0

        wx: wx.request({
          url: 'http://api.zhuishushenqi.com/toc?view=summary&book=' + data.id,
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
                    console.log(msg)
                    var body = msg.data.chapter.body
                    body = body.split("\n");
                    this.setData({
                      content: body,
                      ccc: data.id,
                      iftrue: false
                    })
                    wx.setStorage({ //存储到本地
                      key: data.id,
                      data: {
                        "value": 0,
                        "img": this.data.img,
                        "title": this.data.bookname,
                        "id": this.data.id
                      },
                    })

                  }
                })
              }
            })

          }
        })
      } else {
        console.log(2)
        wx: wx.request({
          url: 'http://api.zhuishushenqi.com/toc?view=summary&book=' + data.id,
          success: (msg) => {
            console.log(msg.data[1]._id)
            wx: wx.request({
              url: 'http://api.zhuishushenqi.com/toc/' + msg.data[1]._id + '?view=chapters',
              success: (msg) => {
                console.log(msg.data.chapters)

                let code = encodeURIComponent(msg.data.chapters[zhangjie].link)

                this.setData({
                  title: msg.data.chapters[zhangjie].title,
                  chapters: msg.data.chapters
                })
                wx: wx.request({
                  url: 'http://chapter2.zhuishushenqi.com/chapter/' + code + '?k=2124b73d7e2e1945&t=1468223717',
                  success: (msg) => {
                    console.log(msg)
                    var body = msg.data.chapter.body
                    body = body.split("\n");
                    this.setData({
                      content: body,
                      ccc: data.id,
                      iftrue: false
                    })
                    wx.setStorage({ //存储到本地
                      key: data.id,
                      data: {
                        "value": zhangjie,
                        "img": this.data.img,
                        "title": this.data.bookname,
                        "id": this.data.id
                      },
                    })
                  }
                })
              }
            })

          }
        })
      }
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
    console.log(this.data)
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
    var value = wx.getStorageSync(this.data.id)
    if (value.value == 0) {
      wx.showToast({
        title: '已加入书架',
        duration: 2000,
        icon: 'none'

      });

    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})