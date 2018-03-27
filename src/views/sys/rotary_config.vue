<template>
    <div id="container">
        <h1 class="h1-title">抽奖记录</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="转盘管理" name="0">
                    <el-tabs type="border-card">
                        <el-tab-pane label="转盘配置">
                            <ele-form :config="zhuanpan_config" v-on:receive="zhuanpan_submit" :defaultdata="zhuanpanConfigHtml"></ele-form>
                        </el-tab-pane>
                        <el-tab-pane label="奖品配置">
                            <ele-form :config="prize_config" v-on:receive="prize_submit"></ele-form>
                            <table-option :parent-message="prize_Msg" v-on:outputrow="prize_recieveRow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                        </el-tab-pane>
                        <el-tab-pane label="抽奖明细">
                            <ele-form :config="luck_draw_config" v-on:receive="luck_draw_submit"></ele-form>
                            <table-option :parent-message="luck_draw_Msg" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                        </el-tab-pane>
                    </el-tabs>
                </el-collapse-item>
                <el-collapse-item title="7天大乐透" name="1">
                    <!--功能按钮-->
                    <ele-form :config="reward_7day_config" v-on:receive="reward_7day_submit" :defaultdata="{state: '1'}"></ele-form>
                    <!--表格区域-->
                    <el-row>
                        <el-col :span="24">
                            <table-option :parent-message="reward_7day_Msg" v-on:message="seven7Message" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                        </el-col>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item title="5步兑话费" name="1">
                    <!--功能按钮-->
                    <ele-form :config="five_step_config" v-on:receive="five_step_submit" :defaultdata="{state: '1'}"></ele-form>
                    <!--表格区域-->
                    <el-row>
                        <el-col :span="24">
                            <table-option :parent-message="five_step_Msg" v-on:message="five5Message" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                        </el-col>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item title="至尊月卡" name="1">
                    <!--功能按钮-->
                    <ele-form :config="moon_card_config" v-on:receive="moon_card_submit" :defaultdata="{state: '0'}"></ele-form>
                    <!--表格区域-->
                    <el-row>
                        <el-col :span="24">
                            <table-option :parent-message="moon_card_Msg" v-on:message="moomCardMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                        </el-col>
                    </el-row>
                </el-collapse-item>
            </el-collapse>
        </div>
        <el-dialog title="编辑奖品配置" size="tiny" :visible.sync="prizeDialog">
            <ele-form :config="prizeDialog_config" v-on:receive="prizeDialog_submit" :defaultdata="prizeDialogHtml"></ele-form>
        </el-dialog>
    </div>
