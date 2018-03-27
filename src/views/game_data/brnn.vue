<template>
    <div id="container">
        <h1 class="h1-title">游戏场数据 -- 百人牛牛</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="曲线图" name="1">
                    <ele-form :config="brnn_qx_config" v-on:receive="brnn_qx_submit" :defaultdata="qxdefaultHtml"></ele-form>
                    <chart-option :chart-data="chartD" :chart-id="chartId"></chart-option>
                </el-collapse-item>
                <el-collapse-item title="单局记录" name="1">
                    <ele-form :config="brnn_single_config" v-on:receive="brnn_single_submit" :defaultdata="defaultTime"></ele-form>
                    <table-option :parent-message="brnnSingleMsg" v-on:message="brnnMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
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
    brnnQxForm,
    brnnSingleForm,
} from '@/form/config/brnn'
import {
    brnnSingleTable,
} from '@/table/config/brnn'
import {
    brnnChart
} from '@/chart/config/brnnChart'
export default {
    name: 'brnn',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            activeName: '1',
            /* 曲线图 */
            brnn_qx_config: brnnQxForm(),
            chartD: brnnChart(),
            chartId: 'brnn_qx_chart',
            qxdefaultHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            /* 单局记录 */
            brnn_single_config: brnnSingleForm(),
            brnnSingleMsg: brnnSingleTable(),
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
        brnn_qx_submit(arg) {
            let _self = this;
            _self.$res.postData(_self, '/Gamedata/brnn_single/', {
                KindID: 10005,
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
        /* 单局记录 */
        brnn_single_submit(arg) {
            let _self = this;
            _self.loading = true;
            _self.$res.postData(_self, '/Gamedata/brnn_single/', {
                KindID: 10005,
                query_start_time: arg[0].query_start_time,
                query_end_time: arg[0].query_end_time
            }).then((response) => {
                _self.brnnSingleMsg.data = [];
                _self.brnnSingleMsg.data = response.reverse();
                _self.loading = false;
                _self.$message.success('查询成功');
            });
        },
        /* 搜索功能 */
        brnnMessage(text) {
            this.brnnSingleMsg.data = tableSearch(text, this.brnnSingleMsg.data);
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        /* 单局记录 */
        let _self = this;
        _self.$res.postData(_self, '/Gamedata/brnn_single/', {
            KindID: 10005,
            query_start_time: _self.defaultTime.query_start_time,
            query_end_time: _self.defaultTime.query_end_time
        }).then((response) => {
            _self.brnnSingleMsg.data = [];
            _self.brnnSingleMsg.data = response.reverse();
        });
        /* 曲线图 */
        _self.$res.postData(_self, '/Gamedata/brnn_single/', {
            KindID: 10005,
            query_start_time: _self.qxdefaultHtml.query_start_time,
            query_end_time: _self.qxdefaultHtml.query_end_time
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
