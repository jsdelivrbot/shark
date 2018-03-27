/* 注册统计 */
export function registerUserForm() {
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
      "type": "dateRange",
      "name": "query",
      "span": 6,
    }]
  }
}

/* 注册统计 - 曲线图 */
export function regQxForm() {
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
      "type": "dateRange",
      "name": "query",
      "span": 6,
    }]
  }
}

/* 在线人数统计 */
export function roomUserForm() {
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
      "disabled": true
    }, {
      "label": "选择游戏",
      "placeholder": "请选择游戏",
      "type": "select",
      "name": "KindID",
      "options": [],
      "span": 6
    }]
  }
}
