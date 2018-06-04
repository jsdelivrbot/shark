<template>
    <div :userid="open_user_id">
        <el-tabs type="border-card">
            <el-tab-pane label="单局记录">
                <ele-form :config="brnnSingle_config" v-on:receive="brnnSingle_submit"
                          :defaultdata="brnnSingleHtml"></ele-form>
                <table-option :parent-message="brnnSingleMsg" v-loading="loading"
                              element-loading-text="拼命加载中"></table-option>
            </el-tab-pane>
            <el-tab-pane label="盈亏曲线">
                <ele-form :config="brnndouniuQx_config" v-on:receive="brnnQx_submit"
                          :defaultdata="brnnQxHtml"></ele-form>
                <chart-option :chart-data="brnnQxData" :chart-id="brnnQxId"></chart-option>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import {
        brnnForm,
        brnnQxForm
    } from '@/form/config/brnn'
    import {
        brnnTable
    } from '@/table/config/brnn'
    import {
        brnnChart
    } from '@/chart/config/brnnChart'

    export default {
        name: "brnn.vue",
        data() {
            return {
                /* 单局记录 */
                loading: false,
                brnnSingle_config: brnnForm(),
                brnnSingleHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                },
                brnnSingleMsg: brnnTable(),
                /* 盈亏曲线 */
                brnndouniuQx_config: brnnQxForm(),
                brnnQxHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                },
                brnnQxData: brnnChart(),
                brnnQxId: 'brnn_qx_chart',
            }
        },
        mounted() {

        },
        methods: {
            /* 单局记录 */
            brnnSingle_submit(arg) {
                this.loading = true;
                this.$res.postData(this, '/Personal/personal_brnn/', {
                    open_user_id: this.userid,
                    query_start_time: arg[0].query_start_time,
                    query_end_time: arg[0].query_end_time
                }).then((response) => {
                    this.brnnSingleMsg.data = [];
                    this.brnnSingleMsg.data = response;
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            },
            /* 盈亏曲线 */
            brnnQx_submit(arg) {
                this.$res.postData(this, '/Personal/personal_brnn/', {
                    open_user_id: this.userid,
                    query_start_time: arg[0].query_start_time,
                    query_end_time: arg[0].query_end_time
                }).then((response) => {
                    let data = {
                        user_score: [],
                        banker_waste: [],
                        user_count: [],
                        ai_count: [],
                        tax: [],
                    };
                    response.forEach((brnn_data) => {
                        let time = parseInt((brnn_data['InsertTime'] + 8 * 3600)) * 1000;
                        data.user_score.push([time, brnn_data['Score']]);
                        data.banker_waste.push([time, brnn_data['Waste']]);
                        data.user_count.push([time, brnn_data['UserCount']]);
                        data.ai_count.push([time, brnn_data['AndroidCount']]);
                        data.tax.push([time, brnn_data['Revenue']]);
                    });
                    this.brnnQxData.series = [{
                        name: '玩家盈亏',
                        data: data.user_score
                    }, {
                        name: '庄家盈亏',
                        data: data.banker_waste,
                        visible: false
                    }, {
                        name: '税收',
                        data: data.tax,
                        visible: false
                    }, {
                        name: '真人数量',
                        data: data.user_count,
                        visible: false
                    }, {
                        name: 'AI数量',
                        data: data.ai_count,
                        visible: false
                    }];
                });
            }
        },
        components: {},
        props: ['userid'],
        computed: {},
        created() {
        }
    }
</script>

<style scoped>

</style>
