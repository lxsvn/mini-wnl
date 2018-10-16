// pages/content/content.js
var percent=50;
var size=36
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ifif: false,
    iftrue: false,
    bottom:false,
    _num: 1,
    percent:50,
    size: 36,
    pageBackgroundColor:"#eeeeee",
  },
  //目录按钮
  catalog: function(e) {
    //让目录页面出来，再让底部的菜单消失
    this.setData({
      ifif: true,
      bottom: false
    })
    var value = wx.getStorageSync(this.data.id)
    var list = value.value;
    var lists = "a" + list
    this.setData({
      scrolltop: lists
    })
    var chapters = this.data.chapters;
    console.log(chapters)
    
    chapters.forEach(item=>{
      return item.cor="#999999"
    })
    chapters[list].cor = "#cb4e4b",
      this.setData({
        chapters: chapters,
      chapters: chapters
      })
    
  },
  menuClick:function(e){
    var num=e.currentTarget.dataset.num;
    if(num==1){
      this.setData({
        pageBackgroundColor: "#eee",
        bottom: false,
        _num: 1,
      })
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#eeeeee',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      })
    } else if (num == 2){
      
      this.setData({
        pageBackgroundColor: "#555555",
        bottom: false,
        _num: 2,
      })
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#555555',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      })
    } else if (num == 3){
      
      this.setData({
        pageBackgroundColor: "#c8edcc",
        bottom: false,
        _num: 3,
      })
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#c8edcc',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      })
    }
  },
  //点击的目录
  cataloglists: function(e) {
    var value = wx.getStorageSync(this.data.id)
    console.log(e.currentTarget.dataset)
    let listscode = encodeURIComponent(e.currentTarget.dataset.text)
    var list = value.value;
    console.log(list)
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
          title: e.currentTarget.dataset.id,
          bottom: false
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
      ifif: false,
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
                  bottom:false
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
                    bottom:false
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
  tach:function(e){
    this.setData({
      bottom: (!this.data.bottom)
    })
  },
  sizeadd:function(e){
    if (percent<=100){
      percent = percent + 25;
      size = size+4
      this.setData({
        percent:percent,
        size: size
      })
    }
  },
  sizeacc:function(e){
    if (percent >= 0) {
      percent = percent - 25;
      size = size - 4
      this.setData({
        percent: percent,
        size: size
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //让加载动画运行
    this.setData({
      iftrue: true
    })
    //判断 是否从查询页面的详情页进入页面
    if (options.ccc == undefined) {
      //由于传的文字 需要转成对象
      let data = JSON.parse(options.storage)
      console.log(data)
      this.setData({
        data: data
      })
      //设置动态标题
      wx.setNavigationBarTitle({
        title: data.title, //页面标题
      })
      //获取从stroage存储的id
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
              var chapters = msg.data.chapters;
              chapters[zhangjie].cor = "#cb4e4b",
              this.setData({
                title: msg.data.chapters[zhangjie].title,
                chapters: chapters
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
        title: data.title, //页面标题
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
                var chapters = msg.data.chapters;
                chapters[zhangjie].cor = "#cb4e4b",
                this.setData({
                  title: msg.data.chapters[zhangjie].title,
                  chapters: chapters
                })

                wx: wx.request({
                  url: 'http://chapter2.zhuishushenqi.com/chapter/' + code + '?k=2124b73d7e2e1945&t=1468223717',
                  success: (msg) => {
                    console.log(msg)
                    if (msg.data.ok == false) {
                      this.setData({
                        sorry: "该书尚未上架本产品",
                        
                        iftrue: false
                      })
                    } else {
                      var body = msg.data.chapter.body;
                      if (body == undefined) {
                        console.log(1)
                      }
                      if (body == "") {
                        console.log(2)
                      }
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
                var chapters = msg.data.chapters;
                chapters[zhangjie].cor = "#cb4e4b",
                this.setData({
                  title: msg.data.chapters[zhangjie].title,
                  chapters: chapters
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