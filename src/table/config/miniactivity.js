import {transToTime2, fristchargeStatusFormatter} from '@/libs/dataColumnFormatter'

export function reward7DayTable() {
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
        serverPagination: true,
        //默认排序
        defaultSort: {
            prop: ''
        },
        //表头配置
        columns: [
            {
                title: '用户ID',
                name: 'uid',
                sortable: true,
                template: {
                    'user_link': true
                }
            }, {
                title: '昵称',
                name: 'NickName',
                sortable: true
            }, {
                title: '剩余抽奖次数',
                name: 'left_random_time',
                sortable: true
            }, {
                title: '第一天数字',
                name: 'n1',
                sortable: true
            }, {
                title: '第二天数字',
                name: 'n2',
                sortable: true
            }, {
                title: '第三天数字',
                name: 'n3',
                sortable: true
            }, {
                title: '第四天数字',
                name: 'n4',
                sortable: true
            }, {
                title: '第五天数字',
                name: 'n5',
                sortable: true
            }, {
                title: '第六天数字',
                name: 'n6',
                sortable: true
            }, {
                title: '第七天数字',
                name: 'n7',
                sortable: true
            }
        ],
        data: []
    }
}

export function fiveStepTable() {
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
        serverPagination: true,
        //默认排序
        defaultSort: {
            prop: ''
        },
        //表头配置
        columns: [
            {
                title: '用户ID',
                name: 'uid',
                sortable: true,
                template: {
                    'user_link': true
                }
            }, {
                title: '昵称',
                name: 'NickName',
                sortable: true
            }, {
                title: '第一步',
                name: 'p1',
                sortable: true
            }, {
                title: '第二步',
                name: 'p2',
                sortable: true
            }, {
                title: '第三步',
                name: 'p3',
                sortable: true
            }, {
                title: '第四步',
                name: 'p4',
                sortable: true
            }, {
                title: '第五步',
                name: 'p5',
                sortable: true
            }
        ],
        data: []
    }
}

export function moonCardTable() {
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
        columns: [
            {
                title: '用户ID',
                name: 'uid',
                sortable: true,
                template: {
                    'user_link': true
                }
            }, {
                title: '昵称',
                name: 'NickName',
                sortable: true
            }, {
                title: '到期时间',
                name: 'expired_date',
                sortable: true
            }, {
                title: '购买时间',
                name: 'last_get_date',
                sortable: true
            }
        ],
        data: []
    }
}

export function timeTable() {
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
        columns: [
            {
                title: 'ID',
                name: '',
                sortable: true
            }, {
                title: '日期',
                name: '',
                sortable: true
            }, {
                title: '时间段',
                name: '',
                sortable: true
            }, {
                title: '在线用户数',
                name: '',
                sortable: true
            }, {
                title: '发送推送数',
                name: '',
                sortable: true
            }, {
                title: '通过推送登录用户数',
                name: '',
                sortable: true
            }, {
                title: '免费领取奖励用户数',
                name: '',
                sortable: true
            }, {
                title: '补领用户数',
                name: '',
                sortable: true
            }, {
                title: '总发放金币数',
                name: '',
                sortable: true
            }
        ],
        data: []
    }
}

export function firstchargeTable() {
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
        columns: [
            {
                title: '玩家ID',
                name: 'UserID',
                sortable: true
            }, {
                title: '昵称',
                name: 'NickName',
                sortable: true
            }, {
                title: '最后充值时间',
                name: 'LastChargeDate',
                sortable: true,
                formatter: transToTime2
            }, {
                title: '充值总额',
                name: 'TotalAmount',
                sortable: true
            }, {
                title: '礼包领取时间',
                name: 'ReceiveDate',
                sortable: true,
                formatter: transToTime2
            }, {
                title: '领取状态',
                name: 'Flag',
                sortable: true,
                formatter: fristchargeStatusFormatter
            }
        ],
        data: []
    }
}
