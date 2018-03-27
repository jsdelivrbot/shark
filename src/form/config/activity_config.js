export function activityForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "活动类型",
            "placeholder": "请选择活动类型",
            "type": "select",
            "options": [],
            "name": "ActivityID",
            "span": 6
        }, {
            "label": "任务类型",
            "placeholder": "请选择任务类型",
            "type": "select",
            "options": [],
            "name": "TaskID",
            "span": 6
        }]
    }
}

export function addActivityDialogForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "选择时间",
            "placeholder": "请选择开始时间和结束时间",
            "type": "timeRange",
            "name": "query",
            "span": 18,
            "offset": 3,
            // "rules": [{ type: 'date', "required": true, "message": "请选择时间", "trigger": "change" }]
        }, {
            "label": "积分ID",
            "placeholder": "请填写积分ID/不能重复",
            "type": "text",
            "name": "PointID",
            "span": 18,
            "offset": 3,
            "rules": [{
                "required": true,
                "message": "请填写积分ID/不能重复",
                "trigger": "blur"
            }]
        }, {
            "label": "描述",
            "placeholder": "请填写描述",
            "type": "text",
            "name": "Describe",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请填写描述", "trigger": "blur" }
        }]
    }
}

//活动列表
// export function activityListForm() {
//     return {
//         "inline": true,
//         "btnSpan": 6,
//         "btns": [{
//             "name": "query",
//             "title": "查 询",
//             "valid": false
//         }],
//         "formEle": [{
//             "label": "活动类型",
//             "placeholder": "请选择活动类型",
//             "type": "select",
//             "options": [],
//             "name": "ActivityID",
//             "span": 6
//         }, {
//             "label": "任务类型",
//             "placeholder": "请选择任务类型",
//             "type": "select",
//             "options": [],
//             "name": "TaskID",
//             "span": 6
//         }]
//     }
// }

export function addTaskDialogForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "活动ID",
            "placeholder": "请选择活动ID",
            "type": "select",
            "options": [],
            "name": "ActivityID",
            "span": 12,
            // "rules": [{ "required": true, "message": "请选择活动ID", "trigger": "blur" }]
        }, {
            "label": "积分任务",
            "placeholder": "请选择积分任务",
            "type": "select",
            "options": [],
            "name": "PointTaskTypeID",
            "span": 12,
            // "rules": [{ "required": true, "message": "请选择积分任务", "trigger": "blur" }]
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "目标数量",
            "placeholder": "请输入目标数量",
            "type": "text",
            "name": "TargetAmount",
            "span": 12,
            "rules": { "required": true, "message": "请输入目标数量", "trigger": "blur" }
        }, {
            "label": "奖励积分",
            "placeholder": "请输入奖励积分数量",
            "type": "text",
            "name": "PointAmount",
            "span": 12,
            "rules": { "required": true, "message": "请输入奖励积分数量", "trigger": "blur" }
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "日次数",
            "placeholder": "每日限制次数（不限次填0）",
            "type": "text",
            "name": "DayLimitCount",
            "span": 12,
            "rules": { "required": true, "message": "每日限制次数（不限次填0）", "trigger": "blur" }
        }, {
            "label": "周次数",
            "placeholder": "每周限制次数（不限次填0）",
            "type": "text",
            "name": "WeekLimitCount",
            "span": 12,
            "rules": { "required": true, "message": "每周限制次数（不限次填0）", "trigger": "blur" }
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "总次数",
            "placeholder": "总的限制次数（不限次填0）",
            "type": "text",
            "name": "TotalLimitCount",
            "span": 12,
            "rules": { "required": true, "message": "总的限制次数（不限次填0）", "trigger": "blur" }
        }]
    }
}

export function editTaskDialogForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "活动ID",
            "placeholder": "请选择活动ID",
            "type": "select",
            "options": [],
            "name": "ActivityID",
            "span": 12,
            "disabled": true
        }, {
            "label": "积分任务",
            "placeholder": "请选择积分任务",
            "type": "select",
            "options": [],
            "name": "PointTaskTypeID",
            "span": 12,
            "disabled": true
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "目标数量",
            "placeholder": "请输入目标数量",
            "type": "text",
            "name": "TargetAmount",
            "span": 12,
        }, {
            "label": "奖励积分",
            "placeholder": "请输入奖励积分数量",
            "type": "text",
            "name": "PointAmount",
            "span": 12,
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "日次数",
            "placeholder": "每日限制次数（不限次填0）",
            "type": "text",
            "name": "DayLimitCount",
            "span": 12,
        }, {
            "label": "周次数",
            "placeholder": "每周限制次数（不限次填0）",
            "type": "text",
            "name": "WeekLimitCount",
            "span": 12,
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "总次数",
            "placeholder": "总的限制次数（不限次填0）",
            "type": "text",
            "name": "TotalLimitCount",
            "span": 12,
        }]
    }
}