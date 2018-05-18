<template>
    <div id="container">
        <h1 class="h1-title">离线推送（极光推送）</h1>
        <div class="cms-content">
            <ele-form :config="push_config" v-on:receive="push_submit" :defaultdata="pushDefaultHtml"></ele-form>
            <br/>
            <el-row>
                <el-col :span="20" :offset="20">
                    <el-button type="success" plain @click.native="pushBtn">查 询</el-button>
                    <el-button type="success" plain disabled @click.native="pushBtn2">定时推送</el-button>
                </el-col>
            </el-row>
            <table-option :parent-message="push_Msg" v-loading="loading" element-loading-text="拼命加载中"></table-option>
        </div>
    </div>
</template>

<script>
    import {
        jiguangPushForm
    } from '@/form/config/push'
    import {
        jiguangPushTable
    } from '@/table/config/push'
    export default {
        name: 'push',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                loading: false,
                push_config: jiguangPushForm(),
                pushDefaultHtml: {
                    platform: 'all'
                },
                push_Msg: jiguangPushTable(),
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            push_submit(arg) {
                let param = {
                    platform: arg[0].platform, // 平台
                    content: arg[0].content, // 内容
                    pushperson: localStorage.getItem('Username'), //发送人
                };
                this.$res.postData(this, '/Jpush/jguang_push/', param).then((response) => {
                    if (response.code === 0) {
                        this.$message.success(response.msg);
                    } else {
                        this.$message.error(response.msg);
                    }
                });
            },
            pushBtn() {
                this.loading = true;
                this.$res.postData(this, '/Jpush/query_jpush_list/').then((response) => {
                    this.push_Msg.data = [];
                    this.push_Msg.data = response;
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            },
            pushBtn2() {
                this.$res.postData(this, '/Jpush/server_timing_push/', {
                    PushType: 6,
                    content: '测试定时推送'
                }).then((response) => {
                    if (response.code === 0) {
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
            this.$res.postData(this, '/Jpush/query_jpush_list/').then((response) => {
                this.push_Msg.data = [];
                this.push_Msg.data = response;
            });
        }
    }
</script>


