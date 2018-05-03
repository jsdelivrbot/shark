import { transToTime2, orderStatusFormatter } from '@/libs/dataColumnFormatter'

export function exchangeOrderTable() {
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
            title: '订单号码',
            name: 'OrderNum',
            sortable: true,
            width: '200px;'
        }, {
            title: '用户ID',
            name: 'UserID',
            sortable: true,
            width: '120px',
            template: { 'user_link': true }
        }, {
            title: '商品名称',
            name: 'itemName',
            sortable: true,
            width: '160px',
        }, {
            title: '商品价格(积分)',
            name: 'AwardPrice',
            sortable: true,
            width: '160px',
        }, {
            title: '购买数量',
            name: 'AwardCount',
            sortable: true,
            width: '120px',
        }, {
            title: '花费金额(积分)',
            name: 'TotalAmount',
            sortable: true,
            width: '160px',
        }, {
            title: '购买时间',
            name: 'BuyDate',
            sortable: true,
            formatter: transToTime2,
            width: '120px',
        }, {
            title: '购买地址',
            name: 'BuyIP',
            sortable: true,
            width: '120px',
        }, {
            title: '处理时间',
            name: 'SolveDate',
            sortable: true,
            formatter: transToTime2,
            width: '120px',
        }, {
            title: '收货人',
            name: 'Compellation',
            sortable: true,
            width: '130px',
        }, {
            title: '电话号码',
            name: 'MobilePhone',
            sortable: true,
            width: '130px',
        }, {
            title: '收货地址',
            name: 'Address',
            sortable: true,
            width: '420px',
        }, {
            title: '单号',
            name: 'KuaiDiNumber',
            sortable: true,
            width: '200px',
        }, {
            title: '快递公司',
            name: 'KuaiDiName',
            sortable: true,
            width: '200px'
        }, {
            title: '操作',
            name: '',
            fixed: 'right',
            width: '160px',
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
                    name: '充 值',
                    type: 'primary',
                    funcName: 'handle',
                    if: true,
                }, {
                    name: '单 号',
                    type: 'info',
                    funcName: 'danhao',
                    if: true,
                }, {
                    name: '编 辑',
                    type: 'danger',
                    funcName: 'edit',
                    if: true
                }]
            }
        }],
        data: []
    }
}
