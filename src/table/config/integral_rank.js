import { bigNumberFormatter, transToTime } from '@/libs/dataColumnFormatter'

export function gameIntegralTable() {
    return {
        //导出按钮
        export: true,
        //搜索内容
        search: true,
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
            prop: 'UserID'
        },
        //表头配置
        columns: [{
            title: '用户ID',
            name: 'UserID',
            sortable: true,
        }, {
            title: '游戏ID',
            name: 'KindID',
            sortable: true,
        }, {
            title: '房间ID',
            name: 'ServerID',
            sortable: true,
        }, {
            title: '积分(单个房间)',
            name: 'IntegralCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '赢局(单个房间)',
            name: 'WinCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '输局(单个房间)',
            name: 'LostCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '和局(单个房间)',
            name: 'DrawCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '逃局(单个房间)',
            name: 'FleeCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '登录次数',
            name: 'AllLogonTimes',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '游戏时长',
            name: 'PlayTimeCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '在线时长',
            name: 'OnLineTimeCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '最后登录时间',
            name: 'LastLogonDate',
            sortable: true,
            formatter: transToTime
        }, {
            title: '最后登录IP',
            name: 'LastLogonIP',
            sortable: true,
        }],
        data: []
    }
}

export function singleIntegralTable() {
    return {
        //导出按钮
        export: true,
        //搜索内容
        search: true,
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
            prop: 'UserID'
        },
        //表头配置
        columns: [{
            title: '用户ID',
            name: 'UserID',
            sortable: true,
        }, {
            title: '总成绩',
            name: 'Score',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '总积分',
            name: 'Grade',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '总税收',
            name: 'Revenue',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '游戏总时长',
            name: 'PlayTimeCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '局数(第几局)',
            name: ''
        }, {
            title: '椅子号码',
            name: ''
        }, {
            title: '用户奖牌',
            name: ''
        }, {
            title: '请求标识',
            name: ''
        }, {
            title: '进出索引',
            name: ''
        }, {
            title: '插入时间',
            name: ''
        }],
        sub_columns: [{
            title: '时间',
            name: 'InsertTime',
            sortable: true,
            formatter: transToTime
        }, {
            title: '用户ID',
            name: 'UserID',
            sortable: true,
        }, {
            title: '局数(第几局)',
            name: 'DrawID',
            sortable: true,
        }, {
            title: '单局成绩',
            name: 'Score',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '单局积分',
            name: 'Grade',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '单局税收',
            name: 'Revenue',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '单局游戏时长',
            name: 'PlayTimeCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '椅子号码',
            name: 'ChairID',
            sortable: true,
        }, {
            title: '用户奖牌',
            name: 'UserMedal',
            sortable: true,
        }, {
            title: '请求标识',
            name: 'DBQuestID',
            sortable: true,
        }, {
            title: '进出索引',
            name: 'InoutIndex',
            sortable: true,
        }],
        data: []
    }
}