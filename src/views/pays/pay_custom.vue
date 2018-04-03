<template>
    <div id="container">
        <h1 class="h1-title">付费习惯</h1>
        <div class="cms-content">
            <ele-form :config="pay_custom_config" v-on:receive="pay_custom_submit"></ele-form>
            <table-option :parent-message="pay_custom_Msg" v-loading="loading" element-loading-text="拼命加载中"></table-option>
        </div>
    </div>
</template>
<script>
import {
    payCustomForm
} from '@/form/config/pay_custom'
import {
    payCustomTable
} from '@/table/config/pay_custom'
export default {
    name: 'pay_custom',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            pay_custom_config: payCustomForm(),
            pay_custom_Msg: payCustomTable(),
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        pay_custom_submit(arg) {
            this.$message.success('查询成功');
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {}
}

</script>
