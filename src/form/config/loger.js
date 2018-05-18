export function logForm() {
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

export function resourceForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "增减资源",
            "placeholder": "请选择增减资源类型",
            "type": "select",
            "name": "resource",
            "options": [{
                value: 'all',
                label: '全部'
            }, {
                value: 'minus',
                label: '减少资源'
            }, {
                value: 'add',
                label: '增减资源'
            }],
            "span": 6
        }]
    }
}
