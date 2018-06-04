<template>
    <div :userid="open_user_id">
        <el-tabs type="border-card">
            <el-tab-pane label="单局记录">
                <ele-form :config="douniuSingle_config" v-on:receive="douniuSingle_submit"
                          :defaultdata="douniuSingleHtml"></ele-form>
                <table-option :parent-message="douniuSingleMsg" v-loading="loading"
                              element-loading-text="拼命加载中"></table-option>
            </el-tab-pane>
            <el-tab-pane label="盈亏曲线">
                <ele-form :config="douniuQx_config" v-on:receive="douniuQx_submit"
                          :defaultdata="douniuQxHtml"></ele-form>
                <chart-option :chart-data="douniuQxData" :chart-id="douniuQxId"></chart-option>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import {
        douniuForm,
        douniuQxForm
    } from '@/form/config/douniu'
    import {
        douniuTable
    } from '@/table/config/douniu'
    import {
        lookcardChart
    } from '@/chart/config/lookcardChart'

    export default {
        name: "douniu.vue",
        data() {
            return {
                /* 单局记录 */
                loading: false,
                douniuSingle_config: douniuForm(),
                douniuSingleHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                },
                douniuSingleMsg: douniuTable(),
                /* 盈亏曲线 */
                douniuQx_config: douniuQxForm(),
                douniuQxHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                },
                douniuQxData: lookcardChart(),
                douniuQxId: 'douniu_qx_chart',
            }
        },
        mounted() {

        },
        methods: {
            /* 单局记录 */
            douniuSingle_submit(arg) {
                this.loading = true;
                this.$res.postData(this, '/Personal/personal_douniu/', {
                    open_user_id: this.userid,
                    query_start_time: arg[0].query_start_time,
                    query_end_time: arg[0].query_end_time
                }).then((response) => {
                    this.douniuSingleMsg.data = [];
                    this.douniuSingleMsg.data = response;
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            },
            /* 盈亏曲线 */
            douniuQx_submit(arg) {
                this.$res.postData(this, '/Personal/personal_douniu/', {
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
                    response.forEach((douniu_data) => {
                        let time = parseInt((douniu_data['InsertTime'] + 8 * 3600)) * 1000;
                        data.user_score.push([time, douniu_data['Score']]);
                        data.banker_waste.push([time, douniu_data['Waste']]);
                        data.user_count.push([time, douniu_data['UserCount']]);
                        data.ai_count.push([time, douniu_data['AndroidCount']]);
                    });
                    this.douniuQxData.series = [{
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
            },
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
