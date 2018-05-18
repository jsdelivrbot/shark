import { bigNumberFormatter } from '@/libs/dataColumnFormatter'

export function robotTable() {
    return {
        //导出按钮
        export: false,
        //搜索内容
        search: false,
        //生成索引
        index: false,
        //行选择框
        select: false,
        //分页
        pagination: false,
        //是否为服务器分页
        serverPagination: false,
        //默认排序
        defaultSort: {
            // prop: 'TotalGold',
            // order: 'descending'
        },
        //表头配置
        columns: [{
            title: '房间',
            name: 'ServerID',
            fixed: 'left',
            width: '160px'
        }, {
            title: '服务类型',
            name: 'ServiceMode',
            width: '120px'
        }, {
            title: '数量',
            name: 'AndroidCount',
            width: '120px'
        }, {
            title: '进入时间',
            name: 'EnterTime',
            width: '120px'
        }, {
            title: '离开时间',
            name: 'LeaveTime',
            width: '120px'
        }, {
            title: '进入最小隔间(秒)',
            name: 'EnterMinInterval',
            width: '160px'
        }, {
            title: '进入最大间隔(秒)',
            name: 'EnterMaxInterval',
            width: '160px'
        }, {
            title: '离开最小间隔(秒)',
            name: 'LeaveMinInterval',
            width: '160px'
        }, {
            title: '离开最大间隔(秒)',
            name: 'LeaveMaxInterval',
            width: '160px'
        }, {
            title: '携带最小金币',
            name: 'TakeMinScore',
            width: '160px',
            formatter: bigNumberFormatter,
        }, {
            title: '携带最大金币',
            name: 'TakeMaxScore',
            width: '160px',
            formatter: bigNumberFormatter
        }, {
            title: '最小换桌局数',
            name: 'SwitchMinInnings',
            width: '160px'
        }, {
            title: '最大换桌局数',
            name: 'SwitchMaxInnings',
            width: '160px'
        }, {
            title: '普通会员',
            name: 'AndroidCountMember0',
            width: '120px'
        }, {
            title: 'VIP1个数',
            name: 'AndroidCountMember1',
            width: '120px'
        }, {
            title: 'VIP2个数',
            name: 'AndroidCountMember2',
            width: '120px'
        }, {
            title: 'VIP3个数',
            name: 'AndroidCountMember3',
            width: '120px'
        }, {
            title: 'VIP4个数',
            name: 'AndroidCountMember4',
            width: '120px'
        }, {
            title: 'VIP5个数',
            name: 'AndroidCountMember5',
            width: '120px'
        }, {
            title: '操作',
            name: 're',
            fixed: 'right',
            width: '160px',
            template: {
                btns: [{
                    name: '编辑',
                    type: 'success',
                    funcName: 'edit'
                }, {
                    name: '删除',
                    type: 'danger',
                    funcName: 'del'
                }]
            }
        }],
        data: []
    }
}