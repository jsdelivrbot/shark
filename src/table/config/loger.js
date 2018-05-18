import {transToTime, bigNumberFormatter, resourceTypeFormatter, bodyBankTypeFormatter} from '@/libs/dataColumnFormatter'

export function logTable() {
    return {
        //导出按钮
        export: true,
        //搜索内容
        search: true,
        //生成索引
        index: true,
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
        columns: [
            {
                title: 'ID',
                name: 'RecordID',
                sortable: true
            }, {
                title: '操作时间',
                name: 'OperatingTime',
                sortable: true,
                formatter: transToTime
            }, {
                title: '操作人',
                sortable: true,
                name: 'OperatingAccounts'
            }, {
                title: '操作IP',
                name: 'OperatingIP',
                sortable: true
            }, {
                title: '操作状态',
                name: 'OperatingName',
                sortable: true
            }
        ],
        data: []
    }
}

export function resourceTable() {
    return {
        //生成索引
        index: true,
        //分页
        pagination: true,
        columns: [
            {
                title: '时间',
                name: 'CollectDate',
                sortable: true,
                formatter: transToTime
            }, {
                title: '玩家ID',
                name: 'UserID',
                sortable: true,
                template: {
                    'user_link': true
                }
            }, {
                title: '增减类型',
                name: 'Type',
                sortable: true,
                formatter: resourceTypeFormatter
            }, {
                title: '资源',
                name: 'ResourceType',
                sortable: true
            }, {
                title: '道具',
                name: 'ItemType',
                sortable: true
            }, {
                title: '备注',
                name: 'Remarks',
                sortable: true
            }, {
                title: '增减身上 / 银行',
                name: 'BodyBank',
                sortable: true,
                formatter: bodyBankTypeFormatter
            }, {
                title: '增减银行金币',
                name: 'BankAmount',
                sortable: true,
                formatter: bigNumberFormatter
            }, {
                title: '操作人',
                name: 'Operator',
                sortable: true
            }
        ],
        data: []
    }
}
