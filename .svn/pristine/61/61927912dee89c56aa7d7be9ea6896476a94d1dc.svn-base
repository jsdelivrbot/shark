import {transToTime2, fristchargeStatusFormatter} from '@/libs/dataColumnFormatter'

export function payStatisticsTable() {
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
        //表头配置
        columns: [
            {
                title: '玩家ID',
                name: 'UserID',
                sortable: true,
                template: {
                    'user_link': true
                }
            }, {
                title: '玩家昵称',
                name: 'NickName',
                sortable: true
            }, {
                title: '最后充值时间',
                name: 'LastChargeDate',
                sortable: true,
                formatter: transToTime2
            }, {
                title: '充值总额',
                name: 'TotalAmount',
                sortable: true
            }, {
                title: '首充礼包领取时间',
                name: 'ReceiveDate',
                sortable: true,
                formatter: transToTime2
            }, {
                title: '首充礼包是否领取',
                name: 'Flag',
                sortable: true,
                formatter: fristchargeStatusFormatter
            }
        ],
        data: []
    }
}
