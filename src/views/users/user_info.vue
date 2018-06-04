<template>
    <div id="container">
        <h1 class="h1-title">玩家信息</h1>
        <div class="cms-content">
            <ele-form :config="player_info_config" v-on:receive="player_info_submit"
                      :defaultdata="userinfoHtml"></ele-form>
            <div class="user_info">
                <el-row>
                    <el-col :span="4">用户头像：<span>{{user_data.FaceID}}</span></el-col>
                    <el-col :span="4">用户ID：<span>{{user_data.UserID}}</span></el-col>
                    <el-col :span="4">昵称：<span>{{user_data.NickName}}</span></el-col>
                    <el-col :span="4">性别：<span>{{user_data.Gender}}</span></el-col>
                    <el-col :span="4">手机绑定：<span v-if="user_data.RegisterMobile == ''">未绑定</span><span
                        v-if="user_data.RegisterMobile !== ''">{{user_data.RegisterMobile}}</span></el-col>
                    <el-col :span="4">微信绑定：<span>未绑定</span></el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">手机型号：<span></span></el-col>
                    <el-col :span="4">创建时间：<span>{{user_data.RegisterDate | transToTime}}</span></el-col>
                    <el-col :span="4">创建IP：<span>{{user_data.RegisterIP}}</span></el-col>
                    <el-col :span="4">创建MAC：<span></span></el-col>
                    <el-col :span="4">创建手机：<span v-if="user_data.RegisterMobile == ''">未绑定</span><span
                        v-if="user_data.RegisterMobile !== ''">{{user_data.RegisterMobile}}</span></el-col>
                    <el-col :span="4">创建机器：<span>{{user_data.RegisterMachine}}</span></el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">最后登录版本：<span></span></el-col>
                    <el-col :span="4">最后登录时间：<span>{{user_data.LastLogonDate | transToTime}}</span></el-col>
                    <el-col :span="4">最后登录IP：<span>{{user_data.LastLogonIP}}</span></el-col>
                    <el-col :span="4">最后登录MAC：<span></span></el-col>
                    <el-col :span="4">最后登录机器：<span>{{user_data.LastLogonMachine}}</span></el-col>
                    <el-col :span="4">最后充值时间：<span>{{user_data.lastPayDate | transToTime}}</span></el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">身上金币：<span>{{user_data.Score | bigNumberFormatter}}</span></el-col>
                    <el-col :span="4">银行金币：<span>{{user_data.InsureScore | bigNumberFormatter}}</span></el-col>
                    <el-col :span="4">钻石：<span>{{user_data.Diamonds | bigNumberFormatter}}</span></el-col>
                    <el-col :span="4">玩家经验 / 等级：<span>{{user_data.Experience}} / {{user_data.GrowLevelID}} 级</span>
                    </el-col>
                    <el-col :span="4">VIP等级：<span>{{user_data.MemberOrder}} 级</span></el-col>
                    <el-col :span="4">冻结时间：<span v-if="user_data.NullityOverDate == false">未冻结</span><span
                        v-if="user_data.NullityOverDate !== false">{{user_data.NullityOverDate | transToTime}}</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">实名认证：<span>{{user_data.ExamineState}}</span></el-col>
                    <el-col :span="4">拥有积分：<span>{{user_data.PointNum | bigNumberFormatter}}</span></el-col>
                    <el-col :span="4">兑换总次数：<span>{{user_data.ExchangeAmount}}</span></el-col>
                    <el-col :span="4">兑换总额：<span>{{user_data.totalRMB}}</span></el-col>
                    <el-col :span="4">充值总额：<span>{{user_data.PayAmount}}</span></el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">累计登录：<span>{{user_data.GameLogonTimes}} 次</span></el-col>
                    <el-col :span="4">连续登录：<span>{{user_data.continueLogonNum}} 天</span></el-col>
                    <el-col :span="4">累计赢金：<span>{{user_data.totalScore | bigNumberFormatter}}</span></el-col>
                    <el-col :span="4">单局最大赢金：<span>{{user_data.singleScore | bigNumberFormatter}}</span></el-col>
                    <el-col :span="4">累计牌局数：<span>{{user_data.totalCount}}</span></el-col>
                    <el-col :span="4">胜率：<span>{{user_data.winPro}}</span></el-col>
                </el-row>
            </div>
            <el-collapse v-model="userPackage" style="margin-top: 10px;">
                <el-collapse-item title="背包信息与设备信息" name="0">
                    <el-row :gutter="20">
                        <el-col :span="12">背包信息
                            <el-tabs type="border-card">
                                <el-tab-pane label="背包道具">
                                    <table-option :parent-message="giveItemMsg"></table-option>
                                </el-tab-pane>
                                <el-tab-pane label="购买记录">
                                    <table-option :parent-message="buyItemMsg"
                                                  v-on:outputrow="buyItem_recieveRow"></table-option>
                                </el-tab-pane>
                            </el-tabs>
                        </el-col>
                        <el-col :span="12">设备信息</el-col>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item title="用户数据记录" name="1">
                    <el-tabs type="border-card">
                        <el-tab-pane label="金币记录">
                            <ele-form :config="goldRecordConfig" v-on:receive="goldRecordSubmit"
                                      :defaultdata="goldRecordHtml"></ele-form>
                            <table-option :parent-message="goldRecordMsg" v-loading="goldRecordLoading"></table-option>
                        </el-tab-pane>
                        <el-tab-pane label="钻石记录">
                            <el-button type="success" plain @click.native="diamond_btn">查 询</el-button>
                            <!--<el-tabs>-->
                                <!--<el-tab-pane label="产出">-->
                                    <!--<el-button type="success" plain @click.native="diamondProduct_btn">查 询</el-button>-->
                                    <!--<table-option :parent-message="diamondProductdMsg"-->
                                                  <!--v-loading="diamondProductLoading"></table-option>-->
                                <!--</el-tab-pane>-->
                                <!--<el-tab-pane label="消耗">-->
                                    <!--<el-button type="success" plain @click.native="diamondConsume_btn">查 询</el-button>-->
                                    <!--<table-option :parent-message="diamondConsumedMsg"-->
                                                  <!--v-loading="diamondConsumeLoading"></table-option>-->
                                <!--</el-tab-pane>-->
                            <!--</el-tabs>-->
                        </el-tab-pane>
                        <el-tab-pane label="充值记录">
                            <el-button type="success" plain @click.native="recharge_btn">查 询</el-button>
                            <table-option :parent-message="rechargeMsg" v-loading="rechargeLoading"></table-option>
                        </el-tab-pane>
                        <el-tab-pane label="兑换记录">
                            <el-button type="success" plain @click.native="exchange_btn">查 询</el-button>
                            <table-option :parent-message="exchangeMsg" v-loading="exchangeLoading"></table-option>
                        </el-tab-pane>
                        <el-tab-pane label="银行记录">
                            <ele-form :config="bank_config" v-on:receive="bank_submit"
                                      :defaultdata="{'TradeType': '1'}"></ele-form>
                            <table-option :parent-message="bankMsg"></table-option>
                        </el-tab-pane>
                    </el-tabs>
                </el-collapse-item>
            </el-collapse>
            <div class="user_play_data cms-content" style="margin-top: 20px;">
                <h2 class="h1-title">个人 -- 游戏场数据</h2>
                <el-row :gutter="15">
                    <el-col :span="24">
                        <el-collapse v-model="gameCollaspe1">
                            <el-collapse-item :title="lookcard_game" name="2">
                                <douniu :userid="open_user_id"></douniu>
                            </el-collapse-item>
                            <el-collapse-item :title="brnn_game" name="1">
                                 <brnn :userid="open_user_id"></brnn>
                            </el-collapse-item>
                            <el-collapse-item :title="xjssc_game" name="3">
                                <xjssc :userid="open_user_id"></xjssc>
                            </el-collapse-item>
                            <el-collapse-item :title="ppl_game" name="4">
                                <ppl :userid="open_user_id"></ppl>
                            </el-collapse-item>
                            <el-collapse-item :title="ffl_game" name="5">
                                <ffl :userid="open_user_id"></ffl>
                            </el-collapse-item>
                        </el-collapse>
                    </el-col>
                </el-row>
            </div>
        </div>
        <el-dialog :title="dialog.title" :width="this.dialog.dialogName == 'doResChange'?'90%':'30%'"
                   :visible.sync="dialog.visible">
            <ele-form v-if="this.dialog.dialogName == 'doBankChange'" :config="bankChangeForm"
                      v-on:receive="submitDialog" :eventname="dialog.submitname"></ele-form>
            <ele-form v-if="this.dialog.dialogName == 'doUnbindPhone'" :config="unbindForm" v-on:receive="submitDialog"
                      :eventname="dialog.submitname"></ele-form>
            <ele-form v-if="this.dialog.dialogName == 'doUnbindWx'" :config="unbindForm" v-on:receive="submitDialog"
                      :eventname="dialog.submitname"></ele-form>
            <ele-form v-if="this.dialog.dialogName == 'doFreeze'" :config="unbindForm" v-on:receive="submitDialog"
                      :eventname="dialog.submitname"></ele-form>
            <ele-form v-if="this.dialog.dialogName == 'doUnfreeze'" :config="unbindForm" v-on:receive="submitDialog"
                      :eventname="dialog.submitname"></ele-form>
            <div v-if="this.dialog.dialogName == 'doResChange'">
                <el-row>
                    <ele-form :config="doResChange_config" v-on:receive="submitDialog"
                              :eventname="dialog.submitname"></ele-form>
                    <el-row>
                        <user-Attr-Item v-on:userAttrItem="refreshAttrAndItem"></user-Attr-Item>
                    </el-row>
                </el-row>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialog.visible = false">取 消</el-button>
                <el-button type="primary" @click="changeSubmitName">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 购买道具详情 -->
        <el-dialog title="购买道具详情" size="large" :visible.sync="buyItemDialog">
            <table-option :parent-message="buyItemDialogMsg"></table-option>
        </el-dialog>
    </div>
