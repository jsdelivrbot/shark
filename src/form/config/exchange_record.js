export function exchangeOrderForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "物品类型",
            "placeholder": "请选择物品类型",
            "type": "select",
            "name": "itemType",
            "disabled": true,
            "options": [{
                value: '',
                label: '全部'
            }, {
                value: '1',
                label: '虚拟物品'
            }, {
                value: '2',
                label: '话费卡'
            }, {
                value: '3',
                label: '实物'
            }],
            "span": 6
        }]
    }
}

export function editDialogForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "单号",
            "placeholder": "请填写快递单号",
            "type": "text",
            "name": "KuaiDiNumber",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请填写快递单号", "trigger": "blur" }
        }, {
            "label": "快递公司",
            "placeholder": "请填写快递公司名称",
            "type": "text",
            "name": "KuaiDiName",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请填写快递公司名称", "trigger": "blur" }
        }]
    }
}
