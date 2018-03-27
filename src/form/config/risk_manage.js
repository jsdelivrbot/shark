export function phoneBlackForm() {
  return {
    "inline": true,
    "btnSpan": 18,
    "btns": [{
      "name": "query",
      "title": "查 询",
      "valid": false
    }, {
      "name": "separate",
      "title": "根据手机号解绑",
      "valid": false,
      "type": "success"
    }, {
      "name": "pull",
      "title": "增加手机号黑名单",
      "valid": false,
      "type": "danger"
    }],
  }
}

//根据手机号解绑黑名单弹窗
export function phoneBlackDialogForm() {
  return {
    "inline": false,
    "formEle": [{
      "label": "手机号",
      "placeholder": "请输入手机号",
      "type": "text",
      "name": "InsureMobile",
      "span": 20,
      "offset": 2,
      "rules": [{ "required": true, "message": "请输入手机号", "trigger": "blur" }]
    }, {
      "label": "理由",
      "placeholder": "请输入理由",
      "type": "text",
      "name": "Reason",
      "span": 20,
      "offset": 2,
      "rules": [{ "required": true, "message": "请输入理由", "trigger": "blur" }]
    }]
  }
}

export function freezeForm() {
  return {
    "inline": true,
    "btnSpan": 12,
    "btns": [{
      "name": "query",
      "title": "查 询",
      "valid": false
    }, {
      "name": "batch",
      "title": "批量解封",
      "valid": false,
      "type": "success"
    }],
    "formEle": [{
      "label": "日期选择",
      "placeholder": "请选择日期",
      "type": "timeRange",
      "name": "query",
      "span": 6
    }]
  }
}

export function nicknameForm() {
  return {
    "inline": true,
    "btnSpan": 12,
    "btns": [{
      "name": "query",
      "title": "查 询",
      "valid": false
    }],
    "formEle": [{
      "label": "昵 称",
      "placeholder": "请输入昵称，可部分输入",
      "type": "text",
      "name": "nickname",
      "span": 6
    }]
  }
}
