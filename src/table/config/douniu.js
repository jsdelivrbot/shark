import {bigNumberFormatter, transToTime} from '@/libs/dataColumnFormatter'

export function douniuTable() {
    return {
        /* 分页 */
        pagination: true,
        columns: [{
            title: '时间',
            name: 'InsertTime',
            formatter: transToTime
        }, {
            title: '玩家ID',
            name: 'UserID',
            template: {'user_link': true},
        }, {
            title: '玩家盈亏',
            name: 'Score',
            formatter: bigNumberFormatter
        }, {
            title: '庄家盈亏',
            name: 'Waste',
            formatter: bigNumberFormatter
        }, {
            title: '真人数量',
            name: 'UserCount',
            formatter: bigNumberFormatter
        }, {
            title: 'AI数量',
            name: 'AndroidCount',
            formatter: bigNumberFormatter
        }],
        data: []
    }
}
