export function buyItemForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "购买时间",
            "placeholder": "请选择购买时间",
            "type": "timeRange",
            "name": "query",
            "span": 6,
        }, 
        // {
        //     "label": "道具类型",
        //     "placeholder": "请选择道具类型",
        //     "type": "select",
        //     "name": "itemType",
        //     "options": [],
        //     "span": 6
        // }, 
        // {
        //     "label": "购买类型",
        //     "placeholder": "请选择购买类型",
        //     "type": "select",
        //     "name": "buyType",
        //     "options": [{
        //         value: '0',
        //         label: '全部'
        //     }, {
        //         value: 'gold',
        //         label: '金币'
        //     }, {
        //         value: 'diamond',
        //         label: '钻石'
        //     }],
        //     "span": 6
        // }
        ]
    }
}