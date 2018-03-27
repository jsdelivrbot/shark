import { accountStatuFormatter, roleNameFormatter, transToTime, rolePetmitFormatter } from '@/libs/dataColumnFormatter'
export function accountTable() {
    return {
        columns: [{
            title: '登录账号',
            name: 'Username',
            sortable: true,
        }, {
            title: '所属角色',
            name: 'RoleID',
            sortable: true,
            formatter: roleNameFormatter
        }, {
            title: '姓名',
            name: 'accountName',
            sortable: true,
        }, {
            title: '登录次数',
            name: 'LoginTimes',
            sortable: true,
        }, {
            title: '上次登录地址',
            name: 'PreLoginIP',
            sortable: true,
        }, {
            title: '上次登录时间',
            name: 'PreLogintime',
            sortable: true,
            formatter: transToTime
        }, {
            title: '最后登录地址',
            name: 'LastLoginIP',
            sortable: true,
        }, {
            title: '最后登录时间',
            name: 'LastLogintime',
            sortable: true,
            formatter: transToTime
        }, {
            title: '账号状态',
            name: 'Nullity',
            sortable: true,
            formatter: accountStatuFormatter
        }, {
            title: '操作',
            name: '',
            template: {
                btns: [{
                    name: '编辑',
                    funcName: 'edit'
                }, {
                    name: '删除',
                    funcName: 'delete'
                }]
            }
        }],
        data: []
    }
}

export function roleTable() {
    return {
        columns: [{
            title: '角色ID',
            name: 'RoleID',
            sortable: true,
            width: '100px'
        }, {
            title: '角色名(中文)',
            name: 'RoleName',
            sortable: true,
            width: '180px'
        }, {
            title: '角色描述',
            name: 'Description',
            sortable: true,
            width: '180px'
        }, {
            title: '角色权限',
            name: 'RolePermit',
            sortable: true,
            formatter: rolePetmitFormatter
        }, {
            title: '操作',
            name: "re",
            width: '180px',
            template: {
                btns: [{
                    name: '编辑',
                    type: 'primary',
                    funcName: 'edit'
                }, {
                    name: '删除',
                    type: 'danger',
                    funcName: 'delete'
                }]
            }
        }],
        data: []
    }
}

export function permitTable() {
    return {
        //分页
        pagination: false,
        columns: [{
            title: '权限ID',
            name: 'permit_id',
            sortable: true,
        }, {
            title: '权限中文名',
            name: 'permit_name',
            sortable: true,
        }, {
            title: '权限英文名',
            name: 'permit_en',
            sortable: true,
        }, {
            title: '权限描述',
            name: 'permit_desc',
            sortable: true,
        }, {
            title: '操作',
            name: 're',
            template: {
                btns: [{
                    name: '编辑',
                    type: 'primary',
                    funcName: 'edit'
                }, {
                    name: '删除',
                    type: 'danger',
                    funcName: 'delete'
                }]
            }
        }],
        data: []
    }
}