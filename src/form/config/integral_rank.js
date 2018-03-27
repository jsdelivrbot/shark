export function gameIntegralForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "选择游戏",
            "placeholder": "请选择游戏",
            "type": "select",
            "name": "game_name",
            "options": [{
                value: '',
                label: '全部'
            }, {
                value: 10004,
                label: '看牌抢庄'
            }, {
                value: 10005,
                label: '百人牛牛'
            }],
            "span": 6
        }]
    }
}


export function singleIntegralForm() {
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