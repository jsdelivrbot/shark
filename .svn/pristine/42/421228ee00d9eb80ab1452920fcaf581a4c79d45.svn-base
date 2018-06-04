import { transToTime2, NullityFormatter } from '@/libs/dataColumnFormatter'

export function intAccountTable() {
    return {
        columns: [{
            title: '用户ID',
            name: 'UserID',
            sortable: true,
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
            title: '状态',
            name: 'Nullity',
            sortable: true,
            formatter: NullityFormatter
        }, {
            title: '封号时间',
            name: 'NullityOverDate',
            sortable: true,
            formatter: transToTime2
        }],
        data: []
    }
}
