<template>
    <div id="container">
        <h1 class="h1-title">举报管理</h1>
        <div class="cms-content">
            <el-button type="success" plain @click.native="report_btn">查 询</el-button>
            <table-option :parent-message="report_Msg" v-loading="loading" element-loading-text="拼命加载中"></table-option>
        </div>
    </div>
</template>
<script>
import {
    reportTable
} from '@/table/config/report'
export default {
    name: 'report',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            report_Msg: reportTable(),
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        report_btn() {
            this.loading = true;
            this.$res.postData(this, '/Report/query_report_list/').then((response) => {
                this.report_Msg.data = [];
                this.report_Msg.data = response;
                this.loading = false;
                this.$message.success('查询成功');
            });
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        this.$res.postData(this, '/Report/query_report_list/').then((response) => {
            this.report_Msg.data = [];
            this.report_Msg.data = response;
        });
    }
}

</script>
