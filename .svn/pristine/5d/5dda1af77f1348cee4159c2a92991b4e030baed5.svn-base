<template>
    <div id="container">
        <h1 class="h1-title">兑换记录</h1>
        <div class="cms-content">
            <ele-form :config="duihuan_config" v-on:receive="duihuan_submit"></ele-form>
            <table-option :parent-message="order_Msg" v-on:message="orderMessage" v-on:outputrow="order_recieveRow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
        </div>

        <!-- 快递单号 编辑 提示框 -->
        <el-dialog title="编辑" size="tiny" :visible.sync="editDialog">
            <ele-form :config="editDialogConfig" v-on:receive="editDialogSubmit" :eventname="editDialogEvent" :defaultdata="editDialogHtml"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editDialog = false">取 消</el-button>
                <el-button type="primary" @click="editSubmitName">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    //引入表格搜索
    import {
        tableSearch
    } from '@/libs/tableSearch'
    import {
        exchangeOrderForm,
        editDialogForm
    } from '@/form/config/exchange_record'
    import {
        exchangeOrderTable
    } from '@/table/config/exchange_record'
    export default {
        name: 'exchange_record',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                loading: false,
                duihuan_config: exchangeOrderForm(),
                order_Msg: exchangeOrderTable(),
                editDialog: false,
                editDialogConfig: editDialogForm(),
                editDialogEvent: false,
                editDialogHtml: {},
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            duihuan_submit(arg) {
                this.loading = true;
                this.$res.postData(this, '/Exchange/query_suc_order_list/', {
                    OrderStatus: arg[0].OrderStatus,
                    itemType: arg[0].itemType
                }).then((response) => {
                    this.order_Msg.data = response.map((val) => {
                        let res = val;
                        val.OrderStatus == '4' && val.itemType == '2' && (res['充 值' + '_show'] = true);
                        val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                        val.OrderStatus == '4' && val.itemType == '3' && (res['单 号' + '_show'] = true);
                        val.OrderStatus == '2' && val.itemType == '3' && (res['编 辑' + '_show'] = true);
                        return res;
                    });
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            },
            orderMessage(text) {
                this.order_Msg.data = tableSearch(text, this.order_Msg.data);
            },
            order_recieveRow(arg) {
                switch (arg[2]) {
                    /* 详情 */
                    case 'detail':
                        this.$message.success('详情');
                        break;
                    case 'edit':
                        this.editDialog = true;
                        this.editDialogHtml = arg[1];
                        this.$message.success('编辑');
                        break;
                }
            },
            editDialogSubmit(arg) {
                let param = {
                    order_id: arg[0].OrderID,
                    KuaiDiNumber: arg[0].KuaiDiNumber,
                    KuaiDiName: arg[0].KuaiDiName
                };
                this.$res.postData(this, '/Exchange/edit_examine_info/', param).then((response) => {
                    this.$res.postData(this, '/Exchange/query_suc_order_list/', {
                        OrderStatus: arg[0].OrderStatus,
                        itemType: arg[0].itemType
                    }).then((response) => {
                        this.order_Msg.data = response.map((val) => {
                            let res = val;
                            val.OrderStatus == '4' && val.itemType == '2' && (res['充 值' + '_show'] = true);
                            val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                            val.OrderStatus == '4' && val.itemType == '3' && (res['单 号' + '_show'] = true);
                            val.OrderStatus == '2' && val.itemType == '3' && (res['编 辑' + '_show'] = true);
                            return res;
                        });
                    });
                    this.editDialog = false;
                    this.editDialogEvent = false;
                    this.$message.success('编辑成功');
                });
            },
            editSubmitName() {
                this.editDialogEvent = 'submitEvent';
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {}
    }
</script>
