<template>
    <div id="container">
        <h1 class="h1-title">付费分析</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="概况" name="0">
                    <ele-form :config="pay_survey_config" v-on:receive="pay_survey_submit" :defaultdata="paySurveyHtml"></ele-form>
                </el-collapse-item>
                <el-collapse-item title="付费列表" name="1"></el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
    import {
        paySurveyForm
    } from '@/form/config/pay_analysis'
    export default {
        name: 'pay_analysis',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                activeName: ['0'],
                pay_survey_config: paySurveyForm(),
                paySurveyHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 7),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                }
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            pay_survey_submit(arg) {
                console.log(arg[0]);
            },
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {}
    }
</script>
