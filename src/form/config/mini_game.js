export function miniConForm() {
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
        }, {
            "label": "选择游戏",
            "placeholder": "请选择游戏",
            "type": "select",
            "name": "selGame",
            "span": 7,
            "options": [{
                label: '百人场',
                value: '10005'
            }, {
                label: '刮刮乐',
                value: '10006'
            }, {
                label: '时时彩',
                value: '10007'
            }, {
                label: '拼拼乐',
                value: '10008'
            }]
        }]
    }
}

/* 百人场 单局记录 */
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
            "span": 8,
        }]
    }
}

/* 时时彩 单局记录 */
export function xjsscSingleForm() {
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
            "span": 8,
        }]
    }
}

/* 拼拼乐 单局记录 */
export function pplSingleForm() {
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
            "span": 8,
        }]
    }
}

export function fflSingleForm() {
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
            "span": 8,
        }]
    }
}