import { transToTime2, orderStatusFormatter, zhichongOrderFormatter } from '@/libs/dataColumnFormatter'

export function kamiQueryTable() {
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
            title: '订单状态',
            name: 'OrderStatus',
            sortable: true,
            fixed: 'left',
            width: '120px',
            formatter: orderStatusFormatter
        }, {
            title: '订单号',
            name: 'OrderNum',
            sortable: true,
            width: '200px;'
        }, {
            title: '用户ID',
            name: 'UserID',
            sortable: true,
            width: '120px',
        }, {
            title: '卡号',
            name: 'cardno',
            sortable: true,
            width: '160px',
        }, {
            title: '卡密',
            name: 'cardpwd',
            sortable: true,
            width: '160px',
        }, {
            title: '过期时间',
            name: 'expiredate',
            sortable: true,
            formatter: transToTime2,
            width: '120px',
        }, {
            title: '奖品ID',
            name: 'AwardID',
            sortable: true,
            width: '120px',
        }, {
            title: '奖品价格',
            name: 'AwardPrice',
            sortable: true,
            width: '120px',
        }, {
            title: '购买数量',
            name: 'AwardCount',
            sortable: true,
            width: '120px',
        }, {
            title: '花费金额',
            name: 'TotalAmount',
            sortable: true,
            width: '120px',
        }, {
            title: '购买IP',
            name: 'BuyIP',
            sortable: true,
            width: '120px',
        }, {
            title: '购买日期',
            name: 'BuyDate',
            sortable: true,
            formatter: transToTime2,
            width: '120px',
        }, {
            title: '处理日期',
            name: 'SolveDate',
            sortable: true,
            formatter: transToTime2,
            width: '120px',
        }, {
            title: '处理人',
            name: 'SolveName',
            sortable: true,
            width: '120px',
        }, {
            title: '操作',
            name: '',
            fixed: 'right',
            width: '170px',
            template: {
                btns: [{
                    name: '详 情',
                    type: 'success',
                    funcName: 'detail'
                }, {
                    name: '审 核',
                    type: 'warning',
                    funcName: 'shenhe',
                    if: true,
                }, {
                    name: '卡 密',
                    type: 'primary',
                    funcName: 'kami',
                    if: true
                }]
            }
        }],
        data: []
    }
}

export function KaMiShenHeDialogTable() {
    return {
        columns: [{
            title: '订单号',
            name: 'OrderNum',
            sortable: true,
            width: '200px;'
        }, {
            title: '用户ID',
            name: 'UserID',
            sortable: true,
        }, {
            title: '奖品ID',
            name: 'AwardID',
            sortable: true,
        }, {
            title: '奖品价格',
            name: 'AwardPrice',
            sortable: true,
        }, {
            title: '购买数量',
            name: 'AwardCount',
            sortable: true,
        }, {
            title: '花费金额',
            name: 'TotalAmount',
            sortable: true,
        }, {
            title: '购买IP',
            name: 'BuyIP',
            sortable: true,
        }, {
            title: '购买日期',
            name: 'BuyDate',
            sortable: true,
            formatter: transToTime2,
        }],
        data: []
    }
}

export function directChargeTable() {
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
            title: 'ID',
            name: 'ID',
            sortable: true,
        }, {
            title: '充值状态',
            name: 'Result',
            sortable: true,
            formatter: zhichongOrderFormatter
        }, {
            title: '订单号码',
            name: 'OrderID',
            sortable: true,
        }, {
            title: '手机号码',
            name: 'Mobile',
            sortable: true,
        }, {
            title: 'MD5Key',
            name: 'Key',
            sortable: true,
        }, {
            title: '充值金额',
            name: 'Amount',
            sortable: true,
        }, {
            title: '回调时间',
            name: 'CollectDate',
            sortable: true,
            formatter: transToTime2
        }],
        data: []
    }
}

export function orderTable() {
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
            title: 'ID',
            name: 'ID',
            sortable: true,
        }, {
            title: '订单号',
            name: 'OrderID',
            sortable: true,
            width: '200px;'
        }, {
            title: '结果',
            name: 'Status',
            sortable: true,
        }, {
            title: '手机号码',
            name: 'Mobile',
            sortable: true,
        }, {
            title: 'MD5Key',
            name: 'Key',
            sortable: true,
        }, {
            title: '金额',
            name: 'Amount',
            sortable: true,
        }, {
            title: '回调时间',
            name: 'CollectDate',
            sortable: true,
            formatter: transToTime2
        }],
        data: []
    }
}
