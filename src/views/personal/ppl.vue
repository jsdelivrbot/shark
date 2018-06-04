<template>
    <div :userid="open_user_id">
        <el-tabs type="border-card">
            <el-tab-pane label="单局记录">
                <ele-form :config="pplSingle_config" v-on:receive="pplSingle_submit"
                          :defaultdata="pplSingleHtml"></ele-form>
                <table-option :parent-message="pplSingleMsg" v-loading="loading"
                              element-loading-text="拼命加载中"></table-option>
            </el-tab-pane>
            <el-tab-pane label="盈亏曲线">
                <ele-form :config="pplQx_config" v-on:receive="pplQx_submit"
                          :defaultdata="pplQxHtml"></ele-form>
                <chart-option :chart-data="pplQxData" :chart-id="pplQxId"></chart-option>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import {
        pplForm,
        pplQxForm
    } from '@/form/config/ppl'
    import {
        pplTable
    } from '@/table/config/ppl'
    import {
        pplChart
    } from '@/chart/config/pplChart'

    export default {
        name: "ppl.vue",
        data() {
            return {
                /* 单局记录 */
                loading: false,
                pplSingle_config: pplForm(),
                pplSingleHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                },
                pplSingleMsg: pplTable(),
                /* 盈亏曲线 */
                pplQx_config: pplQxForm(),
                pplQxHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                },
                pplQxData: pplChart(),
                pplQxId: 'ppl_qx_chart',
            }
        },
        mounted() {

        },
        methods: {
            /* 单局记录 */
            pplSingle_submit(arg) {
                this.loading = true;
                this.$res.postData(this, '/Personal/personal_ppl/', {
                    open_user_id: this.userid,
                    query_start_time: arg[0].query_start_time,
                    query_end_time: arg[0].query_end_time
                }).then((response) => {
                    this.pplSingleMsg.data = [];
                    this.pplSingleMsg.data = response;
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            },
            /* 盈亏曲线 */
            pplQx_submit(arg) {
                this.$res.postData(this, '/Personal/personal_ppl/', {
                    open_user_id: this.userid,
                    query_start_time: arg[0].query_start_time,
                    query_end_time: arg[0].query_end_time
                }).then((response) => {
                    let data = {
                        user_score: [],
                        banker_waste: [],
                        user_count: [],
                        ai_count: [],
                    };
                    response.forEach((ppl_data) => {
                        let time = parseInt((ppl_data['InsertTime'] + 8 * 3600)) * 1000;
                        data.user_score.push([time, ppl_data['Score']]);
                        data.banker_waste.push([time, ppl_data['Waste']]);
                        data.user_count.push([time, ppl_data['UserCount']]);
                        data.ai_count.push([time, ppl_data['AndroidCount']]);
                    });
                    this.pplQxData.series = [{
                        name: '玩家盈亏',
                        data: data.user_score
                    }, {
                        name: '庄家盈亏',
                        data: data.banker_waste,
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
