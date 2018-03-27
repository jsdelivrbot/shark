<template>
    <div id="container">
        <h1 class="h1-title">活动配置</h1>
        <div class="cms-content">
            <!--功能按钮-->
            <el-row>
                <el-col :span="6">
                    <el-button type="success" @click="add_activity">新建活动</el-button>
                    <el-button type="warning" @click="add_task">新建任务</el-button>
                </el-col>
            </el-row>
            <br />
            <el-collapse v-model="activeName">
                <el-collapse-item title="活动列表" name="0">
                    <el-row>
                        <el-col :span="4" :offset="18">
                            <el-button type="success" @click="activity_query">查 询</el-button>
                        </el-col>
                    </el-row>
                    <table-option :parent-message="activity_Msg" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="任务列表" name="0">
                    <ele-form :config="task_config" v-on:receive="task_submit"></ele-form>
                    <table-option :parent-message="task_Msg" v-on:outputrow="task_recieveRow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
            </el-collapse>
        </div>
        <el-dialog title="新增活动" size="tiny" :visible.sync="addActivityDialog">
            <ele-form :config="addActivityDialogConfig" v-on:receive="addActivityDialogSubmit" :eventname="addActivityDialogName"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addActivityDialog = false">取 消</el-button>
                <el-button type="success" @click="activitySubmitName">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="新增任务" size="small" :visible.sync="addTaskDialog">
            <ele-form :config="addTaskDialogConfig" v-on:receive="addTaskDialogSubmit" :eventname="addTaskDialogName"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addTaskDialog = false">取 消</el-button>
                <el-button type="success" @click="taskSubmitName">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="编辑" size="small" :visible.sync="editTaskDialog">
            <ele-form :config="editTaskDialogConfig" v-on:receive="editTaskDialogSubmit" :eventname="editTaskDialogName" :defaultdata="editTaskDialogHtml"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editTaskDialog = false">取 消</el-button>
                <el-button type="success" @click="editTaskSubmitName">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {
    activityForm,
    addActivityDialogForm,
    addTaskDialogForm,
    editTaskDialogForm
} from '@/form/config/activity_config'
import {
    taskTable,
    activityTable
} from '@/table/config/activity_config'
export default {
    name: 'activity_config',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            activeName: '0',
            loading: false,
            /* 任务列表 */
            task_config: activityForm(),
            task_Msg: taskTable(),
            /* 活动列表 */
            activity_Msg: activityTable(),
            /* 新增活动 */
            addActivityDialog: false,
            addActivityDialogConfig: addActivityDialogForm(),
            addActivityDialogName: false,
            /* 新增任务 */
            addTaskDialog: false,
            addTaskDialogConfig: addTaskDialogForm(),
            addTaskDialogName: false,
            /* 编辑 */
            editTaskDialog: false,
            editTaskDialogConfig: editTaskDialogForm(),
            editTaskDialogName: false,
            editTaskDialogHtml: {}
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 任务列表 */
        task_submit(arg) {
            switch (arg[1]) {
                case 'query':
                    this.loading = true;
                    this.$res.postData(this, '/Activitypoints/get_task_list/').then((response) => {
                        this.task_Msg.data = [];
                        this.task_Msg.data = response;
                        this.loading = false;
                        this.$message.success('查询成功');
                    });
                    break;
            }
        },
        task_recieveRow(arg) {
            switch (arg[2]) {
                case 'edit':
                    this.editTaskDialog = true;
                    this.editTaskDialogHtml = arg[1];
                    break;
                case 'del':
                    this.$confirm('此操作将永久删除该积分任务。是否继续？', '温馨提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$res.postData(this, '/Activitypoints/delete_task/', {
                            ActivityID: arg[1].ActivityID,
                            PointTaskTypeID: arg[1].PointTaskTypeID
                        }).then((response) => {
                            if (response.code == 0) {
                                this.loading = true;
                                this.$res.postData(this, '/Activitypoints/get_task_list/').then((response) => {
                                    this.task_Msg.data = [];
                                    this.task_Msg.data = response;
                                    this.loading = false;
                                    this.$message.success('删除成功');
                                });
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
        /* 活动列表 */
        activity_query() {
            this.loading = true;
            this.$res.postData(this, '/Activitypoints/get_activity_list/').then((response) => {
                this.activity_Msg.data = [];
                this.activity_Msg.data = response;
                this.loading = false;
                this.$message.success('查询成功');
            });
        },
        /* 新增活动 */
        add_activity() {
            this.addActivityDialog = true;
        },
        addActivityDialogSubmit(arg) {
            this.$res.postData(this, '/Activitypoints/add_activity/', {
                ActivityID: arg[0].ActivityID,
                PointID: arg[0].PointID,
                Describe: arg[0].Describe,
                query_start_time: arg[0].query_start_time,
                query_end_time: arg[0].query_end_time
            }).then((response) => {
                if (response.code == 0) {
                    this.loading = true;
                    this.$res.postData(this, '/Activitypoints/get_activity_list/').then((res) => {
                        this.activity_Msg.data = [];
                        this.activity_Msg.data = res;
                        this.loading = false;
                        this.$message.success('新增成功');
                    });
                } else if (response.code == -10005) {
                    this.$message.error(response.msg);
                } else {
                    this.$message.error('新增失败');
                }
            });
            this.addActivityDialog = false;
            this.addActivityDialogName = false;
        },
        activitySubmitName() {
            this.addActivityDialogName = 'submitEvent';
        },
        /* 新增任务 */
        add_task() {
            this.addTaskDialog = true;
        },
        addTaskDialogSubmit(arg) {
            this.$res.postData(this, '/Activitypoints/add_task/', arg[0]).then((response) => {
                if (response.code == 0) {
                    this.loading = true;
                    this.$res.postData(this, '/Activitypoints/get_task_list/').then((res) => {
                        this.task_Msg.data = [];
                        this.task_Msg.data = res;
                        this.loading = false;
                        this.$message.success('新增成功');
                    });
                } else if (response.code == -10005) {
                    this.$message.error(response.msg);
                } else if (response.code == -10006) {
                    this.$message.error(response.msg);
                }
            });
            this.addTaskDialog = false;
            this.addTaskDialogName = false;
        },
        taskSubmitName() {
            this.addTaskDialogName = 'submitEvent';
        },
        editTaskDialogSubmit(arg) {
            this.$res.postData(this, '/Activitypoints/edit_task/', arg[0]).then((response) => {
                if (response.code == 0) {
                    this.loading = true;
                    this.$res.postData(this, '/Activitypoints/get_task_list/').then((res) => {
                        this.task_Msg.data = [];
                        this.task_Msg.data = res;
                        this.loading = false;
                        this.$message.success('编辑成功');
                    });
                } else {
                    this.$message.error('修改失败');
                }
            });
            this.editTaskDialog = false;
            this.editTaskDialogName = false;
        },
        editTaskSubmitName() {
            this.editTaskDialogName = 'submitEvent';
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        let _self = this;
        let baseActivityTaskConfig = activityForm();
        let baseTaskDialogConfig = addTaskDialogForm();
        let editTaskDialog = editTaskDialogForm();
        /* 任务类型 */
        if (!window.taskType) {
            let task_list = new Promise((resolve, reject) => {
                _self.$res.getSingleData(_self, '/Activitypoints/point_task_type_id/').then((response) => {
                    if (response) {
                        resolve(response);
                    } else {
                        reject('error');
                    }
                });
            });
            task_list.then((response) => {
                window.taskType = response;
                fillTaskID(response);
            }, () => {
                _self.$message.error('获取任务类型列表失败');
            });
        } else {
            fillTaskID(window.taskType);
        }

        function fillTaskID(response) {
            response.map((val, i) => {
                if (i >= 0) {
                    baseActivityTaskConfig.formEle[1].options.push({
                        value: val.PointTaskTypeID,
                        label: val.TaskDescribe + '-' + val.PointTaskTypeID
                    });
                    baseTaskDialogConfig.formEle[1].options.push({
                        value: val.PointTaskTypeID,
                        label: val.TaskDescribe + '-' + val.PointTaskTypeID
                    });
                    editTaskDialog.formEle[1].options.push({
                        value: val.PointTaskTypeID,
                        label: val.TaskDescribe + '-' + val.PointTaskTypeID
                    });
                }
            });
            _self.task_config = _self.$res.deepClone(baseActivityTaskConfig);
            _self.addTaskDialogConfig = _self.$res.deepClone(baseTaskDialogConfig);
            _self.editTaskDialogConfig = _self.$res.deepClone(editTaskDialog);
        }
        /* 活动类型 */
        if (!window.activityType) {
            let activity_list = new Promise((resolve, reject) => {
                _self.$res.getSingleData(_self, '/Activitypoints/activity_pz/').then((response) => {
                    if (response) {
                        resolve(response);
                    } else {
                        reject('error');
                    }
                });
            });
            activity_list.then((response) => {
                window.activityType = response;
                fillActivityID(response);
            }, () => {
                _self.$message.error('获取活动类型列表失败');
            });
        } else {
            fillActivityID(window.activityType);
        }

        function fillActivityID(response) {
            response.map((val, i) => {
                if (i >= 0) {
                    baseActivityTaskConfig.formEle[0].options.push({
                        value: val.ActivityID,
                        label: val.Describe
                    });
                    baseTaskDialogConfig.formEle[0].options.push({
                        value: val.ActivityID,
                        label: val.Describe
                    });
                    editTaskDialog.formEle[0].options.push({
                        value: val.ActivityID,
                        label: val.Describe
                    });
                }
            });
            _self.task_config = _self.$res.deepClone(baseActivityTaskConfig);
            _self.addTaskDialogConfig = _self.$res.deepClone(baseTaskDialogConfig);
            _self.editTaskDialogConfig = _self.$res.deepClone(editTaskDialog);
        }

        /* 活动列表 - 查询 */
        this.$res.postData(this, '/Activitypoints/get_activity_list/').then((response) => {
            this.activity_Msg.data = [];
            this.activity_Msg.data = response;
            this.$message.success('查询成功');
        });
        /* 任务列表 - 查询 */
        this.$res.postData(this, '/Activitypoints/get_task_list/').then((response) => {
            this.task_Msg.data = [];
            this.task_Msg.data = response;
            this.$message.success('查询成功');
        });
    }
}

</script>
