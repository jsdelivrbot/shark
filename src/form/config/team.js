export function addTeamPrincipleDialogForm() {
    return {
        "inline": false,
        "formEle": [{
            "label": "标题",
            "placeholder": "请输入标题",
            "type": "text",
            "name": "title",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请输入标题", "trigger": "blur" }
        }, {
            "label": "内容",
            "placeholder": "请输入内容",
            "type": "textarea",
            "name": "content",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请输入内容", "trigger": "blur" }
        }]
    }
}