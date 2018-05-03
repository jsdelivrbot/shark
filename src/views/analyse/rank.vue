<template>
    <div id="container">
        <h1 class="h1-title">排行榜</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="金币排行榜" name="0">
                    <ele-form :config="game_gold_config" v-on:receive="game_gold_submit" :defaultdata="golddefaultTime"></ele-form>
                    <table-option :parent-message="game_gold_Msg" v-on:message="goldRankMessage" v-loading="goldloading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="钻石排行榜" name="1">
                    <ele-form :config="diamonds_config" v-on:receive="diamonds_submit" :defaultdata="golddefaultTime"></ele-form>
                    <table-option :parent-message="diamonds_Msg" v-on:message="diamondsMessage" v-loading="diamondsloading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="充值排行榜" name="2">
                    <el-button type="success" plain @click.native="pay_btn">查 询</el-button>
                    <table-option :parent-message="pay_Msg" v-loading="payloading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="兑奖排行榜" name="3">
                    <el-tabs type="border-card">
                        <el-tab-pane label="金币兑换排行">
                            <el-button type="success" plain @click.native="goldExchange_btn">查 询</el-button>
                            <table-option :parent-message="goldExchange_Msg" v-loading="goldExchangeLoading"></table-option>
                        </el-tab-pane>
                        <el-tab-pane label="话费兑换排行">
                            <el-button type="success" plain @click.native="telExchange_btn">查 询</el-button>
                            <table-option :parent-message="telExchange_Msg" v-loading="telExchangeLoading"></table-option>
                        </el-tab-pane>
                        <el-tab-pane label="实物兑换排行">
                            <el-button type="success" plain @click.native="itemExchange_btn">查 询</el-button>
                            <table-option :parent-message="itemExchange_Msg" v-loading="itemExchangeLoading"></table-option>
                        </el-tab-pane>
                    </el-tabs>
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
    gameGoldForm
} from '@/form/config/rank'
import {
    gameGoldTable,
    diamondsTable,
    payTable,
    goldExchangeTable,
    telExchangeTable,
    itemExchangeTable
} from '@/table/config/rank'
export default {
    name: 'rank',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            activeName: '',
            /* 金币排行榜 */
            goldloading: false,
            game_gold_config: gameGoldForm(),
            golddefaultTime: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 24 * 3600 * 29),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            game_gold_Msg: gameGoldTable(),
            /* 钻石排行榜 */
            diamondsloading: false,
            diamonds_config: gameGoldForm(),
            diamonds_Msg: diamondsTable(),
            /* 充值排行版 */
            pay_Msg: payTable(),
            payloading: false,
            /* 金币兑换排行 */
            goldExchange_Msg: goldExchangeTable(),
            goldExchangeLoading: false,
            telExchange_Msg: telExchangeTable(),
            telExchangeLoading: false,
            itemExchange_Msg: itemExchangeTable(),
            itemExchangeLoading: false,
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 金币排行榜 */
        game_gold_submit(arg) {
            let _self = this;
            _self.goldloading = true;
            _self.$res.postData(_self, '/Rank/query_user_gold_rank/', arg[0]).then((response) => {
                _self.game_gold_Msg.data = [];
                _self.game_gold_Msg.data = response;
                _self.goldloading = false;
                _self.$message.success('查询成功');
            });
        },
        goldRankMessage(text) {
            this.game_gold_Msg.data = tableSearch(text, this.game_gold_Msg.data);
        },
        /* 钻石排行榜 */
        diamonds_submit(arg) {
            this.diamondsloading = true;
            this.$res.postData(this, '/Rank/query_diamonds_rank/', arg[0]).then((response) => {
                this.diamonds_Msg.data = [];
                this.diamonds_Msg.data = response;
                this.diamondsloading = false;
                this.$message.success('查询成功');
            });
        },
        diamondsMessage(text) {
            this.diamonds_Msg.data = tableSearch(text, this.diamonds_Msg.data);
        },
        /* 充值排行榜 */
        pay_btn() {
            this.payloading = true;
            this.$res.postData(this, '/Rank/query_user_pay_rank/').then((response) => {
                this.pay_Msg.data = [];
                this.pay_Msg.data = response;
                this.payloading = false;
                this.$message.success('查询成功');
            });
        },
        /* 兑奖排行榜 */
        // 金币
        goldExchange_btn() {
            this.goldExchangeLoading = true;
            this.$res.postData(this, '/Rank/query_user_exchange/', {
                type: 1
            }).then((response) => {
                this.goldExchange_Msg.data = [];
                this.goldExchange_Msg.data = response;
                this.goldExchangeLoading = false;
                this.$message.success('查询成功');
            });
        },
        // 话费
        telExchange_btn() {
            this.telExchangeLoading = true;
            this.$res.postData(this, '/Rank/query_user_exchange/', {
                type: 2
            }).then((response) => {
                this.telExchange_Msg.data = [];
                this.telExchange_Msg.data = response;
                this.telExchangeLoading = false;
                this.$message.success('查询成功');
            });
        },
        // 实物
        itemExchange_btn() {
            this.itemExchangeLoading = true;
            this.$res.postData(this, '/Rank/query_user_exchange/', {
                type: 3
            }).then((response) => {
                this.itemExchange_Msg.data = [];
                this.itemExchange_Msg.data = response;
                this.itemExchangeLoading = false;
                this.$message.success('查询成功');
            });
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        let _self = this;
        /* 金币排行榜 */
        _self.$res.postData(_self, '/Rank/query_user_gold_rank/', {
            query_start_time: _self.golddefaultTime.query_start_time,
            query_end_time: _self.golddefaultTime.query_end_time
        }).then((response) => {
            _self.game_gold_Msg.data = [];
            _self.game_gold_Msg.data = response;
        });
        /* 钻石排行榜 */
        _self.$res.postData(_self, '/Rank/query_diamonds_rank/', {
            query_start_time: _self.golddefaultTime.query_start_time,
            query_end_time: _self.golddefaultTime.query_end_time
        }).then((response) => {
            _self.diamonds_Msg.data = [];
            _self.diamonds_Msg.data = response;
        });
        /* 充值排行榜 */
        _self.$res.postData(_self, '/Rank/query_user_pay_rank').then((response) => {
            _self.pay_Msg.data = [];
            _self.pay_Msg.data = response;
        });
        /* 兑奖排行榜 */
        /* 金币 */
        _self.$res.postData(_self, '/Rank/query_user_exchange/', {
            type: 1
        }).then((response) => {
            _self.goldExchange_Msg.data = [];
            _self.goldExchange_Msg.data = response;
        });
        /* 话费 */
        _self.$res.postData(_self, '/Rank/query_user_exchange/', {
            type: 2
        }).then((response) => {
            _self.telExchange_Msg.data = [];
            _self.telExchange_Msg.data = response;
        });
        /* 实物 */
        _self.$res.postData(_self, '/Rank/query_user_exchange/', {
            type: 3
        }).then((response) => {
            _self.itemExchange_Msg.data = [];
            _self.itemExchange_Msg.data = response;
        });
    }
}

</script>
