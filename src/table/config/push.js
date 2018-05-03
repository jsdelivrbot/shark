//引入数据处理方法
import { transToTime, pushTypeFormatter, pushStatusFormatter, pushPlatformFormatter } from '@/libs/dataColumnFormatter'

export function jiguangPushTable() {
    return {
        //分页
        pagination: true,
        columns: [{
            title: '推送时间',
            name: 'PushTime',
            sortable: true,
            formatter: transToTime
        }, {
            title: '推送序号',
            name: 'SendNo',
            sortable: true
        }, {
            title: '推送消息ID',
            name: 'PushKey',
            sortable: true
        }, {
            title: '推送描述',
            name: 'PushDesc',
            sortable: true
        }, {
            title: '推送内容',
            name: 'PushContext',
            sortable: true
        }, {
            title: '推送类型',
            name: 'PushType',
            sortable: true,
            formatter: pushTypeFormatter
        }, {
            title: '推送状态',
            name: 'PushStatus',
            sortable: true,
            formatter: pushStatusFormatter
        }, {
            title: '推送平台',
            name: 'PushPlatform',
            sortable: true,
            formatter: pushPlatformFormatter
        }, {
            title: '推送人',
            name: 'PushPerson',
            sortable: true
        }],
        data: []
    }
}
