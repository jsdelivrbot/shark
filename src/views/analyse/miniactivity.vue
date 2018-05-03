<template>
    <div id="container">
        <h1 class="h1-title">任务分析</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="7天大乐透" name="1">
                    <!--功能按钮-->
                    <ele-form :config="reward_7day_config" v-on:receive="reward_7day_submit" :defaultdata="{state: '1'}"></ele-form>
                    <!--表格区域-->
                    <el-row>
                        <el-col :span="24">
                            <table-option :parent-message="reward_7day_Msg" v-on:message="seven7Message" v-on:pagedata="sevenChangePage" v-loading="seven7loading" element-loading-text="拼命加载中"></table-option>
                        </el-col>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item title="5步兑话费" name="2">
                    <!--功能按钮-->
                    <ele-form :config="five_step_config" v-on:receive="five_step_submit" :defaultdata="fiveHtml"></ele-form>
                    <!--表格区域-->
                    <el-row>
                        <el-col :span="24">
                            <table-option :parent-message="five_step_Msg" v-on:message="five5Message" v-on:pagedata="fiveChangePage" v-loading="fivesteploading" element-loading-text="拼命加载中"></table-option>
                        </el-col>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item title="至尊月卡" name="3">
                    <!--功能按钮-->
                    <ele-form :config="moon_card_config" v-on:receive="moon_card_submit" :defaultdata="{state: '0'}"></ele-form>
                    <!--表格区域-->
                    <el-row>
                        <el-col :span="24">
                            <table-option :parent-message="moon_card_Msg" v-on:message="moomCardMessage" v-loading="monthcardsloading" element-loading-text="拼命加载中"></table-option>
                        </el-col>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item title="定时奖励" name="4">
                    <ele-form :config="time_config" v-on:receive="time_submit" :defaultdata="timingHtml"></ele-form>
                    <table-option :parent-message="timing_Msg" v-on:message="timingMessage" v-loading="timeloading" element-loading-text="拼命加载中"></table-option>
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
    reward7DayForm,
    fiveStepForm,
    moonCardForm,
    timeForm
} from '@/form/config/miniactivity'
import {
    reward7DayTable,
    fiveStepTable,
    moonCardTable,
    timeTable
} from '@/table/config/miniactivity'
export default {
    name: 'miniactivity',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            activeName: ['4'],
            /* 7天大乐透 */
            seven7loading: false,
            reward_7day_config: reward7DayForm(),
            reward_7day_Msg: reward7DayTable(),
            /* 5步兑话费 */
            fivesteploading: false,
            five_step_config: fiveStepForm(),
            five_step_Msg: fiveStepTable(),
            fiveHtml: {
                state: '1'
            },
            /* 至尊月卡 */
            monthcardsloading: false,
            moon_card_config: moonCardForm(),
            moon_card_Msg: moonCardTable(),
            /* 定时奖励 */
            time_config: timeForm(),
            timingHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 7),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            timing_Msg: timeTable(),
            timeloading: false,
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 7天大乐透 */
        reward_7day_submit(arg) {
            this.seven7loading = true;
            this.$res.postData(this, '/Miniactivity/query_seven_days/').then((response) => {
                this.reward_7day_Msg.data = response.rows.map((val) => {
                    return val;
                });
                this.reward_7day_Msg.total = response.total;
                this.seven7loading = false;
                this.$message.success('查询成功');
            });
        },
        sevenChangePage(arg) {
            this.seven7loading = true;
            this.$res.postData(this, '/Miniactivity/query_seven_days/', {
                page: arg[0],
                psize: arg[1]
            }).then((response) => {
                this.reward_7day_Msg.data = response.rows;
                this.reward_7day_Msg.total = response.total;
                this.seven7loading = false;
            })
        },
        /* 5步兑话费 */
        five_step_submit(arg) {
            this.fivesteploading = true;
            this.$res.postData(this, '/Miniactivity/query_five_step/').then((response) => {
                this.five_step_Msg.data = response.rows.map((val) => {
                    return val;
                });
                this.five_step_Msg.total = response.total;
                this.fivesteploading = false;
                this.$message.success('查询成功');
            });
        },
        fiveChangePage(arg) {
            this.fivesteploading = true;
            this.$res.postData(this, '/Miniactivity/query_five_step/', {
                page: arg[0],
                psize: arg[1]
            }).then((response) => {
                this.five_step_Msg.data = response.rows;
                this.five_step_Msg.total = response.total;
                this.fivesteploading = false;
            });
        },
        /* 至尊月卡 */
        moon_card_submit(arg) {
            this.monthcardsloading = true;
            this.$res.postData(this, '/Miniactivity/query_month_cards/', arg[0]).then((response) => {
                this.moon_card_Msg.data = [];
                this.moon_card_Msg.data = response;
                this.monthcardsloading = false;
                this.$message.success('查询成功');
            });
        },
        /* 定时奖励 */
        time_submit(arg) {

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
        },
        timingMessage(text) {
            this.timing_Msg.data = tableSearch(text, this.timing_Msg.data);
        },
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        /* 7天大乐透 */
        this.$res.postData(this, '/Miniactivity/query_seven_days/').then((response) => {
            this.reward_7day_Msg.data = [];
            this.reward_7day_Msg.data = response.rows;
            this.reward_7day_Msg.total = response.total;
        });
        /* 5步兑话费 */
        this.$res.postData(this, '/Miniactivity/query_five_step/').then((response) => {
            this.five_step_Msg.data = [];
            this.five_step_Msg.data = response.rows;
            this.five_step_Msg.total = response.total;
        });
        /* 至尊月卡 */
        this.$res.postData(this, '/Miniactivity/query_month_cards/', {
            state: 0
        }).then((response) => {
            this.moon_card_Msg.data = [];
            this.moon_card_Msg.data = response;
        });
    }
}

</script>
