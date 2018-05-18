import { bigNumberFormatter } from '@/libs/dataColumnFormatter'

export function goldProductTable() {
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
            title: '日期',
            name: 'InsertTime',
            sortable: true
        }, {
            title: '金币产出（系统输给玩家）',
            name: 'Waste',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '金币消耗（玩家输给系统）',
            name: 'Consume',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '金币差值（正：亏；负：赚）',
            name: 'Dvalue',
            sortable: true,
            formatter: bigNumberFormatter
        }],
        data: []
    }
}

export function itemProductTable() {
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
            title: '日期',
            name: 'PushTime'
        }, {
            title: '话费',
            sub: [{
                title: '产出',
                name: ''
            }, {
                title: '消耗',
                name: ''
            }]
        }, {
            title: '实物',
            sub: [{
                title: '产出',
                name: ''
            }, {
                title: '消耗',
                name: ''
            }]
        }, {
            title: '喇叭',
            sub: [{
                title: '产出',
                name: ''
            }, {
                title: '消耗',
                name: ''
            }]
        }, {
            title: '改名卡',
            sub: [{
                title: '产出',
                name: ''
            }, {
                title: '消耗',
                name: ''
            }]
        }, {
            title: '踢人卡',
            sub: [{
                title: '产出',
                name: ''
            }, {
                title: '消耗',
                name: ''
            }]
        }],
        data: []
    }
}