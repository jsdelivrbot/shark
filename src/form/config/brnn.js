//曲线
export function brnnQxForm() {
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
            "placeholder": "请选择查询时间",
            "type": "timeRange",
            "name": "query",
            "span": 6,
        }]
    }
}

//单局记录
export function brnnSingleForm() {
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
            "placeholder": "请选择查询时间",
            "type": "timeRange",
            "name": "query",
            "span": 6,
        }]
    }
}

/* 个人游戏场数据 */
export function personalBrnnSingleForm() {
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
            "placeholder": "请选择查询时间",
            "type": "timeRange",
            "name": "query",
            "span": 7,
        }]
    }
}