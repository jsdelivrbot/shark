<template>
    <div id="container">
        <h1 class="h1-title">操作日志</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="登录日志" name="0">
                    <ele-form :config="log_config" v-on:receive="log_submit"></ele-form>
                    <table-option :parent-message="log_Msg" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="增减资源日志" name="1">
                    <ele-form :config="resource_config" v-on:receive="resource_submit" :defaultdata="resourceHtml"></ele-form>
                    <table-option :parent-message="resource_Msg" v-loading="loading2" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>
<script>
    //引入表格搜索
    import {
        tableSearch
    } from '@/libs/tableSearch'
    import {
        logForm,
        resourceForm
    } from '@/form/config/loger'
    import {
        logTable,
        resourceTable
    } from '@/table/config/loger'
    export default {
        name: 'loger',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                activeName: [''],
                /* 登录日志 */
                loading: false,
                log_config: logForm(),
                log_Msg: logTable(),
                /* 增减资源日志 */
                resource_config: resourceForm(),
                resourceHtml: {
                    resource: 'all'
                },
                loading2: false,
                resource_Msg: resourceTable(),
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            /* 登录日志 */
            log_submit(arg) {
                let _self = this;
                _self.$res.postData(_self, '/Loger/query_log/').then((response) => {
                    _self.log_Msg.data = [];
                    _self.log_Msg.data = response;
                    _self.$message.success('查询成功');
                });
            },
            /* 增减资源日志 */
            resource_submit(arg) {
                this.loading2 = true;
                this.$res.postData(this, '/Loger/query_resource_info/', arg[0]).then((response) => {
                    this.resource_Msg.data = [];
                    this.resource_Msg.data = response;
                    this.loading2 = false;
                    this.$message.success('查询成功');
                });
            },
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            let _self = this;
            /* 登录日志 */
            _self.$res.postData(_self, '/Loger/query_log/').then((response) => {
                _self.log_Msg.data = [];
                _self.log_Msg.data = response;
            });
            /* 增减资源日志 */
            _self.$res.postData(_self, '/Loger/query_resource_info/', {
                resource: _self.resourceHtml.resource
            }).then((response) => {
                _self.resource_Msg.data = [];
                _self.resource_Msg.data = response;
            });
        }
    }
</script>
