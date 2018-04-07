export function timeTable() {
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
            title: 'ID',
            name: '',
            sortable: true,
        }, {
            title: '日期',
            name: '',
            sortable: true,
        }, {
            title: '时间段',
            name: '',
            sortable: true,
        }, {
            title: '在线用户数',
            name: '',
            sortable: true,
        }, {
            title: '发送推送数',
            name: '',
            sortable: true,
        }, {
            title: '通过推送登录用户数',
            name: '',
            sortable: true,
        }, {
            title: '免费领取奖励用户数',
            name: '',
            sortable: true,
        }, {
            title: '补领用户数',
            name: '',
            sortable: true,
        }, {
            title: '总发放金币数',
            name: '',
            sortable: true,
        }],
        data: []
    }
}