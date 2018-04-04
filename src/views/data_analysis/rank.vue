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
                <el-collapse-item title="充值排行榜" name="2"></el-collapse-item>
                <el-collapse-item title="兑奖排行榜" name="3"></el-collapse-item>
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
        diamondsTable
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
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                },
                game_gold_Msg: gameGoldTable(),
                /* 钻石排行榜 */
                diamondsloading: false,
                diamonds_config: gameGoldForm(),
                diamonds_Msg: diamondsTable(),
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
                _self.$res.postData(_self, '/Rank/gold_rank/', arg[0]).then((response) => {
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
                this.$res.postData(this, '/Rank/diamonds_rank/', arg[0]).then((respnse) => {
                    this.diamonds_Msg.data = [];
                    this.diamonds_Msg.data = respnse;
                    this.diamondsloading = false;
                    this.$message.success('查询成功');
                });
            },
            diamondsMessage(text) {
                this.diamonds_Msg.data = tableSearch(text, this.diamonds_Msg.data);
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {}
    }
</script>


