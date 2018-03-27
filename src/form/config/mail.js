export function queryMailForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "rows": 24,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "选择时间",
            "placeholder": "邮件发送时间范围",
            "type": "timeRange",
            "name": "send",
            "span": 6
        }, {
            "label": "邮件范围",
            "type": "select",
            "name": "IsAll",
            "options": [{
                value: '0',
                label: '个人'
            }, {
                value: '1',
                label: '全体'
            }],
            "span": 6
        }, {
            "label": "是否已读",
            "type": "select",
            "name": "IsRead",
            "options": [{
                value: '0',
                label: '未读'
            }, {
                value: '1',
                label: '已读'
            }],
            "span": 6
        }, {
            "label": "是否领取",
            "type": "select",
            "name": "IsGot",
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

export function createMailForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "收件人ID",
            "placeholder": "请输入收件人ID，不输入则默认发送所有玩家",
            "type": "textarea",
            "name": "open_user_id",
            "rows": 4,
            "span": 24
        }, {
            "name": "rows1",
        }, {
            "label": "标题",
            "placeholder": "请输入邮件标题（七个字之内）",
            "type": "text",
            "name": "title",
            "span": 6,
            "maxLength": 7,
            "rules": [{ "required": true, "message": "请输入邮件标题", "trigger": "blur" }]
        }, {
            "label": "发送范围",
            "type": "select",
            "name": "range",
            "span": 6,
            "options": [{
                value: '0',
                label: '个人'
            }, {
                value: '1',
                label: '全体'
            }],
            "rules": [{ "required": true, "message": "请选择发送范围", "trigger": "blur" }]
        }, {
            "label": "过期时间",
            "placeholder": "邮件过期时间",
            "type": "time",
            "name": "expire_time",
            "span": 6,
            "rules": [{ "required": true, type: 'number', "message": "请选择过期时间", "trigger": "change" }]
        }, {
            "label": "备注",
            "placeholder": "请输入备注",
            "type": "text",
            "name": "extra",
            "span": 6
        }, {
            "name": "rows2",
        }, {
            "label": "邮件内容",
            "placeholder": "请输入邮件内容",
            "type": "textarea",
            "name": "content",
            "rows": 4,
            "span": 24,
            "rules": [{ "required": true, "message": "请输入邮件内容", "trigger": "blur" }]
        }, {
            "name": "rows4",
        }]
    }
}