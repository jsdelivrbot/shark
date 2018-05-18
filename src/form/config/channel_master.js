export function newCreateChannelMasterConfig() {
    return {
        "inline": true,
        "formEle": [{
            "label": "名称",
            "placeholder": "请输入渠道商名称",
            "type": "text",
            "name": "ChannleMasterName",
            "span": 24,
            "rules": [{ required: true, message: '请输入渠道商名称' }]
        }, {
            "label": "后缀",
            "placeholder": "请输入渠道商后缀",
            "type": "text",
            "name": "Suffix",
            "span": 24,
            "rules": [{ required: true, message: '请输入渠道商后缀' }]
        }]
    }
}

export function editChannelMasterDialogForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "渠道ID",
            "placeholder": "请输入渠道商ID",
            "type": "text",
            "name": "ChannleMasterID",
            "disabled": true,
            "span": 24,
        }, {
            "label": "渠道名",
            "placeholder": "请输入渠道商名称",
            "type": "text",
            "name": "ChannleMasterName",
            "span": 24
        }, {
            "label": "后缀",
            "placeholder": "请输入渠道商后缀",
            "type": "text",
            "name": "Suffix",
            "disabled": true,
            "span": 24,
        }]
    }
}