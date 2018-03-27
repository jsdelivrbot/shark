<template>
    <div id="container">
        <h1 class="h1-title">游戏场数据 -- 刮刮乐</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="曲线图" name="0">
                    <ele-form :config="ffl_qx_config" v-on:receive="ffl_qx_submit" :defaultdata="qxdefaultHtml"></ele-form>
                    <chart-option :chart-data="chartD" :chart-id="chartId"></chart-option>
                </el-collapse-item>
                <el-collapse-item title="单局记录" name="0">
                    <ele-form :config="ffl_single_config" v-on:receive="ffl_single_submit" :defaultdata="defaultTime"></ele-form>
                    <table-option :parent-message="ffl_single_Msg" v-on:message="fflMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
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
    fflSingleForm,
    fflQxForm
} from '@/form/config/ffl'
import {
    fflSingleTable
} from '@/table/config/ffl'
import {
    fflChart
} from '@/chart/config/fflChart'
export default {
    name: 'ffl',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            activeName: '0',
            loading: false,
            /* 曲线图 */
            ffl_qx_config: fflQxForm(),
            chartD: fflChart(),
            chartId: 'ffl_qx_chart',
            qxdefaultHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            /* 单局记录 */
            ffl_single_config: fflSingleForm(),
            ffl_single_Msg: fflSingleTable(),
            defaultTime: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            }
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 曲线图 */
        ffl_qx_submit(arg) {
            this.$res.postData(this, '/Gamedata/ffl_single/', {
                KindID: 10006,
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
                this.chartD.series = [{
                    name: '真人在线',
                    data: data.human_cnt,
                    visible: true
                }, {
                    name: '机器人在线',
                    data: data.robot_cnt,
                    visible: true
                }, {
                    name: '真人盈亏',
                    data: data.Waste,
                    visible: true
                }, {
                    name: '税收',
                    data: data.tax,
                    visible: true
                }];
            });
        },
        /* 单局记录 */
        ffl_single_submit(arg) {
            this.loading = true;
            this.$res.postData(this, '/Gamedata/ffl_single/', {
                KindID: 10006,
                query_start_time: arg[0].query_start_time,
                query_end_time: arg[0].query_end_time
            }).then((response) => {
                this.ffl_single_Msg.data = [];
                this.ffl_single_Msg.data = response.reverse();
                this.loading = false;
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
        /* 单局记录 */
        this.$res.postData(this, '/Gamedata/ffl_single/', {
            KindID: 10006,
            query_start_time: this.defaultTime.query_start_time,
            query_end_time: this.defaultTime.query_end_time
        }).then((response) => {
            this.ffl_single_Msg.data = [];
            this.ffl_single_Msg.data = response.reverse();
        });

        /* 曲线图 */
        this.$res.postData(this, '/Gamedata/ffl_single/', {
            KindID: 10006,
            query_start_time: this.qxdefaultHtml.query_start_time,
            query_end_time: this.qxdefaultHtml.query_end_time
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
            this.chartD.series = [{
                name: '真人在线',
                data: data.human_cnt,
                visible: true
            }, {
                name: '机器人在线',
                data: data.robot_cnt,
                visible: true
            }, {
                name: '真人盈亏',
                data: data.Waste,
                visible: true
            }, {
                name: '税收',
                data: data.tax,
                visible: true
            }];
        });
    }
}

</script>
