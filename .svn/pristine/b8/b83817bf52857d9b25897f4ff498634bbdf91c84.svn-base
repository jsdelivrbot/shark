<template>
    <div id="container">
        <h1 class="h1-title">渠道商管理</h1>
        <div class="cms-content">
            <el-row>
                <el-col :span="6" :offset="18" style="margin-bottom: 20px;">
                    <el-button type="success" @click="channel_query">查 询</el-button>
                    <el-button type="warning" @click="channel_create">新增渠道商</el-button>
                </el-col>
                <el-col :span="24">
                    <table-option :parent-message="channelMaster_Msg" v-on:outputrow='channelMasterTableEvent' v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-col>
            </el-row>
        </div>
        <!-- 新增渠道商 -->
        <el-dialog title="新增渠道商" width='30%' :visible.sync="createChannelFormDialog">
            <ele-form :config="createChannelFormConfig" :eventname="submitCreateChannelEventName" v-on:receive="submitCreateChannel">
            </ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="createChannelFormDialog = false">取 消</el-button>
                <el-button type="primary" @click="submitCreateChannelEvent">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 渠道商编辑 -->
        <el-dialog title="渠道商编辑" width="30%" :visible.sync="editChannelMasterDialog">
            <ele-form :config="editChannelMasterConfig" :eventname="editChannelMasterEventName" v-on:receive="editChannelMasterSubmit" :defaultdata="editChannelMasterHtml"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editChannelMasterDialog = false">取 消</el-button>
                <el-button type="primary" @click="editChannelMasterEvent">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {
        newCreateChannelMasterConfig,
        editChannelMasterDialogForm
    } from '@/form/config/channel_master'
    import {
        channleMasterTable
    } from '@/table/config/channel_master'
    export default {
        name: 'channel_master',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                loading: false,
                channelMaster_Msg: channleMasterTable(),
                createChannelFormDialog: false,
                createChannelFormConfig: newCreateChannelMasterConfig(),
                submitCreateChannelEventName: false,
                editChannelMasterDialog: false,
                editChannelMasterConfig: editChannelMasterDialogForm(),
                editChannelMasterEventName: false,
                editChannelMasterHtml: {}
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            channel_query() {
                this.loading = true;
                this.$res.postData(this, '/Channel/query_channel_master_info/').then((response) => {
                    this.channelMaster_Msg.data = [];
                    this.channelMaster_Msg.data = response;
                    this.loading = false;
                    this.$message.success('查询成功！');
                });
            },
            channel_create() {
                this.createChannelFormDialog = true;
            },
            submitCreateChannel(arg) {
                this.submitCreateChannelEventName = false;
                this.$res.postData(this, '/Channel/creat_channel_master_info/', arg[0]).then((response) => {
                    if (response.code == 0) {
                        this.$res.postData(this, '/Channel/query_channel_master_info/').then((response) => {
                            this.channelMaster_Msg.data = [];
                            this.channelMaster_Msg.data = response;
                        });
                        this.createChannelFormDialog = false;
                        this.$message.success(response.msg);
                    } else {
                        this.$message.error(response.msg);
                    }
                });
            },
            submitCreateChannelEvent() {
                this.submitCreateChannelEventName = 'submitEvent';
            },
            channelMasterTableEvent(arg) {
                switch (arg[2]) {
                    case 'edit':
                        /* 内容为 arg[1] */
                        this.editChannelMasterDialog = true;
                        this.editChannelMasterHtml = arg[1];
                        break;
                    case 'delete':
                        this.$confirm('此操作将永久删除该文件, 是否继续？', '温馨提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            /* 接口api */
                            this.$res.postData(this, '/Channel/delete_channel_master/', arg[1]).then((response) => {
                                if (response.code == 0) {
                                    this.$res.postData(this, '/Channel/query_channel_master_info/').then((response) => {
                                        this.channelMaster_Msg.data = [];
                                        this.channelMaster_Msg.data = response;
                                    });
                                    this.$message.success(response.msg);
                                } else {
                                    this.$message.error(response.msg);
                                }
                            });
                        }).catch(() => {
                            this.$message.error('已取消删除');
                        });
                        break;
                }
            },
            editChannelMasterSubmit(arg) {
                this.editChannelMasterEventName = false;
                this.$res.postData(this, '/Channel/edit_channel_master/', arg[0]).then((response) => {
                    if (response.code == 0) {
                        this.$res.postData(this, '/Channel/query_channel_master_info/').then((response) => {
                            this.channelMaster_Msg.data = [];
                            this.channelMaster_Msg.data = response;
                        });
                        this.editChannelMasterDialog = false;
                        this.$message.success(response.msg);
                    } else {
                        this.$message.error(response.msg);
                    }
                });
            },
            editChannelMasterEvent() {
                this.editChannelMasterEventName = 'submitEvent';
            },
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            this.$res.postData(this, '/Channel/query_channel_master_info/').then((response) => {
                this.channelMaster_Msg.data = [];
                this.channelMaster_Msg.data = response;
            });
        }
    }
</script>


