<template>
    <div id="container">
        <h1 class="h1-title">权限/帐号管理</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="帐号管理" name="0">
                    <ele-form :config="account_config" v-on:receive="account_submit"></ele-form>
                    <table-option :parent-message="account_Msg" v-on:outputrow="account_recieveRow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="角色管理" name="1">
                    <!--功能按钮-->
                    <el-row>
                        <el-col :span="6" :offset="18">
                            <el-button @click="role_submit">查 询</el-button>
                            <el-button @click="role_add_submit">新增角色</el-button>
                        </el-col>
                    </el-row>
                    <br />
                    <!--表格区域-->
                    <el-row>
                        <el-col :span="24">
                            <table-option :parent-message="role_Msg" v-on:outputrow="role_recieveRow"></table-option>
                        </el-col>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item title="权限管理" name="2">
                    <!--功能按钮-->
                    <el-row>
                        <el-col :span="6" :offset="18">
                            <el-button @click="permit_submit">查 询</el-button>
                            <el-button @click="permit_add_submit">新增权限</el-button>
                        </el-col>
                    </el-row>
                    <br />
                    <!--表格区域-->
                    <el-row>
                        <el-col :span="24">
                            <table-option :parent-message="permit_Msg" v-on:outputrow="permit_recieveRow"></table-option>
                        </el-col>
                    </el-row>
                </el-collapse-item>
            </el-collapse>
        </div>
        <!--新增账号表单-->
        <el-dialog title="新增账号" size="tiny" :visible.sync="accountDialog">
            <ele-form :config="accountDialogConfig" :eventname="accountSubmitEvent" v-on:receive="accountDialogSubmit"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="accountDialog = false">取 消</el-button>
                <el-button type="success" @click="submitAccountEvent">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 账号管理 - 表格内 编辑 -->
        <el-dialog title="编辑用户" size="tiny" :visible.sync="accountEditDialog">
            <ele-form :config="accountEditConfig" v-on:receive="accountEditSubmit" :defaultdata="accountEditDialogHtml"></ele-form>
        </el-dialog>
        <!--新增角色表单-->
        <el-dialog title="新增角色" size="small" :visible.sync="createRoleDialog">
            <ele-form :config="createRoleDialogConfig" :eventname="submitCreateRoleEventName" v-on:receive="createRoleDialogSubmit" :defaultdata="roleDefaultHtml"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="createRoleDialog = false">取 消</el-button>
                <el-button type="success" @click="submitCreateRoleEvent">确 定</el-button>
            </div>
        </el-dialog>
        <!--角色管理 - 表格内 编辑 -->
        <el-dialog title="编辑角色" size="small" :visible.sync="roleEditDialog">
            <ele-form :config="createRoleFormConfig2" :eventname="submitCreateRoleEventName2" :defaultdata="roleEditDefault" v-on:receive="submitCreateRole2"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="roleEditDialog = false">取 消</el-button>
                <el-button type="primary" @click="submitCreateRoleEvent2">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 权限管理 - 新增权限 -->
        <el-dialog title="新增权限" size="tiny" :visible.sync="createPermitFormDialog">
            <ele-form :config="createPermitFormConfig" :eventname="submitCreatePermitEventName" v-on:receive="submitCreatePermit"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="createPermitFormDialog = false">取 消</el-button>
                <el-button type="primary" @click="submitCreatePermitEvent">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 权限管理 - 权限编辑 -->
        <el-dialog title="权限编辑" size="tiny" :visible.sync="createPermitFormDialog2">
            <ele-form :config="createPermitFormConfig2" :eventname="submitCreatePermitEventName2" :defaultdata="peimitEditDefault" v-on:receive="submitCreatePermit2"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="createPermitFormDialog2 = false">取 消</el-button>
                <el-button type="primary" @click="submitCreatePermitEvent2">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    //引入表格搜索
    import {
        tableSearch
    } from '@/libs/tableSearch'
    import {
        accountForm,
        accountDialogForm,
        accountEditForm,
        roleDialogForm,
        createRoleForm2,
        createPermitForm,
        createPermitForm2
    } from '@/form/config/account'
    import {
        accountTable,
        roleTable,
        permitTable
    } from '@/table/config/account'
    export default {
        name: 'account',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                loading: false,
                activeName: '',
                /* 帐号管理 */
                account_config: {},
                account_Msg: {},
                accountDialog: false,
                accountDialogConfig: {},
                accountSubmitEvent: false,
                accountEditDialog: false,
                accountEditConfig: {},
                accountEditDialogHtml: {},
                /* 角色管理 */
                role_Msg: {},
                createRoleDialog: false,
                submitCreateRoleEventName: false,
                roleDefaultHtml: {},
                roleEditDialog: false,
                createRoleFormConfig2: {},
                submitCreateRoleEventName2: false,
                roleEditDefault: {},
                /* 权限管理 */
                createPermitFormDialog: false,
                createPermitFormConfig: createPermitForm(),
                submitCreatePermitEventName: false,
                permit_Msg: permitTable(),
                createPermitFormDialog2: false,
                createPermitFormConfig2: createPermitForm2(),
                submitCreatePermitEventName2: false,
                peimitEditDefault: {},
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            /* 帐号管理 */
            account_submit(arg) {
                switch (arg[1]) {
                    case 'query':
                        this.loading = true;
                        this.$res.getSingleData(this, '/Backend/get_account/').then((response) => {
                            this.account_Msg.data = [];
                            this.account_Msg.data = response;
                            this.$message.success('查询成功');
                            this.loading = false;
                        });
                        break;
                    case 'add':
                        this.accountDialog = true;
                }
            },
            account_recieveRow(arg) {
                switch (arg[2]) {
                    case 'edit':
                        this.accountEditDialog = true;
                        this.accountEditDialogHtml = arg[1];
                        break;
                    case 'delete':
                        this.$confirm('此操作将永久删除该角色，是否继续？', '温馨提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            let param = {
                                Username: arg[1].Username
                            };
                            this.$res.postData(this, '/Backend/account_del/', param).then((response) => {
                                this.$res.getSingleData(this, '/Backend/get_account/').then((response) => {
                                    this.account_Msg.data = [];
                                    this.account_Msg.data = response;
                                    this.$message.success('成功删除');
                                });
                            });
                        }).catch(() => {
                            this.$message.error('已取消删除');
                        });
                        break;
                }
            },
            accountDialogSubmit(arg) {
                switch (arg[1]) {
                    case 'submitEvent':
                        this.accountSubmitEvent = false;
                        this.accountDialog = false;
                        let param = {
                            Username: arg[0].Username,
                            Password: arg[0].Password,
                            accountName: arg[0].accountName,
                            RoleID: arg[0].RoleID - 0,
                            Nullity: arg[0].Nullity - 0,
                            IsAssist: arg[0].IsAssist - 0,
                        };
                        this.$res.postData(this, '/Backend/new_account/', param).then((response) => {
                            if (response.code === -11005) {
                                this.$message.error(response.msg);
                            } else {
                                this.$res.getSingleData(this, '/Backend/get_account/').then((response) => {
                                    this.account_Msg.data = [];
                                    this.account_Msg.data = response;
                                    this.$message.success('新建帐号成功');
                                });
                            }
                        });
                        break;
                }
            },
            submitAccountEvent() {
                this.accountSubmitEvent = 'submitEvent';
            },
            accountEditSubmit(arg) {
                let param = {
                    Username: arg[0].Username,
                    Nullity: arg[0].Nullity - 0,
                    RoleID: arg[0].RoleID - 0,
                    accountName: arg[0].accountName,
                };
                this.$res.postData(this, '/Backend/account_edit/', param).then((response) => {
                    this.accountEditDialog = false;
                    this.$res.getSingleData(this, '/Backend/get_account/').then((response) => {
                        this.account_Msg.data = [];
                        this.account_Msg.data = response;
                        this.$message.success('编辑成功');
                    });
                });
            },
            /* 角色管理 */
            role_submit(arg) {
                this.loading = true;
                this.$res.getSingleData(this, '/Backend/get_role/').then((response) => {
                    this.role_Msg.data = [];
                    this.role_Msg.data = response;
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            },
            role_add_submit() {
                this.createRoleDialog = true;
            },
            role_recieveRow(arg) {
                switch (arg[2]) {
                    case 'edit':
                        this.roleEditDefault = arg[1];
                        this.roleEditDialog = true;
                        break;
                    case 'delete':
                        this.$confirm('此操作将永久删除该角色，是否继续？', '温馨提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            let param = this.$res.deepClone(arg[1]);
                            param['RoleID'] = param['RoleID'] - 0;
                            let paramForm = new FormData();
                            for (const key in param) {
                                paramForm.append(key, param[key]);
                            }
                            this.$res.postData(this, '/Backend/delete_role/', paramForm).then((response) => {
                                this.$res.getSingleData(this, '/Backend/get_role/').then((response) => {
                                    this.role_Msg.data = [];
                                    this.role_Msg.data = response;
                                    this.$message.success('已删除角色');
                                });
                            });
                        }).catch(() => {
                            this.$message.error('已取消删除');
                        });
                        break;
                }
            },
            submitCreateRoleEvent() {
                this.submitCreateRoleEventName = 'submitEvent';
            },
            createRoleDialogSubmit(arg) {
                let _self = this;
                let role_arr = [];
                let param = _self.$res.deepClone(arg[0]);
                role_arr.push(param.RolePermit);
                param['RolePermit'] = JSON.stringify(role_arr[0]);
                let paramForm = new FormData();
                for (const key in param) {
                    paramForm.append(key, param[key]);
                }
                _self.$res.postData(_self, '/Backend/add_role/', paramForm).then((response) => {
                    if (response.code === -11005) {
                        _self.$message.error(response.msg);
                    } else {
                        _self.$res.getSingleData(_self, '/Backend/get_role/').then((response) => {
                            _self.role_Msg.data = [];
                            _self.role_Msg.data = response;
                            _self.$message.success('新增角色成功');
                        });
                    }
                });
                _self.createRoleDialog = false;
                _self.submitCreateRoleEventName = false;
            },
            //角色管理 -- 编辑角色弹窗
            submitCreateRole2(arg) {
                let _self = this;
                let role_arr = [];
                let param = _self.$res.deepClone(arg[0]);
                role_arr.push(param.RolePermit);
                param['RolePermit'] = JSON.stringify(role_arr[0]);
                let paramForm = new FormData();
                for (const key in param) {
                    paramForm.append(key, param[key]);
                }
                _self.$res.postData(_self, '/Backend/change_role/', paramForm).then((response) => {
                    _self.$res.getSingleData(_self, '/Backend/get_role/').then((response) => {
                        _self.role_Msg.data = [];
                        _self.role_Msg.data = response;
                        _self.$message.success('编辑角色成功');
                    });
                });
                _self.roleEditDialog = false;
                _self.submitCreateRoleEventName2 = false;
            },
            submitCreateRoleEvent2() {
                this.submitCreateRoleEventName2 = 'submitEvent';
            },
            /* 权限管理 */
            //权限管理 -- 查询
            permit_submit(arg) {
                let _self = this;
                _self.$res.getSingleData(_self, '/Permit/get_cms_permissions/').then((response) => {
                    _self.permit_Msg.data = [];
                    _self.permit_Msg.data = response;
                    _self.$message.success('查询成功');
                });
            },
            //权限管理 -- 新增权限 弹窗
            permit_add_submit(arg) {
                this.createPermitFormDialog = true;
            },
            //权限管理 -- 表格内 编辑与删除 按钮功能
            permit_recieveRow(arg) {
                switch (arg[2]) {
                    case 'edit':
                        this.createPermitFormDialog2 = true;
                        this.peimitEditDefault = arg[1];
                        break;
                    case 'delete':
                        this.$message.error('delect');
                        break;
                }
            },
            submitCreatePermitEvent() {
                this.submitCreatePermitEventName = 'submitEvent';
            },
            submitCreatePermitEvent2() {
                this.submitCreatePermitEventName2 = 'submitEvent';
            },
            //权限管理 -- 新增权限(填完表格后确定按钮操作)
            submitCreatePermit(arg) {
                let _self = this;
                let param = _self.$res.deepClone(arg[0]);
                _self.$res.postData(_self, '/Permit/add_permission', param).then((response) => {
                    if (response.code == 0) {
                        _self.$res.getSingleData(_self, '/Permit/get_cms_permissions/').then((response) => {
                            _self.permit_Msg.data = [];
                            _self.permit_Msg.data = response;
                            _self.$message.success('新增权限成功');
                        });
                    } else {
                        _self.$message.error('新增权限失败，请查找原因');
                    }
                });
                this.createPermitFormDialog = false;
                this.submitCreatePermitEventName = false;
            },
            //权限管理 -- 表格内编辑按钮功能
            submitCreatePermit2(arg) {
                let _self = this;
                let param = _self.$res.deepClone(arg[0]);
                _self.$res.postData(_self, '/Permit/change_permission/', param).then((response) => {
                    if (response.code == 0) {
                        _self.$res.getSingleData(_self, '/Permit/get_cms_permissions/').then((response) => {
                            _self.permit_Msg.data = [];
                            _self.permit_Msg.data = response;
                            _self.$message.success('编辑权限成功');
                        });
                    } else {
                        _self.$message.error('编辑权限失败');
                    }
                });
                this.createPermitFormDialog2 = false;
                this.submitCreatePermitEventName2 = false;
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            /* 帐号管理 */
            this.account_config = accountForm();
            this.account_Msg = accountTable();
            this.accountDialogConfig = accountDialogForm();
            this.accountEditConfig = accountEditForm();
            let _self = this;
            let baseAccountConfig = accountDialogForm();
            let baseAccountEditConfig = accountEditForm();
            if (!window.account_info) {
                let account_list = new Promise((resolve, reject) => {
                    _self.$res.getSingleData(_self, '/Backend/get_role/').then((response) => {
                        if (response) {
                            resolve(response);
                        } else {
                            reject('error');
                        }
                    });
                });
                account_list.then((response) => {
                    window.account_info = response;
                    fillAccount(response);
                }, () => {
                    _self.$message.error('获取角色名称失败');
                });
            } else {
                fillAccount(window.account_info);
            }
            function fillAccount(response) {
                response.map((val, i) => {
                    if (i >= 0) {
                        baseAccountConfig.formEle[3].options.push({
                            value: val.RoleID,
                            label: val.RoleName
                        });
                        baseAccountEditConfig.formEle[2].options.push({
                            value: val.RoleID,
                            label: val.RoleName
                        });
                    }
                });
                _self.accountDialogConfig = _self.$res.deepClone(baseAccountConfig);
                _self.accountEditConfig = _self.$res.deepClone(baseAccountEditConfig);
            }
            /* 角色管理 */
            this.role_Msg = roleTable();
            this.createRoleDialogConfig = roleDialogForm();
            this.createRoleFormConfig2 = createRoleForm2();
            //获取权限列表
            let baseRoleFormConfig_id = roleDialogForm();
            let baseRoleFormConfig_id2 = createRoleForm2();
            if (!window.permit_list) {
                let permitList = new Promise((resolve, reject) => {
                    _self.$res.getSingleData(_self, '/Permit/get_cms_permissions/').then((response) => {
                        if (response) {
                            resolve(response);
                        } else {
                            reject('error');
                        }
                    });
                });
                permitList.then((response) => {
                    window.permit_list = response;
                    fillRole(response);
                }, () => {
                    _self.$message.error('获取权限列表失败');
                });
            } else {
                fillRole(window.permit_list);
            }
            function fillRole(response) {
                response.map((val, i) => {
                    if (i >= 0) {
                        baseRoleFormConfig_id.formEle[2].options.push({
                            key: val.permit_id,
                            label: val.permit_desc
                        });
                        baseRoleFormConfig_id2.formEle[3].options.push({
                            key: val.permit_id,
                            label: val.permit_desc
                        });
                    }
                });
                baseRoleFormConfig_id.formEle[2].options = baseRoleFormConfig_id.formEle[2].options.sort((a, b) => {
                    return a.key > b.key ? 1 : -1
                });
                baseRoleFormConfig_id2.formEle[3].options = baseRoleFormConfig_id2.formEle[3].options.sort((a, b) => {
                    return a.key > b.key ? 1 : -1
                });
                _self.createRoleDialogConfig = _self.$res.deepClone(baseRoleFormConfig_id);
                _self.createRoleFormConfig2 = _self.$res.deepClone(baseRoleFormConfig_id2);
            }
            /* 账号管理  - 查询 */
            this.$res.getSingleData(this, '/Backend/get_account/').then((response) => {
                this.account_Msg.data = [];
                this.account_Msg.data = response;
            });
            /* 角色管理 - 查询 */
            this.$res.getSingleData(this, '/Backend/get_role/').then((response) => {
                this.role_Msg.data = [];
                this.role_Msg.data = response;
            });
            /* 权限管理 - 查询 */
            this.$res.getSingleData(this, '/Permit/get_cms_permissions/').then((response) => {
                this.permit_Msg.data = [];
                this.permit_Msg.data = response;
            });
        }
    }
</script>
