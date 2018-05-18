export function goldProductForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "选择时间",
            "placeholder": "请选择时间",
            "type": "dateRange",
            "name": "query",
            "span": 6
        }, {
            "label": "选择游戏",
            "placeholder": "请选择游戏",
            "type": "select",
            "name": "KindID",
            "options": [{
                value: 10001,
                label: '大厅'
            }],
            "span": 6
        }]
    }
}

export function itemProductForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "选择时间",
            "placeholder": "请选择时间",
            "type": "dateRange",
            "name": "query",
            "span": 6
        }]
    }
}