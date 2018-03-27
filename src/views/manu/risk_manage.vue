<template>
    <div id="container">
        <h1 class="h1-title">风控中心</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="手机黑名单" name="0">
                    <ele-form :config="phone_black_Config" v-on:receive="phone_black_sumbit"></ele-form>
                    <table-option :parent-message="phone_black_Msg" v-on:outputrow="phoneBlackRow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="封号列表" name="0">
                    <ele-form :config="freezeConfig" v-on:receive="freeze_sumbit" :defaultdata="freezeTime"></ele-form>
                    <table-option :parent-message="freeze_Msg" v-on:selectedrow="selectedrow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="昵称查询" name="0">
                    <ele-form :config="nicknameConfig" v-on:receive="nickname_sumbit"></ele-form>
                    <table-option :parent-message="nickname_Msg" v-on:pagedata="changePage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="内部帐号" name="0"></el-collapse-item>
            </el-collapse>
        </div>
        <!-- 根据手机号解绑 -->
        <el-dialog title="解绑手机号黑名单" :visible.sync="jiebang_phone_black_visible" size="tiny">
            <ele-form :config="phoneBlackDialogConfig" :eventname="discardBlackSumbitName" v-on:receive="discardBlackSumbit"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="jiebang_phone_black_visible = false">取 消</el-button>
                <el-button type="primary" @click="discardBlackSumbitEvent">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 手机号添加黑名单 -->
        <el-dialog title="手机号添加黑名单" :visible.sync="add_phone_black_visible" size="tiny">
            <ele-form :config="addphoneBlackDialogConfig" :eventname="addBlackSumbitName" v-on:receive="addBlackSumbit"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="add_phone_black_visible = false">取 消</el-button>
                <el-button type="primary" @click="addBlackSumbitEvent">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {
    phoneBlackForm,
    phoneBlackDialogForm,
    freezeForm,
    nicknameForm
} from '@/form/config/risk_manage'
import {
    phoneBlackTable,
    freezeTable,
    nicknameTable
} from '@/table/config/risk_manage'
export default {
    name: 'risk_manage',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            activeName: '0',
            /* 手机号黑名单 */
            phone_black_Config: phoneBlackForm(),
            phone_black_Msg: phoneBlackTable(),
            jiebang_phone_black_visible: false,
            phoneBlackDialogConfig: phoneBlackDialogForm(),
            discardBlackSumbitName: false,
            add_phone_black_visible: false,
            addphoneBlackDialogConfig: phoneBlackDialogForm(),
            addBlackSumbitName: false,
            /* 封号列表 */
            freezeConfig: freezeForm(),
            freeze_Msg: freezeTable(),
            freezeTime: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 29),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            freezeArg: {},
            /* 昵称查询 */
            nicknameConfig: nicknameForm(),
            nickname_Msg: nicknameTable(),
            nicknameArg: null,
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 手机号黑名单 */
        phone_black_sumbit(arg) {
            switch (arg[1]) {
                case 'query':
                    this.loading = true;
                    this.$res.postData(this, '/Risk/get_black_phonenum/').then((response) => {
                        this.phone_black_Msg.data = [];
                        this.phone_black_Msg.data = response;
                        this.loading = false;
                        this.$message.success('查询成功');
                    });
                    break;
                case 'separate':
                    this.jiebang_phone_black_visible = true;
                    break;
                case 'pull':
                    this.add_phone_black_visible = true;
                    break;
            }
        },
        phoneBlackRow(arg) {
            let _self = this;
            let discard_patam = {
                InsureMobile: arg[1].InsureMobile,
                Reason: arg[1].Reason || '帐号正常'
            };
            _self.$confirm('此操作将会移除黑名单，是否确认？', '温馨提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                _self.$res.postData(_self, '/Risk/discard_black_phonenum/', discard_patam).then((res) => {
                    _self.$message.success('解绑成功');
                    _self.$res.postData(_self, '/Risk/get_black_phonenum/').then((response) => {
                        _self.phone_black_Msg.data = [];
                        _self.phone_black_Msg.data = response;
                    });
                });
            }).catch(() => {
                _self.$message({
                    type: 'info',
                    message: '已取消'
                });
            });
        },
        /* 解绑手机号黑名单1 */
        discardBlackSumbitEvent() {
            this.discardBlackSumbitName = 'submitEvent';
        },
        /* 解绑手机号黑名单2 */
        discardBlackSumbit(arg) {
            let _self = this;
            _self.$res.postData(_self, '/Risk/discard_black_phonenum/', arg[0]).then((res) => {
                _self.jiebang_phone_black_visible = false;
                _self.discardBlackSumbitName = false;
                _self.$message.success('解绑成功');
                _self.$res.postData(_self, '/Risk/get_black_phonenum/').then((response) => {
                    _self.phone_black_Msg.data = [];
                    _self.phone_black_Msg.data = response;
                });
            });
        },
        /* 增加手机号黑名单1 */
        addBlackSumbitEvent() {
            this.addBlackSumbitName = 'submitEvent';
        },
        /* 增加手机号黑名单2 */
        addBlackSumbit(arg) {
            let _self = this;
            let discard_patam = {
                InsureMobile: arg[0].InsureMobile,
                Reason: arg[0].Reason,
                Operator: localStorage.getItem('Username')
            };
            _self.$res.postData(_self, '/Risk/add_black_phonenum/', discard_patam).then((response) => {
                if (response.code == 0) {
                    _self.add_phone_black_visible = false;
                    _self.addBlackSumbitName = false;
                    _self.$message.success('新增成功');
                    _self.$res.postData(_self, '/Risk/get_black_phonenum/').then((response) => {
                        _self.phone_black_Msg.data = [];
                        _self.phone_black_Msg.data = response;
                    });
                } else if (response.code == -10005) {
                    _self.$message.error(response.msg);
                }
            });
        },
        /* 封号列表 */
        freeze_sumbit(arg) {
            switch (arg[1]) {
                case 'query':
                    this.$res.postData(this, '/Risk/get_user_freeze/', arg[0]).then((response) => {
                        this.freeze_Msg.data = [];
                        this.freeze_Msg.data = response;
                    });
                    break;
                case 'batch':
                    this.$confirm('此操作将会批量解封用户，是否继续？', '温馨提示', {
                        confirmButtonText: '确认',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        let arr = [];
                        this.freezeArg.map((val) => {
                            arr.push(val.UserID);
                        });
                        this.$res.postData(this, '/Risk/freeze_batch/', {
                            arrayUser: arr
                        }).then((response) => {
                            if (response && response.code == 0) {
                                this.$res.postData(this, '/Risk/get_user_freeze/', arg[0]).then((response) => {
                                    this.freeze_Msg.data = [];
                                    this.freeze_Msg.data = response;
                                    this.$message.success('批量解封完成');
                                });
                            }
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消'
                        });
                    });
                    break;
            }
        },
        selectedrow(arg) {
            this.freezeArg = arg;
        },
        /* 昵称查询 */
        nickname_sumbit(arg) {
            this.loading = true;
            this.nicknameArg = arg[0];
            this.$res.postData(this, '/Risk/get_nickname_info/', arg[0]).then((response) => {
                this.nickname_Msg.data = response.rows.map((val) => {
                    return val;
                });
                this.nickname_Msg.total = response.total;
                this.loading = false;
                this.$message.success('查询成功');
            });
        },
        /* 昵称查询 - 服务器分页 */
        changePage(arg) {
            this.$res.postData(this, '/Risk/get_nickname_info/', {
                page: arg[0],
                psize: arg[1],
                nickname: this.nicknameArg.nickname
            }).then((response) => {
                this.nickname_Msg.data = response.rows;
                this.nickname_Msg.total = response.total;
            });
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        /* 手机黑名单 - 查询 */
        this.$res.postData(this, '/Risk/get_black_phonenum/').then((res) => {
            this.phone_black_Msg.data = [];
            this.phone_black_Msg.data = res;
        });
        /* 封号列表 - 查询 */
        this.$res.postData(this, '/Risk/get_user_freeze/', {
            query_start_time: this.freezeTime.query_start_time,
            query_end_time: this.freezeTime.query_end_time
        }).then((response) => {
            this.freeze_Msg.data = [];
            this.freeze_Msg.data = response;
        });
    }
}

</script>
