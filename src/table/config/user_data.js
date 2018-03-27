import { transToTime, itemTypeFormatter, bigNumberFormatter, bankTranstFormatter, transtPlaceFormatter } from '@/libs/dataColumnFormatter'

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