<template>
    <div id="container">
        <h1 class="h1-title">兑换记录</h1>
        <div class="cms-content">
            <ele-form :config="duihuan_config" v-on:receive="duihuan_submit"></ele-form>
            <table-option :parent-message="order_Msg" v-on:message="orderMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
        </div>
    </div>
</template>

<script>
    //引入表格搜索
    import {
        tableSearch
    } from '@/libs/tableSearch'
    import {
        exchangeOrderForm,
    } from '@/form/config/exchange_order'
    import {
        exchangeOrderTable
    } from '@/table/config/exchange_order'
    export default {
        name: 'exchange_record',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                loading: false,
                duihuan_config: exchangeOrderForm(),
                order_Msg: exchangeOrderTable(),
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            duihuan_submit(arg) {
                this.loading = true;
                this.$res.postData(this, '/Cash/get_order_list/', {
                    OrderStatus: arg[0].OrderStatus,
                    itemType: arg[0].itemType
                }).then((response) => {
                    this.order_Msg.data = response.map((val) => {
                        let res = val;
                        val.OrderStatus == '4' && val.itemType == '2' && (res['充 值' + '_show'] = true);
                        val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                        val.OrderStatus == '4' && val.itemType == '3' && (res['单 号' + '_show'] = true);
                        val.OrderStatus == '2' && val.itemType == '3' && (res['编 辑' + '_show'] = true);
                        this.loading = false;
                        return res;
                    });
                });
            },
            orderMessage(text) {
                this.order_Msg.data = tableSearch(text, this.order_Msg.data);
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {}
    }
</script>


