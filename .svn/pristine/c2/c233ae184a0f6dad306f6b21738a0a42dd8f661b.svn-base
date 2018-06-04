//引入数据处理方法
import { feedbackProblemTypeFormatter, feedbackGameTypeFormatter, feedbackReverUserFormatter, feedbackShowStatusFormatter, feedbackHandleStatusFormatter } from '@/libs/dataColumnFormatter'

export function feedbackTable() {
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
            title: '反馈ID',
            name: 'FeedbackID',
            sortable: true,
            width: '120px'
        }, {
            title: '处理状态',
            name: 'IsProcessed',
            sortable: true,
            width: '120px',
            formatter: feedbackHandleStatusFormatter
        }, {
            title: '提交时间',
            name: 'FeedbackDate',
            sortable: true,
            width: '120px'
        }, {
            title: '用户帐号',
            name: '',
            sortable: true,
            width: '120px'
        }, {
            title: '手机号',
            name: 'MobileNo',
            sortable: true,
            width: '130px'
        }, {
            title: '反馈IP',
            name: 'ClientIP',
            sortable: true,
            width: '130px'
        }, {
            title: '反馈内容',
            name: 'FeedbackContent',
            sortable: true,
            width: '360px'
        }, {
            title: '问题类型',
            name: 'QuestionType',
            sortable: true,
            width: '120px',
            formatter: feedbackProblemTypeFormatter
        }, {
            title: '游戏类型',
            name: 'GameType',
            sortable: true,
            width: '120px',
            formatter: feedbackGameTypeFormatter
        }, {
            title: '回复时间',
            name: 'RevertDate',
            sortable: true,
            width: '120px'
        }, {
            title: '回复人',
            name: 'RevertUserID',
            sortable: true,
            width: '120px',
            formatter: feedbackReverUserFormatter
        }, {
            title: '回复内容',
            name: 'RevertContent',
            sortable: true,
            width: '360px'
        }, {
            title: '显示状态',
            name: 'Nullity',
            sortable: true,
            width: '120px',
            formatter: feedbackShowStatusFormatter
        }, {
            title: '操作',
            name: 're',
            width: '220px',
            fixed: "right",
            template: {
                btns: [{
                    name: '查看详情',
                    type: 'success',
                    funcName: 'detail'
                }, {
                    name: '回复',
                    type: 'primary',
                    funcName: 'handle',
                    if: true,
                }, {
                    name: '冻结',
                    type: 'danger',
                    funcName: 'frozen',
                    if: true,
                }, {
                    name: '解冻',
                    type: 'warning',
                    funcName: 'thaw',
                    if: true,
                }]
            }
        }],
        data: []
    }
}