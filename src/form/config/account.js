export function accountForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }, {
            "name": "add",
            "title": "新建帐号",
            "valid": false
        }],
        "formEle": [{
            "label": "角色名称",
            "placeholder": "角色名称",
            "type": "select",
            "name": "RoleName",
            "options": [],
            "span": 6
        }, {
            "label": "账号状态",
            "placeholder": "账号状态",
            "type": "select",
            "name": "",
            "options": [],
            "span": 6
        }, {
            "label": "登录账号",
            "placeholder": "登录账号",
            "type": "text",
            "name": "",
            "span": 6
        }]
    }
}

export function accountDialogForm() {
    return {
        "inline": false,
        "formEle": [{
            "label": "用户账号",
            "placeholder": "全英文或数字",
            "type": "text",
            "name": "Username",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请输入用户账号", "trigger": "blur" }
        }, {
            "label": "密码",
            "placeholder": "请输入密码",
            "type": "password",
            "name": "Password",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请输入密码", "trigger": "blur" }
        }, {
            "label": "姓名",
            "placeholder": "请输入姓名",
            "type": "text",
            "name": "accountName",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请输入姓名", "trigger": "blur" }
        }, {
            "label": "角色名称",
            "placeholder": "角色名称",
            "type": "select",
            "name": "RoleID",
            "options": [],
            "span": 18,
            "offset": 3,
        }, {
            "label": "运营助手",
            "placeholder": "运营助手",
            "type": "select",
            "name": "IsAssist",
            "options": [{
                value: '0',
                label: '无权限'
            }, {
                value: '1',
                label: '有权限'
            }],
            "span": 18,
            "offset": 3,
        }, {
            "label": "禁用状态",
            "placeholder": "禁用状态",
            "type": "select",
            "name": "Nullity",
            "options": [{
                value: '0',
                label: '正常使用'
            }, {
                value: '1',
                label: '暂停使用'
            }],
            "span": 18,
            "offset": 3,
        }]
    }
}

export function accountEditForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "确 定",
            "valid": false
        }],
        "formEle": [{
            "label": "登录账号",
            "placeholder": "登录账号",
            "type": "text",
            "name": "Username",
            "span": 18,
            "offset": 3,
            "disabled": true
        }, {
            "label": "姓名",
            "placeholder": "姓名",
            "type": "text",
            "name": "accountName",
            "span": 18,
            "offset": 3,
        }, {
            "label": "角色名称",
            "placeholder": "角色名称",
            "type": "select",
            "name": "RoleID",
            "span": 18,
            "offset": 3,
            "options": []
        }, {
            "label": "账号状态",
            "placeholder": "账号状态",
            "type": "select",
            "name": "Nullity",
            "span": 18,
            "offset": 3,
            "options": [{
                value: '0',
                label: '正常使用'
            }, {
                value: '1',
                label: '暂停使用'
            }]
        }]
    }
}

export function roleDialogForm() {
    return {
        "inline": false,
        "formEle": [{
            "label": "角色中文",
            "placeholder": "请输入角色中文名",
            "type": "text",
            "name": "RoleName",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请输入角色中文名", "trigger": "blur" }
        }, {
            "label": "角色描述",
            "placeholder": "请简单输入角色描述",
            "type": "text",
            "name": "Description",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请简单输入角色描述", "trigger": "blur" }
        }, {
            "label": "权限",
            "placeholder": "请选择角色拥有的权限",
            "type": "transfer",
            "name": "RolePermit",
            "span": 18,
            "offset": 3,
            "multiple": true,
            "options": [],
            "rules": { "type": 'array', "required": false, "message": "请选择角色拥有的权限", "trigger": "change" }
        }]
    }
}

export function createRoleForm2() {
    return {
        "inline": false,
        "formEle": [{
            "label": "角色ID",
            "placeholder": "角色ID",
            "type": "text",
            "name": "RoleID",
            "span": 18,
            "offset": 3,
            "disabled": true
        }, {
            "label": "角色中文",
            "placeholder": "请输入角色中文名",
            "type": "text",
            "name": "RoleName",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请输入角色中文名", "trigger": "blur" }
        }, {
            "label": "角色描述",
            "placeholder": "请简单输入角色描述",
            "type": "text",
            "name": "Description",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请简单输入角色描述", "trigger": "blur" }
        }, {
            "label": "权限",
            "placeholder": "请选择角色拥有的权限",
            "type": "transfer",
            "name": "RolePermit",
            "span": 18,
            "offset": 3,
            "multiple": true,
            "options": [],
            "rules": { "type": 'array', "required": false, "message": "请选择角色拥有的权限", "trigger": "change" }
        }]
    }
}

export function createPermitForm() {
    return {
        "inline": false,
        "formEle": [{
            "label": "权限名",
            "placeholder": "请输入权限中文名",
            "type": "text",
            "name": "permit_name",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请输入权限中文名", "trigger": "blur" }
        }, {
            "label": "权限英文",
            "placeholder": "请输入权限英文名",
            "type": "text",
            "name": "permit_en",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请输入权限英文名", "trigger": "blur" }
        }, {
            "label": "权限描述",
            "placeholder": "请输入权限描述",
            "type": "text",
            "name": "permit_desc",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请输入权限描述", "trigger": "blur" }
        }]
    }
}

export function createPermitForm2() {
    return {
        "inline": false,
        "formEle": [{
            "label": "权限ID",
            "placeholder": "请输入权限ID",
            "type": "text",
            "name": "permit_id",
            "span": 18,
            "offset": 3,
            "disabled": true
        }, {
            "label": "权限名",
            "placeholder": "请输入权限中文名",
            "type": "text",
            "name": "permit_name",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请输入权限中文名", "trigger": "blur" }
        }, {
            "label": "权限英文",
            "placeholder": "请输入权限英文名",
            "type": "text",
            "name": "permit_en",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请输入权限英文名", "trigger": "blur" }
        }, {
            "label": "权限描述",
            "placeholder": "请输入权限描述",
            "type": "text",
            "name": "permit_desc",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请输入权限描述", "trigger": "blur" }
        }]
    }
}