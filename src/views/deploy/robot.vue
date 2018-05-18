<template>
    <div id="container">
        <h1 class="h1-title">AI配置</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="机器人管理器" name="0">
                    <ele-form :config="robotConfig" v-on:receive="robotSubmit" :defaultdata="robotConfigHtml"></ele-form>
                </el-collapse-item>
                <el-collapse-item title="机器人列表" name="1">
                    <el-button type="success" @click="robot_query">查 询</el-button>
                    <table-option :parent-message="robotMaster_Msg" v-on:outputrow='robotMasterTableEvent' v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
            </el-collapse>
        </div>
        <el-dialog title="机器人批次编辑" width="90%" :visible.sync="editRobotDialog">
            <ele-form :config="robotDialogConfig" v-on:receive="robotDialogSubmit" :eventname="robotDialogEvent" :defaultdata="robotDialogConfigHtml"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editRobotDialog = false">取 消</el-button>
                <el-button type="primary" @click="robot_dialog_name">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {
        robotForm,
        robotDialogForm
    } from '@/form/config/robot'
    import {
        robotTable
    } from '@/table/config/robot'
    export default {
        name: 'robot',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                activeName: ['0'],
                /* 机器人管理器 */
                robotConfig: robotForm(),
                robotConfigHtml: {
                    AndroidCount: 200,
                    // ServiceMode: [0],
                    TakeMinScore: 10000,
                    TakeMaxScore: 1000000,
                    EnterTime: 1,
                    LeaveTime: 86399,
                    EnterMinInterval: 1,
                    EnterMaxInterval: 1,
                    LeaveMinInterval: 10000,
                    LeaveMaxInterval: 1000000,
                    SwitchMinInnings: 5,
                    SwitchMaxInnings: 10,
                    AndroidCountMember0: 200,
                    AndroidCountMember1: 20,
                    AndroidCountMember2: 20,
                    AndroidCountMember3: 20,
                    AndroidCountMember4: 20,
                    AndroidCountMember5: 20,
                },
                /* 机器人列表 */
                loading: false,
                robotMaster_Msg: robotTable(),
                editRobotDialog: false,
                robotDialogConfig: robotDialogForm(),
                robotDialogConfigHtml: {},
                robotDialogEvent: false,
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            /* 机器人管理器 */
            robotSubmit(arg) {
                let ServiceMode = eval(arg[0].ServiceMode.join('+'));
                let params = {
                    ServerID: arg[0].ServerID,
                    ServiceMode: ServiceMode,
                    AndroidCount: arg[0].AndroidCount,
                    EnterTime: arg[0].EnterTime,
                    LeaveTime: arg[0].LeaveTime,
                    EnterMinInterval: arg[0].EnterMinInterval,
                    EnterMaxInterval: arg[0].EnterMaxInterval,
                    LeaveMinInterval: arg[0].LeaveMinInterval,
                    LeaveMaxInterval: arg[0].LeaveMaxInterval,
                    TakeMinScore: arg[0].TakeMinScore,
                    TakeMaxScore: arg[0].TakeMaxScore,
                    SwitchMinInnings: arg[0].SwitchMinInnings,
                    SwitchMaxInnings: arg[0].SwitchMaxInnings,
                    AndroidCountMember0: arg[0].AndroidCountMember0,
                    AndroidCountMember1: arg[0].AndroidCountMember1,
                    AndroidCountMember2: arg[0].AndroidCountMember2,
                    AndroidCountMember3: arg[0].AndroidCountMember3,
                    AndroidCountMember4: arg[0].AndroidCountMember4,
                    AndroidCountMember5: arg[0].AndroidCountMember5,
                };
                this.$res.postData(this, '/Robot/setup_robot_info/', params).then((res) => {
                    if (res.code == 0) {
                        this.$message.success(res.msg);
                    } else {
                        this.$message.success(res.msg);
                    }
                });
            },
            /* 机器人列表 */
            robot_query() {
                this.loading = true;
                this.$res.postData(this, '/Robot/query_robot_batch/').then((res) => {
                    this.robotMaster_Msg.data = [];
                    this.robotMaster_Msg.data = res;
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            },
            /* 编辑，删除操作 */
            robotMasterTableEvent(arg) {
                console.log(arg);
                switch (arg[2]) {
                    case 'edit':
                        this.editRobotDialog = true;
                        this.robotDialogConfigHtml = arg[1];
                        break;
                    case 'del':
                        this.$confirm('此操作将会永久删除该批次机器人，是否继续？', '温馨提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.$res.postData(this, '/Robot/delete_robot/', arg[1]).then((response) => {
                                if (response.code == 0) {
                                    this.$res.postData(this, '/Robot/query_robot_batch/').then((res) => {
                                        this.robotMaster_Msg.data = [];
                                        this.robotMaster_Msg.data = res;
                                    });
                                    this.$message.success(response.msg);
                                } else {
                                    this.$message.error(res.msg);
                                }
                            });
                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: '已取消删除'
                            });
                        });
                        break;
                }
            },
            robotDialogSubmit(arg) {
                this.robotDialogEvent = false;
                this.$res.postData(this, '/Robot/edit_robot_batch/', arg[0]).then((response) => {
                    if (response.code == 0) {
                        this.$res.postData(this, '/Robot/query_robot_batch/').then((res) => {
                            this.robotMaster_Msg.data = [];
                            this.robotMaster_Msg.data = res;
                        });
                        this.editRobotDialog = false;
                        this.$message.success(response.msg);
                    } else {
                        this.$message.error(response.msg);
                    }
                });
            },
            robot_dialog_name() {
                this.robotDialogEvent = 'sumitEvent';
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            this.$res.postData(this, '/Robot/query_robot_batch/').then((res) => {
                this.robotMaster_Msg.data = [];
                this.robotMaster_Msg.data = res;
            });
            /* 获取房间列表 */
            let _self = this;
            let baseRobotConfig = robotForm();
            let baseRobotDialogConfig = robotDialogForm();
            if (!window.room_info) {
                let room_list = new Promise((resolve, reject) => {
                    _self.$res.getSingleData(_self, '/Cmsbase/room_info/').then((response) => {
                        if (response) {
                            resolve(response);
                        } else {
                            reject('error');
                        }
                    });
                });
                room_list.then((response) => {
                    window.room_info = response;
                    fillRoomlist(response);
                }, () => {
                    _self.$message.errro('获取房间列表失败');
                });
            } else {
                fillRoomlist(window.room_info);
            }
            function fillRoomlist(response) {
                response.map((val, i) => {
                    if (i >= 0) {
                        baseRobotConfig.formEle[0].options.push({
                            value: val.ServerID,
                            label: val.ServerName + '--' + val.ServerID
                        });
                        baseRobotDialogConfig.formEle[0].options.push({
                            value: val.ServerID,
                            label: val.ServerName + '--' + val.ServerID
                        });
                    }
                });
                _self.robotConfig = _self.$res.deepClone(baseRobotConfig);
                _self.robotDialogConfig = _self.$res.deepClone(baseRobotDialogConfig);
            }
        }
    }
</script>


