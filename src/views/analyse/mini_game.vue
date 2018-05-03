<template>
    <div id="container">
        <h1 class="h1-title">小游戏</h1>
        <div class="cms-content">
            <ele-form :config="mini_config" v-on:receive="mini_submit" :defaultdata="miniDefaultHtml"></ele-form>
            <chart-option :chart-data="chartD" :chart-id="chartId"></chart-option>
            <br />
            <el-collapse v-model="activeName">
                <el-collapse-item title="百人场" name="0">
                    <el-tabs type="border-card">
                        <el-tab-pane label="单局记录">
                            <ele-form :config="brnn_single_config" v-on:receive="brnn_single_submit" :defaultdata="brnndefaultTime"></ele-form>
                            <table-option :parent-message="brnnSingleMsg" v-on:message="brnnMessage" v-loading="brnnloading" element-loading-text="拼命加载中"></table-option>
                        </el-tab-pane>
                        <el-tab-pane label="测试">测试</el-tab-pane>
                    </el-tabs>
                </el-collapse-item>
                <el-collapse-item title="时时彩" name="1">
                    <el-tabs type="border-card">
                        <el-tab-pane label="单局记录">
                            <ele-form :config="xjssc_single_config" v-on:receive="xjssc_single_submit" :defaultdata="xjsscdefaultTime"></ele-form>
                            <table-option :parent-message="singleSingle_Msg" v-on:message="xjsscMessage" v-loading="xjsscloading" element-loading-text="拼命加载中"></table-option>
                        </el-tab-pane>
                        <el-tab-pane label="测试">测试</el-tab-pane>
                    </el-tabs>
                </el-collapse-item>
                <el-collapse-item title="拼拼乐" name="2">
                    <el-tabs type="border-card">
                        <el-tab-pane label="单局记录">
                            <ele-form :config="ppl_single_config" v-on:receive="ppl_single_submit" :defaultdata="ppldefaultTime"></ele-form>
                            <table-option :parent-message="ppl_single_Msg" v-on:message="pplMessage" v-loading="pplloading" element-loading-text="拼命加载中"></table-option>
                        </el-tab-pane>
                        <el-tab-pane label="测试">测试</el-tab-pane>
                    </el-tabs>
                </el-collapse-item>
                <el-collapse-item title="刮刮乐" name="3">
                    <el-tabs type="border-card">
                        <el-tab-pane label="单局记录">
                            <ele-form :config="ffl_single_config" v-on:receive="ffl_single_submit" :defaultdata="ffldefaultTime"></ele-form>
                            <table-option :parent-message="ffl_single_Msg" v-on:message="fflMessage" v-loading="fflloading" element-loading-text="拼命加载中"></table-option>
                        </el-tab-pane>
                        <el-tab-pane label="测试">测试</el-tab-pane>
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
    miniConForm,
    brnnSingleForm,
    xjsscSingleForm,
    pplSingleForm,
    fflSingleForm
} from '@/form/config/mini_game'
import {
    brnnSingleTable,
    xjsscSingleTable,
    pplSingleTable,
    fflSingleTable
} from '@/table/config/mini_game'
import {
    brnnChart
} from '@/chart/config/brnnChart'
export default {
    name: 'mini_game',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            activeName: '',
            mini_config: miniConForm(),
            miniDefaultHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                selGame: '10005',
            },
            chartD: brnnChart(),
            chartId: 'brnn_qx_chart',
            /* 百人场 */
            brnnloading: false,
            brnn_single_config: brnnSingleForm(),
            brnndefaultTime: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            brnnSingleMsg: brnnSingleTable(),
            /* 时时彩 */
            xjsscloading: false,
            xjssc_single_config: xjsscSingleForm(),
            xjsscdefaultTime: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            singleSingle_Msg: xjsscSingleTable(),
            /* 拼拼乐 */
            pplloading: false,
            ppl_single_config: pplSingleForm(),
            ppldefaultTime: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            ppl_single_Msg: pplSingleTable(),
            /* 刮刮乐 */
            ffl_single_config: fflSingleForm(),
            ffldefaultTime: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            ffl_single_Msg: fflSingleTable(),
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 公共曲线图 */
        mini_submit(arg) {
            let _self = this;
            _self.$res.postData(_self, '/Minigame/query_minigame_qx/', {
                KindID: arg[0].selGame,
                query_start_time: arg[0].query_start_time,
                query_end_time: arg[0].query_end_time
            }).then((response) => {
                let data = {
                    human_cnt: [],
                    robot_cnt: [],
                    Waste: [],
                    tax: [],
                };
                response.forEach((single_data) => {
                    let time = parseInt((single_data['ConcludeTime'] + 8 * 3600)) * 1000;
                    data.human_cnt.push([time, single_data.UserCount]);
                    data.robot_cnt.push([time, single_data.AndroidCount]);
                    data.Waste.push([time, single_data.Waste]);
                    data.tax.push([time, single_data.Revenue]);
                });
                _self.chartD.series = [{
                    name: '真人在线',
                    data: data.human_cnt
                }, {
                    name: '机器人在线',
                    data: data.robot_cnt
                }, {
                    name: '真人盈亏',
                    data: data.Waste
                }, {
                    name: '税收',
                    data: data.tax
                }];
            });
        },
        /* 百人场 */
        /* 单局记录 */
        brnn_single_submit(arg) {
            let _self = this;
            _self.brnnloading = true;
            _self.$res.postData(_self, '/Minigame/brnn_single/', {
                KindID: 10005,
                query_start_time: arg[0].query_start_time,
                query_end_time: arg[0].query_end_time
            }).then((response) => {
                _self.brnnSingleMsg.data = [];
                _self.brnnSingleMsg.data = response.reverse();
                _self.brnnloading = false;
                _self.$message.success('查询成功');
            });
        },
        brnnMessage(text) {
            this.brnnSingleMsg.data = tableSearch(text, this.brnnSingleMsg.data);
        },
        /* 时时彩 */
        /* 单局记录 */
        xjssc_single_submit(arg) {
            this.xjsscloading = true;
            this.$res.postData(this, '/Minigame/xjssc_single/', {
                KindID: 10007,
                query_start_time: arg[0].query_start_time,
                query_end_time: arg[0].query_end_time
            }).then((response) => {
                this.singleSingle_Msg.data = [];
                this.singleSingle_Msg.data = response.reverse();
                this.xjsscloading = false;
                this.$message.success('查询成功');
            });
        },
        xjsscMessage(text) {
            this.singleSingle_Msg.data = tableSearch(text, this.singleSingle_Msg.data);
        },
        /* 拼拼乐 */
        /* 单局记录 */
        ppl_single_submit(arg) {
            this.pplloading = true;
            this.$res.postData(this, '/Minigame/ppl_single/', {
                KindID: 10008,
                query_start_time: arg[0].query_start_time,
                query_end_time: arg[0].query_end_time
            }).then((response) => {
                this.ppl_single_Msg.data = [];
                this.ppl_single_Msg.data = response.reverse();
                this.pplloading = false;
                this.$message.success('查询成功');
            });
        },
        pplMessage(text) {
            this.ppl_single_Msg.data = tableSearch(text, this.ppl_single_Msg.data);
        },
        /* 刮刮乐 */
        /* 单局记录 */
        ffl_single_submit(arg) {
            this.fflloading = true;
            this.$res.postData(this, '/Minigame/ffl_single/', {
                KindID: 10006,
                query_start_time: arg[0].query_start_time,
                query_end_time: arg[0].query_end_time
            }).then((response) => {
                this.ffl_single_Msg.data = [];
                this.ffl_single_Msg.data = response.reverse();
                this.fflloading = false;
                this.$message.success('查询成功');
            });
        },
        fflMessage(text) {
            this.ffl_single_Msg.data = tableSearch(text, this.ffl_single_Msg.data);
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        let _self = this;
        /* 公共曲线 */
        _self.$res.postData(_self, '/Minigame/query_minigame_qx/', {
            KindID: _self.miniDefaultHtml.selGame,
            query_start_time: _self.miniDefaultHtml.query_start_time,
            query_end_time: _self.miniDefaultHtml.query_end_time
        }).then((response) => {
            let data = {
                human_cnt: [],
                robot_cnt: [],
                Waste: [],
                tax: [],
            };
            response.forEach((single_data) => {
                let time = parseInt((single_data['ConcludeTime'] + 8 * 3600)) * 1000;
                data.human_cnt.push([time, single_data.UserCount]);
                data.robot_cnt.push([time, single_data.AndroidCount]);
                data.Waste.push([time, single_data.Waste]);
                data.tax.push([time, single_data.Revenue]);
            });
            _self.chartD.series = [{
                name: '真人在线',
                data: data.human_cnt
            }, {
                name: '机器人在线',
                data: data.robot_cnt
            }, {
                name: '真人盈亏',
                data: data.Waste
            }, {
                name: '税收',
                data: data.tax
            }];
        });
        /* 百人场 */
        _self.$res.postData(_self, '/Minigame/brnn_single/', {
            KindID: 10005,
            query_start_time: _self.brnndefaultTime.query_start_time,
            query_end_time: _self.brnndefaultTime.query_end_time
        }).then((response) => {
            _self.brnnSingleMsg.data = [];
            _self.brnnSingleMsg.data = response.reverse();
        });
        /* 时时彩 */
        this.$res.postData(this, '/Minigame/xjssc_single/', {
            KindID: 10007,
            query_start_time: _self.xjsscdefaultTime.query_start_time,
            query_end_time: _self.xjsscdefaultTime.query_end_time
        }).then((response) => {
            this.singleSingle_Msg.data = [];
            this.singleSingle_Msg.data = response.reverse();
        });
        /* 拼拼乐 */
        this.$res.postData(this, '/Minigame/ppl_single/', {
            KindID: 10008,
            query_start_time: _self.ppldefaultTime.query_start_time,
            query_end_time: _self.ppldefaultTime.query_end_time
        }).then((response) => {
            this.ppl_single_Msg.data = [];
            this.ppl_single_Msg.data = response.reverse();
        });
        /* 刮刮乐 */
        this.$res.postData(this, '/Minigame/ffl_single/', {
            KindID: 10006,
            query_start_time: _self.ffldefaultTime.query_start_time,
            query_end_time: _self.ffldefaultTime.query_end_time
        }).then((response) => {
            this.ffl_single_Msg.data = [];
            this.ffl_single_Msg.data = response.reverse();
        });
    }
}

</script>
