
<template>
<div id="container">
    <h1 class="h1-title">充值统计</h1>
    <div class="cms-content">
        <el-button type="success" plain @click.native="statistics_btn">查 询</el-button>
        <table-option :parent-message="pay_statistics_Msg" v-on:message="payMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
    </div>
</div>
</template>

<script>
//引入表格搜索
import {
    tableSearch
} from '@/libs/tableSearch'
import {
    payStatisticsTable,
} from '@/table/config/pay_statistics'
export default {
    name: 'pay_statistics',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            pay_statistics_Msg: payStatisticsTable(),
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        statistics_btn() {
            this.loading = true;
            this.$res.postData(this, '/Paymentorder/pay_statistics_info/').then((res) => {
                this.pay_statistics_Msg.data = [];
                this.pay_statistics_Msg.data = res;
                this.loading = false;
                this.$message.success('查询成功');
            });
        },
        payMessage(text) {
            this.pay_statistics_Msg.data = tableSearch(text, this.pay_statistics_Msg.data);
        },
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        this.$res.postData(this, '/Paymentorder/pay_statistics_info/').then((res) => {
            this.pay_statistics_Msg.data = [];
            this.pay_statistics_Msg.data = res;
        });
    }
}
</script>
