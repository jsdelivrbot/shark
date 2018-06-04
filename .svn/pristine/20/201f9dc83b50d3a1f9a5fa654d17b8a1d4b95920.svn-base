export function payRecordForm() {
    return {
        "inline": true,
        "btnSpan": 4,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "选择时间",
            "placeholder": "请选择时间",
            "type": "timeRange",
            "name": "query",
            "span": 8
        }, {
            "label": "充值平台",
            "placeholder": "充值平台",
            "type": "select",
            "name": "platform",
            "options": [{
                value: '',
                label: '全部'
            }, {
                value: 'wx',
                label: '微信'
            }, {
                value: 'zfb',
                label: '支付宝'
            }],
            "span": 6
        }, {
            "label": "订单状态",
            "placeholder": '请选择订单状态',
            "type": "select",
            "name": "orderstatus",
            "span": 6,
            "options": [{
                value: 0,
                label: '未支付'
            }, {
                value: 1,
                label: '支付成功'
            }]
        }]
    };
}
