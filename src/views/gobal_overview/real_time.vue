<template>
    <div id="container">
        <h1 class="h1-title">实时数据</h1>
        <div class="cms-content">
            <el-tabs type="border-card">
                <el-tab-pane label="用户汇总"></el-tab-pane>
                <el-tab-pane label="充值统计"></el-tab-pane>
                <el-tab-pane label="注册统计">
                    <el-collapse v-model="activeName">
                        <el-collapse-item title="曲线图" name="0">
                            <ele-form :config="reg_qx_config" v-on:receive="reg_qx_submit" :defaultdata="regQxtHtml"></ele-form>
                            <chart-option :chart-data="chartD" :chart-id="chartId"></chart-option>
                        </el-collapse-item>
                        <el-collapse-item title="数据统计" name="0">
                            <ele-form :config="register_config" v-on:receive="register_submit" :defaultdata="registerDefaultHtml"></ele-form>
                            <table-option :parent-message="register_Msg" v-on:message="registerMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                        </el-collapse-item>
                    </el-collapse>
                </el-tab-pane>
                <el-tab-pane label="在线人数统计">
                    <span style="margin-bottom: 15px; color: red; display: block;">注意：只能统计在房间里面的人数，停留在大厅的人数统计不到</span>
                    <ele-form :config="online_config" v-on:receive="online_submit" :defaultdata="onlineDefaultHtml"></ele-form>
                    <table-option :parent-message="online_Msg" v-on:message="onlineMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-tab-pane>
                <el-tab-pane label="金币分布"></el-tab-pane>
                <el-tab-pane label="流失玩家"></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
    //引入表格搜索
    import {
        tableSearch
    } from '@/libs/tableSearch'
    import {
        regQxForm,
        registerUserForm,
        roomUserForm
    } from '@/form/config/real_time'
    import {
        registerUserTable,
        roomUserTable
    } from '@/table/config/real_time'
    import {
        registerChart
    } from '@/chart/config/registerChart'
    export default {
        name: 'real_time',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                activeName: '0',
                loading: false,
                /* 注册统计 */
                reg_qx_config: regQxForm(),
                chartD: registerChart(),
                chartId: 'real_time_qx_chart',
                regQxtHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 29),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                },
                register_config: registerUserForm(),
                register_Msg: registerUserTable(),
                registerDefaultHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 29),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                },
                /* 在线人数统计 */
                online_config: roomUserForm(),
                online_Msg: roomUserTable(),
                onlineDefaultHtml: {
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                }
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            /* 注册统计 */
            register_submit(arg) {
                this.loading = true;
                this.$res.postData(this, '/Realtime/get_register_user/', arg[0]).then((response) => {
                    this.register_Msg.data = [];
                    this.register_Msg.data = response;
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            },
            /* 曲线图 */
            reg_qx_submit(arg) {
                this.$message.success('查询');
            },
            registerMessage(text) {
                this.register_Msg.data = tableSearch(text, this.register_Msg.data);
            },
            /* 在线人数统计 */
            online_submit(arg) {
                this.loading = true;
                this.$res.postData(this, '/Realtime/get_online_user/', arg[0]).then((response) => {
                    this.online_Msg.data = [];
                    this.online_Msg.data = response;
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            },
            onlineMessage(text) {
                this.online_Msg.data = tableSearch(text, this.online_Msg.data);
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            let _self = this;
            /* 注册统计 - 曲线图 */
            _self.$res.postData(_self, '/Realtime/get_system_stream_info/', {
                query_start_time: _self.regQxtHtml.query_start_time,
                query_end_time: _self.regQxtHtml.query_end_time
            }).then((response) => {
                let data = {
                    login_success: [],
                    register_success: [],
                };
                response.forEach((register_data) => {
                    // let time = register_data['CollectDate'];
                    let time = parseInt((register_data['CollectDate'] + 8 * 3600)) * 1000;
                    data.login_success.push([time, register_data.GameLogonSuccess]);
                    data.register_success.push([time, register_data.GameRegisterSuccess]);
                });
                _self.chartD.series = [{
                    name: '登录人数',
                    data: data.login_success
                }, {
                    name: '注册人数',
                    data: data.register_success
                }];
            });
            /* 注册统计 - 查询 */
            _self.$res.postData(_self, '/Realtime/get_register_user/', {
                query_start_time: _self.registerDefaultHtml.query_start_time,
                query_end_time: _self.registerDefaultHtml.query_end_time
            }).then((response) => {
                _self.register_Msg.data = [];
                _self.register_Msg.data = response;
            });
            /* 在线人数统计 - 查询 */
            _self.$res.postData(_self, '/Realtime/get_online_user/', {
                query_start_time: _self.onlineDefaultHtml.query_start_time,
                query_end_time: _self.onlineDefaultHtml.query_end_time
            }).then((response) => {
                _self.online_Msg.data = [];
                _self.online_Msg.data = response;
            });
            /* 在线人数统计 选择游戏下拉列表 */
            let baseGameListConfig = roomUserForm();
            if (!window.game_info) {
                let game_list = new Promise((resolve, reject) => {
                    _self.$res.getSingleData(_self, '/Aashare/game_info/').then((response) => {
                        if (response) {
                            resolve(response);
                        } else {
                            reject('error');
                        }
                    });
                });
                game_list.then((response) => {
                    window.game_info = response;
                    fillGameList(response);
                }, () => {
                    _self.$message.error('获取游戏列表失败');
                });
            } else {
                fillGameList(window.game_info);
            }
            function fillGameList(response) {
                response.map((val, i) => {
                    if (i >= 0) {
                        baseGameListConfig.formEle[1].options.push({
                            value: val.GameID,
                            label: val.KindName
                        });
                    }
                });
                _self.online_config = _self.$res.deepClone(baseGameListConfig);
            }
        }
    }
</script>
