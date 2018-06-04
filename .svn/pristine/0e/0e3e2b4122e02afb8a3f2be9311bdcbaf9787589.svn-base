import { transToTime2, payStatusFormatter, payPlatformFormatter } from '@/libs/dataColumnFormatter'

export function payRecordTable() {
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
            title: '订单ID',
            name: 'OrderNum',
            sortable: true,
        }, {
            title: '订单状态',
            name: 'PayStatus',
            sortable: true,
            formatter: payStatusFormatter
        }, {
            title: '订单收入',
            name: 'OrderAmount',
            sortable: true,
        }, {
            title: '充值渠道',
            name: 'PayPlatform',
            sortable: true,
            formatter: payPlatformFormatter
        }, {
            title: '商品名称',
            name: 'ItemName',
            sortable: true,
        }, {
            title: '订单时间',
            name: 'PayDate',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '订单IP',
            name: 'PayIP',
            sortable: true,
        }, {
            title: '回调时间',
            name: 'returnDate',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '交易号',
            name: 'trade_no',
            sortable: true,
        }, {
            title: '用户ID',
            name: 'UserID',
            sortable: true,
            template: { 'user_link': true }
        }, {
            title: '昵称',
            name: 'UserName',
            sortable: true,
        }],
        data: []
    }
}
