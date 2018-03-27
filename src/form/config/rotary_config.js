export function zhuanpanForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "set",
            "title": "设 置",
            "valid": false
        }],
        "formEle": [{
            "label": "每日免费次数",
            "placeholder": "每日免费次数",
            "type": "text",
            "name": "FreeCount",
            "span": 6
        }, {
            "label": "付费金额",
            "placeholder": "付费金额",
            "type": "text",
            "name": "ChargeFee",
            "span": 6
        }, {
            "label": "付费抽奖",
            "placeholder": "付费抽奖",
            "type": "select",
            "name": "IsCharge",
            "options": [{
                value: "0",
                label: '不付费'
            }, {
                value: "1",
                label: '付费'
            }],
            "span": 6
        }]
    }
}

export function prizeForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
    }
}

export function prizeDialogForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "set",
            "title": "设 置",
            "valid": false
        }],
        "formEle": [{
            "label": "奖品索引",
            "placeholder": "奖品索引",
            "type": "text",
            "name": "ItemIndex",
            "span": 18,
            "offset": 3,
            "disabled": true,
        }, {
            "label": "奖品类型",
            "placeholder": "奖品类型(0:游戏币 1:游戏豆 2:元宝)",
            "type": "select",
            "name": "ItemType",
            "options": [{
                value: "0",
                label: '游戏币'
            }, {
                value: '1',
                label: '游戏豆'
            }, {
                value: '2',
                label: '钻石'
            }],
            "span": 18,
            "offset": 3
        }, {
            "label": "奖品数量",
            "placeholder": "奖品数量",
            "type": "text",
            "name": "ItemQuota",
            "span": 18,
            "offset": 3
        }, {
            "label": "中奖几率(%)",
            "placeholder": "中奖几率(%)",
            "type": "text",
            "name": "ItemRate",
            "span": 18,
            "offset": 3
        }]
    }
}

export function luckDrawForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
    }
}

export function reward7DayForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "领取状态",
            "placeholder": "请选择领取状态",
            "type": "select",
            "name": "state",
            "options": [{
                value: '0',
                label: '未领取'
            }, {
                value: '1',
                label: '已领取'
            }],
            "span": 6
        }]
    }
}

export function fiveStepForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "领取状态",
            "placeholder": "请选择领取状态",
            "type": "select",
            "name": "state",
            "options": [{
                value: '0',
                label: '未领取'
            }, {
                value: '1',
                label: '已领取'
            }],
            "span": 6
        }]
    }
}

export function moonCardForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "到期状态",
            "placeholder": "请选择到期状态",
            "type": "select",
            "name": "state",
            "options": [{
                value: '0',
                label: '未到期'
            }, {
                value: '1',
                label: '已到期'
            }],
            "span": 6
        }]
    }
}