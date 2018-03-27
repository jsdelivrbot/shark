import { bigNumberFormatter, transToTime } from '@/libs/dataColumnFormatter'
export function gameGoldTable() {
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
            title: '注册时间',
            name: 'RegisterDate',
            sortable: true,
            formatter: transToTime
        }, {
            title: '玩家ID',
            name: 'UserID',
            sortable: true,
            template: { 'user_link': true }
        }, {
            title: '身上金币',
            name: 'Score',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '保险柜金币',
            name: 'InsureScore',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '税收',
            name: 'Revenue',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '赢局',
            name: 'WinCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '输局',
            name: 'LostCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '和局',
            name: 'DrawCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '逃局',
            name: 'FleeCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '登录次数',
            name: 'AllLogonTimes',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '游戏时长（秒）',
            name: 'PlayTimeCount',
            sortable: true,
            formatter: bigNumberFormatter
        }, {
            title: '在线时长（秒）',
            name: 'OnLineTimeCount',
            sortable: true,
            formatter: bigNumberFormatter
        }],
        data: []
    }
}