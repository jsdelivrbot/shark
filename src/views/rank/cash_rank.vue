<template>
    <div id="container">
        <h1 class="h1-title">兑奖排行</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="道具兑换排行" name="0"></el-collapse-item>
                <el-collapse-item title="金币兑换排行" name="1"></el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cash_rank',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {}
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {},
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {}
    }
</script>


