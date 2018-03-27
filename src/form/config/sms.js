export function smsCodeForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "send",
            "title": "获取验证码",
            "valid": false
        }],
        "formEle": [{
            "label": "手机号码",
            "placeholder": "手机号码",
            "type": "text",
            "name": "Accounts",
            "span": 6
        }]
    }
}
export function smsForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "send",
            "title": "获取验证码",
            "valid": false
        }, {
            "name": "reg",
            "title": "注册",
            "valid": false
        }],
        "formEle": [{
            "label": "手机号码",
            "placeholder": "手机号码",
            "type": "text",
            "name": "Accounts",
            "span": 6
        }, {
            "label": "密码",
            "placeholder": "密码",
            "type": "text",
            "name": "loginPass",
            "span": 6
        }, {
            "label": "确认密码",
            "placeholder": "确认密码",
            "type": "text",
            "name": "insurePass",
            "span": 6
        }, {
            "label": "验证码",
            "placeholder": "验证码",
            "type": "text",
            "name": "smsCode",
            "span": 6
        }]
    }
}