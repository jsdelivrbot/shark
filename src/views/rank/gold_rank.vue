<template>
    <div id="container">
        <h1 class="h1-title">货币排行榜</h1>
        <div class="cms-content">
            <ele-form :config="game_gold_config" v-on:receive="game_gold_submit" :defaultdata="defaultTime"></ele-form>
            <table-option :parent-message="game_gold_Msg" v-on:message="goldRankMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
        </div>
    </div>
</template>
<script>
//引入表格搜索
import {
    tableSearch
} from '@/libs/tableSearch'
import {
    gameGoldForm
} from '@/form/config/gold_rank'
import {
    gameGoldTable
} from '@/table/config/gold_rank'
export default {
    name: 'gold_rank',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            game_gold_config: gameGoldForm(),
            game_gold_Msg: gameGoldTable(),
            defaultTime: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            }
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        game_gold_submit(arg) {
            let _self = this;
            _self.loading = true;
            _self.$res.postData(_self, '/Rank/gold_rank/', arg[0]).then((response) => {
                _self.game_gold_Msg.data = [];
                _self.game_gold_Msg.data = response;
                _self.loading = false;
                _self.$message.success('查询成功');
            });
        },
        goldRankMessage(text) {
            this.game_gold_Msg.data = tableSearch(text, this.game_gold_Msg.data);
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        let _self = this;
        _self.$res.postData(_self, '/Rank/gold_rank/', {
            query_start_time: _self.defaultTime.query_start_time,
            query_end_time: _self.defaultTime.query_end_time
        }).then((response) => {
            _self.game_gold_Msg.data = [];
            _self.game_gold_Msg.data = response;
        });
    }
}

</script>
