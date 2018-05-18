export function createLdyForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "模板名",
            "placeholder": "请输入模板名",
            "type": "text",
            "name": "tp_name",
            "span": 24,
            "rules": [{ required: true, message: '请输入模板名' }]
        }, {
            "label": "模板链接",
            "placeholder": "请输入模板链接",
            "type": "text",
            "name": "tp_url",
            "span": 24,
            "rules": [{ required: true, message: '请输入模板链接' }]
        }]
    }
}


export function createChannelForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "渠道名",
            "placeholder": "请选择渠道名",
            "type": "select",
            "name": "channel_id",
            "options": [],
            "span": 24,
            "rules": [{ required: true, message: '请选择渠道名', trigger: "change" }]
        }, {
            "label": "落地页",
            "placeholder": "请选择落地页模板",
            "type": "select",
            "name": "tp_id",
            "span": 24,
            "options": [],
            "rules": [{ required: true, message: '请选择落地页模板', trigger: "change" }]
        }]
    }
}