export function avatarForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "审核状态",
            "placeholder": "请选择审核状态",
            "type": "select",
            "options": [{
                value: 0,
                label: '未审核'
            }, {
                value: 1,
                label: '审核通过'
            }, {
                value: 2,
                label: '审核不通过'
            }],
            "name": "ExamineStatus",
            "span": 6,
            "disabled": true
        }]
    }
}
