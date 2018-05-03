<template>
    <div id="container">
        <h1 class="h1-title">安全日志</h1>
        <div class="cms-content">
            <ele-form :config="log_config" v-on:receive="log_submit"></ele-form>
            <table-option :parent-message="log_Msg" v-loading="loading" element-loading-text="拼命加载中"></table-option>
        </div>
    </div>
</template>
<script>
    //引入表格搜索
    import {
        tableSearch
    } from '@/libs/tableSearch'
    import {
        logForm
    } from '@/form/config/loger'
    import {
        logTable
    } from '@/table/config/loger'
    export default {
        name: 'loger',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                loading: false,
                log_config: logForm(),
                log_Msg: logTable(),
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            log_submit(arg) {
                let _self = this;
                _self.$res.postData(_self, '/Loger/query_log/').then((response) => {
                    _self.log_Msg.data = [];
                    _self.log_Msg.data = response;
                    _self.$message.success('查询成功');
                });
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            let _self = this;
            _self.$res.postData(_self, '/Loger/query_log/').then((response) => {
                _self.log_Msg.data = [];
                _self.log_Msg.data = response;
                _self.$message.success('查询成功');
            });
        }
    }
</script>
