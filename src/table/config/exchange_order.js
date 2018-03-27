import { transToTime, transToTime2, orderStatusFormatter, bigNumberFormatter, shuzhibiaoFormatter } from '@/libs/dataColumnFormatter'

export function shuzhibiaoTable() {
    return {
        columns: [{
            title: 'ID',
            name: 'id',
            sortable: true,
            width: '80px'
        }, {
            title: '排列顺序',
            name: 'item_sort',
            sortable: true,
            width: '100px'
        }, {
            title: '道具名',
            name: 'item_name',
            sortable: true,
        }, {
            title: '道具ID',
            name: 'item_id',
            sortable: true,
        }, {
            title: '金币数量',
            name: 'num',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '道具类型',
            name: 'item_type',
            sortable: true,
            width: '120px',
            formatter: shuzhibiaoFormatter
        }, {
            title: '所需积分',
            name: 'item_points',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '个人兑换总限量',
            name: 'all_limit',
            sortable: true,
        }, {
            title: '全服兑换日限量',
            name: 'all_service_day_limit',
            sortable: true,
        }, {
            title: '是否公示',
            name: 'is_active',
            sortable: true,
        }, {
            title: '操作',
            name: 'caozuo',
            template: {
                btns: [{
                    name: '编 辑',
                    type: 'success',
                    funcName: 'edit'
                }, {
                    name: '删 除',
                    type: 'danger',
                    funcName: 'del',
                }]
            }
        }],
        data: []
    }
}

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
            formatter: transToTime,
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
            title: '处理备注',
            name: 'SolveNote',
            sortable: true,
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

export function xiangqingDialogTable() {
    return {
        columns: [{
            title: '订单号码',
            name: 'OrderNum'
        }, {
            title: '用户ID',
            name: 'UserID'
        }, {
            title: '商品名称',
            name: 'itemName'
        }, {
            title: '商品价格(积分)',
            name: 'AwardPrice'
        }, {
            title: '花费金额(积分)',
            name: 'TotalAmount'
        }, {
            title: '购买时间',
            name: 'BuyDate',
            formatter: transToTime2
        }, {
            title: '购买IP',
            name: 'BuyIP'
        }, {
            title: '处理时间',
            name: 'SolveDate',
            formatter: transToTime2
        }, {
            title: '收货人',
            name: 'Compellation'
        }, {
            title: '收货地址',
            name: 'Address'
        }],
        data: [],
    }
}

export function kamiXiangQingDialogTable() {
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
            title: '处理备注',
            name: 'SolveNote',
            sortable: true,
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