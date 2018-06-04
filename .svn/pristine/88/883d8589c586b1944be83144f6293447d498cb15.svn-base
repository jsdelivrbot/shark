<template>
    <div id="container">
        <h1 class="h1-title">防沉迷系统</h1>
        <div class="cms-content">
            <ele-form :config="indulge_config" v-on:receive="indulge_submit" :defaultdata="indulgeHtml"></ele-form>
        </div>
    </div>
</template>

<script>
    import {
        indulgeForm
    } from '@/form/config/indulge'
    export default {
        name: 'indulge',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                indulge_config: indulgeForm(),
                indulgeHtml: {
                    indulge_tip: true
                }
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            indulge_submit(arg) {
                console.log(arg[0]);
                this.$message.success('防沉迷系统');
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {}
    }
</script>


