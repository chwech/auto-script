console.log('versionCode', app.versionCode)
console.log('versionName', app.versionName)

var log = console.log
var tlog = toastLog

// 检查无障碍服务是否已经启用，如果没有启用则跳转到无障碍服务启用界面，并等待无障碍服务启动；当无障碍服务启动后脚本会继续运行。
auto.waitFor()

function launchAlipay () {
  return new Promise((resolve, reject) => {
    // 通过应用名称启动应用
    var isLaunch = app.launchApp("支付宝")
    
    if (isLaunch) {
      resolve()      
    } else {
      reject()
    }
  })
}

function waitFor(k) {
  while (!descContains(k).exists()) {
    sleep(1000)
  }
  return
}

launchAlipay()
  .then(() => {
    log('启动成功')
    while (!click('蚂蚁森林'));

    waitFor('收集能量')

    log('就绪')

    var balls = className('Button')
      .descContains('收集能量')
      .find() // 不会阻塞

    tlog('找到' + balls.length + '个能量球')

    balls.forEach(item => {
      // 基于控件的click点击收集不了，只能用基于坐标的click
      var rect = item.bounds()
      click(rect.centerX(), rect.centerY())
    })

    var isClose = desc('关闭').findOne().click()

    if (isClose) {
      log('关闭蚂蚁森林页面')
    }
  })