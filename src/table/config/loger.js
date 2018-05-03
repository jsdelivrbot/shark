import { transToTime } from '@/libs/dataColumnFormatter'

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
        columns: [{
            title: 'ID',
            name: 'RecordID',
            sortable: true,
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
            sortable: true,
        }, {
            title: '操作状态',
            name: 'OperatingName',
            sortable: true,
        }],
        data: []
    }
}
