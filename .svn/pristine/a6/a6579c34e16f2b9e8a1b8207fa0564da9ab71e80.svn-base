<template>
<div id="container">
    <h1 class="h1-title">支付订单</h1>
    <div class="cms-content">
        <ele-form :config="pay_record_config" v-on:receive="pay_record_submit" :defaultdata="payHtml"></ele-form>
        <table-option :parent-message="pay_record_Msg" v-on:message="payMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
    </div>
</div>
</template>
<script>
//引入表格搜索
import {
    tableSearch
} from '@/libs/tableSearch'
import {
    payRecordForm,
} from '@/form/config/payment_order'
import {
    payRecordTable,
} from '@/table/config/payment_order'
export default {
    name: 'payment_order',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            pay_record_config: payRecordForm(),
            pay_record_Msg: payRecordTable(),
            payHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 29),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                orderstatus: 1
            }
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        pay_record_submit(arg) {
            this.loading = true;
            this.$res.postData(this, '/Paymentorder/query_pay_order/', arg[0]).then((response) => {
                this.pay_record_Msg.data = [];
                this.pay_record_Msg.data = response;
                this.loading = false;
                this.$message.success('查询成功');
            });
        },
        payMessage(text) {
            this.pay_record_Msg.data = tableSearch(text, this.pay_record_Msg.data);
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        this.$res.postData(this, '/Paymentorder/query_pay_order/', {
            orderstatus: this.payHtml.orderstatus,
            query_start_time: this.payHtml.query_start_time,
            query_end_time: this.payHtml.query_end_time
        }).then((response) => {
            this.pay_record_Msg.data = [];
            this.pay_record_Msg.data = response;
        });
    }
}
</script>
