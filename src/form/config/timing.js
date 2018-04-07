export function timeForm() {
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