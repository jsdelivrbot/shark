<template>
    <div :userid="open_user_id">
        <el-tabs type="border-card">
            <el-tab-pane label="单局记录">
                <ele-form :config="xjsscSingle_config" v-on:receive="xjsscSingle_submit"
                          :defaultdata="xjsscSingleHtml"></ele-form>
                <table-option :parent-message="xjsscSingleMsg" v-loading="loading"
                              element-loading-text="拼命加载中"></table-option>
            </el-tab-pane>
            <el-tab-pane label="盈亏曲线">
                <ele-form :config="xjsscQx_config" v-on:receive="xjsscQx_submit"
                          :defaultdata="xjsscQxHtml"></ele-form>
                <chart-option :chart-data="xjsscQxData" :chart-id="xjsscQxId"></chart-option>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import {
        xjsscForm,
        xjsscQxForm
    } from '@/form/config/xjssc'
    import {
        xjsscTable
    } from '@/table/config/xjssc'
    import {
        xjsscChart
    } from '@/chart/config/xjsscChart'

    export default {
        name: "xjssc.vue",
        data() {
            return {
                /* 单局记录 */
                loading: false,
                xjsscSingle_config: xjsscForm(),
                xjsscSingleHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                },
                xjsscSingleMsg: xjsscTable(),
                /* 盈亏曲线 */
                xjsscQx_config: xjsscQxForm(),
                xjsscQxHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                },
                xjsscQxData: xjsscChart(),
                xjsscQxId: 'xjssc_qx_chart',
            }

        },
        mounted() {

        },
        methods: {
            /* 单局记录 */
            xjsscSingle_submit(arg) {
                this.loading = true;
                this.$res.postData(this, '/Personal/personal_xjssc/', {
                    open_user_id: this.userid,
                    query_start_time: arg[0].query_start_time,
                    query_end_time: arg[0].query_end_time
                }).then((response) => {
                    this.xjsscSingleMsg.data = [];
                    this.xjsscSingleMsg.data = response;
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            },
            /* 盈亏曲线 */
            xjsscQx_submit(arg) {
                this.$res.postData(this, '/Personal/personal_xjssc/', {
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
                    response.forEach((xjssc_data) => {
                        let time = parseInt((xjssc_data['InsertTime'] + 8 * 3600)) * 1000;
                        data.user_score.push([time, xjssc_data['Score']]);
                        data.banker_waste.push([time, xjssc_data['Waste']]);
                        data.user_count.push([time, xjssc_data['UserCount']]);
                        data.ai_count.push([time, xjssc_data['AndroidCount']]);
                        data.tax.push([time, xjssc_data['Revenue']]);
                    });
                    this.xjsscQxData.series = [{
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
                    },{
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
