import { transToTime, bigNumberFormatter } from '@/libs/dataColumnFormatter'
export function buyItemTable() {
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
            title: '用户ID',
            name: 'UserID',
            sortable: true,
            template: { 'user_link': true }
        }, {
            title: '金币总价格',
            name: 'Gold',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '钻石总价格',
            name: 'UserMedal',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '总数量',
            name: 'PropertyCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '总花费金币',
            name: 'BuyGold',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '总花费钻石',
            name: 'BuyUserMedal',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '购买时间',
            name: ''
        }, {
            title: '会员折扣',
            name: ''
        }, {
            title: '道具名称',
            name: ''
        }, {
            title: 'IP地址',
            name: ''
        }],
        sub_columns: [{
            title: '购买时间',
            name: 'CollectDate',
            sortable: true,
            formatter: transToTime
        }, {
            title: '道具名称',
            name: 'PropertyName',
            sortable: true,
        }, {
            title: '用户ID',
            name: 'UserID',
            sortable: true,
            template: { 'user_link': true }
        }, {
            title: '金币单价',
            name: 'Gold',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '钻石单价',
            name: 'UserMedal',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '数量',
            name: 'PropertyCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '会员折扣',
            name: 'MemberDiscount',
            sortable: true,
        }, {
            title: '花费金币',
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