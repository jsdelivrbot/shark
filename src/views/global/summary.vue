<template>
    <div id="container">
        <h1 class="h1-title">日报汇总</h1>
        <div class="cms-content">
            <ele-form :config="summaryConfig" v-on:receive="summarySubmit"></ele-form>
        </div>
    </div>
</template>

<script>
    import {
        summaryForm
    } from '@/form/config/summary'
    export default {
        name: 'summary',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                summaryConfig: summaryForm(),
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            summarySubmit(arg) {
                this.$res.postData(this, '/Summary/set_share_info/', arg[0]).then((response) => {
                    if (response.code == 0) {
                        this.$message.success('设置成功');
                    } else {
                        this.$message.error('设置失败');
                    }
                });
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            // this.$res.postData(this, '/Summary/check/').then((response) => {
            //     console.log('111');
            // });
        }
    }
</script>
