export function newUserForm() {
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
    	"placeholder":"请选择时间",
    	"type": "dateRange",
    	"name": "query",
    	"span": 6
    }, {
    	"label": "平台",
    	"placeholder":"请选择平台",
    	"type": "select",
    	"name": "platform",
    	"options": [{
    		value: "",
    		label: "全部"
    	}, {
    		value: "ios",
    		label: "IOS"
    	}, {
    		value: "android",
    		label: "Android"
    	}],
    	"span": 6
    }, {
    	"label": "推广渠道",
    	"placeholder":"请选择推广渠道",
    	"type": "select",
    	"name": "client_channel_id",
    	"options": [],
    	"span": 6
    }]
  }
}

export function surveyForm() {
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
        "placeholder":"请选择时间",
        "type": "dateRange",
        "name": "query",
        "span": 6
    }, {
        "label": "平台",
        "placeholder":"请选择平台",
        "type": "select",
        "name": "platform",
        "options": [{
            value: "",
            label: "全部"
        }, {
            value: "ios",
            label: "IOS"
        }, {
            value: "android",
            label: "Android"
        }],
        "span": 6
    }, {
        "label": "推广渠道",
        "placeholder":"请选择推广渠道",
        "type": "select",
        "name": "client_channel_id",
        "options": [],
        "span": 6
    }]
  }
}
