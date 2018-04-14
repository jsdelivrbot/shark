import { transToTime, itemTypeFormatter, bigNumberFormatter, bankTranstFormatter, transtPlaceFormatter } from '@/libs/dataColumnFormatter'
import { transToTime2, payStatusFormatter, payPlatformFormatter, orderStatusFormatter } from '@/libs/dataColumnFormatter'
export function bagInfoTable() {
    return {
        //分页
        pagination: true,
        columns: [{
            title: '道具名',
            name: 'GoodsID',
            sortable: true,
            formatter: itemTypeFormatter
        }, {
            title: '数量',
            sortable: true,
            name: 'GoodsCount'
        }, {
            title: '领取时间',
            name: 'PushTime',
            sortable: true,
            formatter: transToTime
        }],
        data: []
    }
}

export function buyItemTable() {
    return {
        //分页
        pagination: true,
        columns: [{
            title: '购买时间',
            name: 'CollectDate',
            sortable: true,
            formatter: transToTime
        }, {
            title: '道具名',
            sortable: true,
            name: 'PropertyName'
        }, {
            title: '数量',
            sortable: true,
            name: 'PropertyCount'
        }, {
            title: '操作',
            name: 're',
            template: {
                btns: [{
                    name: '详情',
                    funcName: 'xiangqing'
                }]
            }
        }],
        data: []
    }
}

export function buyItemDialogTable() {
    return {
        //表头配置
        columns: [{
            title: '购买时间',
            name: 'CollectDate',
            sortable: true,
            formatter: transToTime
        }, {
            title: '道具名称',
            sortable: true,
            name: 'PropertyName'
        }, {
            title: '购买帐号',
            name: 'UserID',
            sortable: true,
        }, {
            title: '游戏币价格',
            name: 'Gold',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '钻石价格',
            name: 'UserMedal',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '购买数量',
            name: 'PropertyCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '会员折扣',
            name: 'MemberDiscount',
            sortable: true,
        }, {
            title: '花费游戏币',
            name: 'BuyGold',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '花费钻石',
            name: 'BuyUserMedal',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: 'IP地址',
            name: 'ClinetIP',
            sortable: true,
        }],
        data: []
    }
}

export function bankTable() {
    return {
        //分页
        pagination: true,
        //表头配置
        columns: [{
            title: '汇款时间',
            name: 'CollectDate',
            sortable: true,
            formatter: transToTime
        }, {
            title: '交易类型',
            name: 'TradeType',
            sortable: true,
            formatter: bankTranstFormatter
        }, {
            title: '汇款人ID',
            name: 'SourceUserID',
            sortable: true,
        }, {
            title: '汇款人身上',
            name: 'SourceGold',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '汇款人银行',
            name: 'SourceBank',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '汇款金币',
            name: 'SwapScore',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '手续费',
            name: 'Revenue',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '汇款场所',
            name: 'IsGamePlaza',
            sortable: true,
            formatter: transtPlaceFormatter
        }, {
            title: '汇款IP',
            name: 'ClientIP',
            sortable: true,
        }],
        data: []
    }
}

export function rechargeTable() {
    return {
        //分页
        pagination: true,
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

export function exchangeTable() {
    return {
        pagination: true,
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
        }],
        data: []
    }
}