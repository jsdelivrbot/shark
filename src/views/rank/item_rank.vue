<template>
    <div id="container">
        <h1 class="h1-title">物品排行</h1>
        <div class="cms-content">
            <ele-form :config="item_rank_config" v-on:receive="item_rank_submit"></ele-form>
            <table-option :parent-message="item_rank_Msg" v-on:pagedata="changePage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
        </div>
    </div>
</template>
<script>
import {
    itemRankForm
} from '@/form/config/item_rank'
import {
    itemRankTable
} from '@/table/config/item_rank'
export default {
    name: 'item_rank',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            item_rank_config: itemRankForm(),
            item_rank_Msg: itemRankTable(),
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        item_rank_submit(arg) {
            this.loading = true;
            this.$res.postData(this, '/Rank/user_item_rank/').then((res) => {
                this.item_rank_Msg.data = res.rows.map((val) => {
                    return val;
                });
                this.item_rank_Msg.total = res.total;
                this.loading = false;
                this.$message.success('查询成功');
            });
        },
        changePage(arg) {
            this.$res.postData(this, '/Rank/user_item_rank/', {
                page: arg[0],
                psize: arg[1]
            }).then((response) => {
                this.item_rank_Msg.data = response.rows.map((val) => {
                    return val;
                });
                this.item_rank_Msg.total = response.total;
            });
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        this.$res.postData(this, '/Rank/user_item_rank/').then((res) => {
            this.item_rank_Msg.data = res.rows.map((val) => {
                return val;
            });
            this.item_rank_Msg.total = res.total;
        });
    }
}

</script>
