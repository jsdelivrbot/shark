import { transToTime2 } from '@/libs/dataColumnFormatter'

export function freezeTable() {
    return {
        //行选择框
        select: true,
        //分页
        pagination: true,
        columns: [{
            title: '手机号码',
            name: 'InsureMobile',
            sortable: true,
        }, {
            title: '用户ID',
            name: 'UserID',
            sortable: true,
            template: { 'user_link': true }
        }, {
            title: '昵称',
            name: 'NickName',
            sortable: true,
        }, {
            title: '创建时间',
            name: 'RegisterDate',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '创建IP',
            name: 'RegisterIP',
            sortable: true,
        }, {
            title: '封号时间',
            name: 'NullityOverDate',
            sortable: true,
            formatter: transToTime2
        }, {
            title: '操作人',
            name: 'Operator',
            sortable: true,
        }, {
            title: '拉黑理由',
            name: 'Reason',
            sortable: true,
        }, {
            title: '操作',
            name: 're',
            template: {
                btns: [{
                    name: '移除黑名单',
                    type: 'danger',
                    funcName: 'remove'
                }]
            }
        }],
        data: []
    }
}
