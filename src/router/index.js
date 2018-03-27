import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import login from '@/views/login'

//我的桌面
import index from '@/views/index'

//游戏总览
import gobalDataOverview from '@/views/gobal_data/overview'
import gobalDataRealTime from '@/views/gobal_data/real_time'

//游戏场数据
import gameDataBaiRenNiuNiu from '@/views/game_data/brnn'
import gameDataLookCard from '@/views/game_data/look_card'
import gameDataSsc from '@/views/game_data/xjssc'
import gameDataPpl from '@/views/game_data/ppl'
import gameDataFfl from '@/views/game_data/ffl'

//用户管理
import UserData from '@/views/user/user_data'
import NewUser from '@/views/user/new_user'
import ActiveUser from '@/views/user/active_user'
import KeepUser from '@/views/user/keep_user'

//排行榜
import goldRank from '@/views/rank/gold_rank'
import itemRank from '@/views/rank/item_rank'
import payRank from '@/views/rank/pay_rank'
import cashRank from '@/views/rank/cash_rank'

//付费分析
import payRecord from '@/views/pay/pay_record'
import payOverview from '@/views/pay/pay_overview'
import payCustom from '@/views/pay/pay_custom'
import buyItem from '@/views/pay/buy_item'

//市场推广
import channelAnalyze from '@/views/promote/channel_analyze'
import channelData from '@/views/promote/channel_data'
import channelConfig from '@/views/promote/channel_config'

//兑奖中心
import exchangeOrder from '@/views/cash/exchange_order'
import cashKamiPanel from '@/views/cash/kami_panel'

//运营管理
import feedback from '@/views/manu/feedback'
import notice from '@/views/manu/notice'
import mail from '@/views/manu/mail'
import riskManage from '@/views/manu/risk_manage'

//系统维护
import activityConfig from '@/views/sys/activity_config'
import sysSign from '@/views/sys/sign_setup'
import rotaryConfig from '@/views/sys/rotary_config'

//后台管理
import account from '@/views/backend/account'
import sys_config from '@/views/backend/sys_config'
import loger from '@/views/backend/loger'

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
        path: '/gobal_data/overview',
        name: 'gobalDataOverview',
        component: gobalDataOverview
    }, {
        path: '/gobal_data/real_time',
        name: 'gobalDataRealTime',
        component: gobalDataRealTime
    }, {
        path: '/game_data/brnn',
        name: 'gameDataBaiRenNiuNiu',
        component: gameDataBaiRenNiuNiu
    }, {
        path: '/game_data/look_card',
        name: 'gameDataLookCard',
        component: gameDataLookCard
    }, {
        path: '/game_data/xjssc',
        name: 'gameDataSsc',
        component: gameDataSsc
    }, {
        path: '/game_data/ppl',
        name: 'gameDataPpl',
        component: gameDataPpl
    }, {
        path: '/game_data/ffl',
        name: 'gameDataFfl',
        component: gameDataFfl
    }, {
        path: '/user/user_data',
        name: 'UserData',
        component: UserData
    }, {
        path: '/rank/gold_rank',
        name: 'goldRank',
        component: goldRank
    }, {
        path: '/user/new_user',
        name: 'NewUser',
        component: NewUser
    }, {
        path: '/user/active_user',
        name: 'ActiveUser',
        component: ActiveUser
    }, {
        path: '/user/keep_user',
        name: 'KeepUser',
        component: KeepUser
    }, {
        path: '/rank/item_rank',
        name: 'itemRank',
        component: itemRank
    }, {
        path: '/rank/pay_rank',
        name: 'payRank',
        component: payRank
    }, {
        path: '/rank/cash_rank',
        name: 'cashRank',
        component: cashRank
    }, {
        path: '/pay/pay_record',
        name: 'payRecord',
        component: payRecord
    }, {
        path: '/pay/pay_overview',
        name: 'payOverview',
        component: payOverview
    }, {
        path: '/pay/pay_custom',
        name: 'payCustom',
        component: payCustom
    }, {
        path: '/pay/buy_item',
        name: 'buyItem',
        component: buyItem
    }, {
        path: '/sys/activity_config',
        name: 'activityConfig',
        component: activityConfig
    }, {
        path: '/sys/sign_setup',
        name: 'sysSign',
        component: sysSign
    }, {
        path: '/sys/rotary_config',
        name: 'rotaryConfig',
        component: rotaryConfig
    }, {
        path: '/cash/exchange_order',
        name: 'exchangeOrder',
        component: exchangeOrder
    }, {
        path: '/cash/kami_panel',
        name: 'cashKamiPanel',
        component: cashKamiPanel
    }, {
        path: '/manu/notice',
        name: 'notice',
        component: notice
    }, {
        path: '/manu/mail',
        name: 'mail',
        component: mail
    }, {
        path: '/manu/feedback',
        name: 'feedback',
        component: feedback
    }, {
        path: '/manu/risk_manage',
        name: 'riskManage',
        component: riskManage
    }, {
        path: '/backend/account',
        name: 'account',
        component: account
    }, {
        path: '/backend/sys_config',
        name: 'sys_config',
        component: sys_config
    }, {
        path: '/backend/loger',
        name: 'loger',
        component: loger
    }, {
        path: '/promote/channel_analyze',
        name: 'channelAnalyze',
        component: channelAnalyze
    }, {
        path: '/promote/channel_data',
        name: 'channelData',
        component: channelData
    }, {
        path: '/promote/channel_config',
        name: 'channelConfig',
        component: channelConfig
    }]
});