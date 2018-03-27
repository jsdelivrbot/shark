export function playerInfoForm() {
    return {
        "inline": true,
        "btnSpan": 18,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }, {
            "name": "res",
            "type": 'warning',
            "title": "增减资源",
            "valid": false
        }, {
            "name": "bank_change",
            "type": 'danger',
            "title": "增减银行资源",
            "valid": false
        }, {
            "name": "unbind_phone",
            "type": 'danger',
            "title": "解绑手机",
            "valid": false
        }, {
            "name": "unbind_wx",
            "type": 'danger',
            "title": "解绑微信",
            "valid": false
        }, {
            "name": "freeze",
            "type": 'danger',
            "title": "封 号",
            "valid": false
        }, {
            "name": "unfreeze",
            "type": 'danger',
            "title": "解 封",
            "valid": false
        }],
        "formEle": [{
            "label": "用户ID",
            "placeholder": "请输入用户ID",
            "type": "text",
            "name": "open_user_id",
            "span": 6,
        }]
    }
}

export function doResChangeDialogForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "增减选择",
            "placeholder": "请选择增或减",
            "type": "select",
            "name": "type",
            "span": 12,
            "options": [
                { "value": "minus", "label": "减少" },
                { "value": "add", "label": "增加" },
            ]
        }, {
            "label": "备注",
            "placeholder": "请填写备注",
            "type": "text",
            "name": "extra",
            "span": 12,
            "rules": [{ "requried": true, "message": "请填写备注", "trigger": "blur" }]
        }]
    }
}

/* 银行记录 */
export function bankForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "交易类型",
            "placeholder": "请选择交易类型",
            "type": "select",
            "name": "TradeType",
            "options": [{
                value: '',
                label: '全部'
            }, {
                value: '1',
                label: '存款'
            }, {
                value: '2',
                label: '取款'
            }, {
                value: '3',
                label: '转账'
            }],
            "span": 6
        }]
    }
}

export function bankChangeForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "增减选择",
            "placeholder": "请选择增或减",
            "type": "select",
            "name": "type",
            "span": 24,
            "options": [{
                "value": "minus",
                "label": "减少"
            }, {
                "value": "add",
                "label": "增加"
            }]
        }, {
            "label": "数量",
            "placeholder": "请填写增减数量",
            "type": "inputNumber",
            "name": "amount",
            "span": 24
        }, {
            "label": "备注",
            "placeholder": "请填写填写备注",
            "type": "text",
            "name": "extra",
            "span": 24
        }]
    }
}

export function unbindForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "理由",
            "placeholder": "请填写解绑理由",
            "type": "text",
            "name": "extra",
            "span": 18,
            "offset": 3,
        }]
    }
}