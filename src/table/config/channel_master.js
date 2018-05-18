export function channleMasterTable() {
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
        pagination: false,
        //是否为服务器分页
        serverPagination: false,
        //表头配置
        pagination: false,
        columns: [{
            title: '日期',
            name: 'PushTime'
        }, {
            title: '渠道商ID',
            name: 'ChannleMasterID'
        }, {
            title: '渠道商名称',
            name: 'ChannleMasterName'
        }, {
            title: '后缀',
            name: 'Suffix'
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