</template>
<script>
    //引入表格搜索
    import {
        tableSearch
    } from '@/libs/tableSearch'
    import {
        bigNumberFormatter,
        transToTime,
    } from '@/libs/filters'
    import {
        playerInfoForm,
        doResChangeDialogForm,
        bankForm,
        bankChangeForm,
        unbindForm,
        goldRecordForm
    } from '@/form/config/user_info'
    import {
        bagInfoTable,
        buyItemTable,
        buyItemDialogTable,
        bankTable,
        rechargeTable,
        exchangeTable,
        goldRecordTable,
        // diamondProductTable,
        // diamondConsumeTable
    } from '@/table/config/user_info'
    import userAttrItem from '@/components/libs/userAttrItem'
    import douniu from '@/views/personal/douniu'
    import brnn from '@/views/personal/brnn';
    import xjssc from '@/views/personal/xjssc'
    import ppl from '@/views/personal/ppl'
    import ffl from '@/views/personal/ffl'
    export default {
        name: 'user_info',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                userinfoHtml: {
                    open_user_id: '',
                },
                bankChangeForm: bankChangeForm(),
                unbindForm: unbindForm(),
                editAttrAndItem: [{}, {}],
                doResChange_config: doResChangeDialogForm(),
                open_user_id: '',
                user_data: {},
                player_info_config: playerInfoForm(),
                /* 设备信息与背包 */
                userPackage: '',
                giveItemMsg: bagInfoTable(),
                buyItemMsg: buyItemTable(),
                buyItemDialog: false,
                buyItemDialogMsg: buyItemDialogTable(),
                /* 金币记录 */
                goldRecordConfig: goldRecordForm(),
                goldRecordHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 30),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                    goldType: 0,
                },
                goldRecordMsg: goldRecordTable(),
                goldRecordLoading: false,
                /* 钻石记录 */
                // diamondProductdMsg: diamondProductTable(),
                // diamondProductLoading: false,
                // diamondConsumedMsg: diamondConsumeTable(),
                // diamondConsumeLoading: false,
                /* 银行记录 */
                bank_config: bankForm(),
                bankMsg: bankTable(),
                /* 充值记录 */
                rechargeMsg: rechargeTable(),
                rechargeLoading: false,
                /* 兑换记录 */
                exchangeMsg: exchangeTable(),
                exchangeLoading: false,
                /* 各种弹窗 */
                dialog: {
                    title: '解绑手机',
                    visible: false,
                    activeForm: {},
                    submitname: '',
                    dialogName: ''
                },
                /* 游戏场数据 */
                gameCollaspe1: '',
                brnn_game: '百人场',
                lookcard_game: '看牌抢庄',
                xjssc_game: '时时彩',
                ppl_game: '拼拼乐',
                ffl_game: '刮刮乐',
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {
            let param = location.href.match(/\?userid=(\d+)/);
            if (param) {
                let user_id = param[1];
                this.open_user_id = user_id;
                this.userinfoHtml.open_user_id = user_id;
                this.getUserInfo();
                this.getUserBunkoinfo();
            }
        },
        /* 需要事件调用的方法放在methods内 */
        methods: {
            player_info_submit(arg) {
                this.open_user_id = arg[0].open_user_id;
                switch (arg[1]) {
                    case 'query':
                        //查询
                        this.getUserInfo();
                        this.getUserBunkoinfo();
                        break;
                    case 'res':
                        //增减资源
                        this.dialog.visible = true;
                        this.dialog.title = '增减资源';
                        this.dialog.dialogName = 'doResChange';
                        break;
                    case 'bank_change':
                        //增减银行资源
                        this.dialog.visible = true;
                        this.dialog.title = '增减银行资源';
                        this.dialog.dialogName = 'doBankChange';
                        break;
                    case 'unbind_phone':
                        this.dialog.visible = true;
                        this.dialog.title = '解绑手机号';
                        this.dialog.dialogName = 'doUnbindPhone';
                        break;
                    case 'unbind_wx':
                        this.dialog.visible = true;
                        this.dialog.title = '解绑微信';
                        this.dialog.dialogName = 'doUnbindWx';
                        break;
                    case 'freeze':
                        this.dialog.visible = true;
                        this.dialog.title = '用户封号';
                        this.dialog.dialogName = 'doFreeze';
                        break;
                    case 'unfreeze':
                        this.dialog.visible = true;
                        this.dialog.title = '解除封号';
                        this.dialog.dialogName = 'doUnfreeze';
                        break;
                }
            },
            getUserInfo() {
                this.$res.postData(this, '/Userinfo/get_user_info/', {
                    open_user_id: this.open_user_id
                }).then((response) => {
                    if (response.code == -10005) {
                        this.$message.error(response.msg);
                        this.user_data = {};
                    } else {
                        this.user_data = response;
                        this.giveItemMsg.data = [];
                        this.giveItemMsg.data = response.bag;
                        this.buyItemMsg.data = [];
                        this.buyItemMsg.data = response.buyItem;
                    }
                });
            },
            getUserBunkoinfo() {
                this.$res.postData(this, '/Userinfo/query_user_playground', {
                    open_user_id: this.open_user_id
                }).then((response) => {
                    this.lookcard_game = '看牌抢庄' + ' ' + '（今日盈亏：' + response.bunko_1 + '）';
                    this.brnn_game = '百人场' + ' ' + '（今日盈亏：' + response.bunko_2 + '）';
                    this.ffl_game = '刮刮乐' + ' ' + '（今日盈亏：' + response.bunko_3 + '）';
                    this.xjssc_game = '时时彩' + ' ' + '（今日盈亏：' + response.bunko_4 + '）';
                    this.ppl_game = '拼拼乐' + ' ' + '（今日盈亏：' + response.bunko_5 + '）';
                });
            },
            buyItem_recieveRow(arg) {
                this.buyItemDialog = true;
                this.buyItemDialogMsg.data = [];
                this.buyItemDialogMsg.data.push(arg[1]);
            },
            /* 增减资源 */
            doResChange(arg) {
                this.$res.postData(this, '/Userinfo/add_user_resource/', {
                    open_user_id: this.open_user_id,
                    type: arg.type,
                    res_and_item: this.editAttrAndItem,
                    remarks: arg.extra,
                    bodybank: 'body',
                    operator: localStorage.getItem('Username'),
                }).then((response) => {
                    this.dialog.visible = false;
                    if (response.code == 0) {
                        this.$message.success(response.msg);
                        this.getUserInfo();
                    } else {
                        this.$message.error('修改资源失败，请重试');
                    }
                });
            },
            /* 增减银行资源 */
            doBankChange(arg) {
                this.$res.postData(this, '/Userinfo/add_user_bank_resource/', {
                    open_user_id: this.open_user_id,
                    type: arg.type,
                    amount: arg.amount,
                    extra: arg.extra,
                    bodybank: 'bank',
                    operator: localStorage.getItem('Username'),
                }).then((response) => {
                    this.dialog.visible = false;
                    if (response.code == 0) {
                        this.$message.success(response.msg);
                        this.getUserInfo();
                    } else {
                        this.$message.error('修改银行金币失败！');
                    }
                });
            },
            /* 解绑手机号 */
            doUnbindPhone(arg) {
                this.$res.postData(this, '/Userinfo/unbind_phone/', {
                    open_user_id: this.open_user_id
                }).then((response) => {
                    this.dialog.visible = false;
                    if (response.code == 0) {
                        this.$message.success(response.msg);
                        this.getUserInfo();
                    } else {
                        this.$message.error('解绑失败，请联系管理员');
                    }
                });
            },
            /* 解绑微信 */
            doUnbindWx(arg) {
                this.$res.postData(this, '/Userinfo/unbind_wechat/', {
                    open_user_id: this.open_user_id
                }).then((response) => {
                    this.dialog.visible = false;
                    if (response.code == 0) {
                        this.$message.success(response.msg);
                        this.getUserInfo();
                    } else {
                        this.$message.error('解绑失败，请联系管理员');
                    }
                })
            },
            /* 封号 */
            doFreeze(arg) {
                console.log(arg);
                this.$res.postData(this, '/Userinfo/user_freeze/', {
                    open_user_id: this.open_user_id,
                    reason: arg.extra,
                    operator: localStorage.getItem('Username')
                }).then((response) => {
                    this.dialog.visible = false;
                    if (response.code == 0) {
                        this.$message.success(response.msg);
                        this.getUserInfo();
                    } else {
                        this.$message.error('封号失败，请联系管理员');
                    }
                })
            },
            /* 解封 */
            doUnfreeze(arg) {
                this.$res.postData(this, '/Userinfo/user_unfreeze/', {
                    open_user_id: this.open_user_id,
                    reason: arg.extra,
                    operator: localStorage.getItem('Username')
                }).then((response) => {
                    this.dialog.visible = false;
                    if (response.code == 0) {
                        this.$message.success(response.msg);
                        this.getUserInfo();
                    } else {
                        this.$message.error('解封失败，请联系管理员');
                    }
                })
            },
            submitDialog(arg) {
                this[this.dialog.submitname](arg[0]);
            },
            changeSubmitName() {
                this.dialog.submitname = this.dialog.dialogName;
                setTimeout(() => {
                    this.dialog.submitname = '';
                }, 300);
            },
            refreshAttrAndItem(arg) {
                this.editAttrAndItem = arg;
            },
            /* 金币记录 */
            goldRecordSubmit(arg) {
                this.goldRecordLoading = true;
                let param = {
                    open_user_id: this.open_user_id,
                    query_start_time: arg[0].query_start_time,
                    query_end_time: arg[0].query_end_time,
                    goldType: arg[0].goldType
                };
                this.$res.postData(this, '/Userinfo/query_user_gold_record/', param).then((response) => {
                    this.goldRecordMsg.data = [];
                    this.goldRecordMsg.data = response;
                    this.goldRecordLoading = false;
                    this.$message.success('查询成功');
                });
            },
            /* 钻石记录 -- 产出 */
            // diamondProduct_btn() {
            //     this.diamondProductLoading = true;
            //     this.$res.postData(this, '/Userinfo/user_diamonds_record/', {
            //         open_user_id: this.open_user_id,
            //         type: 'product',
            //     }).then((response) => {
            //         this.diamondProductdMsg.data = [];
            //         this.diamondProductdMsg.data = response;
            //         this.diamondProductLoading = false;
            //         this.$message.success('查询成功');
            //     });
            // },
            /* 钻石记录 -- 消耗 */
            // diamondConsume_btn() {
            //     this.diamondConsumeLoading = true;
            //     this.$res.postData(this, '/Userinfo/user_diamonds_record/', {
            //         open_user_id: this.open_user_id,
            //         type: 'consume',
            //     }).then((response) => {
            //         this.diamondConsumedMsg.data = [];
            //         this.diamondConsumedMsg.data = response;
            //         this.diamondConsumeLoading = false;
            //         this.$message.success('查询成功');
            //     });
            // },
            /* 银行记录 */
            bank_submit(arg) {
                let param = {
                    open_user_id: this.open_user_id,
                    TradeType: arg[0].TradeType
                };
                this.$res.postData(this, '/Userinfo/bank_record/', param).then((response) => {
                    this.bankMsg.data = [];
                    this.bankMsg.data = response;
                    this.$message.success('查询成功');
                });
            },
            /* 充值记录 */
            recharge_btn() {
                this.rechargeLoading = true;
                this.$res.postData(this, '/Userinfo/query_user_recharge/', {
                    open_user_id: this.open_user_id
                }).then((response) => {
                    this.rechargeMsg.data = [];
                    this.rechargeMsg.data = response;
                    this.rechargeLoading = false;
                    this.$message.success('查询成功');
                });
            },
            /* 兑换记录 */
            exchange_btn() {
                this.exchangeLoading = true;
                this.$res.postData(this, '/Userinfo/query_user_exchange/', {
                    open_user_id: this.open_user_id
                }).then((response) => {
                    this.exchangeMsg.data = [];
                    this.exchangeMsg.data = response;
                    this.exchangeLoading = false;
                    this.$message.success('查询成功');
                });
            }
        },
        /* 引入组件放在components */
        components: {
            userAttrItem,
            douniu,
            brnn,
            xjssc,
            ppl,
            ffl,
        },
        /* 计算属性放于computed内 */
        computed: {},
        filters: {
            bigNumberFormatter: bigNumberFormatter,
            transToTime: transToTime,
        },
        created() {
            //道具表
            if (!window.item_info) {
                this.$res.getSingleData(this, '/Shop/query_win_item_info/').then((response) => {
                    if (response) {
                        window.item_info = response;
                    }
                });
            }
        }
    }

</script>
<style>
    .user_info {
        border-top: 1px solid #d1dbe5;
        border-left: 1px solid #d1dbe5;
        border-bottom: 1px solid #d1dbe5;
    }

    .user_info .el-row {
        border-bottom: 1px solid #d1dbe5;
    }

    .user_info .el-row:last-child {
        border-bottom: none;
    }

    .user_info .el-col {
        line-height: 40px;
        color: #ff6700;
        padding-left: 10px;
        border-right: 1px solid #d1dbe5;
    }

    .user_info .el-col span {
        color: #000;
    }

</style>
