<template>
    <div id="container">
        <h1 class="h1-title">封禁管理</h1>
        <div class="cms-content">
            <ele-form :config="freezeConfig" v-on:receive="freeze_sumbit"></ele-form>
            <table-option :parent-message="freeze_Msg" v-on:selectedrow="selectedrow" v-on:outputrow="userBlackRow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
        </div>
        <!-- 根据手机号解绑 -->
        <el-dialog title="解绑手机号黑名单" :visible.sync="jiebang_phone_black_visible" width="30%">
            <ele-form :config="phoneBlackDialogConfig" :eventname="discardBlackSumbitName" v-on:receive="discardBlackSumbit"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="jiebang_phone_black_visible = false">取 消</el-button>
                <el-button type="primary" @click="discardBlackSumbitEvent">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 手机号添加黑名单 -->
        <el-dialog title="手机号添加黑名单" :visible.sync="add_phone_black_visible" width="30%">
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
    freezeForm,
    phoneBlackDialogForm,
} from '@/form/config/risk_manage'
import {
    freezeTable,
} from '@/table/config/risk_manage'
export default {
    name: 'risk_manage',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            freezeConfig: freezeForm(),
            freeze_Msg: freezeTable(),
            /* 解绑手机号黑名单 */
            jiebang_phone_black_visible: false,
            phoneBlackDialogConfig: phoneBlackDialogForm(),
            discardBlackSumbitName: false,
            /* 手机号添加黑名单 */
            add_phone_black_visible: false,
            addphoneBlackDialogConfig: phoneBlackDialogForm(),
            addBlackSumbitName: false,
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 移除黑名单 */
        userBlackRow(arg) {
            let _self = this;
            let discard_patam = {
                UserID: arg[1].UserID,
                Reason: arg[1].Reason || '帐号正常'
            };
            _self.$confirm('此操作将会移除黑名单，是否确认？', '温馨提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                _self.$res.postData(_self, '/Riskmanage/remove_black_phone/', discard_patam).then((res) => {
                    _self.$res.postData(_self, '/Riskmanage/get_black_phonenum/').then((response) => {
                        this.freeze_Msg.data = [];
                        this.freeze_Msg.data = response;
                        _self.$message.success('解绑成功');
                    });
                });
            }).catch(() => {
                _self.$message({
                    type: 'info',
                    message: '已取消'
                });
            });
        },
        freeze_sumbit(arg) {
            switch (arg[1]) {
                case 'query':
                    this.$res.postData(this, '/Riskmanage/get_black_phonenum/').then((response) => {
                        this.freeze_Msg.data = [];
                        this.freeze_Msg.data = response;
                        this.$message.success('查询成功');
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
                        this.$res.postData(this, '/Riskmanage/freeze_batch/', {
                            arrayUser: arr
                        }).then((response) => {
                            if (response && response.code == 0) {
                                this.$res.postData(this, '/Riskmanage/get_black_phonenum/', arg[0]).then((response) => {
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
                case 'separate':
                    this.jiebang_phone_black_visible = true;
                    break;
                case 'pull':
                    this.add_phone_black_visible = true;
                    break;
            }
        },
        selectedrow(arg) {
            this.freezeArg = arg;
        },
        /* 手机号黑名单 */
        addBlackSumbit(arg) {
            let _self = this;
            _self.addBlackSumbitName = false;
            let discard_patam = {
                InsureMobile: arg[0].InsureMobile,
                Reason: arg[0].Reason,
                Operator: localStorage.getItem('Username')
            };
            _self.$res.postData(_self, '/Riskmanage/add_black_phonenum/', discard_patam).then((response) => {
                if (response.code == 0) {
                    _self.add_phone_black_visible = false;
                    _self.$res.postData(_self, '/Riskmanage/get_black_phonenum/').then((response) => {
                        _self.freeze_Msg.data = [];
                        _self.freeze_Msg.data = response;
                        _self.$message.success('新增成功');
                    });
                } else if (response.code == -10005) {
                    _self.$message.error(response.msg);
                } else if (response.code == -10006) {
                    _self.$message.error(response.msg);
                }
            });
        },
        addBlackSumbitEvent() {
            this.addBlackSumbitName = 'submitEvent';
        },
        /* 根据手机号解绑 */
        discardBlackSumbit(arg) {
            let _self = this;
            _self.discardBlackSumbitName = false;
            _self.$res.postData(_self, '/Riskmanage/discard_black_phonenum/', arg[0]).then((res) => {
                if (res.code === 0) {
                    _self.jiebang_phone_black_visible = false;
                    _self.$res.postData(_self, '/Riskmanage/get_black_phonenum/').then((response) => {
                        _self.freeze_Msg.data = [];
                        _self.freeze_Msg.data = response;
                        _self.$message.success('解绑成功');
                    });
                } else {
                    _self.$message.error(res.msg);
                }
            });
        },
        discardBlackSumbitEvent() {
            this.discardBlackSumbitName = 'submitEvent';
        },
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        this.$res.postData(this, '/Riskmanage/get_black_phonenum/').then((response) => {
            this.freeze_Msg.data = [];
            this.freeze_Msg.data = response;
        });
    }
}

</script>
