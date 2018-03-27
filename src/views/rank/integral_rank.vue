<template>
    <div id="container">
        <h1 class="h1-title">积分管理</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="总积分" name="0">
                    <ele-form :config="game_integral_config" v-on:receive="game_integral_submit" :defaultdata="allIntegerHtml"></ele-form>
                    <table-option :parent-message="game_integral_Msg" v-on:message="allIntegerMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="单局积分" name="0">
                    <ele-form :config="single_integral_config" v-on:receive="single_integral_submit" :defaultdata="singleIntegerTime"></ele-form>
                    <collapse-table-option :parent-message="single_integral_Msg" v-on:message="singleIntegerMessage" v-loading="loading" element-loading-text="拼命加载中"></collapse-table-option>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>
<script>
//引入表格搜索
import {
    tableSearch
} from '@/libs/tableSearch'
import {
    gameIntegralForm,
    singleIntegralForm
} from '@/form/config/integral_rank'
import {
    gameIntegralTable,
    singleIntegralTable
} from '@/table/config/integral_rank'
export default {
    name: 'integral_rank',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            activeName: '0',
            loading: false,
            /* 总积分 */
            game_integral_config: gameIntegralForm(),
            game_integral_Msg: gameIntegralTable(),
            allIntegerHtml: {
                game_name: 10005
            },
            /* 单局积分 */
            single_integral_config: singleIntegralForm(),
            single_integral_Msg: singleIntegralTable(),
            singleIntegerTime: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            }
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 总积分 */
        game_integral_submit(arg) {
            let _self = this;
            _self.loading = true;
            _self.$res.postData(_self, '/Rank/game_integral/', {
                gameName: arg[0].game_name
            }).then((response) => {
                _self.game_integral_Msg.data = [];
                _self.game_integral_Msg.data = response;
                _self.loading = false;
                _self.$message.success('查询成功');
            });
        },
        /* 搜索功能 */
        allIntegerMessage(text) {
            this.game_integral_Msg.data = tableSearch(text, this.game_integral_Msg.data);
        },
        /* 单局积分 */
        single_integral_submit(arg) {
            let _self = this;
            _self.$res.postData(_self, '/Rank/single_game_integral/', arg[0]).then((response) => {
                let data = [],
                    integral_data = [],
                    integral_dict = {};
                response.forEach((val) => {
                    data.push(_self.$res.deepClone(val));
                    if (integral_dict[val.UserID]) {
                        integral_data.map((obj, i, row) => {
                            if (obj.UserID == val.UserID) {
                                row[i].Score = parseFloat(row[i].Score) + parseFloat(val.Score);
                                row[i].Grade = parseFloat(row[i].Grade) + parseFloat(val.Grade);
                                row[i].Revenue = parseFloat(row[i].Revenue) + parseFloat(val.Revenue);
                                row[i].PlayTimeCount = parseFloat(row[i].PlayTimeCount) + parseFloat(val.PlayTimeCount);
                            }
                        });
                    } else {
                        integral_data.push(_self.$res.deepClone(val));
                        integral_dict[val.UserID] = '1';
                    }
                });
                integral_data = integral_data.map((obj) => {
                    let res = obj;
                    res.children = [];
                    data.map((val) => {
                        if (obj.UserID == val.UserID) {
                            res.children.push(val);
                        }
                    });
                    return res;
                });
                _self.single_integral_Msg.data = [];
                _self.single_integral_Msg.data = integral_data;
                _self.$message.success('查询成功');
            });
        },
        /* 搜索功能 */
        singleIntegerMessage(text) {
            this.single_integral_Msg.data = tableSearch(text, this.single_integral_Msg.data);
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        /* 总积分 */
        let _self = this;
        _self.loading = true;
        _self.$res.postData(_self, '/Rank/game_integral/', {
            gameName: _self.allIntegerHtml.game_name
        }).then((response) => {
            _self.game_integral_Msg.data = [];
            _self.game_integral_Msg.data = response;
            _self.loading = false;
            _self.$message.success('查询成功');
        });

        /* 单局积分 */
        _self.$res.postData(_self, '/Rank/single_game_integral/', {
            query_start_time: _self.singleIntegerTime.query_start_time,
            query_end_time: _self.singleIntegerTime.query_end_time
        }).then((response) => {
            let data = [],
                integral_data = [],
                integral_dict = {};
            response.forEach((val) => {
                data.push(_self.$res.deepClone(val));
                if (integral_dict[val.UserID]) {
                    integral_data.map((obj, i, row) => {
                        if (obj.UserID == val.UserID) {
                            row[i].Score = parseFloat(row[i].Score) + parseFloat(val.Score);
                            row[i].Grade = parseFloat(row[i].Grade) + parseFloat(val.Grade);
                            row[i].Revenue = parseFloat(row[i].Revenue) + parseFloat(val.Revenue);
                            row[i].PlayTimeCount = parseFloat(row[i].PlayTimeCount) + parseFloat(val.PlayTimeCount);
                        }
                    });
                } else {
                    integral_data.push(_self.$res.deepClone(val));
                    integral_dict[val.UserID] = '1';
                }
            });
            integral_data = integral_data.map((obj) => {
                let res = obj;
                res.children = [];
                data.map((val) => {
                    if (obj.UserID == val.UserID) {
                        res.children.push(val);
                    }
                });
                return res;
            });
            _self.single_integral_Msg.data = [];
            _self.single_integral_Msg.data = integral_data;
        });
    }
}

</script>
