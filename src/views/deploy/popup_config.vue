<template>
    <div id="container">
        <h1 class="h1-title">弹窗配置</h1>
        <div class="cms-content">
            <ele-form :config="popup_config" v-on:receive="popup_submit" :defaltdata="popupHtml"></ele-form>
        </div>
    </div>
</template>

<script>
    import {
        popupForm
    } from '@/form/config/popup_config'
    export default {
        name: 'popup_config',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                popup_config: popupForm(),
                popupHtml: {},
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            popup_submit(arg) {
                this.$message.success('success');
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {}
    }
</script>


