//引入数据处理方法
import { itemTypeFormatter, resourceFormatter } from '@/libs/dataColumnFormatter'

export function attrTable() {
    return {
        columns: [{
            title: '资源类型',
            name: "res_type",
            formatter: resourceFormatter
        }, {
            title: '数量',
            name: "amount"
        }, {
            title: '操作',
            name: "re",
            template: {
                btns: [{
                    name: '删除',
                    funcName: 'delete'
                }]
            }
        }],
        data: []
    }
}

export function itemTable() {
    return {
        columns: [{
            title: '道具名',
            name: "item_id",
            formatter: itemTypeFormatter
        }, {
            title: '数量',
            name: "amount"
        }, {
            title: '操作',
            name: "re",
            template: {
                btns: [{
                    name: '删除',
                    funcName: 'delete'
                }]
            }
        }],
        data: []
    }
}
