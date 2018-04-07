<template>
    <div id="container">
        <h1 class="h1-title">内部帐号</h1>
        <div class="cms-content">
            <el-button type="success" plain @click.native="btnIntAccount">查 询</el-button>
            <table-option :parent-message="intAccount_Msg" v-loading="loading" element-loading-text="拼命加载中"></table-option>
        </div>
    </div>
</template>

<script>
    import {
        intAccountTable,
    } from '@/table/config/int_account'
    export default {
        name: 'int_account',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                loading: false,
                intAccount_Msg: intAccountTable(),
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            btnIntAccount() {
                this.$message.success('successful');
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {}
    }
</script>


