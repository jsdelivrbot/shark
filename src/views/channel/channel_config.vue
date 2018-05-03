<template>
    <div id="container">
        <h1 class="h1-title">渠道/落地页管理</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="落地页管理" name="0">
                    <el-row>
                        <el-col :span="6" :offset="18">
                            <el-button type="success" @click="ldy_query">查 询</el-button>
                            <el-button type="warning" @click="ldy_create">新 增</el-button>
                        </el-col>
                        <el-col :span="24">
                            <table-option :parent-message="ldyMsg" v-on:outputrow='ldyTableEvent'></table-option>
                        </el-col>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item title="渠道管理" name="0">
                    <el-row>
                        <el-col :span="6" :offset="18">
                            <el-button type="success" @click="channel_query">查 询</el-button>
                            <el-button type="warning" @click="channel_create">新 增</el-button>
                        </el-col>
                        <el-col :span="24">
                            <table-option :parent-message="channelMsg" v-on:outputrow='channelTableEvent'></table-option>
                        </el-col>
                    </el-row>
                </el-collapse-item>
            </el-collapse>
        </div>
        <!-- 落地页管理 -->
        <el-dialog title="新增落地页模板" width='30%' :visible.sync="createLdyFormDialog">
            <ele-form :config="createLdyFormConfig" :eventname="submitCreateLdyEventName" v-on:receive="submitCreateLdy" :defaultdata="{'tp_url': 'http://cms.oa.pokerhope.com:6600'}">
            </ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="createLdyFormDialog = false">取 消</el-button>
                <el-button type="primary" @click="submitCreateLdyEvent">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="修改落地页模板" width='30%' :visible.sync="editLdyFormDialog">
            <ele-form :config="editLdyFormConfig" :eventname="submitEditLdyEventName" :defaultdata="editLdyFormData" v-on:receive="submitEditLdy">
            </ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editLdyFormDialog = false">取 消</el-button>
                <el-button type="primary" @click="submitEditLdyEvent">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 渠道管理 -->
        <el-dialog title="新增渠道" width='30%' :visible.sync="createChannelFormDialog">
            <ele-form :config="createChannelFormConfig" :eventname="submitCreateChannelEventName" v-on:receive="submitCreateChannel">
            </ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="createChannelFormDialog = false">取 消</el-button>
                <el-button type="primary" @click="submitCreateChannelEvent">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="编辑渠道" width='30%' :visible.sync="editChannelFormDialog">
            <ele-form :config="editChannelFormConfig" :eventname="submitEditChannelEventName" :defaultdata="editChannelDefault" v-on:receive="submitEditChannel">
            </ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editChannelFormDialog = false">取 消</el-button>
                <el-button type="primary" @click="submitEditChannelEvent">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import {
        createLdyForm,
        createChannelForm
    } from '@/form/config/channel_config'
    import {
        ldyTable,
        channelTable
    } from '@/table/config/channel_config'
    export default {
        name: 'channel_config',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                activeName: '0',
                /* 落地页管理 */
                ldyMsg: ldyTable(),
                createLdyFormDialog: false,
                createLdyFormConfig: createLdyForm(),
                submitCreateLdyEventName: false,
                editLdyFormDialog: false,
                editLdyFormConfig: createLdyForm(),
                submitEditLdyEventName: false,
                editLdyFormData: {},
                /* 渠道管理 */
                channelMsg: channelTable(),
                createChannelFormDialog: false,
                createChannelFormConfig: createChannelForm(),
                submitCreateChannelEventName: false,
                editChannelFormDialog: false,
                editChannelFormConfig: createChannelForm(),
                submitEditChannelEventName: false,
                editChannelDefault: {},
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            /* 落地页管理 */
            ldy_query() {
                this.$res.getSingleData(this, '/Channel/get_ldy_template/').then((response) => {
                    this.ldyMsg.data = [];
                    this.ldyMsg.data = response;
                    this.$message.success('查询成功');
                    window.ldyTemplate = response;
                    window.ldyTemplate.map((ldy) => {
                        let obj = {
                            value: ldy.tp_id,
                            label: ldy.tp_name,
                        };
                        this.createChannelFormConfig.formEle[1].options.push(obj);
                        this.editChannelFormConfig.formEle[1].options.push(obj);
                    });
                });
            },
            ldy_create() {
                this.createLdyFormDialog = true;
            },
            ldyTableEvent(arg) {
                switch (arg[2]) {
                    case 'edit':
                        this.editLdyFormDialog = true;
                        this.editLdyFormData = arg[1];
                        break;
                    case 'delete':
                        this.$confirm('确认删除落地页模板 ' + arg[1].tp_name, '温馨提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.$message.error('此功能暂不开通');
                            // let param = {
                            //     tp_id: arg[0].tp_id
                            // };
                            // this.$res.postData(this, '/Channelapi/del_ldy_template/', param).then((response) => {
                            //     if (response.code == 0) {
                            //         this.$res.getSingleData(this, '/Channelapi/get_ldy_template/').then((response) => {
                            //             this.ldyMsg.data = [];
                            //             this.ldyMsg.data = response;
                            //             this.$message.success('删除成功');
                            //         });
                            //     }
                            // });
                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: '已取消删除'
                            });
                        })
                        break;
                }
            },
            submitCreateLdy(arg) {
                this.$res.postData(this, '/Channel/add_ldy_template/', arg[0]).then((response) => {
                    if (response.code == 0) {
                        this.$res.getSingleData(this, '/Channel/get_ldy_template/').then((response) => {
                            this.ldyMsg.data = [];
                            this.ldyMsg.data = response;
                            this.$message.success('新增成功');
                        });
                    }
                });
                //执行接口操作
                this.createLdyFormDialog = false;
                this.submitCreateLdyEventName = false;
            },
            submitCreateLdyEvent() {
                this.submitCreateLdyEventName = 'submit';
            },
            submitEditLdy(arg) {
                this.$res.postData(this, '/Channel/edit_ldy_template/', arg[0]).then((response) => {
                    if (response.code == 0) {
                        this.$res.getSingleData(this, '/Channel/get_ldy_template/').then((response) => {
                            this.ldyMsg.data = [];
                            this.ldyMsg.data = response;
                            this.$message.success('编辑成功');
                        });
                    }
                });
                //接口操作
                this.editLdyFormDialog = false;
                this.submitEditLdyEventName = false;
            },
            submitEditLdyEvent() {
                this.submitEditLdyEventName = 'submit';
            },
            /* 渠道管理 */
            channel_query() {
                this.$res.getSingleData(this, '/Channel/get_channel/').then((response) => {
                    this.channelMsg.data = response.map((data) => {
                        let url = 'http://cms.oa.pokerhope.com:6600/ldy/';
                        let download_url = 'http://cms.oa.pokerhope.com:6600/ldy/';
                        data.ldy_url = data.tp_id ? (url + data.tp_id) + '/index.html?channel_id=' + data.channel_id + '&masid=' + data.masid : '';
                        data.ldy_download_url = download_url + 'ldyApk/android/' + data.tp_id + '.apk';
                        return data;
                    });
                });
            },
            channel_create() {
                this.createChannelFormDialog = true;
            },
            channelTableEvent(arg) {
                this.editChannelFormDialog = true;
                this.editChannelDefault = arg[1];
            },
            submitCreateChannel(arg) {
                this.$res.postData(this, '/Channel/add_channel/', arg[0]).then((response) => {
                    if (response.code == 0) {
                        this.$message.success('新增成功');
                        this.channel_query();
                    }
                });
                //接口操作
                this.createChannelFormDialog = false;
                this.submitCreateChannelEventName = false;
            },
            submitCreateChannelEvent() {
                this.submitCreateChannelEventName = 'submit';
            },
            submitEditChannel(arg) {
                //接口操作
                this.editChannelFormDialog = false;
                this.submitEditChannelEventName = false;
            },
            submitEditChannelEvent() {
                this.submitEditChannelEventName = 'submit';
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            /* 落地页管理  - 查询 */
            this.$res.getSingleData(this, '/Channel/get_ldy_template/').then((response) => {
                this.ldyMsg.data = [];
                this.ldyMsg.data = response;
                this.$message.success('查询成功');
                window.ldyTemplate = response;
                window.ldyTemplate.map((ldy) => {
                    let obj = {
                        value: ldy.tp_id,
                        label: ldy.tp_name,
                    };
                    this.createChannelFormConfig.formEle[1].options.push(obj);
                    this.editChannelFormConfig.formEle[1].options.push(obj);
                });
            });
            /* 渠道管理 - 查询 */
            this.$res.getSingleData(this, '/Channel/get_channel/').then((response) => {
                this.channelMsg.data = response.map((data) => {
                    let url = 'http://cms.oa.pokerhope.com:6600/ldy/';
                    let download_url = 'http://cms.oa.pokerhope.com:6600/ldy/';
                    data.ldy_url = data.tp_id ? (url + data.tp_id) + '/index.html?channel_id=' + data.channel_id + '&masid=' + data.masid : '';
                    data.ldy_download_url = download_url + 'ldyApk/android/' + data.tp_id + '.apk';
                    return data;
                });
            });
        }
    }
</script>
