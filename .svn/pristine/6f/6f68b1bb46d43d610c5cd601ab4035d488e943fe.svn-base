<template>
    <div id="container">
        <h1 class="h1-title">实名认证</h1>
        <div class="cms-content">
            <el-button type="success" plain @click.native="realname_btn">查 询</el-button>
            <table-option :parent-message="realname_Msg" v-on:outputrow="realname_recieveRow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
        </div>
    </div>
</template>
<script>
import {
    realnameTable
} from '@/table/config/realname'
export default {
    name: 'realname',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            realname_Msg: realnameTable(),
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        realname_btn() {
            this.loading = true;
            this.$res.postData(this, '/Realname2/query_realname_list/').then((response) => {
                this.realname_Msg.data = response.map((val) => {
                    let res = val;
                    val.IsVerification == 0 && (res['通过' + '_show'] = true);
                    val.IsVerification == 0 && (res['不通过' + '_show'] = true);
                    val.IsVerification == 1 && (res['信息真实' + '_show'] = true);
                    val.IsVerification == 2 && (res['信息虚假' + '_show'] = true);
                    return res;
                });
                this.loading = false;
                this.$message.success('查询成功');
            });
        },
        realname_recieveRow(arg) {
            switch (arg[2]) {
                case 'examine':
                    let param = {
                        uid: arg[1].UserID,
                        examine: 1,
                        verifier: localStorage.getItem('Username')
                    };
                    this.$confirm('此操作将会通过实名认证，是否继续？', '温馨提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$res.postData(this, '/Realname2/realname_examine/', param).then((response) => {
                            if (response.code == 0) {
                                this.$res.postData(this, '/Realname2/query_realname_list/').then((response) => {
                                    this.realname_Msg.data = response.map((val) => {
                                        let res = val;
                                        val.IsVerification == 0 && (res['通过' + '_show'] = true);
                                        val.IsVerification == 0 && (res['不通过' + '_show'] = true);
                                        val.IsVerification == 1 && (res['信息真实' + '_show'] = true);
                                        val.IsVerification == 2 && (res['信息虚假' + '_show'] = true);
                                        return res;
                                    });
                                    this.$message.success('处理完成');
                                });
                            }
                        });
                    }).catch(() => {
                        this.$message.error('已取消');
                    });

                    break;
                case 'not_examine':
                    let params = {
                        uid: arg[1].UserID,
                        examine: 2,
                        verifier: localStorage.getItem('Username')
                    };
                    this.$confirm('此操作将会不通过实名认证，是否继续？', '温馨提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$res.postData(this, '/Realname2/realname_examine/', params).then((response) => {
                            if (response.code == 0) {
                                this.$res.postData(this, '/Realname2/query_realname_list/').then((response) => {
                                    this.realname_Msg.data = response.map((val) => {
                                        let res = val;
                                        val.IsVerification == 0 && (res['通过' + '_show'] = true);
                                        val.IsVerification == 0 && (res['不通过' + '_show'] = true);
                                        val.IsVerification == 1 && (res['信息真实' + '_show'] = true);
                                        val.IsVerification == 2 && (res['信息虚假' + '_show'] = true);
                                        return res;
                                    });
                                    this.$message.success('处理完成');
                                });
                            }
                        });
                    }).catch(() => {
                        this.$message.error('已取消');
                    });
                    break;
            }
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        let baseConfig = realnameTable();
        baseConfig.columns[baseConfig.columns.length - 1].template = {
            btns: [{
                name: '通过',
                funcName: 'examine',
                type: 'success',
                if: true,
            }, {
                name: '不通过',
                funcName: 'not_examine',
                type: 'danger',
                if: true,
            }, {
                name: '信息真实',
                funcName: 'yes_info',
                type: 'info',
                disabled: true,
                if: true,
            }, {
                name: '信息续交',
                funcName: 'not_info',
                type: 'info',
                disabled: true,
                if: true,
            }]
        }

        /* 查询 */
        this.$res.postData(this, '/Realname2/query_realname_list/').then((response) => {
            this.realname_Msg.data = [];
            this.realname_Msg.data = response.map((val) => {
                let res = val;
                val.IsVerification == 0 && (res['通过' + '_show'] = true);
                val.IsVerification == 0 && (res['不通过' + '_show'] = true);
                val.IsVerification == 1 && (res['信息真实' + '_show'] = true);
                val.IsVerification == 2 && (res['信息虚假' + '_show'] = true);
                return res;
            });
        });
    }
}

</script>
