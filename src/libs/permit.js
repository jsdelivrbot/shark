export function permits() {
    return [{
        title: '首页',
        permit: true,
        permit_id: 40,
        sub: [{
            title: '我的桌面',
            name: '我的桌面',
            to: '/',
            permit: true,
            permit_id: 41,
        }]
    }, {
        title: '游戏总览',
        permit: true,
        permit_id: 1,
        sub: [{
            title: '游戏概况',
            name: 'overview',
            to: '/gobal_overview/overview',
            permit: true,
            permit_id: 2,
        }, {
            title: '实时数据',
            name: 'real_time',
            to: '/gobal_overview/real_time',
            permit: true,
            permit_id: 3,
        }]
    }, {
        title: '数据分析',
        permit: true,
        permit_id: 4,
        sub: [{
            title: '用户分析',
            name: 'user_analysis',
            to: '/data_analysis/user_analysis',
            permit: true,
            permit_id: 5
        }, {
            title: '看牌抢庄',
            name: 'look_cards',
            to: '/data_analysis/look_cards',
            permit: true,
            permit_id: 6
        }, {
            title: '小游戏',
            name: 'mini_game',
            to: '/data_analysis/mini_game',
            permit: true,
            permit_id: 7
        }, {
            title: '排行榜',
            name: 'rank',
            to: '/data_analysis/rank',
            permit: true,
            permit_id: 8
        }, {
            title: '付费分析',
            name: 'pay_analysis',
            to: '/data_analysis/pay_analysis',
            permit: true,
            permit_id: 9
        }, {
            title: '道具购买分析',
            name: 'buy_item',
            to: '/data_analysis/buy_item',
            permit: true,
            permit_id: 10
        }]
    }, {
        title: '用户管理',
        permit: true,
        permit_id: 11,
        sub: [{
            title: '用户信息',
            name: 'user_info',
            to: '/users/user_info',
            permit: true,
            permit_id: 12
        }, {
            title: '封禁管理',
            name: 'risk_manage',
            to: '/users/risk_manage',
            permit: true,
            permit_id: 13
        }, {
            title: '黑名单',
            name: 'blacklist',
            to: '/users/blacklist',
            permit: true,
            permit_id: 14
        }, {
            title: '内部帐号',
            name: 'int_account',
            to: '/users/int_account',
            permit: true,
            permit_id: 15
        }]
    }, {
        title: '渠道管理',
        permit: true,
        permit_id: 16,
        sub: [{
            title: '渠道分析',
            name: 'channel_analyze',
            to: '/channel/channel_analyze',
            permit: true,
            permit_id: 17
        }, {
            title: '渠道数据',
            name: 'channel_data',
            to: '/channel/channel_data',
            permit: true,
            permit_id: 18
        }, {
            title: '渠道管理',
            name: 'channel_config',
            to: '/channel/channel_config',
            permit: true,
            permit_id: 19
        }]
    }, {
        title: '支付管理',
        permit: true,
        permit_id: 20,
        sub: [{
            title: '支付订单',
            name: 'payment_order',
            to: '/pay/payment_order',
            permit: true,
            permit_id: 21
        }]
    }, {
        title: '兑换管理',
        permit: true,
        permit_id: 22,
        sub: [{
            title: '兑换审核',
            name: 'exchange_audit',
            to: '/exchange/exchange_audit',
            permit: true,
            permit_id: 23
        }, {
            title: '兑换记录',
            name: 'exchange_record',
            to: '/exchange/exchange_record',
            permit: true,
            permit_id: 24
        }]
    }, {
        title: '客服工具',
        permit: true,
        permit_id: 42,
        sub: [{
            title: '问题反馈',
            name: 'feedback',
            to: '/game_config/feedback',
            permit: true,
            permit_id: 34
        }]
    }, {
        title: '游戏配置',
        permit: true,
        permit_id: 25,
        sub: [{
            title: 'AI配置',
            name: 'robot',
            to: '/game_config/robot',
            permit: true,
            permit_id: 43
        }, {
            title: '比赛配置',
            name: 'match_config',
            to: '/game_config/match_config',
            permit: true,
            permit_id: 26
        }, {
            title: '看牌抢庄配置',
            name: 'lookCards_config',
            to: '/game_config/lookCards_config',
            permit: true,
            permit_id: 27
        }, {
            title: '任务配置',
            name: 'task_config',
            to: '/game_config/task_config',
            permit: true,
            permit_id: 28
        }, {
            title: '活动配置',
            name: 'activity_config',
            to: '/game_config/activity_config',
            permit: true,
            permit_id: 29
        }, {
            title: '弹窗配置',
            name: 'popup_config',
            to: '/game_config/popup_config',
            permit: true,
            permit_id: 30
        }, {
            title: '商城订单配置',
            name: 'shop_config',
            to: '/game_config/shop_config',
            permit: true,
            permit_id: 31
        }, {
            title: '走马灯',
            name: 'notice',
            to: '/game_config/notice',
            permit: true,
            permit_id: 32
        }, {
            title: '系统邮件',
            name: 'mail',
            to: '/game_config/mail',
            permit: true,
            permit_id: 33
        }]
    }, {
        title: '后台管理',
        permit: true,
        permit_id: 35,
        sub: [{
            title: '权限/帐号管理',
            name: 'account',
            to: '/cms/account',
            permit: true,
            permit_id: 36
        }, {
            title: '系统配置',
            name: 'sys_config',
            to: '/cms/sys_config',
            permit: true,
            permit_id: 37
        }, {
            title: '操作日志',
            name: 'loger',
            to: '/cms/loger',
            permit: true,
            permit_id: 38
        }, {
            title: '团队原则',
            name: 'team',
            to: '/cms/team',
            permit: true,
            permit_id: 39
        }]
    }];




    // return [{
    //     title: '首页',
    //     permit: true,
    //     permit_id: 43,
    //     sub: [{
    //         title: '我的桌面',
    //         name: '我的桌面',
    //         to: '/',
    //         permit: true,
    //         permit_id: 44,
    //     }]
    // }, {
    //     title: '游戏总览',
    //     permit: true,
    //     permit_id: 1,
    //     sub: [{
    //         title: '游戏概况',
    //         name: 'gobalDataOverview',
    //         to: '/gobal_data/overview',
    //         permit: true,
    //         permit_id: 2,
    //     }, {
    //         title: '实时数据',
    //         name: 'gobalDataRealTime',
    //         to: '/gobal_data/real_time',
    //         permit: true,
    //         permit_id: 3,
    //     }]
    // }, {
    //     title: '游戏场数据',
    //     permit: true,
    //     permit_id: 4,
    //     sub: [{
    //         title: '百人场',
    //         name: 'gameDataBaiRenNiuNiu',
    //         to: '/game_data/brnn',
    //         permit: true,
    //         permit_id: 5,
    //     }, {
    //         title: '看牌抢庄',
    //         name: 'gameDataLookCard',
    //         to: '/game_data/look_card',
    //         permit: true,
    //         permit_id: 6,
    //     }, {
    //         title: '时时彩',
    //         name: 'gameDataSsc',
    //         to: '/game_data/xjssc',
    //         permit: true,
    //         permit_id: 7,
    //     }, {
    //         title: '拼拼乐',
    //         name: 'gameDataPpl',
    //         to: '/game_data/ppl',
    //         permit: true,
    //         permit_id: 8,
    //     }, {
    //         title: '刮刮乐',
    //         name: 'gameDataFfl',
    //         to: '/game_data/ffl',
    //         permit: true,
    //         permit_id: 9,
    //     }]
    // }, {
    //     title: '用户管理',
    //     permit: true,
    //     permit_id: 10,
    //     sub: [{
    //         title: '用户信息',
    //         name: 'userData',
    //         to: '/user/user_data',
    //         permit: true,
    //         permit_id: 11,
    //     }, {
    //         title: '风控中心',
    //         name: 'riskManage',
    //         to: '/manu/risk_manage',
    //         permit: true,
    //         permit_id: 35,
    //     }]
    // }, {
    //     title: '数据分析',
    //     permit: true,
    //     permit_id: 48,
    //     sub: [{
    //         title: '新增用户',
    //         name: 'NewUser',
    //         to: '/user/new_user',
    //         permit: true,
    //         permit_id: 12,
    //     }, {
    //         title: '活跃用户',
    //         name: 'ActiveUser',
    //         to: '/user/active_user',
    //         permit: true,
    //         permit_id: 13,
    //     }, {
    //         title: '留存用户',
    //         name: 'KeepUser',
    //         to: '/user/keep_user',
    //         permit: true,
    //         permit_id: 14,
    //     }, {
    //         title: '货币排行',
    //         name: 'goldRank',
    //         to: '/rank/gold_rank',
    //         permit: true,
    //         permit_id: 16,
    //     }, {
    //         title: '物品排行',
    //         name: 'itemRank',
    //         to: '/rank/item_rank',
    //         permit: true,
    //         permit_id: 18,
    //     }, {
    //         title: '充值排行',
    //         name: 'payRank',
    //         to: '/rank/pay_rank',
    //         permit: true,
    //         permit_id: 19,
    //     }, {
    //         title: '兑奖排行',
    //         name: 'cashRank',
    //         to: '/rank/cash_rank',
    //         permit: true,
    //         permit_id: 20,
    //     }, {
    //         title: '充值记录',
    //         name: 'payRecord',
    //         to: '/pay/pay_record',
    //         permit: true,
    //         permit_id: 22,
    //     }, {
    //         title: '付费概况',
    //         name: 'payOverview',
    //         to: '/pay/pay_overview',
    //         permit: true,
    //         permit_id: 23,
    //     }, {
    //         title: '付费习惯',
    //         name: 'payCustom',
    //         to: '/pay/pay_custom',
    //         permit: true,
    //         permit_id: 24,
    //     }, {
    //         title: '道具购买记录',
    //         name: 'buyItem',
    //         to: '/pay/buy_item',
    //         permit: true,
    //         permit_id: 45
    //     }]
    // }, {
    //     title: '市场推广',
    //     permit: true,
    //     permit_id: 25,
    //     sub: [{
    //         title: '渠道分析',
    //         name: 'channelAnalyze',
    //         to: '/promote/channel_analyze',
    //         permit: true,
    //         permit_id: 26,
    //     }, {
    //         title: '渠道数据',
    //         name: 'channelData',
    //         to: '/promote/channel_data',
    //         permit: true,
    //         permit_id: 27,
    //     }, {
    //         title: '渠道管理',
    //         name: 'channelConfig',
    //         to: '/promote/channel_config',
    //         permit: true,
    //         permit_id: 28,
    //     }]
    // }, {
    //     title: '游戏配置',
    //     permit: true,
    //     permit_id: 49,
    //     sub: [{
    //         title: '签到/等级配置',
    //         name: 'sysSign',
    //         to: '/sys/sign_setup',
    //         permit: true,
    //         permit_id: 37,
    //     }, {
    //         title: '抽奖记录',
    //         name: 'rotaryConfig',
    //         to: '/sys/rotary_config',
    //         permit: true,
    //         permit_id: 38,
    //     }]
    // }, {
    //     title: '活动配置',
    //     permit: true,
    //     permit_id: 36,
    //     sub: [{
    //         title: '任务/活动配置',
    //         name: 'activityConfig',
    //         to: '/sys/activity_config',
    //         permit: true,
    //         permit_id: 47
    //     }]
    // }, {
    //     title: '运营管理',
    //     permit: true,
    //     permit_id: 31,
    //     sub: [{
    //         title: '走马灯',
    //         name: 'notice',
    //         to: '/manu/notice',
    //         permit: true,
    //         permit_id: 32,
    //     }, {
    //         title: '系统邮件',
    //         name: 'mail',
    //         to: '/manu/mail',
    //         permit: true,
    //         permit_id: 33,
    //     }, {
    //         title: '问题反馈',
    //         name: 'feedback',
    //         to: '/manu/feedback',
    //         permit: true,
    //         permit_id: 34,
    //     }]
    // }, {
    //     title: '后台管理',
    //     permit: true,
    //     permit_id: 39,
    //     sub: [{
    //         title: '权限/帐号管理',
    //         name: 'account',
    //         to: '/backend/account',
    //         permit: true,
    //         permit_id: 40,
    //     }, {
    //         title: '系统配置',
    //         name: 'sys_config',
    //         to: '/backend/sys_config',
    //         permit: true,
    //         permit_id: 41,
    //     }, {
    //         title: '操作日志',
    //         name: 'log',
    //         to: '/backend/loger',
    //         permit: true,
    //         permit_id: 42,
    //     }, {
    //         title: '团队原则',
    //         name: 'Team',
    //         to: '/backend/team',
    //         permit: true,
    //         permit_id: 51,
    //     }]
    // }, {
    //     title: '未分组',
    //     permit: true,
    //     permit_id: 50,
    //     sub: [{
    //         title: '兑换系统',
    //         name: 'exchangeOrder',
    //         to: '/cash/exchange_order',
    //         permit: true,
    //         permit_id: 46,
    //     }, {
    //         title: '直充/卡密',
    //         name: 'cashKamiPanel',
    //         to: '/cash/kami_panel',
    //         permit: true,
    //         permit_id: 30,
    //     }]
    // }]
}