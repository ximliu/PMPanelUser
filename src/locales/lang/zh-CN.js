import antd from 'ant-design-vue/es/locale-provider/zh_CN'
import momentCN from 'moment/locale/zh-cn'

const components = {
  antLocale: antd,
  momentName: 'zh-cn',
  momentLocale: momentCN
}

const locale = {
  'message': '-',
  'setting.yes': '是',
  'setting.no': '否',
  'setting.confirm': '确认',
  'setting.submit': '提交',
  'setting.cancel': '取消',
  'setting.change': '修改',
  'setting.money': '元',

  'login.info': '邮箱密码登录',
  'login.email': '邮箱',
  'login.passwordMessage': '请输入密码',
  'login.rememberMe': '记住登录',
  'login.register': '注册账户',
  'login.forgetPass': '忘记密码',
  'login.loginBtn': '登陆',
  'login.failed': '登录失败',
  'login.successWelcome': '欢迎',
  'login.successInfo': '欢迎回来',

  'register.title': '注册',
  'register.email': '邮箱',
  'register.emailMessage': '请输入邮箱地址',
  'register.password': '密码',
  'register.passwordMessage': '至少6位密码，区分大小写',
  'register.passwordStrength': '强度',
  'register.passwordStrengthMessage': '请至少输入 6 个字符。请不要使用容易被猜到的密码。',
  'register.passwordLevel.0': '低',
  'register.passwordLevel.1': '低',
  'register.passwordLevel.2': '中',
  'register.passwordLevel.3': '高',
  'register.repassword': '确认密码',
  'register.repasswordMessage': '两次密码不一致',
  'register.inviteCode': '邀请码',
  'register.checkCode': '验证码',
  'register.checkCodeMessage': '请输入验证码',
  'register.getCheckCode': '获取验证码',
  'register.inviteOnlyMessage': '本站只允许邀请注册...敬请期待',
  'register.closeMessage': '本站已关闭注册...敬请期待',
  'register.registerBtn': '注册',
  'register.registerSuccess': '注册成功',

  'forgot.title': '找回密码',
  'forgot.email': '邮箱',
  'forgot.emailMessage': '请输入邮箱地址',
  'forgot.checkCode': '验证码',
  'forgot.checkCodeMessage': '请输入验证码',
  'forgot.getCheckCode': '获取验证码',
  'forgot.passwordStrength': '强度',
  'forgot.passwordStrengthMessage': '请至少输入 6 个字符。请不要使用容易被猜到的密码。',
  'forgot.password': '密码',
  'forgot.passwordMessage': '至少6位密码，区分大小写',
  'forgot.forgotBtn': '确定',
  'forgot.success': '密码修改成功',

  'menu.home': '主页',
  'menu.dashboard': '仪表盘',
  'menu.subscription': '购买订阅',
  'menu.orderDetail': '订阅详情',
  'menu.renew': '订阅续费',
  'menu.checkout': '收银台',
  'menu.funds': '资金明细',
  'menu.tutorials': '教程下载',
  'menu.tutorials.windows': 'Windows',
  'menu.tutorials.android': 'Android',
  'menu.tutorials.mac': 'Mac',
  'menu.tutorials.ios': 'iOS',
  'menu.ticket': '提交工单',
  'menu.ticket.detail': '工单详情',
  'menu.usercenter': '个人中心',
  'menu.usercenter.settings': '个人设置',
  'menu.usercenter.settings.security': '安全设置',
  'menu.usercenter.settings.binding': '账户绑定',
  'menu.usercenter.settings.message': '站内消息',
  'menu.admincenter': '管理中心',
  'menu.logout': '退出登录',

  'layouts.usermenu.dialog.title': '信息',
  'layouts.usermenu.dialog.content': '拜拜了您嘞?',

  'dashboard.header.todayUsed': '今日已用',
  'dashboard.header.refreshInfo': '刷新数据',
  'dashboard.content.data': '剩余流量',
  'dashboard.content.expire': '有效期',
  'dashboard.content.balance': '资金总览',
  'dashboard.content.money': '账户余额',
  'dashboard.content.onlineCount': '在线数量',
  'dashboard.content.nodeConnector': '无限制',
  'dashboard.content.nodeSpeedLimit': '限速: ',
  'dashboard.content.nodeSpeedNoLimit': '限速 : 无限制',
  'dashboard.content.invite': '邀请好友',
  'dashboard.content.inviteMessage': '邀请的用户充值后您可获得充值返利',
  'dashboard.content.copyInviteLink': '复制',
  'dashboard.content.copyInviteLinkSuccess': '复制成功',
  'dashboard.content.resetInviteCode': '重置',
  'dashboard.content.Success': '成功',
  'dashboard.content.inviteLimit': '邀请次数',
  'dashboard.content.inviteCount': '邀请人数',
  'dashboard.content.announcement': '最新公告',
  'dashboard.content.subsCenter': '订阅中心',
  'dashboard.content.tutorialCenter': '教程中心',
  'dashboard.content.appSubs': '软件订阅',
  'dashboard.content.commonSubs': '通用订阅',

  'plan.package': '流量包',
  'plan.package.title': '流量包-当月有效',
  'plan.package.purchase': '购买流量包',
  'plan.noActivePlan': '当前无激活的套餐',
  'plan.content.price': '价格',
  'plan.content.monthPrice': '月付',
  'plan.content.seasonPrice': '季付',
  'plan.content.halfOfYearPrice': '半年付',
  'plan.content.yearPrice': '年付',
  'plan.content.data': '每月流量',
  'plan.content.currentMonthData': '当月流量',
  'plan.content.class': '等级',
  'plan.content.speedLimit': '限速: ',
  'plan.content.speedNoLimit': '限速: 无限制',
  'plan.content.connector': '连接数: ',
  'plan.content.connectors': '连接数: 无限制',
  'plan.content.renewEnable': '自动续费: ',
  'plan.content.subscribe': '订购',
  'plan.content.mediaUnlock': '流媒体解锁',
  'plan.content.DirectLine': '专线提供',
  'plan.content.doSubscribeWarning': '新套餐会在旧套餐过期后生效',
  'plan.content.doSubscribeWarning2': '首次购买套餐,首月套餐内容是按价格与时间比例计算到当月底',
  'plan.order.title': '套餐记录',
  'plan.order.package.title': '流量包记录',
  'plan.order.name': '套餐',
  'plan.order.price': '价格',
  'plan.order.created': '创建时间',
  'plan.order.expire': '到期时间',
  'plan.order.payTime': '支付时间',
  'plan.order.status': '状态',
  'plan.order.operation': '操作',
  'plan.order.detail': '详情',
  'plan.order.unpaid': '待支付',
  'plan.order.finished': '已完成',
  'plan.order.canceled': '已取消',
  'plan.order.invalid': '已失效',
  'plan.order.active': '激活中',
  'plan.order.renew': '续费',
  'plan.order.pay': '支付',
  'plan.order.noMoney': '余额为0',
  'plan.order.cancel': '取消',
  'plan.order.cancelConfirm': '确认取消?',
  'plan.order.delete': '删除',
  'plan.order.deleteConfirm': '确认删除?',
  'plan.order.package.relateOrderId': '关联订单',
  'plan.order.package.transferEnable': '流量',
  'plan.order.details.planName': '套餐名称',
  'plan.order.details.orderId': '订单ID',
  'plan.order.details.createdTime': '创建时间',
  'plan.order.details.expire': '订阅截止',
  'plan.order.details.payPrice': '应付价格',
  'plan.order.details.payStatus': '订单状态',
  'plan.order.details.planContent': '套餐详情',
  'plan.order.details.userContent': '用户详情',
  'plan.order.details.userContent.email': '邮箱',
  'plan.order.details.userContent.expire': '到期时间',
  'plan.order.details.userContent.class': '等级',
  'plan.order.details.userContent.nodeSpeedLimit': '限速: ',
  'plan.order.details.userContent.nodeSpeedNoLimit': '限速: 无限制',
  'plan.order.details.userContent.connector': '连接数: ',
  'plan.order.details.userContent.connectors': '连接数: 无限制',

  'checkout.order.success': '请尽快付款',
  'checkout.order.info': '付款后若页面没有跳转,请刷新页面',
  'checkout.order.choosePayType': '请选择支付方式',
  'checkout.order.payType.money': '余额',
  'checkout.order.payType.alipay': '支付宝',
  'checkout.order.payType.wxpay': '微信支付',
  'checkout.order.needPayAmount': '应付金额',

  'result.success.title': '购买成功',

  'funds.withdraw': '发起提现',

  'ticket.title': '标题',
  'ticket.time': '创建时间',
  'ticket.status': '状态',
  'ticket.operation': '操作',
  'ticket.status.0': '待回复',
  'ticket.status.1': '已回复',
  'ticket.status.2': '已完成',
  'ticket.detail': '详情',
  'ticket.detail.close': '结单',

  'usercenter.settings.security.changePass': '修改密码',
  'usercenter.settings.security.changePass.oldPass': '旧密码',
  'usercenter.settings.security.changePass.newPass': '新密码',
  'usercenter.settings.security.changePass.reNewPass': '请再次输入新密码',
  'usercenter.settings.security.changeEmail': '更换邮箱',
  'usercenter.settings.security.changeEmail.oldEmailCheckCode': '旧邮箱验证码',
  'usercenter.settings.security.changeEmail.newEmail': '新邮箱地址',
  'usercenter.settings.security.changeEmail.newEmailCheckCode': '新邮箱验证码'

}

export default {
  ...components,
  ...locale
}
