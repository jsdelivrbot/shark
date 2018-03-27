import { cashStateFormatter, transToTime, zhichongOrderFormatter } from '@/libs/dataColumnFormatter'

//直充
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
            formatter: transToTime
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
        }],
        data: []
    }
}