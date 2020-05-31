console.log('versionCode', app.versionCode)
console.log('versionName', app.versionName)

// 检查无障碍服务是否已经启用，如果没有启用则跳转到无障碍服务启用界面，并等待无障碍服务启动；当无障碍服务启动后脚本会继续运行。
auto.waitFor()

sleep(3000)

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

launchAlipay()
  .then(() => {
    console.log('启动成功')

    while (!click('蚂蚁森林'));
    
    sleep(3000)

    id('h5_tv_title').findOne().parent().waitFor()
    
    className('android.widget.Button').untilFind().click()

    sleep(2000)

    desc('关闭').findOne().click()
  })