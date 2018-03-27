<template>
    <div id="container">
        <h1 class="h1-title">直充/卡密</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="直充" name="0">
                    <ele-form :config="directChargeConfig" v-on:receive="directChargeSubmit"></ele-form>
                    <table-option :parent-message="directChargeMsg" v-on:message="zhichongMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="卡密" name="0">
                    <ele-form :config="order_config" v-on:receive="order_submit"></ele-form>
                    <table-option :parent-message="order_Msg" v-on:message="kamiMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
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
    directChargeForm,
    orderForm
} from '@/form/config/order_config'
import {
    directChargeTable,
    orderTable
} from '@/table/config/order_config'
export default {
    name: 'order_config',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            activeName: '0',
            loading: false,
            order_config: orderForm(),
            order_Msg: orderTable(),
            directChargeConfig: directChargeForm(),
            directChargeMsg: directChargeTable(),
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 直充 */
        directChargeSubmit(arg) {
            this.loading = true;
            this.$res.postData(this, '/Recharge/cms_zhichong_result/').then((response) => {
                this.directChargeMsg.data = [];
                this.directChargeMsg.data = response;
                this.loading = false;
                this.$message.success('查询成功');
            });
        },
        /* 搜索 */
        zhichongMessage(text) {
            this.directChargeMsg.data = tableSearch(text, this.directChargeMsg.data);
        },
        /* 卡密充值 */
        order_submit(arg) {
            this.loading = true;
            this.$res.postData(this, '/Recharge/cms_kami_result/').then((response) => {
                this.order_Msg.data = [];
                this.order_Msg.data = response;
                this.loading = false;
                this.$message.success('查询成功');
            });
        },
        /* 搜索 */
        kamiMessage(text) {
            this.order_Msg.data = tableSearch(text, this.order_Msg.data);
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        this.$res.postData(this, '/Recharge/cms_zhichong_result/').then((response) => {
            this.directChargeMsg.data = [];
            this.directChargeMsg.data = response;
        });
        this.$res.postData(this, '/Recharge/cms_kami_result/').then((response) => {
            this.order_Msg.data = [];
            this.order_Msg.data = response;
        });
    }
}

</script>
