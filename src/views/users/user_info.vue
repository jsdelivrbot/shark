<template>
    <div id="container">
        <h1 class="h1-title">玩家信息</h1>
        <div class="cms-content">
            <ele-form :config="player_info_config" v-on:receive="player_info_submit" :defaultdata="userinfoHtml"></ele-form>
            <div class="user_info">
                <el-row>
                    <el-col :span="4">用户头像：<span>{{user_data.FaceID}}</span></el-col>
                    <el-col :span="4">用户ID：<span>{{user_data.UserID}}</span></el-col>
                    <el-col :span="4">昵称：<span>{{user_data.NickName}}</span></el-col>
                    <el-col :span="4">手机绑定：<span>{{user_data.InsureMobile}}</span></el-col>
                    <el-col :span="4">微信绑定：<span></span></el-col>
                    <el-col :span="4">冻结时间：<span>{{user_data.NullityOverDate | transToTime}}</span></el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">手机型号：<span></span></el-col>
                    <el-col :span="4">创建时间：<span>{{user_data.RegisterDate | transToTime}}</span></el-col>
                    <el-col :span="4">创建IP：<span>{{user_data.RegisterIP}}</span></el-col>
                    <el-col :span="4">创建MAC：<span></span></el-col>
                    <el-col :span="4">创建手机：<span>{{user_data.RegisterMobile}}</span></el-col>
                    <el-col :span="4">创建机器：<span>{{user_data.RegisterMachine}}</span></el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">最后登录版本：<span></span></el-col>
                    <el-col :span="4">最后登录时间：<span>{{user_data.LastLogonDate | transToTime}}</span></el-col>
                    <el-col :span="4">最后登录IP：<span>{{user_data.LastLogonIP}}</span></el-col>
                    <el-col :span="4">最后登录MAC：<span></span></el-col>
                    <el-col :span="4">最后登录机器：<span>{{user_data.LastLogonMachine}}</span></el-col>
                    <el-col :span="4">最后充值时间：<span></span></el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">身上金币：<span>{{user_data.Score | bigNumberFormatter}}</span></el-col>
                    <el-col :span="4">银行金币：<span>{{user_data.InsureScore | bigNumberFormatter}}</span></el-col>
                    <el-col :span="4">玩家等级：<span>{{user_data.Experience}} / {{user_data.GrowLevelID}} 级</span></el-col>
                    <el-col :span="4">VIP等级：<span>{{user_data.MemberOrder}} 级</span></el-col>
                    <el-col :span="4">兑现总额：<span></span></el-col>
                    <el-col :span="4">充值总额：<span></span></el-col>
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
                                    <table-option :parent-message="buyItemMsg" v-on:outputrow="buyItem_recieveRow"></table-option>
                                </el-tab-pane>
                            </el-tabs>
                        </el-col>
                        <el-col :span="12">设备信息</el-col>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item title="用户数据记录" name="1">
                    <el-tabs type="border-card">
                        <el-tab-pane label="银行记录">
                            <ele-form :config="bank_config" v-on:receive="bank_submit" :defaultdata="{'TradeType': '1'}"></ele-form>
                            <table-option :parent-message="bankMsg" v-on:message="bankMessage"></table-option>
                        </el-tab-pane>
                        <el-tab-pane label="充值记录"></el-tab-pane>
                        <el-tab-pane label="兑换记录"></el-tab-pane>
                    </el-tabs>
                </el-collapse-item>
            </el-collapse>
            <div class="user_play_data cms-content" style="margin-top: 20px;">
                <h2 class="h1-title">个人 -- 游戏场数据</h2>
                <el-row :gutter="15">
                    <el-col :span="24">
                        <el-collapse v-model="gameCollaspe1">
                            <el-collapse-item :title="brnn_game" name="1">
                                <brnn :userid="open_user_id"></brnn>
                            </el-collapse-item>
                            <el-collapse-item :title="lookcard_game" name="2"></el-collapse-item>
                            <el-collapse-item :title="xjssc_game" name="3"></el-collapse-item>
                            <el-collapse-item :title="ppl_game" name="4"></el-collapse-item>
                            <el-collapse-item :title="ffl_game" name="5"></el-collapse-item>
                        </el-collapse>
                    </el-col>
                </el-row>
            </div>
        </div>
        <el-dialog :title="dialog.title" :width="this.dialog.dialogName == 'doResChange'?'90%':'30%'" :visible.sync="dialog.visible">
            <ele-form v-if="this.dialog.dialogName == 'doBankChange'" :config="bankChangeForm" v-on:receive="submitDialog" :eventname="dialog.submitname"></ele-form>
            <ele-form v-if="this.dialog.dialogName == 'doUnbindPhone'" :config="unbindForm" v-on:receive="submitDialog" :eventname="dialog.submitname"></ele-form>
            <ele-form v-if="this.dialog.dialogName == 'doUnbindWx'" :config="unbindForm" v-on:receive="submitDialog" :eventname="dialog.submitname"></ele-form>
            <ele-form v-if="this.dialog.dialogName == 'doFreeze'" :config="unbindForm" v-on:receive="submitDialog" :eventname="dialog.submitname"></ele-form>
            <ele-form v-if="this.dialog.dialogName == 'doUnfreeze'" :config="unbindForm" v-on:receive="submitDialog" :eventname="dialog.submitname"></ele-form>
            <div v-if="this.dialog.dialogName == 'doResChange'">
                <el-row>
                    <ele-form :config="doResChange_config" v-on:receive="submitDialog" :eventname="dialog.submitname"></ele-form>
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
    transToTime
} from '@/libs/filters'
import {
    playerInfoForm,
    doResChangeDialogForm,
    bankForm,
    bankChangeForm,
    unbindForm
} from '@/form/config/user_data'
import {
    bagInfoTable,
    buyItemTable,
    buyItemDialogTable,
    bankTable
} from '@/table/config/user_data'
import userAttrItem from '@/components/libs/userAttrItem'
import brnn from '@/views/personal_data/brnn';
export default {
    name: 'user_data',
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
            /* 银行记录 */
            bank_config: bankForm(),
            bankMsg: bankTable(),
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
            this.$res.postData(this, '/User/get_user_info/', {
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
        buyItem_recieveRow(arg) {
            this.buyItemDialog = true;
            this.buyItemDialogMsg.data = [];
            this.buyItemDialogMsg.data.push(arg[1]);
        },
        /* 增减资源 */
        doResChange(arg) {
            this.$res.postData(this, '/User/add_user_resource/', {
                open_user_id: this.open_user_id,
                type: arg.type,
                res_and_item: this.editAttrAndItem
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
            this.$res.postData(this, '/User/add_user_bank_resource/', {
                open_user_id: this.open_user_id,
                type: arg.type,
                amount: arg.amount,
                extra: arg.extra
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
            this.$res.postData(this, '/User/unbind_phone/', {
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
            this.$res.postData(this, '/User/unbind_wechat/', {
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
            this.$res.postData(this, '/User/user_freeze/', {
                open_user_id: this.open_user_id
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
            this.$res.postData(this, '/User/user_unfreeze/', {
                open_user_id: this.open_user_id
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
        /* 银行记录 */
        bank_submit(arg) {
            let param = {
                open_user_id: this.open_user_id,
                TradeType: arg[0].TradeType
            };
            this.$res.postData(this, '/User/bank_record/', param).then((response) => {
                this.bankMsg.data = [];
                this.bankMsg.data = response;
            });
        },
        /* 银行记录 搜索功能 */
        bankMessage(text) {
            this.bankMsg.data = tableSearch(text, this.bankMsg.data);
        }
    },
    /* 引入组件放在components */
    components: {
        userAttrItem,
        brnn,
    },
    /* 计算属性放于computed内 */
    computed: {},
    filters: {
        bigNumberFormatter: bigNumberFormatter,
        transToTime: transToTime
    },
    created() {
        //道具表
        if (!window.item_info) {
            this.$res.getSingleData(this, '/Shop/query_shop_prop/').then((response) => {
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
