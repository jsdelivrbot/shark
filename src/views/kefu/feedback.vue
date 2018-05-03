<template>
    <div id="container">
        <h1 class="h1-title">反馈管理</h1>
        <div class="cms-content">
            <ele-form :config="feedback_config" v-on:receive="feedback_submit" :defaultdata="defaultHtml"></ele-form>
            <table-option :parent-message="feedback_Msg" v-on:message="feedbackMessage" v-on:outputrow="feedback_recieveRow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
        </div>
        <el-dialog title="回复反馈内容" size="small" :visible.sync="handleDialog">
            <ele-form :config="handle_config" v-on:receive="handle_submit" :defaultdata="handleHtml"></ele-form>
        </el-dialog>
        <el-dialog title="反馈信息详情" size="small" :visible.sync="detailDialog">
            <ele-form :config="detail_config" v-on:receive="detail_submit" :defaultdata="detailHtml"></ele-form>
        </el-dialog>
    </div>
</template>
<script>
    //引入表格搜索
    import {
        tableSearch
    } from '@/libs/tableSearch'
    import {
        feedbackForm,
        handleDialogForm,
        detailDialogForm
    } from '@/form/config/feedback'
    import {
        feedbackTable
    } from '@/table/config/feedback'
    export default {
        name: 'feedback',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                loading: false,
                feedback_config: feedbackForm(),
                feedback_Msg: feedbackTable(),
                defaultHtml: {
                    IsProcessed: '0',
                },
                handleDialog: false,
                handle_config: handleDialogForm(),
                handleHtml: {},
                regArg: {},
                detailDialog: false,
                detail_config: detailDialogForm(),
                detailHtml: {},
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            feedback_submit(arg) {
                let _self = this;
                _self.regArg = arg[0];
                _self.$res.postData(_self, '/Kefu/feedback/', arg[0]).then((response) => {
                    _self.feedback_Msg.data = response.reverse().map((val) => {
                        let res = val;
                        val.IsProcessed === '0' && (res['回复' + '_show'] = true);
                        return res;
                    });
                });
            },
            /* 搜索 */
            feedbackMessage(text) {
                this.feedback_Msg.data = tableSearch(text, this.feedback_Msg.data);
            },
            feedback_recieveRow(arg) {
                switch (arg[2]) {
                    case 'detail':
                        this.$message.success('查看详情');
                        this.detailDialog = true;
                        this.detailHtml = arg[1];
                        break;
                    case 'handle':
                        this.handleDialog = true;
                        this.handleHtml = arg[1];
                        break;
                }
            },
            handle_submit(arg) {
                switch (arg[1]) {
                    case 'close':
                        this.handleDialog = false;
                        break;
                    case 'reply':
                        let _self = this;
                        _self.$res.postData(_self, '/Kefu/feedback_handle/', arg[0]).then((response) => {
                            _self.$message.success('回复成功');
                            _self.handleDialog = false;
                            /* 重新查询 */
                            _self.$res.postData(_self, '/Kefu/feedback/', _self.regArg).then((response) => {
                                _self.feedback_Msg.data = response.reverse().map((val) => {
                                    let res = val;
                                    val.IsProcessed === '0' && (res['回复' + '_show'] = true);
                                    return res;
                                });
                            });
                        });
                        break;
                }
            },
            detail_submit(arg) {
                this.detailDialog = false;
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            let baseConfig = feedbackTable();
            baseConfig.columns[baseConfig.columns.length - 1].template = {
                btns: [{
                    name: '回复',
                    type: 'primary',
                    funcName: 'handle',
                    if: true,
                }, {
                    name: '冻结',
                    type: 'danger',
                    funcName: 'frozen',
                    if: true,
                }, {
                    name: '解冻',
                    type: 'warning',
                    funcName: 'thaw',
                    if: true,
                }]
            };
            /* 查询 */
            let _self = this;
            _self.$res.postData(_self, '/Kefu/feedback/', {
                IsProcessed: '0',
            }).then((response) => {
                _self.feedback_Msg.data = response.reverse().map((val) => {
                    let res = val;
                    val.IsProcessed === '0' && (res['回复' + '_show'] = true);
                    return res;
                });
            });
        }
    }
</script>
