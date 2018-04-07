import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import login from '@/views/login'

/* 最新版 start */
// 我的桌面
import index from "@/views/index"; /* 我的桌面 */
// 游戏总览 gobal_overview
import overview from "@/views/gobal_overview/overview"; /* 游戏总览 */
import real_time from "@/views/gobal_overview/real_time"; /* 实时数据 */
// 数据分析 data_analysis
import user_analysis from "@/views/data_analysis/user_analysis"; /* 用户分析 */
import look_cards from "@/views/data_analysis/look_cards"; /* 看牌抢庄 */
import mini_game from "@/views/data_analysis/mini_game"; /* 小游戏 */
import rank from "@/views/data_analysis/rank"; /* 排行榜 */
import pay_analysis from "@/views/data_analysis/pay_analysis"; /* 付费分析 */
import buy_item from "@/views/data_analysis/buy_item"; /* 道具购买分析 */
import timing from "@/views/data_analysis/timing"; /* 定时奖励 */
// 用户管理 users
import user_info from "@/views/users/user_info"; /* 用户信息 */
import risk_manage from "@/views/users/risk_manage"; /* 封禁管理 */
import blacklist from "@/views/users/blacklist"; /* 黑名单 */
import int_account from "@/views/users/int_account"; /* 内部帐号 */
// 渠道管理 channel
import channel_analyze from "@/views/channel/channel_analyze"; /* 渠道分析 */
import channel_data from "@/views/channel/channel_data"; /* 渠道数据 */
import channel_config from "@/views/channel/channel_config"; /* 渠道管理 */
// 支付管理 pay
import payment_order from "@/views/pay/payment_order"; /* 支付订单 */
// 兑换管理 exchange
import exchange_audit from "@/views/exchange/exchange_audit"; /* 兑换审核 */
import exchange_record from "@/views/exchange/exchange_record"; /* 兑换记录 */
// 游戏配置 game_config
import robot from '@/views/game_config/robot'; /* AI配置 */
import match_config from "@/views/game_config/match_config"; /* 比赛配置 */
import lookCards_config from "@/views/game_config/lookCards_config"; /* 看牌抢庄配置 */
import task_config from "@/views/game_config/task_config"; /* 任务配置 */
import activity_config from "@/views/game_config/activity_config"; /* 活动配置 */
import popup_config from "@/views/game_config/popup_config"; /* 弹窗配置 */
import indulge from '@/views/game_config/indulge'; /* 防沉迷系统 */
import shop_config from "@/views/game_config/shop_config"; /* 商城订单配置 */
import notice from "@/views/game_config/notice"; /* 走马灯配置 */
import mail from "@/views/game_config/mail"; /* 系统邮件 */
import feedback from "@/views/game_config/feedback"; /* 问题反馈 */
// 后台管理 cms
import account from "@/views/cms/account"; /* 权限/账号管理 */
import sys_config from "@/views/cms/sys_config"; /* 系统配置 */
import loger from "@/views/cms/loger"; /* 操作日志 */
import team from "@/views/cms/team"; /* 团队原则 */

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
    routes: [{
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/gobal_overview/overview',
        name: 'overview',
        component: overview
    }, {
        path: '/gobal_overview/real_time',
        name: 'real_time',
        component: real_time
    }, {
        path: '/data_analysis/user_analysis',
        name: 'user_analysis',
        component: user_analysis
    }, {
        path: '/data_analysis/look_cards',
        name: 'look_cards',
        component: look_cards
    }, {
        path: '/data_analysis/mini_game',
        name: 'mini_game',
        component: mini_game
    }, {
        path: '/data_analysis/rank',
        name: 'rank',
        component: rank
    }, {
        path: '/data_analysis/pay_analysis',
        name: 'pay_analysis',
        component: pay_analysis
    }, {
        path: '/data_analysis/buy_item',
        name: 'buy_item',
        component: buy_item
    }, {
        path: '/data_analysis/timing',
        name: 'timing',
        component: timing
    }, {
        path: '/users/user_info',
        name: 'user_info',
        component: user_info
    }, {
        path: '/users/risk_manage',
        name: 'risk_manage',
        component: risk_manage
    }, {
        path: '/users/blacklist',
        name: 'blacklist',
        component: blacklist
    }, {
        path: '/users/int_account',
        name: 'int_account',
        component: int_account
    }, {
        path: '/channel/channel_analyze',
        name: 'channel_analyze',
        component: channel_analyze
    }, {
        path: '/channel/channel_data',
        name: 'channel_data',
        component: channel_data
    }, {
        path: '/channel/channel_config',
        name: 'channel_config',
        component: channel_config
    }, {
        path: '/pay/payment_order',
        name: 'payment_order',
        component: payment_order
    }, {
        path: '/exchange/exchange_audit',
        name: 'exchange_audit',
        component: exchange_audit
    }, {
        path: '/exchange/exchange_record',
        name: 'exchange_record',
        component: exchange_record
    }, {
        path: '/game_config/robot',
        name: 'robot',
        component: robot
    }, {
        path: '/game_config/match_config',
        name: 'match_config',
        component: match_config
    }, {
        path: '/game_config/lookCards_config',
        name: 'lookCards_config',
        component: lookCards_config
    }, {
        path: '/game_config/task_config',
        name: 'task_config',
        component: task_config
    }, {
        path: '/game_config/activity_config',
        name: 'activity_config',
        component: activity_config
    }, {
        path: '/game_config/popup_config',
        name: 'popup_config',
        component: popup_config
    }, {
        path: '/game_config/indulge',
        name: 'indulge',
        component: indulge
    }, {
        path: '/game_config/shop_config',
        name: 'shop_config',
        component: shop_config
    }, {
        path: '/game_config/notice',
        name: 'notice',
        component: notice
    }, {
        path: '/game_config/mail',
        name: 'mail',
        component: mail
    }, {
        path: '/game_config/feedback',
        name: 'feedback',
        component: feedback
    }, {
        path: '/cms/account',
        name: 'account',
        component: account
    }, {
        path: '/cms/sys_config',
        name: 'sys_config',
        component: sys_config
    }, {
        path: '/cms/loger',
        name: 'loger',
        component: loger
    }, {
        path: '/cms/team',
        name: 'team',
        component: team
    }]
});
/* 最新版 end */




