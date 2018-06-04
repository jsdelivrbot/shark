<template>
    <div :userid="open_user_id">
        <el-tabs type="border-card">
            <el-tab-pane label="单局记录">
                <ele-form :config="fflSingle_config" v-on:receive="fflSingle_submit"
                          :defaultdata="fflSingleHtml"></ele-form>
                <table-option :parent-message="fflSingleMsg" v-loading="loading"
                              element-loading-text="拼命加载中"></table-option>
            </el-tab-pane>
            <el-tab-pane label="盈亏曲线">
                <ele-form :config="fflQx_config" v-on:receive="fflQx_submit"
                          :defaultdata="fflQxHtml"></ele-form>
                <chart-option :chart-data="fflQxData" :chart-id="fflQxId"></chart-option>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import {
        fflForm,
        fflQxForm
    } from '@/form/config/ffl'
    import {
        fflTable
    } from '@/table/config/ffl'
    import {
        fflChart
    } from '@/chart/config/fflChart'

    export default {
        name: "ffl.vue",
        data() {
            return {
                /* 单局记录 */
                loading: false,
                fflSingle_config: fflForm(),
                fflSingleHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                },
                fflSingleMsg: fflTable(),
                /* 盈亏曲线 */
                fflQx_config: fflQxForm(),
                fflQxHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                },
                fflQxData: fflChart(),
                fflQxId: 'ffl_qx_chart',
            }
        },
        mounted() {
        },
        methods: {
            /* 单局记录 */
            fflSingle_submit(arg) {
                this.loading = true;
                this.$res.postData(this, '/Personal/personal_ffl/', {
                    open_user_id: this.userid,
                    query_start_time: arg[0].query_start_time,
                    query_end_time: arg[0].query_end_time
                }).then((response) => {
                    this.fflSingleMsg.data = [];
                    this.fflSingleMsg.data = response;
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            },
            /* 盈亏曲线 */
            fflQx_submit(arg) {
                this.$res.postData(this, '/Personal/personal_ffl/', {
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
                    response.forEach((ffl_data) => {
                        let time = parseInt((ffl_data['InsertTime'] + 8 * 3600)) * 1000;
                        data.user_score.push([time, ffl_data['Score']]);
                        data.banker_waste.push([time, ffl_data['Waste']]);
                        data.user_count.push([time, ffl_data['UserCount']]);
                        data.ai_count.push([time, ffl_data['AndroidCount']]);
                    });
                    this.fflQxData.series = [{
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
