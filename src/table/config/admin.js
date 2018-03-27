export function roleTable() {
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
            prop: ''
        },
        //表头配置
        columns: [{
            title: '角色ID',
            name: 'role_id',
            sortable: true,
        }, {
            title: '角色名(中文)',
            name: ''
        }, {
            title: '角色描述',
            name: ''
        }, {
            title: '角色权限',
            name: ''
        }, {
            title: '操作',
            name: '',
            template: {
                btns: [{
                    name: '删除',
                    funcName: 'delete'
                }]
            }
        }],
        data: []
    }
}

export function userTable() {
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
            prop: ''
        },
        //表头配置
        columns: [{
            title: '帐号',
            name: 'role_id'
        }, {
            title: '角色',
            name: ''
        }, {
            title: '角色描述',
            name: ''
        }, {
            title: '状态',
            name: ''
        }, {
            title: '登录次数',
            name: ''
        }, {
            title: '上次登录地址',
            name: ''
        }, {
            title: '上次登录时间',
            name: ''
        }, {
            title: '最后登录地址',
            name: ''
        }, {
            title: '最后登录时间',
            name: ''
        }, {
            title: '操作',
            name: '',
            template: {
                btns: [{
                    name: '冻结',
                    funcName: 'dongjie'
                }, {
                    name: '解冻',
                    funcName: 'jiedong'
                }, {
                    name: '删除',
                    funcName: 'delete'
                }]
            }
        }],
        data: [{
            role_id: 13412
        }]
    }
}