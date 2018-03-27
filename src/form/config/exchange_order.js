export function shuzhibiaoForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": 'query',
            "title": "查 询",
            "valid": false
        }],
    }
}

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
            "label": "订单状态",
            "placeholder": "请选择订单状态",
            "type": "select",
            "name": "OrderStatus",
            "options": [{
                value: '',
                label: '全部'
            }, {
                value: '0',
                label: '待审核'
            }, {
                value: '1',
                label: '已完成'
            }, {
                value: '2',
                label: '已发货'
            }, {
                value: '3',
                label: '已收货'
            }, {
                value: '4',
                label: '待发货'
            }, {
                value: '5',
                label: '审核不通过'
            }],
            "span": 6
        }, {
            "label": "物品类型",
            "placeholder": "请选择物品类型",
            "type": "select",
            "name": "itemType",
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

export function orderDialogForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "处理备注",
            "placeholder": "请输入处理备注",
            "type": "text",
            "name": "SolveNote",
            "span": 18,
            "offset": 3,
            "rules": [{ "required": true, "message": "请输入处理备注", "trigger": "blur" }]
        }]
    }
}

export function kamiQueryForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "订单状态",
            "placeholder": "请选择订单状态",
            "type": "select",
            "name": "OrderStatus",
            "options": [{
                value: '',
                label: '全部'
            }, {
                value: '0',
                label: '待审核'
            }, {
                value: '1',
                label: '已完成'
            }, {
                value: '2',
                label: '已发货'
            }, {
                value: '3',
                label: '已收货'
            }, {
                value: '4',
                label: '待发货'
            }, {
                value: '5',
                label: '审核不通过'
            }],
            "span": 6
        }]
    }
}

export function shenheDialogForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btnOffset": 18,
        "btns": [{
            "name": "not_examine",
            "title": "不通过审核",
            "type": "danger",
            "valid": false,
        }, {
            "name": "examine",
            "title": "通过审核",
            "type": "success",
            "valid": false
        }],
        "formEle": [{
            "label": "订单号码",
            "placeholder": "订单号码",
            "type": "text",
            "name": "OrderNum",
            "span": 12,
            "disabled": true,
        }, {
            "label": "用户ID",
            "placeholder": "用户ID",
            "type": "text",
            "name": "UserID",
            "span": 12,
            "disabled": true,
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "商品名称",
            "placeholder": "商品名称",
            "type": "text",
            "name": "itemName",
            "span": 12,
            "disabled": true,
        }, {
            "label": "商品价格(积分)",
            "placeholder": "商品价格(积分)",
            "type": "text",
            "name": "AwardPrice",
            "span": 12,
            "disabled": true,
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "花费金额(积分)",
            "placeholder": "花费金额(积分)",
            "type": "text",
            "name": "TotalAmount",
            "span": 12,
            "disabled": true,
        }, {
            "label": "购买时间",
            "placeholder": "购买时间",
            "type": "text",
            "name": "BuyDate",
            "span": 12,
            "disabled": true,
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "购买地址",
            "placeholder": "购买地址",
            "type": "text",
            "name": "BuyIP",
            "span": 12,
            "disabled": true,
        }, {
            "label": "处理时间",
            "placeholder": "处理时间",
            "type": "text",
            "name": "SolveDate",
            "span": 12,
            "disabled": true,
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "收货人",
            "placeholder": "收货人",
            "type": "text",
            "name": "Compellation",
            "span": 12,
            "disabled": true,
        }, {
            "label": "收货地址",
            "placeholder": "收货地址",
            "type": "text",
            "name": "Address",
            "span": 12,
            "disabled": true,
        }]
    }
}

export function danhaoDialogForm() {
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