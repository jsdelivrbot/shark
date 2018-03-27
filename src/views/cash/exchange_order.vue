<template>
    <div id="container">
        <h1 class="h1-title">兑换系统</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="数值表" name="0">
                    <ele-form :config="shuzhibiao_config" v-on:receive="shuzhibiao_submit"></ele-form>
                    <table-option :parent-message="shuzhibiao_Msg" v-on:outputrow="shuzhibiao_recieveRow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="兑换订单" name="1">
                    <ele-form :config="order_config" v-on:receive="order_submit" :defaultdata="orderHtml"></ele-form>
                    <table-option :parent-message="order_Msg" v-on:outputrow="order_recieveRow" v-on:message="orderMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="卡密订单" name="2">
                    <ele-form :config="kami_config" v-on:receive="kami_submit"></ele-form>
                    <table-option :parent-message="kami_Msg" v-on:outputrow="kami_recieveRow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
            </el-collapse>
        </div>
        <el-dialog title="话费充值处理备注" size="tiny" :visible.sync="orderDialog">
            <ele-form :config="orderDialogConfig" v-on:receive="orderDialogSubmit" :eventname="orderSubmitEvent" :defaultdata="orderDialogHtml"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="orderDialog = false">取 消</el-button>
                <el-button type="primary" @click="OrderSubmitName">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 卡密订单 详情 提示框 -->
        <el-dialog title="详情" size="large" :visible.sync="KaMiXiangQingDialog">
            <table-option :parent-message="KaMiXiangQingDialog_Msg"></table-option>
        </el-dialog>
        <!-- 卡密订单 审核 提示框 -->
        <el-dialog title="审核" size="large" :visible.sync="KaMiShenHeDialog">
            <table-option :parent-message="KaMiShenHeDialog_Msg"></table-option>
            <div slot="footer" class="dialog-footer">
                <el-button type="danger" @click="KaMi_Not_examine">不通过</el-button>
                <el-button type="success" @click="KaMi_examine">通 过</el-button>
            </div>
        </el-dialog>
        <!-- 兑换订单 详情 提示框 -->
        <el-dialog title="详情" size="large" :visible.sync="dingdanDialog">
            <table-option :parent-message="xiangqingDialog_Msg"></table-option>
        </el-dialog>
        <!-- 兑换订单 审核 提示框 -->
        <el-dialog title="审核" size="large" :visible.sync="shenheDialog">
            <table-option :parent-message="xiangqingDialog_Msg"></table-option>
            <div slot="footer" class="dialog-footer">
                <el-button type="danger" @click="not_examine">不通过</el-button>
                <el-button type="success" @click="examine">通 过</el-button>
            </div>
        </el-dialog>
        <!-- 兑换订单 单号 提示框 -->
        <el-dialog title="快递单号" size="tiny" :visible.sync="danhaoDialog">
            <ele-form :config="danhaoDialogConfig" v-on:receive="danhaoDialogSubmit" :eventname="danhaoDialogEvent"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="danhaoDialog = false">取 消</el-button>
                <el-button type="primary" @click="danhaoSubmitName">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 兑换订单 编辑 提示框 -->
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
        shuzhibiaoForm,
        exchangeOrderForm,
        orderDialogForm,
        danhaoDialogForm,
        editDialogForm,
        kamiQueryForm
    } from '@/form/config/exchange_order'
    import {
        shuzhibiaoTable,
        exchangeOrderTable,
        xiangqingDialogTable,
        kamiQueryTable,
        kamiXiangQingDialogTable,
        KaMiShenHeDialogTable
    } from '@/table/config/exchange_order'
    export default {
        name: 'exchange_order',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                htmlArg: {},
                kamiHtmlArg: {},
                activeName: '2',
                loading: false,
                /* 数值表 */
                shuzhibiao_config: shuzhibiaoForm(),
                shuzhibiao_Msg: shuzhibiaoTable(),
                /* 兑换订单 */
                order_config: exchangeOrderForm(),
                order_Msg: exchangeOrderTable(),
                orderDialog: false,
                orderDialogConfig: orderDialogForm(),
                orderSubmitEvent: false,
                orderDialogHtml: {},
                orderHtml: {
                    OrderStatus: '0',
                    itemType: '3'
                },
                //详情 提示框
                dingdanDialog: false,
                xiangqingDialog_Msg: xiangqingDialogTable(),
                //审核 提示框
                shenheDialog: false,
                // shenheDialogConfig: shenheDialogForm(),
                // shenheDialogHtml: {},
                //单号 提示框
                danhaoDialog: false,
                danhaoDialogConfig: danhaoDialogForm(),
                danhaoDialogEvent: false,
                /* 编辑 */
                editDialog: false,
                editDialogConfig: editDialogForm(),
                editDialogEvent: false,
                editDialogHtml: {},
                /* 卡密订单 */
                kami_config: kamiQueryForm(),
                kami_Msg: kamiQueryTable(),
                /* 详情 */
                KaMiXiangQingDialog: false,
                KaMiXiangQingDialog_Msg: kamiXiangQingDialogTable(),
                /* 审核 */
                KaMiShenHeDialog: false,
                KaMiShenHeDialog_Msg: KaMiShenHeDialogTable(),
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            /* 数值表 */
            shuzhibiao_submit(arg) {
                this.loading = true;
                this.$res.getSingleData(this, '/Cash/get_shuzhibiao/').then((response) => {
                    this.shuzhibiao_Msg.data = [];
                    this.shuzhibiao_Msg.data = response;
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            },
            shuzhibiao_recieveRow(arg) {
                switch (arg[2]) {
                    case 'edit':
                        this.$message.success('编辑');
                        break;
                    case 'del':
                        this.$message.success('删除');
                        break;
                }
            },
            /* 兑换订单 */
            order_submit(arg) {
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
                        return res;
                    });
                });
            },
            /* 搜索功能 */
            orderMessage(text) {
                this.order_Msg.data = tableSearch(text, this.order_Msg.data);
            },
            order_recieveRow(arg) {
                this.htmlArg = arg[1];
                switch (arg[2]) {
                    /* 详情 */
                    case 'detail':
                        this.dingdanDialog = true;
                        this.xiangqingDialog_Msg.data = [];
                        this.xiangqingDialog_Msg.data.push(arg[1]);
                        break;
                        /* 审核 */
                    case 'shenhe':
                        this.shenheDialog = true;
                        this.xiangqingDialog_Msg.data = [];
                        this.xiangqingDialog_Msg.data.push(arg[1]);
                        break;
                        /* 处理 */
                    case 'handle':
                        this.orderDialog = true;
                        this.orderDialogHtml = arg[1];
                        break;
                        /* 单号 */
                    case 'danhao':
                        this.danhaoDialog = true;
                        break;
                        /* 编辑 */
                    case 'edit':
                        this.editDialog = true;
                        this.editDialogHtml = arg[1];
                        break;
                }
            },
            orderDialogSubmit(arg) {
                switch (arg[1]) {
                    case 'submitEvent':
                        this.orderSubmitEvent = false;
                        this.orderDialog = false;
                        /* 直充 */
                        let CompanyID = '1491';
                        let InterfacePwd = 'umbe5j';
                        let Mobile = arg[0].MobilePhone;
                        let Amount = '100';
                        let OrderID = arg[0].OrderNum;
                        let OrderSource = 1;
                        let Key = hex_md5(CompanyID + InterfacePwd + Mobile + Amount + OrderID + '9js8ky');
                        this.$res.getSingleData(this, '/Recharge/https_get', {
                            params: {
                                url: 'http://wr.800617.com:6001/submit.aspx' + '?CompanyID=' + CompanyID + '&InterfacePwd=' + InterfacePwd + '&Mobile=' + Mobile + '&Amount=' + Amount + '&OrderID=' + OrderID + '&OrderSource=' + OrderSource + '&Key=' + Key
                            }
                        }).then((response) => {
                            this.$res.postData(this, '/Recharge/update_order/', {
                                OrderID: OrderID,
                                SolveNote: arg[0].SolveNote
                            }).then((response) => {
                                if (response.code == 0) {
                                    this.$res.getSingleData(this, '/Cash/get_order_list/').then((response) => {
                                        this.order_Msg.data = [];
                                        this.order_Msg.data = response.map((val) => {
                                            let res = val;
                                            val.OrderStatus == '4' && val.itemType == '2' && (res['处 理' + '_show'] = true);
                                            val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                                            val.OrderStatus == '4' && val.itemType == '3' && (res['单 号' + '_show'] = true);
                                            val.OrderStatus == '2' && val.itemType == '3' && (res['编 辑' + '_show'] = true);
                                            return res;
                                        });
                                        this.$message.success('充值成功');
                                    });
                                } else {
                                    this.$message.error('充值失败');
                                }
                            });
                        });
                        break;
                }
            },
            OrderSubmitName() {
                this.orderSubmitEvent = 'submitEvent';
            },
            /* 审核不通过 */
            not_examine() {
                this.$confirm('此操作将会设置不通过审核状态，是否继续？', '温馨提示', {
                    confirmButtonText: '确 定',
                    cancelButtonText: '取 消',
                    type: 'warning'
                }).then(() => {
                    this.$res.postData(this, '/Cash/examine/', {
                        examine: 0,
                        order_id: this.htmlArg.OrderID
                    }).then((response) => {
                        this.shenheDialog = false;
                        this.$message.error('审核不通过');
                        this.$res.getSingleData(this, '/Cash/get_order_list/').then((response) => {
                            this.order_Msg.data = response.map((val) => {
                                let res = val;
                                val.OrderStatus == '4' && val.itemType == '2' && (res['充 值' + '_show'] = true);
                                val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                                val.OrderStatus == '4' && val.itemType == '3' && (res['单 号' + '_show'] = true);
                                val.OrderStatus == '2' && val.itemType == '3' && (res['编 辑' + '_show'] = true);
                                return res;
                            });
                        });
                    });
                }).catch(() => {
                    this.shenheDialog = false;
                    this.$message.error('已取消');
                });
            },
            /* 审核通过 */
            examine() {
                this.$confirm('此操作将会设置通过审核，是否继续？', '温馨提示', {
                    confirmButtonText: '确 定',
                    cancelButtonText: '取 消',
                    type: 'warning'
                }).then(() => {
                    this.$res.postData(this, '/Cash/examine/', {
                        examine: 1,
                        order_id: this.htmlArg.OrderID
                    }).then((response) => {
                        this.shenheDialog = false;
                        this.$message.success('通过审核');
                        this.$res.getSingleData(this, '/Cash/get_order_list/').then((response) => {
                            this.order_Msg.data = response.map((val) => {
                                let res = val;
                                val.OrderStatus == '4' && val.itemType == '2' && (res['充 值' + '_show'] = true);
                                val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                                val.OrderStatus == '4' && val.itemType == '3' && (res['单 号' + '_show'] = true);
                                val.OrderStatus == '2' && val.itemType == '3' && (res['编 辑' + '_show'] = true);
                                return res;
                            });
                        });
                    });
                }).catch(() => {
                    this.shenheDialog = false;
                    this.$message.error('已取消');
                });
            },
            /* 单号 */
            danhaoDialogSubmit(arg) {
                let param = {
                    order_id: this.htmlArg.OrderID,
                    KuaiDiNumber: arg[0].KuaiDiNumber,
                    KuaiDiName: arg[0].KuaiDiName
                };
                this.$res.postData(this, '/Cash/update_examine_info/', param).then((response) => {
                    this.danhaoDialog = false;
                    this.danhaoDialogEvent = false;
                    this.$message.success('设置成功');
                    this.$res.postData(this, '/Cash/get_order_list/').then((response) => {
                        this.order_Msg.data = response.map((val) => {
                            let res = val;
                            val.OrderStatus == '4' && val.itemType == '2' && (res['充 值' + '_show'] = true);
                            val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                            val.OrderStatus == '4' && val.itemType == '3' && (res['单 号' + '_show'] = true);
                            val.OrderStatus == '2' && val.itemType == '3' && (res['编 辑' + '_show'] = true);
                            return res;
                        });
                    });
                });
            },
            danhaoSubmitName() {
                this.danhaoDialogEvent = 'submitEvent';
            },
            /* 编辑 */
            editDialogSubmit(arg) {
                let param = {
                    order_id: arg[0].OrderID,
                    KuaiDiNumber: arg[0].KuaiDiNumber,
                    KuaiDiName: arg[0].KuaiDiName
                };
                this.$res.postData(this, '/Cash/edit_examine_info/', param).then((response) => {
                    this.$res.postData(this, '/Cash/get_order_list/').then((response) => {
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
            },
            /* 卡密订单 */
            kami_submit(arg) {
                this.$res.postData(this, '/Cash/get_kami_list/').then((response) => {
                    this.kami_Msg.data = response.map((val) => {
                        let res = val;
                        val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                        val.OrderStatus == '4' && (res['卡 密' + '_show'] = true);
                        return res;
                    });
                });
            },
            kami_recieveRow(arg) {
                this.kamiHtmlArg = arg[1];
                switch (arg[2]) {
                    case 'detail':
                        this.KaMiXiangQingDialog = true;
                        this.KaMiXiangQingDialog_Msg.data = [];
                        this.KaMiXiangQingDialog_Msg.data.push(arg[1]);
                        break;
                    case 'shenhe':
                        this.KaMiShenHeDialog = true;
                        this.KaMiShenHeDialog_Msg.data = [];
                        this.KaMiShenHeDialog_Msg.data.push(arg[1]);
                        break;
                    case 'kami':
                        this.$confirm('此操作将会回去卡号和卡密，是否继续？', '温馨提示', {
                            confirmButtonText: '确 定',
                            cancelButtonText: '取 消',
                            type: 'warning'
                        }).then(() => {
                            let CompanyID = '1029';
                            let InterfacePwd = 'sddUaA';
                            let Amount = this.kamiHtmlArg.AwardPrice * 100;
                            let OrderID = this.kamiHtmlArg.OrderNum;
                            let Hbtype = 1;
                            let Hbnum = 1;
                            let Key = hex_md5(CompanyID + InterfacePwd + Amount + OrderID + 'egLqhi');
                            this.$res.getSingleData(this, '/Recharge/https_kami/', {
                                params: {
                                    url: 'https://hb.800617.com:6101/submit' + '?CompanyID=' + CompanyID + '&InterfacePwd=' + InterfacePwd + '&Amount=' + Amount + '&OrderID=' + OrderID + '&Hbtype=' + Hbtype + '&Hbnum=' + Hbnum + '&Key=' + Key,
                                    order_id: OrderID
                                }
                            }).then((response) => {
                                this.$message.success('卡密兑换成功');
                            });
                        }).catch(() => {
                            this.$message.error('已取消');
                        });
                        break;
                }
            },
            /* 卡密审核不通过 */
            KaMi_Not_examine() {
                this.$confirm('此操作将会设置不通过审核状态，是否继续？', '温馨提示', {
                    confirmButtonText: '确 定',
                    cancelButtonText: '取 消',
                    type: 'warning'
                }).then(() => {
                    this.$res.postData(this, '/Cash/kami_examine/', {
                        examine: 0,
                        order_id: this.kamiHtmlArg.OrderNum
                    }).then((response) => {
                        this.KaMiShenHeDialog = false;
                        this.$message.error('审核不通过');
                        this.$res.postData(this, '/Cash/get_kami_list/').then((response) => {
                            this.kami_Msg.data = response.map((val) => {
                                let res = val;
                                val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                                return res;
                            });
                        });
                    });
                }).catch(() => {
                    this.KaMiShenHeDialog = false;
                    this.$message.error('已取消');
                });
            },
            /* 审核通过 */
            KaMi_examine() {
                this.$confirm('此操作将会设置通过审核状态，是否继续？', '温馨提示', {
                    confirmButtonText: '确 定',
                    cancelButtonText: '取 消',
                    type: 'warning'
                }).then(() => {
                    this.$res.postData(this, '/Cash/kami_examine/', {
                        examine: 1,
                        order_id: this.kamiHtmlArg.OrderNum
                    }).then((response) => {
                        this.KaMiShenHeDialog = false;
                        this.$message.success('审核通过');
                        this.$res.postData(this, '/Cash/get_kami_list/').then((response) => {
                            this.kami_Msg.data = response.map((val) => {
                                let res = val;
                                val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                                return res;
                            });
                        });
                    });
                }).catch(() => {
                    this.KaMiShenHeDialog = false;
                    this.$message.error('已取消');
                });
            },
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            /* 数值表 - 查询 */
            this.loading = true;
            this.$res.getSingleData(this, '/Cash/get_shuzhibiao/').then((response) => {
                this.shuzhibiao_Msg.data = [];
                this.shuzhibiao_Msg.data = response;
                this.loading = false;
            });
            /* 兑换订单 */
            let baseOrderConfig = exchangeOrderTable();
            baseOrderConfig.columns[baseOrderConfig.columns.length - 1].template = {
                btns: [{
                    name: '审 核',
                    type: 'warning',
                    funcName: 'shenhe',
                    if: true,
                }, {
                    name: '充 值',
                    type: 'primary',
                    funcName: 'handle',
                    if: true,
                }, {
                    name: '单 号',
                    type: 'info',
                    funcName: 'danhao',
                    if: true,
                }, {
                    name: '编 辑',
                    type: 'danger',
                    funcName: 'edit',
                    if: true
                }]
            };
            /* 卡密订单 */
            let baseKamiConfig = kamiQueryTable();
            baseKamiConfig.columns[baseKamiConfig.columns.length - 1].template = {
                btns: [{
                    name: '审 核',
                    type: 'warning',
                    funcName: 'shenhe',
                    if: true,
                }, {
                    name: '卡 密',
                    type: 'primary',
                    funcName: 'kami',
                    if: true
                }]
            };
            /* 兑换订单 - 查询 */
            this.$res.postData(this, '/Cash/get_order_list/', this.orderHtml).then((response) => {
                this.order_Msg.data = response.map((val) => {
                    let res = val;
                    val.OrderStatus == '4' && val.itemType == '2' && (res['充 值' + '_show'] = true);
                    val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                    val.OrderStatus == '4' && val.itemType == '3' && (res['单 号' + '_show'] = true);
                    val.OrderStatus == '2' && val.itemType == '3' && (res['编 辑' + '_show'] = true);
                    return res;
                });
            });
            /* 卡密订单 - 查询 */
            this.$res.postData(this, '/Cash/get_kami_list/').then((response) => {
                this.kami_Msg.data = response.map((val) => {
                    let res = val;
                    val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                    val.OrderStatus == '4' && (res['卡 密' + '_show'] = true);
                    return res;
                });
            });
        }
    }
</script>
