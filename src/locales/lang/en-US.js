import antdEnUS from 'ant-design-vue/es/locale-provider/en_US'
import momentEU from 'moment/locale/eu'

const components = {
  antLocale: antdEnUS,
  momentName: 'eu',
  momentLocale: momentEU
}

const locale = {
  'message': '-',
  'setting.yes': 'yes',
  'setting.no': 'no',
  'setting.confirm': 'confirm',
  'setting.submit': 'Submit',
  'setting.cancel': 'cancel',
  'setting.change': 'change',
  'setting.money': 'CNY',

  'login.info': 'Login by email & pass',
  'login.email': 'Email',
  'login.passwordMessage': 'Please input password',
  'login.rememberMe': 'Remember Me',
  'login.register': 'Register',
  'login.forgetPass': 'Forget Pass',
  'login.loginBtn': 'Login',
  'login.failed': 'Login failed',
  'login.successWelcome': 'Welcome',
  'login.successInfo': 'welcome back',

  'register.title': 'Register',
  'register.email': 'Email',
  'register.emailMessage': 'Please input email address',
  'register.password': 'Password',
  'register.passwordMessage': 'At least 6 characters,case sensitive',
  'register.passwordStrength': 'Strength',
  'register.passwordStrengthMessage': 'At least 6 characters,do not use simple pass',
  'register.passwordLevel.0': 'Low',
  'register.passwordLevel.1': 'Low',
  'register.passwordLevel.2': 'Middle',
  'register.passwordLevel.3': 'High',
  'register.repassword': 'Please confirm password',
  'register.repasswordMessage': 'Repassword is not correct',
  'register.inviteCode': 'InviteCode',
  'register.checkCode': 'CheckCode',
  'register.checkCodeMessage': 'Please input the checkCode',
  'register.getCheckCode': 'Get Code',
  'register.inviteOnlyMessage': 'This site only allows invite registration',
  'register.closeMessage': 'This site has closed registration',
  'register.registerBtn': 'Register',
  'register.registerSuccess': 'Register Success',

  'forgot.title': 'Find pass',
  'forgot.email': 'Email',
  'forgot.emailMessage': 'Please input email address',
  'forgot.checkCode': 'CheckCode',
  'forgot.checkCodeMessage': 'Please input the checkCode',
  'forgot.getCheckCode': 'Get Code',
  'forgot.passwordStrength': 'Strength',
  'forgot.passwordStrengthMessage': 'At least 6 characters,do not use simple pass',
  'forgot.password': 'Password',
  'forgot.passwordMessage': 'At least 6 characters,case sensitive',
  'forgot.forgotBtn': 'Submit',
  'forgot.success': 'Update successfully',

  'menu.home': 'Home',
  'menu.dashboard': 'Dashboard',
  'menu.subscription': 'Plan',
  'menu.orderDetail': 'Plan Details',
  'menu.renew': 'Renew',
  'menu.checkout': 'Check Out',
  'menu.funds': 'Funds',
  'menu.tutorials': 'Tutorials',
  'menu.tutorials.windows': 'Windows',
  'menu.tutorials.android': 'Android',
  'menu.tutorials.mac': 'Mac',
  'menu.tutorials.ios': 'iOS',
  'menu.ticket': 'Ticket',
  'menu.ticket.detail': 'Ticket Detail',
  'menu.usercenter': 'User Center',
  'menu.usercenter.settings': 'Settings',
  'menu.usercenter.settings.security': 'Security',
  'menu.usercenter.settings.binding': 'Binding',
  'menu.usercenter.settings.message': 'Message',
  'menu.admincenter': 'Admin Center',
  'menu.logout': 'Logout',

  'layouts.usermenu.dialog.title': 'Message',
  'layouts.usermenu.dialog.content': 'Do you want to logout?',

  'dashboard.header.todayUsed': 'Today Used',
  'dashboard.header.refreshInfo': 'Refresh',
  'dashboard.content.data': 'Flow',
  'dashboard.content.expire': 'Expiration',
  'dashboard.content.balance': 'Funds',
  'dashboard.content.money': 'Balance',
  'dashboard.content.onlineCount': 'Online',
  'dashboard.content.nodeConnector': 'No limit',
  'dashboard.content.nodeSpeedLimit': 'Speed Limit: ',
  'dashboard.content.nodeSpeedNoLimit': 'Speed Limit : No limit',
  'dashboard.content.invite': 'Invitaton',
  'dashboard.content.inviteMessage': 'After the invited users recharge, you can get rebates',
  'dashboard.content.copyInviteLink': 'Copy',
  'dashboard.content.copyInviteLinkSuccess': 'Copy Successfully',
  'dashboard.content.resetInviteCode': 'Reset',
  'dashboard.content.Success': 'Success',
  'dashboard.content.inviteLimit': 'Invite Limit',
  'dashboard.content.inviteCount': 'Recommended',
  'dashboard.content.announcement': 'Announcement',
  'dashboard.content.subsCenter': 'Node Subscription',
  'dashboard.content.tutorialCenter': 'Tutorials',
  'dashboard.content.appSubs': 'App Subs',
  'dashboard.content.commonSubs': 'Common Subs',
  'dashboard.content.trafficDetails': 'Traffic Details',

  'plan.package': 'Package',
  'plan.package.title': 'Package - Current month valid',
  'plan.package.purchase': 'Purchase Package',
  'plan.noActivePlan': 'There is no active plan',
  'plan.content.monthPrice': 'Month',
  'plan.content.seasonPrice': 'Season',
  'plan.content.halfOfYearPrice': 'Half a Year',
  'plan.content.yearPrice': 'Year',
  'plan.content.data': 'Flow/Month',
  'plan.content.currentMonthData': 'Current Month Data',
  'plan.content.class': 'Class',
  'plan.content.speedLimit': 'Speed Limit: ',
  'plan.content.speedNoLimit': 'Speed Limit: No limit',
  'plan.content.connector': 'Online: ',
  'plan.content.connectors': 'Online: No limit',
  'plan.content.renewEnable': 'Auto Renew: ',
  'plan.content.subscribe': 'Subscribe',
  'plan.content.mediaUnlock': 'Media Unlock',
  'plan.content.DirectLine': 'Dedicated line provision',
  'plan.content.doSubscribeWarning': 'The new plan will be activated after the old expiration',
  'plan.content.doSubscribeWarning2': 'If the days less than 15 days from now to the end of the month, then buy the plan to the end of the next month',
  'plan.order.title': 'Plan',
  'plan.order.package.title': 'Package',
  'plan.order.name': 'Name',
  'plan.order.price': 'Price',
  'plan.order.created': 'Creation',
  'plan.order.expire': 'Expiration',
  'plan.order.payTime': 'Payment',
  'plan.order.status': 'Status',
  'plan.order.operation': 'Operation',
  'plan.order.detail': 'Detail',
  'plan.order.unpaid': 'Unpaid',
  'plan.order.finished': 'Finished',
  'plan.order.canceled': 'Canceled',
  'plan.order.invalid': 'Invalid',
  'plan.order.active': 'Activated',
  'plan.order.renew': 'Renew',
  'plan.order.pay': 'Pay',
  'plan.order.noMoney': 'Please choose another method',
  'plan.order.cancel': 'Cancel',
  'plan.order.cancelConfirm': 'Cancel?',
  'plan.order.delete': 'Delete',
  'plan.order.deleteConfirm': 'Delete?',
  'plan.order.package.relateOrderId': 'Related Order',
  'plan.order.package.transferEnable': 'Flow',
  'plan.order.details.planName': 'Plan',
  'plan.order.details.orderId': 'Order ID',
  'plan.order.details.createdTime': 'Created Time',
  'plan.order.details.expire': 'Expiration',
  'plan.order.details.payPrice': 'Price',
  'plan.order.details.payStatus': 'Pay Status',
  'plan.order.details.planContent': 'Plan Content',
  'plan.order.details.userContent': 'User Details',
  'plan.order.details.userContent.email': 'Email',
  'plan.order.details.userContent.expire': 'Expiration',
  'plan.order.details.userContent.class': 'Class',
  'plan.order.details.userContent.nodeSpeedLimit': 'Speed Limit: ',
  'plan.order.details.userContent.nodeSpeedNoLimit': 'Speed Limit: No limit',
  'plan.order.details.userContent.connector': 'Connects: ',
  'plan.order.details.userContent.connectors': 'Connects: No limit',

  'checkout.order.success': 'Please pay for it immediately',
  'checkout.order.info': 'Please refresh the page if not direct after paying',
  'checkout.order.choosePayType': 'Please choose a payment',
  'checkout.order.payType.money': 'Balance',
  'checkout.order.payType.alipay': 'Alipay',
  'checkout.order.payType.wxpay': 'Wxpay',
  'checkout.order.needPayAmount': 'Need Pay',

  'result.success.title': 'Success',

  'funds.withdraw': 'Withdraw',

  'ticket.title': 'Title',
  'ticket.time': 'Time',
  'ticket.status': 'Status',
  'ticket.operation': 'Operation',
  'ticket.status.0': 'Waiting',
  'ticket.status.1': 'Replied',
  'ticket.status.2': 'Finished',
  'ticket.detail': 'Detail',
  'ticket.detail.close': 'Close',

  'usercenter.settings.security.changePass': 'Change Password',
  'usercenter.settings.security.changePass.oldPass': 'Old Password',
  'usercenter.settings.security.changePass.newPass': 'New Password',
  'usercenter.settings.security.changePass.reNewPass': 'Please input again',
  'usercenter.settings.security.changeEmail': 'Change Email',
  'usercenter.settings.security.changeEmail.oldEmailCheckCode': 'Old email\'s CheckCode',
  'usercenter.settings.security.changeEmail.newEmail': 'New Email Address',
  'usercenter.settings.security.changeEmail.newEmailCheckCode': 'New email\'s CheckCode',
  'usercenter.settings.binding.tg': 'Binding Telegram',
  'usercenter.settings.binding.unbinding.tg': 'Unbinding Telegram',

  'app.setting.pagestyle': 'Page style setting',
  'app.setting.pagestyle.light': 'Light style',
  'app.setting.pagestyle.dark': 'Dark style',
  'app.setting.pagestyle.realdark': 'RealDark style',
  'app.setting.themecolor': 'Theme Color',
  'app.setting.navigationmode': 'Navigation Mode',
  'app.setting.content-width': 'Content Width',
  'app.setting.fixedheader': 'Fixed Header',
  'app.setting.fixedsidebar': 'Fixed Sidebar',
  'app.setting.sidemenu': 'Side Menu Layout',
  'app.setting.topmenu': 'Top Menu Layout',
  'app.setting.content-width.fixed': 'Fixed',
  'app.setting.content-width.fluid': 'Fluid',
  'app.setting.othersettings': 'Other Settings',
  'app.setting.weakmode': 'Weak Mode',
  'app.setting.copy': 'Copy Setting',
  'app.setting.loading': 'Loading theme',
  'app.setting.copyinfo': 'copy success，please replace defaultSettings in src/models/setting.js',
  'app.setting.production.hint': 'Setting panel shows in development environment only, please manually modify'
}

export default {
  ...components,
  ...locale
}
