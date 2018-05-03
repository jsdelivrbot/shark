<template>
    <div id="container">
        <h1 class="h1-title">直充/卡密</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="卡密审核" name="0">
                    <el-button type="success" plain @click.native="kami_audit_btn">查 询</el-button>
                    <table-option :parent-message="kami_audit_Msg" v-on:outputrow="kami_audit_recieveRow" v-loading="kamiauditloading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="直充话费成功列表" name="1">
                    <el-button type="success" plain @click.native="query_travel_btn">查 询</el-button>
                    <table-option :parent-message="directChargeMsg" v-on:message="zhichongMessage" v-loading="directloading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="卡密充值成功列表" name="2">
                    <el-button type="success" plain @click.native="query_kami_btn">查 询</el-button>
                    <table-option :parent-message="order_Msg" v-on:message="kamiMessage" v-loading="kamiloading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
            </el-collapse>
        </div>

        <!-- 卡密订单 审核 提示框 -->
        <el-dialog title="审核" width="90%" :visible.sync="KaMiShenHeDialog">
            <table-option :parent-message="KaMiShenHeDialog_Msg"></table-option>
            <div slot="footer" class="dialog-footer">
                <el-button type="danger" @click.native="KaMi_Not_examine">不通过</el-button>
                <el-button type="success" @click.native="KaMi_examine">通 过</el-button>
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
        kamiQueryTable,
        KaMiShenHeDialogTable,
        directChargeTable,
        orderTable
    } from '@/table/config/kami'
    export default {
        name: 'kami',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                activeName: [''],
                // 卡密审核
                kamiHtmlArg: {},
                kamiauditloading: false,
                kami_audit_Msg: kamiQueryTable(),
                //卡密订单 审核 提示框
                KaMiShenHeDialog: false,
                KaMiShenHeDialog_Msg: KaMiShenHeDialogTable(),
                //直充成功列表
                directloading: false,
                directChargeMsg: directChargeTable(),
                //卡密列表
                kamiloading: false,
                order_Msg: orderTable(),
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            // 卡密审核 --- 查询
            kami_audit_btn() {
                this.kamiauditloading= true;
                this.$res.postData(this, '/Kami/query_kami_list/').then((response) => {
                    this.kami_audit_Msg.data = response.map((val) => {
                        let res = val;
                        val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                        val.OrderStatus == '4' && (res['卡 密' + '_show'] = true);
                        return res;
                    });
                    this.kamiauditloading = false;
                    this.$message.success('查询成功');
                });
            },
            kami_audit_recieveRow(arg) {
                this.kamiHtmlArg = arg[1];
                switch (arg[2]) {
                    case 'detail':
                        this.$message.success('详情');
                        break;
                    case 'shenhe':
                        this.KaMiShenHeDialog = true;
                        this.KaMiShenHeDialog_Msg.data = [];
                        this.KaMiShenHeDialog_Msg.data.push(arg[1]);
                        break;
                    case 'kami':
                        this.$confirm('此操作将会提取卡号和卡密，是否继续？', '温馨提示', {
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
                            this.$res.postData(this, '/Changty/http_kami/', {
                                url: 'https://hb.800617.com:6101/submit' + '?CompanyID=' + CompanyID + '&InterfacePwd=' + InterfacePwd + '&Amount=' + Amount + '&OrderID=' + OrderID + '&Hbtype=' + Hbtype + '&Hbnum=' + Hbnum + '&Key=' + Key,
                                OrderID: OrderID,
                                SolveName: localStorage.getItem('Username'),
                            }).then((response) => {
                                switch (response.code) {
                                    case '0000':
                                        this.$res.postData(this, '/Kami/query_kami_list/').then((response) => {
                                            this.kami_audit_Msg.data = response.map((val) => {
                                                let res = val;
                                                val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                                                val.OrderStatus == '4' && (res['卡 密' + '_show'] = true);
                                                return res;
                                            });
                                            this.$message.success(response.msg);
                                        });
                                        break;
                                    case '1001':
                                        //参数不完整...
                                        this.$message.error(response.msg);
                                        break;
                                    case '1002':
                                        //账户参数错误...
                                        this.$message.error(response.msg);
                                        break;
                                    case '1003':
                                        //金额不正确（最小100分，最大20000分）...
                                        this.$message.error(response.msg);
                                        break;
                                    case '1004':
                                        //账户不存在...
                                        this.$message.error(response.msg);
                                        break;
                                    case '1005':
                                        //密码不正确...
                                        this.$message.error(response.msg);
                                        break;
                                    case '1006':
                                        //IP鉴权失败...
                                        this.$message.error(response.msg);
                                        break;
                                    case '1007':
                                        //md5 key验证不正确...
                                        this.$message.error(response.msg);
                                        break;
                                    case '2001':
                                        //账户已下线...
                                        this.$message.error(response.msg);
                                        break;
                                    case '2002':
                                        //账户余额异常...
                                        this.$message.error(response.msg);
                                        break;
                                    case '2004':
                                        //订单号重复...
                                        this.$message.error(response.msg);
                                        break;
                                    case '2005':
                                        //余额不足...
                                        this.$message.error(response.msg);
                                        break;
                                    case '2006':
                                        //账户暂停...
                                        this.$message.error(response.msg);
                                        break;
                                    case '2007':
                                        //提卡异常...
                                        this.$message.error(response.msg);
                                        break;
                                    case '2008':
                                        //参数错误...
                                        this.$message.error(response.msg);
                                        break;
                                    case '2009':
                                        //预留参数错误...
                                        this.$message.error(response.msg);
                                        break;
                                    case '9999':
                                        //系统错误...
                                        this.$message.error(response.msg);
                                        break;
                                }
                            });
                        }).catch(() => {
                            this.$message.error('已取消');
                        });
                        break;
                }
            },
            // 审核不通过
            KaMi_Not_examine() {
                this.$confirm('此操作将会设置不通过审核状态，是否继续？', '温馨提示', {
                    confirmButtonText: '确 定',
                    cancelButtonText: '取 消',
                    type: 'warning'
                }).then(() => {
                    this.$res.postData(this, '/Kami/kami_examine/', {
                        examine: 0,
                        order_id: this.kamiHtmlArg.OrderNum
                    }).then((response) => {
                        this.KaMiShenHeDialog = false;
                        this.$res.postData(this, '/Kami/query_kami_list/').then((response) => {
                            this.kami_audit_Msg.data = response.map((val) => {
                                let res = val;
                                val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                                val.OrderStatus == '4' && (res['卡 密' + '_show'] = true);
                                return res;
                            });
                            this.$message.error('审核不通过');
                        });
                    });
                }).catch(() => {
                    this.KaMiShenHeDialog = false;
                    this.$message.error('已取消');
                });
            },
            // 审核通过
            KaMi_examine() {
                this.$confirm('此操作将会设置通过审核状态，是否继续？', '温馨提示', {
                    confirmButtonText: '确 定',
                    cancelButtonText: '取 消',
                    type: 'warning'
                }).then(() => {
                    this.$res.postData(this, '/Kami/kami_examine/', {
                        examine: 1,
                        order_id: this.kamiHtmlArg.OrderNum
                    }).then((response) => {
                        this.KaMiShenHeDialog = false;
                        this.$res.postData(this, '/Kami/query_kami_list/').then((response) => {
                            this.kami_audit_Msg.data = response.map((val) => {
                                let res = val;
                                val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                                val.OrderStatus == '4' && (res['卡 密' + '_show'] = true);
                                return res;
                            });
                            this.$message.success('审核通过');
                        });
                    });
                }).catch(() => {
                    this.KaMiShenHeDialog = false;
                    this.$message.error('已取消');
                });
            },
            //直充话费成功列表
            query_travel_btn() {
                this.directloading= true;
                this.$res.postData(this, '/Kami/query_travel_list/').then((response) => {
                    this.directChargeMsg.data = [];
                    this.directChargeMsg.data = response;
                    this.directloading = false;
                    this.$message.success('查询成功');
                });
            },
            zhichongMessage(text) {
                this.directChargeMsg.data = tableSearch(text, this.directChargeMsg.data);
            },
            //卡密列表
            query_kami_btn() {
                this.kamiloading = true;
                this.$res.postData(this, '/Kami/query_kami_cms_list/').then((response) => {
                    this.order_Msg.data = [];
                    this.order_Msg.data= response;
                    this.kamiloading = false;
                    this.$message.success('查询成功');
                });
            },
            kamiMessage(text) {
                this.order_Msg.data = tableSearch(text, this.order_Msg.data);
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
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
        }
    }
</script>
