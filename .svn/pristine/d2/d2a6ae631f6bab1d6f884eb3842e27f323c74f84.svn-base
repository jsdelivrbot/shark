<template>
    <div class="highchart" style="width: 100%; height: 100%;" :id="tableChartId" :data="tableData"> </div>
</template>
<script>
    export default {
        name: 'chart-option',
        data() {
            return {
                has_mount: false
            }
        },
        props: ['chartData', 'chartId'],
        methods: {},
        computed: {
            /* 数据渲染 */
            tableData: function() {
                let Hightchart = require('highcharts');
                require('highcharts/modules/exporting')(Hightchart);
                if (!this.chartData || Object.keys(this.chartData).length === 0) {
                    return {};
                } else {
                    this.has_mount && Hightchart.chart(this.chartId, this.chartData);
                    return this.chartData;
                }
            },
            tableChartId() {
                return this.chartId;
            }
        },
        mounted() {
            let Hightchart = require('highcharts');
            require('highcharts/modules/exporting')(Hightchart);
            this.has_mount = true;
            if (Object.keys(this.chartData).length !== 0) {
                Hightchart.chart(this.chartId, this.tableData);
            }
        }
    }
</script>

