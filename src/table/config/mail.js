//引入数据处理方法
import { transToTime, mailUserIDFormatter, mailRangeFormatter, mailTypeFormatter, mailIsGotFormatter, mailIsReadFormatter } from '@/libs/dataColumnFormatter'
export function mailTable() {
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
            prop: "",
        },
        //表头配置
        columns: [{
            title: '邮件ID',
            name: 'ID',
            sortable: true,
            width: '120px'
        }, {
            title: '用户ID',
            name: 'TargetUserID',
            sortable: true,
            width: '120px',
            formatter: mailUserIDFormatter
        }, {
            title: '发送人',
            name: 'send_user',
            sortable: true,
            width: '120px'
        }, {
            title: '发送时间',
            name: 'CreateTime',
            sortable: true,
            formatter: transToTime,
            width: '120px'
        }, {
            title: '发送范围',
            name: 'IsAll',
            sortable: true,
            formatter: mailRangeFormatter,
            width: '120px'
        }, {
            title: '邮件类型',
            name: 'MailType',
            sortable: true,
            formatter: mailTypeFormatter,
            width: '120px'
        }, {
            title: '是否已读',
            name: 'IsRead',
            sortable: true,
            formatter: mailIsReadFormatter,
            width: '120px'
        }, {
            title: '是否领取奖励',
            name: 'IsGot',
            sortable: true,
            formatter: mailIsGotFormatter,
            width: '140px'
        }, {
            title: '附件',
            name: 'Rewards',
            sortable: true,
            // formatter: rewardsFormatter,
            width: '330px',

        }, {
            title: '标题',
            name: 'Title',
            sortable: true,
            width: '360px'
        }, {
            title: '邮件内容',
            name: 'Content',
            sortable: true,
            width: '600px'
        }, {
            title: '过期时间',
            name: 'ValidDate',
            sortable: true,
            formatter: transToTime,
            width: '120px',
            fixed: "right",
        }],
        data: []
    }
}