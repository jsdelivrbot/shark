//引入数据处理方法
import {bigNumberFormatter, transToTime, roomInfoFormatter} from '@/libs/dataColumnFormatter'

export function pplSingleTable() {
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
            title: '开始时间',
            name: 'StartTime',
            sortable: true,
            formatter: transToTime
        }, {
            title: '结束时间',
            name: 'ConcludeTime',
            sortable: true,
            formatter: transToTime
        }, {
            title: '局数',
            name: 'DrawID',
            sortable: true,
        }, {
            title: '房间',
            name: 'ServerID',
            sortable: true,
            formatter: roomInfoFormatter
        }, {
            title: '桌子号码',
            name: 'TableID',
            sortable: true,
        }, {
            title: '真人在线',
            name: 'UserCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '机器人在线',
            name: 'AndroidCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '真人盈亏',
            name: 'Waste',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '税收',
            name: 'Revenue',
            sortable: true,
            formatter: bigNumberFormatter
        }],
        data: []
    }
}

export function pplTable() {
    return {
        //分页
        pagination: true,
        columns: [{
            title: '时间',
            name: 'InsertTime',
            formatter: transToTime
        }, {
            title: '玩家ID',
            name: 'UserID',
            template: {'user_link': true},
        }, {
            title: '玩家盈亏',
            name: 'Score',
            formatter: bigNumberFormatter
        }, {
            title: '庄家盈亏',
            name: 'Waste',
            formatter: bigNumberFormatter
        }, {
            title: '真人数量',
            name: 'UserCount',
            formatter: bigNumberFormatter
        }, {
            title: 'AI数量',
            name: 'AndroidCount',
            formatter: bigNumberFormatter
        }, {
            title: '税收',
            name: 'Revenue',
            formatter: bigNumberFormatter
        }],
        data: []
    }
}
