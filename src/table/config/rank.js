import { bigNumberFormatter, transToTime2, userInfoFormatter, NullityFormatter } from '@/libs/dataColumnFormatter'
export function gameGoldTable() {
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
            prop: ''
        },
        //表头配置
        columns: [{
            title: '注册时间',
            name: 'RegisterDate',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '玩家ID',
            name: 'UserID',
            sortable: true,
            template: { 'user_link': true }
        }, {
            title: '昵称',
            name: 'UserID',
            sortable: true,
            formatter: userInfoFormatter
        }, {
            title: '玩家总金币',
            name: 'TotalGold',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '身上金币',
            name: 'Score',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '保险柜金币',
            name: 'InsureScore',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '总充值',
            name: 'TotalPayAmount',
            sortable: true
        }, {
            title: '封号时间',
            name: 'FreezeTime',
            sortable: true
        }],
        data: []
    }
}

export function diamondsTable() {
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
            prop: ''
        },
        //表头配置
        columns: [{
            title: '注册时间',
            name: 'RegisterDate',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '用户ID',
            name: 'UserID',
            sortable: true,
            template: { 'user_link': true }
        }, {
            title: '昵称',
            name: 'NickName',
            sortable: true
        }, {
            title: '钻石',
            name: 'UserMedal',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '状态',
            name: 'Nullity',
            sortable: true,
            formatter: NullityFormatter
        }, {
            title: '封号时间',
            name: 'NullityOverDate',
            sortable: true,
            formatter: transToTime2
        }],
        data: []
    }
}

export function payTable() {
    return {
        pagination: true,
        columns: [{
            title: '注册时间',
            name: 'RegisterDate',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '玩家ID',
            name: 'UserID',
            sortable: true,
            template: { 'user_link': true }
        }, {
            title: '昵称',
            name: 'UserName',
            sortable: true
        }, {
            title: '推广渠道',
            name: 'ChannleID',
            sortable: true
        }, {
            title: '平台',
            name: 'PaySys',
            sortable: true
        }, {
            title: '总充值',
            name: 'TotalPay',
            sortable: true
        }, {
            title: '封号时间',
            name: 'NullityOverDate',
            sortable: true,
            formatter: transToTime2
        }],
        data: []
    }
}

export function goldExchangeTable() {
    return {
        //默认排序
        defaultSort: {
            prop: "itemCount",
            order: 'descending'
        },
        pagination: true,
        columns: [{
            title: '注册时间',
            name: 'RegisterDate',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '玩家ID',
            name: 'UserID',
            sortable: true,
            template: { 'user_link': true }
        }, {
            title: '昵称',
            name: 'NickName',
            sortable: true
        }, {
            title: '总兑换金币',
            name: 'itemCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '总消耗积分',
            name: 'TotalAmount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '处理日期',
            name: 'SolveDate',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '封号时间',
            name: 'NullityOverDate',
            sortable: true,
            formatter: transToTime2
        }],
        data: []
    }
}

export function telExchangeTable() {
    return {
        //默认排序
        defaultSort: {
            prop: "itemCount",
            order: 'descending'
        },
        pagination: true,
        columns: [{
            title: '注册时间',
            name: 'RegisterDate',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '玩家ID',
            name: 'UserID',
            sortable: true,
            template: { 'user_link': true }
        }, {
            title: '昵称',
            name: 'NickName',
            sortable: true
        }, {
            title: '总兑换话费',
            name: 'itemCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '总消耗积分',
            name: 'TotalAmount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '处理日期',
            name: 'SolveDate',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '封号时间',
            name: 'NullityOverDate',
            sortable: true,
            formatter: transToTime2
        }],
        data: []
    }
}

export function itemExchangeTable() {
    return {
        //默认排序
        defaultSort: {
            prop: "itemCount",
            order: 'descending'
        },
        pagination: true,
        columns: [{
            title: '注册时间',
            name: 'RegisterDate',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '玩家ID',
            name: 'UserID',
            sortable: true,
            template: { 'user_link': true }
        }, {
            title: '昵称',
            name: 'NickName',
            sortable: true
        }, {
            title: '总兑换实物次数',
            name: 'itemCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '总消耗积分',
            name: 'TotalAmount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '处理日期',
            name: 'SolveDate',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '封号时间',
            name: 'NullityOverDate',
            sortable: true,
            formatter: transToTime2
        }],
        data: []
    }
}