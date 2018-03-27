import { transToTime, bigNumberFormatter } from '@/libs/dataColumnFormatter'
export function channelAnalyzeTable() {
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
        //表头配置
        columns: [{
            title: '渠道',
            name: 'channel_id',
            sortable: true
        }, {
            title: '日期',
            name: 'viewDate',
            formatter: transToTime,
            sortable: true
        }, {
            title: '落地页',
            sub: [{
                title: '展示总数',
                name: 'viewCount',
                sortable: true,
                formatter: bigNumberFormatter
            }, {
                title: '下载总数',
                name: 'downloadCount',
                sortable: true,
                formatter: bigNumberFormatter
            }]
        }, {
            title: '版本号',
            name: 'version',
            sortable: true
        }],
        sub_columns: [{
            title: '日期',
            name: 'viewDate',
            formatter: transToTime,
            sortable: true
        }, {
            title: '落地页',
            sub: [{
                title: '展示',
                name: 'viewCount',
                sortable: true,
                formatter: bigNumberFormatter
            }, {
                title: '下载',
                name: 'downloadCount',
                sortable: true,
                formatter: bigNumberFormatter
            }]
        }, {
            title: '版本号',
            name: 'version',
            sortable: true
        }],
        data: []
    }
}