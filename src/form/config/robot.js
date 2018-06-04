export function robotForm() {
    return {
        "inline": true,
        "btnSpan": 18,
        "btns": [{
            "name": "setUp",
            "title": "设 置",
            "valid": true
        }],
        "formEle": [{
            "label": "房间",
            "placeholder": "请选择进入的房间",
            "type": "select",
            "name": "ServerID",
            "span": 6,
            "options": [],
            "rules": { "required": true, "message": "请选择进入的房间", "trigger": "change" }
        }, {
            "label": "机器数目",
            "placeholder": "请输入机器人数量",
            "type": "text",
            "name": "AndroidCount",
            "span": 6,
            "rules": { "required": true, "message": "请输入机器人数量", "trigger": "blur" }
        }, {
            "label": "服务模式",
            "placeholder": "请选择服务模式",
            "type": "checkbox",
            "name": "ServiceMode",
            "options": [{
                value: 1,
                label: '相互模拟',
                // checked: true
            }, {
                value: 2,
                label: '主动陪打',
                // checked: true
            }, {
                value: 4,
                label: '被动陪打',
                // checked: true
            }],
            "span": 6,
            "rules": { "required": true, "message": "请选择服务模式", "trigger": "change" }
        }, {
            "row": 24
        }, {
            "label": "最小金币",
            "placeholder": "请输入携带最小金币数量",
            "type": "text",
            "name": "TakeMinScore",
            "span": 6,
            "rules": { "required": true, "message": "请输入携带最小金币数量", "trigger": "blur" }
        }, {
            "label": "最大金币",
            "placeholder": "请输入携带最大金币数量",
            "type": "text",
            "name": "TakeMaxScore",
            "span": 6,
            "rules": { "required": true, "message": "请输入携带最大金币数量", "trigger": "blur" }
        }, {
            "label": "进入时间",
            "placeholder": "请选择进入时间（秒）",
            "type": "text",
            "name": "EnterTime",
            "span": 6,
            "rules": { "required": true, "message": "请选择进入时间（秒）", "trigger": "blur" }
        }, {
            "label": "离开时间",
            "placeholder": "请选择离开时间（秒）",
            "type": "text",
            "name": "LeaveTime",
            "span": 6,
            "rules": { "required": true, "message": "请选择离开时间（秒）", "trigger": "blur" }
        }, {
            "row": 24
        }, {
            "label": "进入间隔",
            "placeholder": "请输入进入房间的最小间隔（秒）",
            "type": "text",
            "name": "EnterMinInterval",
            "span": 6,
            "rules": { "required": true, "message": "请输入进入房间的最小间隔（秒）", "trigger": "blur" }
        }, {
            "label": "进入间隔",
            "placeholder": "请输入进入房间的最大间隔（秒）",
            "type": "text",
            "name": "EnterMaxInterval",
            "span": 6,
            "rules": { "required": true, "message": "请输入进入房间的最大间隔（秒）", "trigger": "blur" }
        }, {
            "label": "离开间隔",
            "placeholder": "请输入离开房间的最小间隔（秒）",
            "type": "text",
            "name": "LeaveMinInterval",
            "span": 6,
            "rules": { "required": true, "message": "请输入离开房间的最小间隔（秒）", "trigger": "blur" }
        }, {
            "label": "离开间隔",
            "placeholder": "请输入离开房间的最大间隔（秒）",
            "type": "text",
            "name": "LeaveMaxInterval",
            "span": 6,
            "rules": { "required": true, "message": "请输入离开房间的最大间隔（秒）", "trigger": "blur" }
        }, {
            "row": 24
        }, {
            "label": "换桌局数",
            "placeholder": "请输入最小换桌局数",
            "type": "text",
            "name": "SwitchMinInnings",
            "span": 6,
            "rules": { "required": true, "message": "请输入最小换桌局数", "trigger": "blur" }
        }, {
            "label": "换桌局数",
            "placeholder": "请输入最大换桌局数",
            "type": "text",
            "name": "SwitchMaxInnings",
            "span": 6,
            "rules": { "required": true, "message": "请输入最大换桌局数", "trigger": "blur" }
        }, {
            "label": "Vip_0",
            "placeholder": "请输入Vip_0的机器人数量",
            "type": "text",
            "name": "AndroidCountMember0",
            "span": 6,
            "rules": { "required": true, "message": "请输入Vip_0的机器人数量", "trigger": "blur" }
        }, {
            "label": "Vip_1",
            "placeholder": "请输入Vip_1的机器人数量",
            "type": "text",
            "name": "AndroidCountMember1",
            "span": 6,
            "rules": { "required": true, "message": "请输入Vip_1的机器人数量", "trigger": "blur" }
        }, {
            "row": 24
        }, {
            "label": "Vip_2",
            "placeholder": "请输入Vip_2的机器人数量",
            "type": "text",
            "name": "AndroidCountMember2",
            "span": 6,
            "rules": { "required": true, "message": "请输入Vip_2的机器人数量", "trigger": "blur" }
        }, {
            "label": "Vip_3",
            "placeholder": "请输入Vip_3的机器人数量",
            "type": "text",
            "name": "AndroidCountMember3",
            "span": 6,
            "rules": { "required": true, "message": "请输入Vip_3的机器人数量", "trigger": "blur" }
        }, {
            "label": "Vip_4",
            "placeholder": "请输入Vip_4的机器人数量",
            "type": "text",
            "name": "AndroidCountMember4",
            "span": 6,
            "rules": { "required": true, "message": "请输入Vip_4的机器人数量", "trigger": "blur" }
        }, {
            "label": "Vip_5",
            "placeholder": "请输入Vip_5的机器人数量",
            "type": "text",
            "name": "AndroidCountMember5",
            "span": 6,
            "rules": { "required": true, "message": "请输入Vip_5的机器人数量", "trigger": "blur" }
        }]
    }
}

