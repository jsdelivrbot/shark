import { transToTime } from "@/libs/dataColumnFormatter";
export function ldyTable() {
    return {
        columns: [{
            title: '模板ID',
            name: "tp_id",
            sortable: true,
        }, {
            title: '模板名称',
            name: "tp_name",
            sortable: true,
        }, {
            title: '模板链接地址',
            name: "tp_url",
            sortable: true,
        }, {
            title: '生成日期',
            name: 'date',
            sortable: true,
            formatter: transToTime
        }, {
            title: '操作',
            name: "re",
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

export function channelTable() {
    return {
        columns: [{
            title: '渠道ID',
            name: "channel_id",
            sortable: true,
            width: '130px',
        }, {
            title: '渠道名称',
            name: "channel_name",
            sortable: true,
            width: '130px',
        }, {
            title: '模板ID',
            name: "tp_id",
            sortable: true,
            width: '160px',
        }, {
            title: '落地页链接',
            name: "ldy_url",
            sortable: true,
        }, {
            title: '直接下载页',
            name: "ldy_download_url",
            sortable: true,
        }, {
            title: '操作',
            name: "re",
            width: '180px',
            template: {
                btns: [
                    { name: '编辑', type: 'primary', funcName: 'edit' }
                ]
            }
        }],
        data: []
    }
}