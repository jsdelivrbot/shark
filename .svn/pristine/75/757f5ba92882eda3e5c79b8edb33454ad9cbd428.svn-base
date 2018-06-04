//引入数据处理方法
import { bigNumberFormatter, transToTime, roomInfoFormatter } from '@/libs/dataColumnFormatter'

export function lookcardSingleTable() {
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
            title: '房间',
            name: 'ServerID',
            sortable: true,
            formatter: roomInfoFormatter
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
