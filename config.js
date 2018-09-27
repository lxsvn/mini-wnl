/**
 * 小程序配置文件
 */
 

var baseUrl ='https://mbbd-api.houputech.com'

var appId = 'wx652c6de53558295a'

var service = {
  appId,
 
}

var apis = {
    productsListUrl:baseUrl + '/1.0/contentsV2/Products',
    homeInfoUrl: baseUrl + '/1.0/contentsV2/HomePageInfo',
    wxLoginUrl: baseUrl + '/1.0/miniapp/WxLogin',
    wxLoginSensitiveInfoUrl:baseUrl + '/1.0/miniapp/WxLoginSensitiveInfo',
}

module.exports = { service, apis} 