export function robotDialogForm() {
    return {
        "inline": false,
        "formEle": [{
            "label": "房间",
            "placeholder": "请选择进入的房间",
            "type": "select",
            "name": "ServerID",
            "span": 6,
            "options": [],
            "rules": { "required": true, "message": "请选择进入的房间", "trigger": "change" }
        }, {
            "label": "机器数目",
            "placeholder": "请输入机器人数量",
            "type": "text",
            "name": "AndroidCount",
            "span": 6,
            "rules": { "required": true, "message": "请输入机器人数量", "trigger": "blur" }
        }, {
            "label": "服务模式",
            "placeholder": "请选择服务模式",
            "type": "checkbox",
            "name": "ServiceMode",
            "options": [{
                value: 1,
                label: '相互模拟',
                disabled: true
            }, {
                value: 2,
                label: '主动陪打',
                disabled: true
            }, {
                value: 3,
                label: '被动陪打',
                disabled: true
            }],
            "span": 6,
            "rules": { "required": true, "message": "请选择服务模式", "trigger": "change" }
        }, {
            "row": 24
        }, {
            "label": "最小金币",
            "placeholder": "请输入携带最小金币数量",
            "type": "text",
            "name": "TakeMinScore",
            "span": 6,
            "rules": { "required": true, "message": "请输入携带最小金币数量", "trigger": "blur" }
        }, {
            "label": "最大金币",
            "placeholder": "请输入携带最大金币数量",
            "type": "text",
            "name": "TakeMaxScore",
            "span": 6,
            "rules": { "required": true, "message": "请输入携带最大金币数量", "trigger": "blur" }
        }, {
            "label": "进入时间",
            "placeholder": "请选择进入时间（秒）",
            "type": "text",
            "name": "EnterTime",
            "span": 6,
            "rules": { "required": true, "message": "请选择进入时间（秒）", "trigger": "blur" }
        }, {
            "label": "离开时间",
            "placeholder": "请选择离开时间（秒）",
            "type": "text",
            "name": "LeaveTime",
            "span": 6,
            "rules": { "required": true, "message": "请选择离开时间（秒）", "trigger": "blur" }
        }, {
            "row": 24
        }, {
            "label": "进入间隔",
            "placeholder": "请输入进入房间的最小间隔（秒）",
            "type": "text",
            "name": "EnterMinInterval",
            "span": 6,
            "rules": { "required": true, "message": "请输入进入房间的最小间隔（秒）", "trigger": "blur" }
        }, {
            "label": "进入间隔",
            "placeholder": "请输入进入房间的最大间隔（秒）",
            "type": "text",
            "name": "EnterMaxInterval",
            "span": 6,
            "rules": { "required": true, "message": "请输入进入房间的最大间隔（秒）", "trigger": "blur" }
        }, {
            "label": "离开间隔",
            "placeholder": "请输入离开房间的最小间隔（秒）",
            "type": "text",
            "name": "LeaveMinInterval",
            "span": 6,
            "rules": { "required": true, "message": "请输入离开房间的最小间隔（秒）", "trigger": "blur" }
        }, {
            "label": "离开间隔",
            "placeholder": "请输入离开房间的最大间隔（秒）",
            "type": "text",
            "name": "LeaveMaxInterval",
            "span": 6,
            "rules": { "required": true, "message": "请输入离开房间的最大间隔（秒）", "trigger": "blur" }
        }, {
            "row": 24
        }, {
            "label": "换桌局数",
            "placeholder": "请输入最小换桌局数",
            "type": "text",
            "name": "SwitchMinInnings",
            "span": 6,
            "rules": { "required": true, "message": "请输入最小换桌局数", "trigger": "blur" }
        }, {
            "label": "换桌局数",
            "placeholder": "请输入最大换桌局数",
            "type": "text",
            "name": "SwitchMaxInnings",
            "span": 6,
            "rules": { "required": true, "message": "请输入最大换桌局数", "trigger": "blur" }
        }, {
            "label": "Vip_0",
            "placeholder": "请输入Vip_0的机器人数量",
            "type": "text",
            "name": "AndroidCountMember0",
            "span": 6,
            "rules": { "required": true, "message": "请输入Vip_0的机器人数量", "trigger": "blur" }
        }, {
            "label": "Vip_1",
            "placeholder": "请输入Vip_1的机器人数量",
            "type": "text",
            "name": "AndroidCountMember1",
            "span": 6,
            "rules": { "required": true, "message": "请输入Vip_1的机器人数量", "trigger": "blur" }
        }, {
            "row": 24
        }, {
            "label": "Vip_2",
            "placeholder": "请输入Vip_2的机器人数量",
            "type": "text",
            "name": "AndroidCountMember2",
            "span": 6,
            "rules": { "required": true, "message": "请输入Vip_2的机器人数量", "trigger": "blur" }
        }, {
            "label": "Vip_3",
            "placeholder": "请输入Vip_3的机器人数量",
            "type": "text",
            "name": "AndroidCountMember3",
            "span": 6,
            "rules": { "required": true, "message": "请输入Vip_3的机器人数量", "trigger": "blur" }
        }, {
            "label": "Vip_4",
            "placeholder": "请输入Vip_4的机器人数量",
            "type": "text",
            "name": "AndroidCountMember4",
            "span": 6,
            "rules": { "required": true, "message": "请输入Vip_4的机器人数量", "trigger": "blur" }
        }, {
            "label": "Vip_5",
            "placeholder": "请输入Vip_5的机器人数量",
            "type": "text",
            "name": "AndroidCountMember5",
            "span": 6,
            "rules": { "required": true, "message": "请输入Vip_5的机器人数量", "trigger": "blur" }
        }]
    }
}