//游戏总览
// import gobalDataOverview from '@/views/gobal_data/overview'
// import gobalDataRealTime from '@/views/gobal_data/real_time'

//游戏场数据
// import gameDataBaiRenNiuNiu from '@/views/game_data/brnn'
// import gameDataLookCard from '@/views/game_data/look_card'
// import gameDataSsc from '@/views/game_data/xjssc'
// import gameDataPpl from '@/views/game_data/ppl'
// import gameDataFfl from '@/views/game_data/ffl'

//用户管理
// import UserData from '@/views/user/user_data'
// import NewUser from '@/views/user/new_user'
// import ActiveUser from '@/views/user/active_user'
// import KeepUser from '@/views/user/keep_user'

//排行榜
// import goldRank from '@/views/rank/gold_rank'
// import itemRank from '@/views/rank/item_rank'
// import payRank from '@/views/rank/pay_rank'
// import cashRank from '@/views/rank/cash_rank'

//付费分析
// import payRecord from '@/views/pay/pay_record'
// import payOverview from '@/views/pay/pay_overview'
// import payCustom from '@/views/pay/pay_custom'
// import buyItem from '@/views/pay/buy_item'

//市场推广
// import channelAnalyze from '@/views/promote/channel_analyze'
// import channelData from '@/views/promote/channel_data'
// import channelConfig from '@/views/promote/channel_config'

//兑奖中心
// import exchangeOrder from '@/views/cash/exchange_order'
// import cashKamiPanel from '@/views/cash/kami_panel'

//运营管理
// import feedback from '@/views/manu/feedback'
// import notice from '@/views/manu/notice'
// import mail from '@/views/manu/mail'
// import riskManage from '@/views/manu/risk_manage'

//系统维护
// import activityConfig from '@/views/sys/activity_config'
// import sysSign from '@/views/sys/sign_setup'
// import rotaryConfig from '@/views/sys/rotary_config'

//后台管理
// import account from '@/views/backend/account'
// import sys_config from '@/views/backend/sys_config'
// import loger from '@/views/backend/loger'
// import Team from '@/views/backend/team'

