//引入数据处理方法
import { itemTypeFormatter, mailFormatter } from '@/libs/dataColumnFormatter'
export function attrTable() {
    return {
        //默认排序
        defaultSort: {
            prop: "res_type"
        },
        //表头配置
        columns: [{
            title: '资源类型',
            name: "res_type",
            formatter: mailFormatter
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
        // 默认排序
        defaultSort: {
            prop: ""
        },
        // 表头配置
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