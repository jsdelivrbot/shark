import { transToTime, noticeChanjingFormatter, noticeShowPlaceFormatter, noticeGameIDFormatter, noticeServerIDFormatter } from '@/libs/dataColumnFormatter'
export function noticeTable() {
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
            prop: "",
        },
        //表头配置
        columns: [{
            title: 'ID',
            name: 'ID',
            sortable: true,
            width: '80px'
        }, {
            title: '创建时间',
            name: 'CreateDate',
            sortable: true,
            width: '120px',
            formatter: transToTime,
        }, {
            title: '推送人',
            name: 'CreateUserName',
            sortable: true,
            width: '120px'
        }, {
            title: '推送场合',
            name: 'MessageType',
            sortable: true,
            width: '120px',
            formatter: noticeShowPlaceFormatter
        }, {
            title: '游戏场景',
            name: 'GameKindID',
            sortable: true,
            width: '120px',
            formatter: noticeGameIDFormatter
        }, {
            title: '推送房间',
            name: 'GameServerID',
            sortable: true,
            width: '120px',
            formatter: noticeServerIDFormatter
        }, {
            title: '开始时间',
            name: 'StartTime',
            sortable: true,
            formatter: transToTime,
            width: '120px'
        }, {
            title: '结束时间',
            name: 'EndTime',
            sortable: true,
            formatter: transToTime,
            width: '120px'
        }, {
            title: '间隔时间(秒)',
            name: 'IntervalTime',
            sortable: true,
            width: '120px'
        }, {
            title: '消息内容',
            name: 'MessageString',
            sortable: true,
        }, {
            title: '前往场景',
            name: 'JumpID',
            sortable: true,
            width: '120px',
            formatter: noticeChanjingFormatter
        }],
        data: []
    }
}