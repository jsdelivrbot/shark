<template>
    <div id="container">
        <h1 class="h1-title">定时奖励</h1>
        <div class="cms-content">
            <ele-form :config="time_config" v-on:receive="time_submit" :defaultdata="timingHtml"></ele-form>
            <table-option :parent-message="timing_Msg" v-on:message="timingMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
        </div>
    </div>
</template>

<script>
    //引入表格搜索
    import {
        tableSearch
    } from '@/libs/tableSearch'
    import {
        timeForm
    } from '@/form/config/timing'
    import {
        timeTable
    } from '@/table/config/timing'
    export default {
        name: 'timing',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                loading: false,
                time_config: timeForm(),
                timingHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 6),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                },
                timing_Msg: timeTable(),
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            time_submit(arg) {
                console.log(arg[0]);
                this.$message.success('定时奖励');
            },
            timingMessage(text) {
                this.timing_Msg.data = tableSearch(text, this.timing_Msg.data);
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {}
    }
</script>


