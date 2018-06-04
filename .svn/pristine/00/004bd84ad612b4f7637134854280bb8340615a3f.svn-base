import {transToTime2, popupTypeFormatter, popupRateFormatter, popupDeviceTypeformatter, popupAccountTypeFormatter} from '@/libs/dataColumnFormatter'

export function popupTable() {
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
                title: '排序ID',
                name: 'SortID',
                width: '130px',
                sortable: true
            }, {
                title: '开始时间',
                name: 'Starttime',
                width: '130px',
                formatter: transToTime2,
                sortable: true
            }, {
                title: '结束时间',
                name: 'Endtime',
                width: '130px',
                formatter: transToTime2,
                sortable: true
            }, {
                title: '弹窗类型',
                name: 'PopupType',
                width: '130px',
                formatter: popupTypeFormatter,
                sortable: true
            }, {
                title: '弹窗频率',
                name: 'PopupRate',
                width: '130px',
                formatter: popupRateFormatter,
                sortable: true
            }, {
                title: '设备类型',
                name: 'DeviceType',
                width: '130px',
                formatter: popupDeviceTypeformatter,
                sortable: true
            }, {
                title: '帐号类型',
                name: 'AccountType',
                width: '160px',
                formatter: popupAccountTypeFormatter,
                sortable: true
            }, {
                title: '累计充值',
                name: 'Recharge',
                width: '130px',
                sortable: true
            }, {
                title: '玩家ID',
                name: 'PlayerID',
                width: '160px',
                sortable: true
            }, {
                title: '图片url',
                name: 'ImageUrl',
                width: '320px',
                sortable: true
            }, {
                title: '跳转页面ID',
                name: 'LocationUrl',
                width: '130px',
                sortable: true
            }, {
                title: 'Web链接',
                name: 'WebUrl',
                width: '320px',
                sortable: true
            }, {
                title: '内容',
                name: 'PopupContent',
                width: '320px',
                sortable: true
            }, {
                title: '注册开始时间',
                name: 'RegisterStartDate',
                width: '130px',
                formatter: transToTime2,
                sortable: true
            }, {
                title: '注册结束时间',
                name: 'RegisterEndDate',
                width: '130px',
                formatter: transToTime2,
                sortable: true
            }, {
                title: '操作人',
                name: 'InsertName',
                width: '130px',
                sortable: true
            }, {
                title: '操作',
                name: 're',
                width: '160px',
                fixed: 'right',
                template: {
                    btns: [
                        {
                            name: '编辑',
                            type: 'success',
                            funcName: 'edit'
                        }, {
                            name: '删除',
                            type: 'danger',
                            funcName: 'delete'
                        }
                    ]
                }
            }
        ],
        data: []
    }
}
