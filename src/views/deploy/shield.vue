<template>
    <div id="container">
        <h1 class="h1-title">游戏屏蔽</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="新增屏蔽" name="0">
                    <ele-form :config="shield_config" v-on:receive="shield_submit"></ele-form>
                </el-collapse-item>
                <el-collapse-item title="屏蔽列表" name="1">
                    <el-button type="success" plain @click.native="query_btn">查 询</el-button>
                    <table-option :parent-message="shield_list_msg" v-on:outputrow="shield_list_recieveRow"
                                  v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
            </el-collapse>
        </div>
        <el-dialog title="编辑" width="98%" :visible.sync="editShielDialog">
            <ele-form :config="editShielDialogConfig" v-on:receive="editShielDialogSubmit"
                      :eventname="editShielDialogEvent" :defaultdata="editShielDialogHtml"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editShielDialog = false">取 消</el-button>
                <el-button type="primary" @click="editShielDialogName">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {
        shieldForm,
        editShieldDialogForm
    } from '@/form/config/shield'
    import {
        shieldTable
    } from '@/table/config/shield'

    export default {
        name: 'shield',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                loading: false,
                activeName: ['0'],
                shield_config: shieldForm(),
                shield_list_msg: shieldTable(),
                /* 编辑 */
                editShielDialog: false,
                editShielDialogConfig: editShieldDialogForm(),
                editShielDialogEvent: false,
                editShielDialogHtml: {},
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {
        },
        /* 需要事件调用的方法放在methods内 */
        methods: {
            /* 新增屏蔽 */
            shield_submit(arg) {
                let params = {
                    GameModule: arg[0].GameModule,
                    DeviceType: arg[0].DeviceType,
                    AccountType: JSON.stringify(arg[0].AccountType),
                    ChannelID: JSON.stringify(arg[0].ChannelID),
                    RechargeInterval: arg[0].RechargeInterval,
                    VipLevel: arg[0].VipLevel,
                    PlayerLevelInterval: arg[0].PlayerLevelInterval,
                    PlayerIDInterval: arg[0].PlayerIDInterval,
                    StartRegisterDate: arg[0].query_start_time,
                    EndRegisterDate: arg[0].query_end_time,
                    StartShieldDate: arg[0].shield_start_time,
                    EndShieldDate: arg[0].shield_end_time,
                    CumnlativeLen: arg[0].CumnlativeLen,
                    ShieldType: arg[0].ShieldType,
                    Pusher: localStorage.getItem('Username'),
                };
                this.$res.postData(this, '/Shield/setup_shield/', params).then((response) => {
                    if (response.code == 0) {
                        this.$message.success(response.msg);
                    } else {
                        this.$message.error(response.msg);
                    }
                });
            },
            /* 屏蔽列表 */
            query_btn() {
                this.loading = true;
                this.$res.postData(this, '/Shield/query_shield/').then((res) => {
                    this.shield_list_msg.data = [];
                    this.shield_list_msg.data = res;
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            },
            shield_list_recieveRow(arg) {
                switch (arg[2]) {
                    case 'edit':
                        this.editShielDialog = true;
                        this.editShielDialogHtml = arg[1];
                        break;
                    case 'del':
                        this.$confirm('此操作将会永久删除该信息，是否继续？', '温馨提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.$res.postData(this, '/Shield/delete_shield/', arg[1]).then((response) => {
                                if (response.code == 0) {
                                    this.$res.postData(this, '/Shield/query_shield/').then((res) => {
                                        this.shield_list_msg.data = [];
                                        this.shield_list_msg.data = res;
                                    });
                                    this.$message.success(response.msg);
                                } else {
                                    this.$message.error(response.msg);
                                }
                            })
                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: '已取消删除'
                            });
                        });
                        break;
                }
            },
            editShielDialogName() {
                this.editShielDialogEvent = 'submitEvent';
            },
            /* 编辑 */
            editShielDialogSubmit(arg) {
                this.editShielDialogEvent = false;
                let params = {
                    ID: arg[0].ID,
                    GameModule: arg[0].GameModule,
                    DeviceType: arg[0].DeviceType,
                    AccountType: JSON.stringify(arg[0].AccountType),
                    ChannelID: JSON.stringify(arg[0].ChannelID),
                    RechargeInterval: arg[0].RechargeInterval,
                    VipLevel: arg[0].VipLevel,
                    PlayerLevelInterval: arg[0].PlayerLevelInterval,
                    PlayerIDInterval: arg[0].PlayerIDInterval,
                    StartRegisterDate: arg[0].query_start_time,
                    EndRegisterDate: arg[0].query_end_time,
                    StartShieldDate: arg[0].shield_start_time,
                    EndShieldDate: arg[0].shield_end_time,
                    CumnlativeLen: arg[0].CumnlativeLen,
                    ShieldType: arg[0].ShieldType,
                    Pusher: localStorage.getItem('Username'),
                };
                this.$res.postData(this, '/Shield/edit_shield/', params).then((response) => {
                    if (response.code == 0) {
                        this.$res.postData(this, '/Shield/query_shield/').then((res) => {
                            this.shield_list_msg.data = [];
                            this.shield_list_msg.data = res;
                        });
                        this.editShielDialog = false;
                        this.$message.success(response.msg);
                    } else {
                        this.$message.error(response.msg);
                    }
                });
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            this.$res.postData(this, '/Shield/query_shield/').then((res) => {
                this.shield_list_msg.data = [];
                this.shield_list_msg.data = res;
            });
        }
    }
</script>


