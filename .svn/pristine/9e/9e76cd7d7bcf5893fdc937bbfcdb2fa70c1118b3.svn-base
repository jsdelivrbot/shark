<template>
    <div id="container">
        <h1 class="h1-title">自定义头像审核</h1>
        <div class="cms-content">
            <ele-form :config="avatar_config" v-on:receive="avatar_submit" :defaultdata="avatarHtml"></ele-form>
            <table-option :parent-message="avatar_Msg" v-on:outputrow="avatar_recieveRow" v-loading="loading"
                          element-loading-text="拼命加载中"></table-option>
        </div>
    </div>
</template>

<script>
    import {
        avatarForm
    } from '@/form/config/avatar'
    import {
        avatarTable
    } from '@/table/config/avatar'

    export default {
        name: 'avatar',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                loading: false,
                avatar_config: avatarForm(),
                avatarHtml: {
                    ExamineStatus: 0
                },
                avatar_Msg: avatarTable(),
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {
        },
        /* 需要事件调用的方法放在methods内 */
        methods: {
            avatar_submit(arg) {
                this.loading = true;
                this.$res.postData(this, '/Avatar/query_user_avatarimage/').then((response) => {
                    this.avatar_Msg.data = [];
                    this.avatar_Msg.data = response.map((val) => {
                        let res = val;
                        val.ExamineStatus == 0 && (res['通过' + '_show'] = true);
                        val.ExamineStatus == 0 && (res['不通过' + '_show'] = true);
                        val.ExamineStatus == 1 && (res['已通过' + '_show'] = true);
                        val.ExamineStatus == 2 && (res['未通过' + '_show'] = true);
                        return res;
                    });
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            },
            avatar_recieveRow(arg) {
                switch (arg[2]) {
                    case 'examine':
                        this.$confirm('此操作将会审核该玩家' + ' ' + arg[1].NickName + ' ' + '头像审核通过，是否继续？', '温馨提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            let param = {
                                userid: arg[1].UserID,
                                examine: 1
                            };
                            this.$res.postData(this, '/Avatar/avatar_examine/', param).then((res) => {
                                if (res.code === 0) {
                                    this.$res.postData(this, '/Avatar/query_user_avatarimage/').then((response) => {
                                        this.avatar_Msg.data = [];
                                        this.avatar_Msg.data = response.map((val) => {
                                            let res = val;
                                            val.ExamineStatus == 0 && (res['通过' + '_show'] = true);
                                            val.ExamineStatus == 0 && (res['不通过' + '_show'] = true);
                                            val.ExamineStatus == 1 && (res['已通过' + '_show'] = true);
                                            val.ExamineStatus == 2 && (res['未通过' + '_show'] = true);
                                            return res;
                                        });
                                        this.$message.success(res.msg);
                                    });
                                } else {
                                    this.$message.error(res.msg);
                                }
                            });
                        }).catch(() => {
                            this.$message.error('已取消审核');
                        });
                        break;
                    case 'not_examine':
                        this.$confirm('此操作将会审核该玩家' + ' ' + arg[1].NickName + ' ' + '头像审核不通过，是否继续？', '温馨提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            let param = {
                                userid: arg[1].UserID,
                                examine: 2
                            };
                            this.$res.postData(this, '/Avatar/avatar_examine/', param).then((res) => {
                                if (res.code === 0) {
                                    this.$res.postData(this, '/Avatar/query_user_avatarimage/').then((response) => {
                                        this.avatar_Msg.data = [];
                                        this.avatar_Msg.data = response.map((val) => {
                                            let res = val;
                                            val.ExamineStatus == 0 && (res['通过' + '_show'] = true);
                                            val.ExamineStatus == 0 && (res['不通过' + '_show'] = true);
                                            val.ExamineStatus == 1 && (res['已通过' + '_show'] = true);
                                            val.ExamineStatus == 2 && (res['未通过' + '_show'] = true);
                                            return res;
                                        });
                                        this.$message.success(res.msg);
                                    });
                                } else {
                                    this.$message.error(res.msg);
                                }
                            });
                        }).catch(() => {
                            this.$message.error('已取消审核');
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
            let baseAvatarTb = avatarTable();
            baseAvatarTb.columns[baseAvatarTb.columns.length - 1].template = {
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
                    name: '已通过',
                    funcName: 'yes_info',
                    type: 'info',
                    disabled: true,
                    if: true,
                }, {
                    name: '未通过',
                    funcName: 'not_info',
                    type: 'info',
                    disabled: true,
                    if: true,
                }]
            }

            /* 查询 */
            this.$res.postData(this, '/Avatar/query_user_avatarimage/').then((response) => {
                this.avatar_Msg.data = [];
                this.avatar_Msg.data = response.map((val) => {
                    let res = val;
                    val.ExamineStatus == 0 && (res['通过' + '_show'] = true);
                    val.ExamineStatus == 0 && (res['不通过' + '_show'] = true);
                    val.ExamineStatus == 1 && (res['已通过' + '_show'] = true);
                    val.ExamineStatus == 2 && (res['未通过' + '_show'] = true);
                    return res;
                });
            });
        }
    }
</script>