// Vue.use(Router)
// Vue.use(VueResource)

// export default new Router({
//     routes: [{
//         path: '/login',
//         name: 'login',
//         component: login
//     }, {
//         path: '/',
//         name: 'index',
//         component: index
//     }, {
//         path: '/gobal_data/overview',
//         name: 'gobalDataOverview',
//         component: gobalDataOverview
//     }, {
//         path: '/gobal_data/real_time',
//         name: 'gobalDataRealTime',
//         component: gobalDataRealTime
//     }, {
//         path: '/game_data/brnn',
//         name: 'gameDataBaiRenNiuNiu',
//         component: gameDataBaiRenNiuNiu
//     }, {
//         path: '/game_data/look_card',
//         name: 'gameDataLookCard',
//         component: gameDataLookCard
//     }, {
//         path: '/game_data/xjssc',
//         name: 'gameDataSsc',
//         component: gameDataSsc
//     }, {
//         path: '/game_data/ppl',
//         name: 'gameDataPpl',
//         component: gameDataPpl
//     }, {
//         path: '/game_data/ffl',
//         name: 'gameDataFfl',
//         component: gameDataFfl
//     }, {
//         path: '/user/user_data',
//         name: 'UserData',
//         component: UserData
//     }, {
//         path: '/rank/gold_rank',
//         name: 'goldRank',
//         component: goldRank
//     }, {
//         path: '/user/new_user',
//         name: 'NewUser',
//         component: NewUser
//     }, {
//         path: '/user/active_user',
//         name: 'ActiveUser',
//         component: ActiveUser
//     }, {
//         path: '/user/keep_user',
//         name: 'KeepUser',
//         component: KeepUser
//     }, {
//         path: '/rank/item_rank',
//         name: 'itemRank',
//         component: itemRank
//     }, {
//         path: '/rank/pay_rank',
//         name: 'payRank',
//         component: payRank
//     }, {
//         path: '/rank/cash_rank',
//         name: 'cashRank',
//         component: cashRank
//     }, {
//         path: '/pay/pay_record',
//         name: 'payRecord',
//         component: payRecord
//     }, {
//         path: '/pay/pay_overview',
//         name: 'payOverview',
//         component: payOverview
//     }, {
//         path: '/pay/pay_custom',
//         name: 'payCustom',
//         component: payCustom
//     }, {
//         path: '/pay/buy_item',
//         name: 'buyItem',
//         component: buyItem
//     }, {
//         path: '/sys/activity_config',
//         name: 'activityConfig',
//         component: activityConfig
//     }, {
//         path: '/sys/sign_setup',
//         name: 'sysSign',
//         component: sysSign
//     }, {
//         path: '/sys/rotary_config',
//         name: 'rotaryConfig',
//         component: rotaryConfig
//     }, {
//         path: '/cash/exchange_order',
//         name: 'exchangeOrder',
//         component: exchangeOrder
//     }, {
//         path: '/cash/kami_panel',
//         name: 'cashKamiPanel',
//         component: cashKamiPanel
//     }, {
//         path: '/manu/notice',
//         name: 'notice',
//         component: notice
//     }, {
//         path: '/manu/mail',
//         name: 'mail',
//         component: mail
//     }, {
//         path: '/manu/feedback',
//         name: 'feedback',
//         component: feedback
//     }, {
//         path: '/manu/risk_manage',
//         name: 'riskManage',
//         component: riskManage
//     }, {
//         path: '/backend/account',
//         name: 'account',
//         component: account
//     }, {
//         path: '/backend/sys_config',
//         name: 'sys_config',
//         component: sys_config
//     }, {
//         path: '/backend/loger',
//         name: 'loger',
//         component: loger
//     }, {
//         path: 'backend/team',
//         name: 'Team',
//         component: Team
//     }, {
//         path: '/promote/channel_analyze',
//         name: 'channelAnalyze',
//         component: channelAnalyze
//     }, {
//         path: '/promote/channel_data',
//         name: 'channelData',
//         component: channelData
//     }, {
//         path: '/promote/channel_config',
//         name: 'channelConfig',
//         component: channelConfig
//     }]
// });