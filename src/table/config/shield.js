import {
    transToTime2,
    gameModuleFormatter,
    popupAccountTypeFormatter,
    popupDeviceTypeformatter,
    vipLevelFormatter,
    shieldTypeFormatter
} from '@/libs/dataColumnFormatter'

export function shieldTable() {
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
        pagination: true,
        //是否为服务器分页
        serverPagination: false,
        //默认排序
        defaultSort: {
            // prop: 'TotalGold',
            // order: 'descending'
        },
        //表头配置
        columns: [{
            title: '游戏模块',
            name: 'GameModule',
            sortable: true,
            fixed: 'left',
            width: '140px',
            formatter: gameModuleFormatter
        }, {
            title: '设备类型',
            name: 'DeviceType',
            sortable: true,
            width: '140px',
            formatter: popupDeviceTypeformatter
        }, {
            title: '帐号类型',
            name: 'AccountType',
            sortable: true,
            width: '140px',
            formatter: popupAccountTypeFormatter
        }, {
            title: '渠道',
            name: 'ChannelID',
            sortable: true,
            width: '140px',
        }, {
            title: '充值区间',
            name: 'RechargeInterval',
            sortable: true,
            width: '140px',
        }, {
            title: 'VIP等级',
            name: 'VipLevel',
            sortable: true,
            width: '140px',
            formatter: vipLevelFormatter
        }, {
            title: '玩家等级',
            name: 'PlayerLevelInterval',
            sortable: true,
            width: '140px',
        }, {
            title: '玩家ID',
            name: 'PlayerIDInterval',
            sortable: true,
            width: '140px',
        }, {
            title: '注册开始时间',
            name: 'StartRegisterDate',
            sortable: true,
            width: '160px',
            formatter: transToTime2
        }, {
            title: '注册结束时间',
            name: 'EndRegisterDate',
            sortable: true,
            width: '160px',
            formatter: transToTime2
        }, {
            title: '屏蔽开始时间',
            name: 'StartShieldDate',
            sortable: true,
            width: '160px',
            formatter: transToTime2
        }, {
            title: '屏蔽结束时间',
            name: 'EndShieldDate',
            sortable: true,
            width: '160px',
            formatter: transToTime2
        }, {
            title: '累计时长',
            name: 'CumnlativeLen',
            sortable: true,
            width: '140px',
        }, {
            title: '屏蔽形式',
            name: 'ShieldType',
            sortable: true,
            width: '140px',
            formatter: shieldTypeFormatter
        }, {
            title: '创建人',
            name: 'Pusher',
            sortable: true,
            width: '140px',
        }, {
            title: '创建时间',
            name: 'PushTime',
            sortable: true,
            width: '140px',
            formatter: transToTime2
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
