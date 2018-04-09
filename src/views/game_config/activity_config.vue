<template>
    <div id="container">
        <h1 class="h1-title">活动配置</h1>
        <div class="cms-content">
            <el-tabs type="border-card">
                <el-tab-pane label="活动模板">
                    <!--功能按钮-->
                    <el-button type="success" @click="add_activity" plain>新建活动模板1</el-button>
                    <el-button type="success" @click.native="add_activity_2" plain>新建活动模板2</el-button>
                    <el-button type="warning" @click.native="add_task_2" plain>配置 Bannar + 任务链</el-button>
                    <el-button type="success" @click.native="add_activity_3" plain>新建活动模板3</el-button>
                    <el-button type="warning" @click="query_activity" plain>查 询</el-button>
                    <br />
                    <br />
                    <table-option :parent-message="temp1_Msg" v-loading="temp1loading" element-loading-text="拼命加载中"></table-option>
                </el-tab-pane>
                <el-tab-pane label="公告界面">
                    <el-button type="success" @click.native="add_notice_1" plain>新建公告模板1</el-button>
                    <el-button type="success" @click.native="add_notice_2" plain>新建公告模板2</el-button>
                    <el-button type="success" @click.native="add_notice_3" plain>新建公告模板3</el-button>
                    <el-button type="primary" @click.native="query_notice_btn" plain>查 询</el-button>
                    <br />
                    <br />
                    <table-option :parent-message="notice_Msg" v-loading="noticeloading" element-loading-text="拼命加载中"></table-option>
                </el-tab-pane>
            </el-tabs>
        </div>
        <!-- 活动模板1 -->
        <el-dialog title="新建活动模板1 -- 全宣传图" width="60%" :visible.sync="temp_1_dialog">
            <ele-form :config="temp_1_dialog_config" v-on:receive="temp_1_dialog_submit" :eventname="temp_1_dialog_event" :defaultdata="temp1DialogHtml"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="temp_1_dialog = false">取 消</el-button>
                <el-button type="primary" @click="temp_1_dialog_name">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 活动模板2 -->
        <el-dialog title="新建活动模板2 -- Bannar+任务链" width="60%" :visible.sync="temp_2_dialog">
            <ele-form :config="temp_2_dialog_config" v-on:receive="temp_2_dialog_submit" :eventname="temp_2_dialog_event" :defaultdata="temp2DialogHtml"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="temp_2_dialog = false">取 消</el-button>
                <el-button type="primary" @click="temp_2_dialog_name">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 活动模板3 -->
        <el-dialog title="新建活动模板3 -- Bannar+功能区" width="60%" :visible.sync="temp_3_dialog">
            <ele-form :config="temp_3_dialog_config" v-on:receive="temp_3_dialog_submit" :eventname="temp_3_dialog_event" :defaultdata="temp3DialogHtml"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="temp_3_dialog = false">取 消</el-button>
                <el-button type="primary" @click="temp_3_dialog_name">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 活动模板4 - 公告1 -->
        <el-dialog title="新建公告模板1" width="60%" :visible.sync="temp_4_notice_1_dialog">
            <ele-form :config="temp_4_notice_dialog_config" v-on:receive="temp_4_notice_dialog_submit" :eventname="temp_4_notice_dialog_event" :defaultdata="temp4NoticeDialogHtml"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="temp_4_notice_1_dialog = false">取 消</el-button>
                <el-button type="primary" @click="temp_4_notice_dialog_name">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 活动模板4 - 公告2 -->
        <el-dialog title="新建公告模板1" width="60%" :visible.sync="temp_4_notice_2_dialog">
            <ele-form :config="temp_4_notice2_dialog_config" v-on:receive="temp_4_notice2_dialog_submit" :eventname="temp_4_notice2_dialog_event" :defaultdata="temp4NoticeDialogHtml1"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="temp_4_notice_2_dialog = false">取 消</el-button>
                <el-button type="primary" @click="temp_4_notice2_dialog_name">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 活动模板4 - 公告3 -->
        <el-dialog title="新建公告模板1" width="60%" :visible.sync="temp_4_notice_3_dialog">
            <ele-form :config="temp_4_notice3_dialog_config" v-on:receive="temp_4_notice3_dialog_submit" :eventname="temp_4_notice3_dialog_event" :defaultdata="temp4NoticeDialogHtml2"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="temp_4_notice_3_dialog = false">取 消</el-button>
                <el-button type="primary" @click="temp_4_notice3_dialog_name">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 活动模板2 配置 Banner + 任务链 -->
        <el-dialog title="配置 Banner + 任务链" width="90%" :visible.sync="task_2_dialog">
            <ele-form :config="task_2_dialog_config" v-on:receive="task_2_dialog_submit" :eventname="task_2_dialog_event"></ele-form>
            <br />
            <el-row>
                <attr-and-item v-on:attrAndItem="refreshAttrAndItem"></attr-and-item>
            </el-row>
            <div slot="footer" class="dialog-footer">
                <el-button @click="task_2_dialog = false">取 消</el-button>
                <el-button type="primary" @click="task_2_dialog_name">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {
        tempDialogForm,
        tempDialogForm2,
        tempDialogForm3,
        tempDialogForm4Notice1,
        tempDialogForm4Notice2,
        tempDialogForm4Notice3,
        task2DialogForm
    } from '@/form/config/activity_config'
    import {
        tempTable,
        noticeTable
    } from '@/table/config/activity_config'
    import attrAndItem from '@/components/libs/attrAndItem'
    export default {
        name: 'activity_config',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                /* 活动模板1 */
                temp_1_dialog: false,
                temp_1_dialog_config: tempDialogForm(),
                temp_1_dialog_event: false,
                temp1_Msg: tempTable(),
                temp1loading: false,
                temp1DialogHtml: {
                    Classify: 1,
                    DeviceType: 1,
                    AccountType: 1
                },
                /* 活动模板2 */
                temp2DialogHtml: {
                    Classify: 1,
                    DeviceType: 1,
                    AccountType: 1
                },
                temp_2_dialog: false,
                temp_2_dialog_config: tempDialogForm2(),
                temp_2_dialog_event: false,
                task_2_dialog: false,
                task_2_dialog_config: task2DialogForm(),
                task_2_dialog_event: false,
                editAttrAndItem: [{}, {}],
                /* 活动模板3 */
                temp_3_dialog: false,
                temp_3_dialog_config: tempDialogForm3(),
                temp_3_dialog_event: false,
                temp3DialogHtml: {
                    Classify: 1,
                    DeviceType: 1,
                    AccountType: 1
                },
                /* 活动模板4 */
                mubanName: '',
                notice_Msg: noticeTable(),
                noticeloading: false,
                // 公告1
                temp_4_notice_1_dialog: false,
                temp_4_notice_dialog_config: tempDialogForm4Notice1(),
                temp_4_notice_dialog_event: false,
                temp4NoticeDialogHtml: {
                    Classify: 2,
                    DeviceType: 1,
                    AccountType: 1
                },
                // 公告2
                temp_4_notice_2_dialog: false,
                temp_4_notice2_dialog_config: tempDialogForm4Notice2(),
                temp_4_notice2_dialog_event: false,
                temp4NoticeDialogHtml1: {
                    Classify: 2,
                    DeviceType: 1,
                    AccountType: 1
                },
                // 公告3
                temp_4_notice_3_dialog: false,
                temp_4_notice3_dialog_config: tempDialogForm4Notice3(),
                temp_4_notice3_dialog_event: false,
                temp4NoticeDialogHtml2: {
                    Classify: 2,
                    DeviceType: 1,
                    AccountType: 1
                },
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            /* 活动模板1 */
            query_activity() {
                this.temp1loading = true;
                this.$res.postData(this, '/Activity/query_activity/', {
                    tempid: 1
                }).then((response) => {
                    this.temp1_Msg.data = [];
                    this.temp1_Msg.data = response;
                    this.temp1loading = false;
                    this.$message.success('查询成功');
                });
            },
            add_activity() {
                this.temp_1_dialog = true;
            },
            temp_1_dialog_submit(arg) {
                let param = {
                    ActivityID: arg[0].ActivityID,
                    ActivityName: arg[0].ActivityName,
                    Classify: arg[0].Classify,
                    SortID: arg[0].SortID,
                    StartTime: arg[0].StartTime,
                    EndTime: arg[0].EndTime,
                    BgImage: arg[0].BgImage,
                    DeviceType: arg[0].DeviceType,
                    AccountType: arg[0].AccountType,
                    ChannelID: arg[0].ChannelID,
                    Recharge: arg[0].Recharge,
                    RegisterDate1: arg[0].RegisterDate1,
                    RegisterDate2: arg[0].RegisterDate2,
                    PlayerID: arg[0].PlayerID,
                    ImageUrl: arg[0].ImageUrl,
                    LocationUrl: arg[0].LocationUrl,
                    WebUrl: arg[0].WebUrl,
                    TempID: 1
                };
                this.$res.postData(this, '/Activity/add_activity/', param).then((response) => {
                    this.temp_1_dialog = false;
                    this.temp_1_dialog_event = false;
                    if (response.code == 0) {
                        this.$message.success(response.msg);
                    } else {
                        this.$message.error(response.msg);
                    }
                });
            },
            temp_1_dialog_name() {
                this.temp_1_dialog_event = 'submitEvent';
            },
            /* 活动模板2 */
            add_activity_2() {
                this.temp_2_dialog = true;
            },
            temp_2_dialog_submit(arg) {
                let param = {
                    ActivityID: arg[0].ActivityID,
                    ActivityName: arg[0].ActivityName,
                    Classify: arg[0].Classify,
                    SortID: arg[0].SortID,
                    StartTime: arg[0].StartTime,
                    EndTime: arg[0].EndTime,
                    BgImage: arg[0].BgImage,
                    DeviceType: arg[0].DeviceType,
                    AccountType: arg[0].AccountType,
                    ChannelID: arg[0].ChannelID,
                    Recharge: arg[0].Recharge,
                    RegisterDate1: arg[0].RegisterDate1,
                    RegisterDate2: arg[0].RegisterDate2,
                    PlayerID: arg[0].PlayerID,
                    Bannar: arg[0].Bannar,
                    TempID: 2
                };
                this.$res.postData(this, '/Activity/add_activity/', param).then((response) => {
                    this.temp_2_dialog = false;
                    this.temp_2_dialog_event = false;
                    if (response.code == 0) {
                        this.$message.success(response.msg);
                    } else {
                        this.$message.error(response.msg);
                    }
                });
            },
            temp_2_dialog_name() {
                this.temp_2_dialog_event = 'submitEvent';
            },
            // 配置 Banner + 任务链
            add_task_2() {
                this.task_2_dialog = true;
            },
            task_2_dialog_submit(arg) {
                let param = {
                    ActivityID: arg[0].ActivityID,
                    TaskID: arg[0].TaskID,
                    SortID: arg[0].SortID,
                    TaskDesc: arg[0].TaskDesc,
                    TaskNum: arg[0].TaskNum,
                    FrontTask: arg[0].FrontTask,
                    Jump: arg[0].Jump,
                    res_and_item: JSON.stringify(this.editAttrAndItem),
                    Recharge: arg[0].Recharge,
                    DayLimitCount: arg[0].DayLimitCount,
                    WeekLimitCount: arg[0].WeekLimitCount,
                    TotalLimitCount: arg[0].TotalLimitCount
                };
                this.$res.postData(this, '/Activity/add_banner_chain/', param).then((response) => {
                    this.task_2_dialog = false;
                    this.task_2_dialog_event = false;
                    if (response.code == 0) {
                        this.$message.success(response.msg);
                    } else {
                        this.$message.error(response.msg);
                    }
                });
            },
            task_2_dialog_name() {
                this.task_2_dialog_event = 'submitEvent';
            },
            refreshAttrAndItem(arg) {
                this.editAttrAndItem = arg;
            },
            /* 活动模板3 */
            add_activity_3() {
                this.temp_3_dialog = true;
            },
            temp_3_dialog_submit(arg) {
                let param = {
                    ActivityID: arg[0].ActivityID,
                    ActivityName: arg[0].ActivityName,
                    Classify: arg[0].Classify,
                    SortID: arg[0].SortID,
                    StartTime: arg[0].StartTime,
                    EndTime: arg[0].EndTime,
                    BgImage: arg[0].BgImage,
                    DeviceType: arg[0].DeviceType,
                    AccountType: arg[0].AccountType,
                    ChannelID: arg[0].ChannelID,
                    Recharge: arg[0].Recharge,
                    RegisterDate1: arg[0].RegisterDate1,
                    RegisterDate2: arg[0].RegisterDate2,
                    PlayerID: arg[0].PlayerID,
                    Bannar: arg[0].Bannar,
                    TempID: 3
                };
                this.$res.postData(this, '/Activity/add_activity/', param).then((response) => {
                    this.temp_3_dialog = false;
                    this.temp_3_dialog_event = false;
                    if (response.code == 0) {
                        this.$message.success(response.msg);
                    } else {
                        this.$message.error(response.msg);
                    }
                });
            },
            temp_3_dialog_name() {
                this.temp_3_dialog_event = 'submitEvent';
            },
            /* 活动模板4 -- 公告1 */
            add_notice_1() {
                this.temp_4_notice_1_dialog = true;
            },
            temp_4_notice_dialog_submit(arg) {
                let param = {
                    NoticeID: arg[0].NoticeID,
                    NoticeName: arg[0].NoticeName,
                    Classify: arg[0].Classify,
                    SortID: arg[0].SortID,
                    StartTime: arg[0].StartTime,
                    EndTime: arg[0].EndTime,
                    BgImage: arg[0].BgImage,
                    DeviceType: arg[0].DeviceType,
                    AccountType: arg[0].AccountType,
                    ChannelID: arg[0].ChannelID,
                    Recharge: arg[0].Recharge,
                    RegisterDate1: arg[0].RegisterDate1,
                    RegisterDate2: arg[0].RegisterDate2,
                    PlayerID: arg[0].PlayerID,
                    Title: arg[0].Title,
                    Content: arg[0].Content,
                    Bannar: arg[0].Bannar,
                    TempID: 4
                };
                this.$res.postData(this, '/Activity/add_notice/', param).then((response) => {
                    this.temp_4_notice_1_dialog = false;
                    this.temp_4_notice_dialog_event = false;
                    if (response.code == 0) {
                        this.$message.success(response.msg);
                    } else {
                        this.$message.error(response.msg);
                    }
                });
            },
            temp_4_notice_dialog_name() {
                this.temp_4_notice_dialog_event = 'submitEvent';
            },
            /* 活动模板4 -- 公告2 */
            add_notice_2() {
                this.temp_4_notice_2_dialog = true;
            },
            temp_4_notice2_dialog_submit(arg) {
                let param = {
                    NoticeID: arg[0].NoticeID,
                    NoticeName: arg[0].NoticeName,
                    Classify: arg[0].Classify,
                    SortID: arg[0].SortID,
                    StartTime: arg[0].StartTime,
                    EndTime: arg[0].EndTime,
                    BgImage: arg[0].BgImage,
                    DeviceType: arg[0].DeviceType,
                    AccountType: arg[0].AccountType,
                    ChannelID: arg[0].ChannelID,
                    Recharge: arg[0].Recharge,
                    RegisterDate1: arg[0].RegisterDate1,
                    RegisterDate2: arg[0].RegisterDate2,
                    PlayerID: arg[0].PlayerID,
                    Title: arg[0].Title,
                    Content: arg[0].Content,
                    Bannar: arg[0].Bannar,
                    TempID: 5
                };
                this.$res.postData(this, '/Activity/add_notice/', param).then((response) => {
                    this.temp_4_notice_2_dialog = false;
                    this.temp_4_notice2_dialog_event = false;
                    if (response.code == 0) {
                        this.$message.success(response.msg);
                    } else {
                        this.$message.error(response.msg);
                    }
                });
            },
            temp_4_notice2_dialog_name() {
                this.temp_4_notice2_dialog_event = 'submitEvent';
            },
            /* 活动模板4 -- 公告3 */
            add_notice_3() {
                this.temp_4_notice_3_dialog = true;
            },
            temp_4_notice3_dialog_submit(arg) {
                let param = {
                    NoticeID: arg[0].NoticeID,
                    NoticeName: arg[0].NoticeName,
                    Classify: arg[0].Classify,
                    SortID: arg[0].SortID,
                    StartTime: arg[0].StartTime,
                    EndTime: arg[0].EndTime,
                    BgImage: arg[0].BgImage,
                    DeviceType: arg[0].DeviceType,
                    AccountType: arg[0].AccountType,
                    ChannelID: arg[0].ChannelID,
                    Recharge: arg[0].Recharge,
                    RegisterDate1: arg[0].RegisterDate1,
                    RegisterDate2: arg[0].RegisterDate2,
                    PlayerID: arg[0].PlayerID,
                    Title: arg[0].Title,
                    Content: arg[0].Content,
                    Bannar: arg[0].Bannar,
                    TempID: 6
                };
                this.$res.postData(this, '/Activity/add_notice/', param).then((response) => {
                    this.temp_4_notice_3_dialog = false;
                    this.temp_4_notice3_dialog_event = false;
                    if (response.code == 0) {
                        this.$message.success(response.msg);
                    } else {
                        this.$message.error(response.msg);
                    }
                });
            },
            temp_4_notice3_dialog_name() {
                this.temp_4_notice3_dialog_event = 'submitEvent';
            },
            /* 查询 公告列表 */
            query_notice_btn() {
                this.noticeloading = true;
                this.$res.postData(this, '/Activity/query_notice/').then((response) => {
                    this.notice_Msg.data = [];
                    this.notice_Msg.data = response;
                    this.noticeloading = false;
                    this.$message.success('查询成功');
                });
            },
        },
        /* 引入组件放在components */
        components: {
            attrAndItem
        },
        /* 计算属性放于computed内 */
        computed: {},
        created() {}
    }
</script>


