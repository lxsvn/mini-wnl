// pages/festival/festival.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        "name": "元旦节",
        "day": "01月01日",
        "oldday": '公历1月1日'
      },
      {
        "name": "春节",
        "day": "02月05日",
        "oldday": '农历正月初一'
      },
      {
        "name": "清明",
        "day": "04月05日",
        "oldday": "三月初一前后(公历4月4-6日)"
      },
      {
        "name": "劳动节",
        "day": "05月01日",
        "oldday": '每年公历5月1日'
      },
      {
        "name": "端午节",
        "day": "06月07日",
        "oldday": '农历五月初五'
      },
      {
        "name": "中秋节",
        "day": "09月13日",
        "oldday": '农历 八月十五'
      },
      {
        "name": "国庆节",
        "day": "10月01日",
        "oldday": '公历10月1日'
      }
    ],
    index:'',
    twoer: [
      {
        "name": "立春",
        "day": "公历2月3-6日",
        "oldday": '315'
      },
      {
        "name": "雨水",
        "day": "公历2月18-20日",
        "oldday": '330'
      },
      {
        "name": "惊蛰",
        "day": "公历3月5-6日",
        "oldday": '345'
      },
      {
        "name": "春分",
        "day": "公历3月20-23日",
        "oldday": '0'
      },
      {
        "name": "清明",
        "day": "公历4月4-6日",
        "oldday": '15'
      },
      {
        "name": "谷雨",
        "day": "公历4月19-21日",
        "oldday": '30'
      },
      {
        "name": "立夏",
        "day": "公历5月5-7日",
        "oldday": '45'
      },
      {
        "name": "小满",
        "day": "公历5月20-22日",
        "oldday": '60'
      },
      {
        "name": "芒种",
        "day": "公历6月5-7日",
        "oldday": '75'
      },
      {
        "name": "夏至",
        "day": "公历6月21-22日",
        "oldday": '90'
      },
      {
        "name": "小暑",
        "day": "公历7月7-8日",
        "oldday": '105'
      },
      {
        "name": "大暑",
        "day": "公历7月23-24日",
        "oldday": '120'
      },
      {
        "name": "立秋",
        "day": "公历8月7-8日",
        "oldday": '135'
      },
      {
        "name": "处暑",
        "day": "公历8月23-24日",
        "oldday": '150'
      },
      {
        "name": "白露",
        "day": "公历9月7-9日",
        "oldday": '165'
      },
      {
        "name": "秋分",
        "day": "公历9月23-24日",
        "oldday": '180'
      },
      {
        "name": "寒露",
        "day": "公历10月7-9日",
        "oldday": '195'
      },
      {
        "name": "霜降",
        "day": "公历10月23-24日",
        "oldday": '210'
      },
      {
        "name": "立冬",
        "day": "公历11月7日-8日",
        "oldday": '225'
      },
      {
        "name": "小雪",
        "day": "公历11月22-23日",
        "oldday": '240'
      },
      {
        "name": "大雪",
        "day": "公历12月7-8日",
        "oldday": '255'
      },
      {
        "name": "冬至",
        "day": "公历12月22-23日",
        "oldday": '270'
      },
      {
        "name": "小寒",
        "day": "公历1月5-6日",
        "oldday": '285'
      },
      {
        "name": "大寒",
        "day": "公历1月20-21日",
        "oldday": '300'
      },
    ],
    hotday: [
      {
        "name": "腊八节",
        "day": "1月13日",
        "oldday": '农历腊月初八'
      },
      {
        "name": "北方小年",
        "day": "1月28日",
        "oldday": '农历腊月二十三'
      },
      {
        "name": "南方小年",
        "day": "1月29日",
        "oldday": '农历腊月二十四'
      },
      {
        "name": "除夕夜",
        "day": "02月04日",
        "oldday": '农历腊月三十'
      },
      {
        "name": "情人节",
        "day": "2月14日",
        "oldday": '公历2月14日'
      },
      {
        "name": "元宵节",
        "day": "02月19日",
        "oldday": '农历正月十五'
      },
      {
        "name": "妇女节",
        "day": "02月8日",
        "oldday": '公历3月8日'
      },
      {
        "name": "植树节",
        "day": "03月12日",
        "oldday": '公历03月12日'
      },
      {
        "name": "孙中山逝世纪念日",
        "day": "03月12日",
        "oldday": '公历03月12日'
      },
      {
        "name": "消费者权益日",
        "day": "03月15日",
        "oldday": '公历03月15日'
      },
      {
        "name": "中国国医节",
        "day": "03月17日",
        "oldday": '公历03月17日'
      },
      {
        "name": "愚人节",
        "day": "04月01日",
        "oldday": '公历04月01日'
      },
      {
        "name": "上巳节",
        "day": "04月07日",
        "oldday": '农历三月初三'
      },
      {
        "name": "国际不打小孩日",
        "day": "04月30日",
        "oldday": '公历04月30日'
      },
      {
        "name": "青年节",
        "day": "05月04日",
        "oldday": '公历05月04日'
      },
      {
        "name": "母亲节",
        "day": "05月12日",
        "oldday": '公历5月第二个星期日'
      },
      {
        "name": "儿童节",
        "day": "06月01日",
        "oldday": '公历06月01日'
      },
      {
        "name": "父亲节",
        "day": "06月16日",
        "oldday": '公历6月第三个星期日'
      },
      {
        "name": "奥林匹克",
        "day": "06月23日",
        "oldday": '公历06月23日'
      },
      {
        "name": "国际禁毒日",
        "day": "06月26日",
        "oldday": '公历06月26日'
      },
      {
        "name": "香港回归",
        "day": "07月01日",
        "oldday": '1971年07月01日'
      },
      {
        "name": "建党日",
        "day": "07月01日",
        "oldday": '1941年07月01日'
      },
      {
        "name": "七七事变纪念日",
        "day": "07月07日",
        "oldday": '1937年07月07日'
      },
      {
        "name": "建军节",
        "day": "07月11日",
        "oldday": '1933年07月11日'
      },
      {
        "name": "七夕节",
        "day": "08月07日",
        "oldday": '农历七月初七'
      },
      {
        "name": "日本无条件投降日",
        "day": "08月15日",
        "oldday": '1945年08月15日'
      },
      {
        "name": "中元节",
        "day": "08月15日",
        "oldday": '农历七月半(十五)'
      },
      {
        "name": "抗日战争胜利日",
        "day": "09月03日",
        "oldday": '1945年09月03日'
      },
      {
        "name": "教师节",
        "day": "09月10日",
        "oldday": '公历09月10日'
      },
      {
        "name": "九一八事变纪念日",
        "day": "09月18日",
        "oldday": '1931年09月18日'
      },
      {
        "name": "国际教师日",
        "day": "10月05日",
        "oldday": '公历10月05日'
      },
      {
        "name": "辛亥革命",
        "day": "10月10日",
        "oldday": '1911年10月10日'
      },
      {
        "name": "重阳节",
        "day": "10月17日",
        "oldday": '农历九月初九'
      },
      {
        "name": "联合国日",
        "day": "10月24日",
        "oldday": '公历10月24日'
      },
      {
        "name": "万圣夜",
        "day": "10月31日",
        "oldday": '公历10月31日'
      },
      {
        "name": "十月社会主义革命纪念日",
        "day": "11月07日",
        "oldday": '1917年11月07日'
      },
      {
        "name": "全国消防安全宣传教育日",
        "day": "11月09日",
        "oldday": '公历11月09日'
      },
      {
        "name": "世界青年节",
        "day": "11月10日",
        "oldday": '公历11月10日'
      },
      {
        "name": "国际科学与和平周",
        "day": "11月11日",
        "oldday": '11月11日所属的这一周'
      },
      {
        "name": "光棍节",
        "day": "11月11日",
        "oldday": '公历11月11日'
      },
      {
        "name": "孙中山诞辰纪念日",
        "day": "11月12日",
        "oldday": '1866年11月12日'
      },
      {
        "name": "感恩节",
        "day": "11月22日",
        "oldday": '11月的第四个星期四(林肯)'
      },
      {
        "name": "艾滋病日",
        "day": "12月01日",
        "oldday": '公历12月01日'
      },
      {
        "name": "全国交通安全日",
        "day": "12月02日",
        "oldday": '2012年12月02日'
      },
      {
        "name": "西安事变纪念日",
        "day": "12月12日",
        "oldday": '1936年12月12日'
      },
      {
        "name": "南京大屠杀死难者国家公祭日",
        "day": "12月13日",
        "oldday": '1937年12月13日'
      },
      {
        "name": "澳门回归",
        "day": "12月20日",
        "oldday": '1999年12月20日'
      },
      {
        "name": "平安夜",
        "day": "12月24日",
        "oldday": '公历12月24日'
      },
      {
        "name": "圣诞节",
        "day": "12月25日",
        "oldday": '公历12月25日(耶稣)'
      },
    ],
  },
  twoacc:function(){
    wx.navigateTo({
      title: "goback",
      url: '../festivalcenter/festivalcenter'
    })
  },
  onChangeShowState: function () {
    var that = this;
    that.setData({
      ifture: (!that.data.ifture)
    })
  },
  onChangeShowtwo: function () {
    var that = this;
    that.setData({
      iftwo: (!that.data.iftwo)
    })
  },
  onChangeShowhot: function () {
    var that = this;
    that.setData({
      ifhot: (!that.data.ifhot)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx: wx.request({
    //   url: "http://www.sojson.com/tianqi/api/"+"1011-58414"+".shtml" ,
    //   success: (msg) => {
    //   }
    // })
    wx: wx.request({
      url: "http://wthrcdn.etouch.cn/weather_mini?city=北京",
      success: (msg) => {
      }
    })
    // wx: wx.request({
    //   url: 'http://route.showapi.com/9-5',
    //   data: {
    //     showapi_appid: '11697',
    //     showapi_sign: '6c0c15c5ec61454dac5288cea2d32881',
    //   },
    //   success: (msg) => {
    //   }
    // })

    
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