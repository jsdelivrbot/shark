import { transToTime2 } from '@/libs/dataColumnFormatter'
export function taskTable() {
    return {
        //导出按钮
        export: false,
        //搜索内容
        search: false,
        //生成索引
        index: false,
        //行选择框
        select: false,
        //分页
        pagination: true,
        //是否为服务器分页
        serverPagination: false,
        //默认排序
        defaultSort: {
            prop: ''
        },
        //表头配置
        columns: [{
            title: '活动ID',
            name: 'ActivityID',
            sortable: true,
        }, {
            title: '积分任务类型ID',
            name: 'PointTaskTypeID',
            sortable: true,
        }, {
            title: '目标数量',
            name: 'TargetAmount',
            sortable: true,
        }, {
            title: '奖励积分数量',
            name: 'PointAmount',
            sortable: true,
        }, {
            title: '每日限制次数',
            name: 'DayLimitCount',
            sortable: true,
        }, {
            title: '每周限制次数',
            name: 'WeekLimitCount',
            sortable: true,
        }, {
            title: '总限制次数',
            name: 'TotalLimitCount',
            sortable: true,
        }, {
            title: '操作',
            name: 're',
            template: {
                btns: [{
                    name: '编辑',
                    type: 'success',
                    funcName: 'edit'
                }, {
                    name: '删除',
                    type: 'danger',
                    funcName: 'del'
                }]
            }
        }],
        data: []
    }
}

export function activityTable() {
    return {
        //分页
        pagination: true,
        columns: [{
            title: '活动ID',
            name: 'ActivityID',
            sortable: true,
        }, {
            title: '积分ID',
            name: 'PointID',
            sortable: true,
        }, {
            title: '开始时间',
            name: 'StartTime',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '结束时间',
            name: 'EndTime',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '描述',
            name: 'Describe',
            sortable: true,
        }],
        data: []
    }
}

export function tempTable() {
    return {
        //分页
        pagination: true,
        columns: [{
            title: '模板ID',
            name: 'TempID',
            sortable: true
        }, {
            title: '活动ID',
            name: 'ActivityID',
            sortable: true
        }, {
            title: '活动名',
            name: 'ActivityName',
            sortable: true
        }, {
            title: '分类',
            name: 'Classify',
            sortable: true
        }, {
            title: '排序',
            name: 'SortID',
            sortable: true
        }, {
            title: '背景',
            name: 'BgImage',
            sortable: true
        }, {
            title: '开始时间',
            name: 'StartTime',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '结束时间',
            name: 'EndTime',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '设备类型',
            name: 'DeviceType',
            sortable: true
        }, {
            title: '帐号类型',
            name: 'AccountType',
            sortable: true
        }, {
            title: '渠道',
            name: 'ChannelID',
            sortable: true
        }, {
            title: '充值额度',
            name: 'Recharge',
            sortable: true
        }, {
            title: '注册时间开始时间',
            name: 'RegisterDate1',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '注册时间结束时间',
            name: 'RegisterDate2',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '玩家ID',
            name: 'PlayerID',
            sortable: true
        }, {
            title: '配置图片',
            name: 'ImageUrl',
            sortable: true
        }, {
            title: '游戏内跳转页面',
            name: 'LocationUrl',
            sortable: true
        }, {
            title: 'web跳转链接',
            name: 'WebUrl',
            sortable: true
        }, {
            title: 'Banner图',
            name: 'Bannar',
            sortable: true
        }],
        data: []
    }
}

export function bannerActTable() {
    return {
        //分页
        pagination: true,
        columns: [{
            title: '活动ID',
            name: 'ActivityID',
            sortable: true
        }, {
            title: '任务ID',
            name: 'TaskID',
            sortable: true
        }, {
            title: '排序',
            name: 'SortID',
            sortable: true
        }, {
            title: '任务说明',
            name: 'TaskDesc',
            sortable: true
        }, {
            title: '任务类型',
            name: 'TaskType',
            sortable: true
        }, {
            title: '任务局数',
            name: 'TaskNum',
            sortable: true
        }, {
            title: '前置任务编号',
            name: 'FrontTask',
            sortable: true
        }, {
            title: '奖励',
            name: 'Rewards',
            sortable: true
        }, {
            title: '前往按钮跳转',
            name: 'Jump',
            sortable: true
        }, {
            title: '累计充值额度可见区间',
            name: 'Recharge',
            sortable: true
        }, {
            title: '每日限制次数',
            name: 'DayLimitCount',
            sortable: true
        }, {
            title: '每周限制次数',
            name: 'WeekLimitCount',
            sortable: true
        }, {
            title: '总限制次',
            name: 'TotalLimitCount',
            sortable: true
        }],
        data: []
    }
}

export function noticeTable() {
    return {
        //分页
        pagination: true,
        columns: [{
            title: '公告ID',
            name: 'NoticeID',
            sortable: true
        }, {
            title: '公告名',
            name: 'NoticeName',
            sortable: true
        }, {
            title: '公告标题',
            name: 'Title',
            sortable: true
        }, {
            title: '公告内容',
            name: 'Content',
            sortable: true
        }, {
            title: '分类',
            name: 'Classify',
            sortable: true
        }, {
            title: '排序',
            name: 'SortID',
            sortable: true
        }, {
            title: '模板ID',
            name: 'TempID',
            sortable: true
        }, {
            title: '背景图',
            name: 'BgImage',
            sortable: true
        }, {
            title: '开始时间',
            name: 'StartTime',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '结束时间',
            name: 'EndTime',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '设备类型',
            name: 'DeviceType',
            sortable: true
        }, {
            title: '帐号类型',
            name: 'AccountType',
            sortable: true
        }, {
            title: '渠道',
            name: 'ChannelID',
            sortable: true
        }, {
            title: '注册开始时间',
            name: 'RegisterDate1',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '注册结束时间',
            name: 'RegisterDate2',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '充值额度',
            name: 'Recharge',
            sortable: true
        }, {
            title: '玩家ID',
            name: 'PlayerID',
            sortable: true
        }, {
            title: '配置图片',
            name: 'ImageUrl',
            sortable: true
        }, {
            title: '游戏内跳转页面',
            name: 'LocationUrl',
            sortable: true
        }, {
            title: 'web跳转链接',
            name: 'WebUrl',
            sortable: true
        }],
        data: []
    }
}