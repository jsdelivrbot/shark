import { transToTime } from '@/libs/dataColumnFormatter'
export function taskTable() {
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
            prop: ''
        },
        //表头配置
        columns: [{
            title: '活动ID',
            name: 'ActivityID',
            sortable: true,
        }, {
            title: '积分任务类型ID',
            name: 'PointTaskTypeID',
            sortable: true,
        }, {
            title: '目标数量',
            name: 'TargetAmount',
            sortable: true,
        }, {
            title: '奖励积分数量',
            name: 'PointAmount',
            sortable: true,
        }, {
            title: '每日限制次数',
            name: 'DayLimitCount',
            sortable: true,
        }, {
            title: '每周限制次数',
            name: 'WeekLimitCount',
            sortable: true,
        }, {
            title: '总限制次数',
            name: 'TotalLimitCount',
            sortable: true,
        }, {
            title: '操作',
            name: 're',
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

export function activityTable() {
    return {
        //分页
        pagination: true,
        columns: [{
            title: '活动ID',
            name: 'ActivityID',
            sortable: true,
        }, {
            title: '积分ID',
            name: 'PointID',
            sortable: true,
        }, {
            title: '开始时间',
            name: 'StartTime',
            sortable: true,
            formatter: transToTime
        }, {
            title: '结束时间',
            name: 'EndTime',
            sortable: true,
            formatter: transToTime
        }, {
            title: '描述',
            name: 'Describe',
            sortable: true,
        }],
        data: []
    }
}