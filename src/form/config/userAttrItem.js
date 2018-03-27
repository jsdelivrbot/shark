export function attrForm() {
    return {
        "inline": true,
        "btnSpan": 8,
        "btns": [{
            "name": "add",
            "title": "添 加",
            "valid": true
        }],
        "formEle": [{
            "label": "资源",
            "type": "select",
            "name": "res_type",
            "options": [{
                "value": 'gold',
                "label": "金币"
            }, {
                "value": 'diamonds',
                "label": "钻石"
            }, {
                "value": "exp",
                "label": "经验"
            }],
            "span": 8
        }, {
            "label": "数量",
            "placeholder": "请输入整数",
            "type": "inputNumber",
            "name": "amount",
            "span": 8,
            "rules": [{
                required: true,
                message: '必须输入数量'
            }, {
                type: 'number',
                message: '请输入整数'
            }],
        }]
    }
}

export function itemForm() {
    return {
        "inline": true,
        "btnSpan": 8,
        "btns": [{
            "name": "add",
            "title": "添 加",
            "valid": true
        }],
        "formEle": [{
            "label": "道具",
            "type": "select",
            "name": "item_id",
            "filterable": true,
            "options": [],
            "span": 8

        }, {
            "label": "数量",
            "placeholder": "请输入整数",
            "type": "inputNumber",
            "name": "amount",
            "span": 8,
            "rules": [{
                required: true,
                message: '必须输入数量'
            }, {
                type: 'number',
                message: '请输入整数'
            }],
        }]
    }
}