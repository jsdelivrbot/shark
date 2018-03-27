export function noticeForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "create",
            "title": "新建推送",
            "valid": true
        }],
        "formEle": [{
            "label": "前往场景",
            "placeholder": "请选择需要前往的场景",
            "type": "select",
            "name": "jumpID",
            "options": [],
            "span": 6,
        }, {
            "label": "显示场合",
            "placehoder": "请选择需要推送的场合",
            "type": "select",
            "name": "showPlace",
            "options": [{
                "value": "0",
                "label": "全部场景"
            }, {
                "value": "1",
                "label": "大厅场景"
            }, {
                "value": "2",
                "label": "游戏场景"
            }],
            "span": 6
        }, {
            "label": "选择游戏",
            "placeholder": "请选择游戏，可以多选",
            "type": "select",
            "name": "gameKindID",
            "options": [],
            'multiple': true,
            "span": 6
        }, {
            "label": "游戏房间",
            "placeholder": "请选择游戏房间，可以多选",
            "type": "select",
            "name": "gameServerID",
            "options": [],
            'multiple': true,
            "span": 6
        }, {
            "span": 24,
            'name': 'row1'
        }, {
            "label": "开始时间",
            "placeholder": "请选择开始时间",
            "type": "time",
            "name": "startTime",
            "span": 6,
            "rules": [{
                "required": true,
                "type": 'number',
                "message": "请选择开始时间",
                "trigger": "change"
            }]
        }, {
            "label": "结束时间",
            "placeholder": "请选择结束时间",
            "type": "time",
            "name": "endTime",
            "span": 6,
            "rules": [{
                "required": true,
                "type": 'number',
                "message": "请选择结束时间",
                "trigger": "change"
            }]
        }, {
            "label": "间隔时间(秒)",
            "placeholder": "请输入间隔时间（秒为单位）",
            "type": "text",
            "name": "intervalTime",
            "span": 6,
            "rules": [{
                "required": true,
                "message": "请输入间隔时间（秒为单位）",
                "trigger": "blur"
            }]
        }, {
            "span": 24,
            'name': 'row1'
        }, {
            "label": "消息内容",
            "placeholder": "请输入推送内容",
            "type": "textarea",
            "rows": 3,
            "name": "message",
            "span": 18,
            "rules": [{
                "required": true,
                "message": '请输入推送内容',
                "trigger": 'blur'
            }]
        }]
    }
}

export function noticeListForm() {
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
            "span": 6
        }, {
            "label": "推送场合",
            "placeholder": "请选择推送场合",
            "type": "select",
            "name": "showPlace",
            "options": [{
                "value": "0",
                "label": "全部场景"
            }, {
                "value": "1",
                "label": "大厅场景"
            }, {
                "value": "2",
                "label": "游戏场景"
            }],
            "span": 6
        }]
    }
}