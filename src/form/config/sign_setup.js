export function signDialogForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "add",
            "title": "设 置",
            "valid": false
        }],
        "formEle": [{
            "label": "奖励天数",
            "placeholder": "奖励天数",
            "type": "text",
            "name": "DayID",
            "span": 18,
            "offset": 3,
            "disabled": true
        }, {
            "label": "奖励金额",
            "placeholder": "奖励金额",
            "type": "text",
            "name": "RewardGold",
            "span": 18,
            "offset": 3
        }]
    }
}

export function gradeForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
    }
}

export function gradeDialogForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "update",
            "title": "更 新",
            "valid": false
        }],
        "formEle": [{
            "label": "等级",
            "placeholder": "等级",
            "type": "text",
            "name": "LevelID",
            "span": 18,
            "offset": 3,
            "disabled": true,
        }, {
            "label": "经验值",
            "placeholder": "经验值",
            "type": "text",
            "name": "Experience",
            "span": 18,
            "offset": 3
        }, {
            "label": "奖励游戏币",
            "placeholder": "奖励游戏币",
            "type": "text",
            "name": "RewardGold",
            "span": 18,
            "offset": 3
        }, {
            "label": "奖励元宝",
            "placeholder": "奖励元宝",
            "type": "text",
            "name": "RewardMedal",
            "span": 18,
            "offset": 3
        }, {
            "label": "备注",
            "placeholder": "备注",
            "type": "text",
            "name": "LevelRemark",
            "span": 18,
            "offset": 3
        }]
    }
}