import {bigNumberFormatter} from '@/libs/dataColumnFormatter'

export function numericTable() {
    return {
        //分页
        pagination: true,
        columns: [
            {
                title: '物品名',
                name: 'item_name',
                width: '160px',
                fixed: 'left'
            }, {
                title: '物品ID',
                name: 'item_id',
                width: '130px'
            }, {
                title: '排序',
                name: 'item_sort',
                width: '130px'
            }, {
                title: '物品类型',
                name: 'item_type',
                width: '130px'
            }, {
                title: '物品积分',
                name: 'item_points',
                width: '130px',
                formatter: bigNumberFormatter
            }, {
                title: '物品数量',
                name: 'num',
                width: '130px',
                formatter: bigNumberFormatter
            }, {
                title: '日期',
                name: 'date',
                width: '180px'
            }, {
                title: '热门物品排序',
                name: 'hot_item_sort',
                width: '150px'
            }, {
                title: '物品icon',
                name: 'item_icon',
                width: '160px'
            }, {
                title: '热门icon',
                name: 'hot_icon',
                width: '130px'
            }, {
                title: '个人兑换日限量',
                name: 'day_limit',
                width: '160px'
            }, {
                title: '个人兑换总限量',
                name: 'all_limit',
                width: '160px'
            }, {
                title: '全服兑换日限量',
                name: 'all_service_day_limit',
                width: '160px'
            }, {
                title: '全服兑换总限量',
                name: 'all_service_limit',
                width: '160px'
            }, {
                title: '是否公示',
                name: 'is_active',
                width: '130px'
            }, {
                title: '物品名颜色',
                name: 'item_name_colour',
                width: '150px'
            }, {
                title: '累计充值区间',
                name: 'isShow_section',
                width: '160px'
            }, {
                title: '可见用户ID',
                name: 'isShow_userID',
                width: '150px'
            }, {
                title: '操作',
                name: 're',
                width: '160px',
                fixed: 'right',
                template: {
                    btns: [
                        {
                            name: '编辑',
                            type: 'success',
                            funcName: 'edit'
                        }, {
                            name: '删除',
                            type: 'danger',
                            funcName: 'delete'
                        }
                    ]
                }
            }
        ],
        data: []
    }
}