</template>
<script>
//引入表格搜索
import {
    tableSearch
} from '@/libs/tableSearch'
import {
    zhuanpanForm,
    prizeForm,
    prizeDialogForm,
    luckDrawForm,
    reward7DayForm,
    fiveStepForm,
    moonCardForm
} from '@/form/config/rotary_config'
import {
    prizeTable,
    luckDrawTable,
    reward7DayTable,
    fiveStepTable,
    moonCardTable
} from '@/table/config/rotary_config'
export default {
    name: 'rotary_config',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            activeName: '1',
            loading: false,
            /* 转盘配置 */
            zhuanpan_config: zhuanpanForm(),
            zhuanpanConfigHtml: {},
            /* 奖品配置 */
            prize_config: prizeForm(),
            prize_Msg: prizeTable(),
            prizeDialog: false,
            prizeDialog_config: prizeDialogForm(),
            prizeDialogHtml: {},
            /* 抽奖明细 */
            luck_draw_config: luckDrawForm(),
            luck_draw_Msg: luckDrawTable(),
            /* 7天大乐透 */
            reward_7day_config: reward7DayForm(),
            reward_7day_Msg: reward7DayTable(),
            /* 5步兑话费 */
            five_step_config: fiveStepForm(),
            five_step_Msg: fiveStepTable(),
            /* 至尊月卡 */
            moon_card_config: moonCardForm(),
            moon_card_Msg: moonCardTable(),
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 转盘配置 */
        zhuanpan_submit(arg) {
            this.$confirm('此操作将会设置新抽奖配置，是否继续？', '温馨提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let param = {
                    ID: 1,
                    FreeCount: arg[0].FreeCount,
                    ChargeFee: arg[0].ChargeFee,
                    IsCharge: arg[0].IsCharge
                };
                this.$res.postData(this, '/Sys/zhuanpan_setup/', param).then((response) => {
                    console.log(response);
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消设置'
                });
            });
        },
        /* 奖品配置 */
        prize_submit(arg) {
            this.loading = true;
            this.$res.postData(this, '/Sys/zp_reward_con/').then((response) => {
                this.prize_Msg.data = [];
                this.prize_Msg.data = response;
                this.loading = false;
                this.$message.success('查询成功');
            });
        },
        prize_recieveRow(arg) {
            this.$message.success('奖品配置 - 编辑');
            this.prizeDialog = true;
            this.prizeDialogHtml = arg[1];
        },
        prizeDialog_submit(arg) {
            this.prizeDialog = false;
            this.$res.postData(this, '/Sys/edit_zp_reward/', arg[0]).then((response) => {
                if (response.code == 0) {
                    this.$message.success('更新成功');
                    this.loading = true;
                    this.$res.postData(this, '/Sys/zp_reward_con/').then((response) => {
                        this.prize_Msg.data = [];
                        this.prize_Msg.data = response;
                        this.loading = false;
                        this.$message.success('查询成功');
                    });
                }
            });
        },
        /* 抽奖明细 */
        luck_draw_submit(arg) {
            this.$message.success('抽奖明细');
        },
        /* 7天大乐透 */
        reward_7day_submit(arg) {
            this.loading = true;
            this.$res.postData(this, '/Sys/get_7day/', arg[0]).then((response) => {
                this.reward_7day_Msg.data = [];
                this.reward_7day_Msg.data = response;
                this.loading = false;
                this.$message.success('查询成功');
            });
        },
        /* 5步兑话费 */
        five_step_submit(arg) {
            this.loading = true;
            this.$res.postData(this, '/Sys/get_five_step/', arg[0]).then((response) => {
                this.five_step_Msg.data = [];
                this.five_step_Msg.data = response;
                this.loading = false;
                this.$message.success('查询成功');
            });
        },
        /* 至尊月卡 */
        moon_card_submit(arg) {
            this.loading = true;
            this.$res.postData(this, '/Sys/get_moon_card/', arg[0]).then((response) => {
                this.moon_card_Msg.data = [];
                this.moon_card_Msg.data = response;
                this.loading = false;
                this.$message.success('查询成功');
            });
        },
        /* 搜索 */
        seven7Message(text) {
            this.reward_7day_Msg.data = tableSearch(text, this.reward_7day_Msg.data);
        },
        five5Message(text) {
            this.five_step_Msg.data = tableSearch(text, this.five_step_Msg.data);
        },
        moomCardMessage(text) {
            this.moon_card_Msg.data = tableSearch(text, this.moon_card_Msg.data);
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        /* 转盘配置 接口数据 */
        this.$res.postData(this, '/Sys/zhuanpan/').then((response) => {
            this.zhuanpanConfigHtml = {
                FreeCount: response[0].FreeCount,
                ChargeFee: response[0].ChargeFee,
                IsCharge: response[0].IsCharge
            };
        });
        /* 7天大乐透 */
        this.$res.postData(this, '/Sys/get_7day/', {
            state: "1"
        }).then((response) => {
            this.reward_7day_Msg.data = [];
            this.reward_7day_Msg.data = response;
            this.$message.success('查询成功');
        });
        /* 5步兑话费 */
        this.$res.postData(this, '/Sys/get_five_step/', {
            state: "1"
        }).then((response) => {
            this.five_step_Msg.data = [];
            this.five_step_Msg.data = response;
            this.$message.success('查询成功');
        });
        /* 至尊月卡 */
        this.$res.postData(this, '/Sys/get_moon_card/', {
            state: "0"
        }).then((response) => {
            this.moon_card_Msg.data = [];
            this.moon_card_Msg.data = response;
            this.$message.success('查询成功');
        });
    }
}

</script>
