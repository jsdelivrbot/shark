//曲线
export function fflQxForm() {
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
      "span": 6,
    }]
  }
}
