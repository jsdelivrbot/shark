export function signTable() {
    return {
        //表头配置
        columns: [{
            title: '奖励天数',
            name: 'DayID',
            sortable: true,
        }, {
            title: '奖励金额',
            name: 'RewardGold',
            sortable: true,
        }, {
            title: '操作',
            name: '',
            template: {
                btns: [{
                    name: '编辑',
                    funcName: 'editor'
                }]
            }
        }],
        data: []
    }
}

export function gradeTable() {
    return {
        //导出按钮
        export: false,
        //搜索内容
        search: false,
        //生成索引
        index: true,
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
            title: '等级',
            name: 'LevelID',
            sortable: true,
        }, {
            title: '经验值',
            name: 'Experience',
            sortable: true,
        }, {
            title: '奖励游戏币',
            name: 'RewardGold',
            sortable: true,
        }, {
            title: '奖励钻石',
            name: 'RewardMedal',
            sortable: true,
        }, {
            title: '备注',
            name: 'LevelRemark',
            sortable: true,
        }, {
            title: '操作',
            name: '',
            template: {
                btns: [{
                    name: '编辑',
                    funcName: 'editor'
                }]
            }
        }],
        data: []
    }
}