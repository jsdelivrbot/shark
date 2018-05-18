<template>
    <div id="container">
        <h1 class="h1-title">用户分析</h1>
        <div class="cms-content">
            <el-tabs v-model="activeName">
                <el-tab-pane label="新增用户" name="0">
                    <el-collapse v-model="newUserName">
                        <el-collapse-item title="概况" name="0">
                            <ele-form :config="newUserSurvey_config" v-on:receive="newUserSurvey_submit" :defaultdata="newUserSurveyHtml"></ele-form>
                            <table-option :parent-message="newUserSurvey_Msg" v-loading="loading1" element-loading-text="拼命加载中"></table-option>
                        </el-collapse-item>
                        <el-collapse-item title="新增列表" name="1">
                            <ele-form :config="new_user_config" v-on:receive="new_user_submit" :defaultdata="newUserHtml"></ele-form>
                            <table-option :parent-message="newUser_Msg" v-on:message="newUserMessage" v-on:pagedata="newUserChangePage" v-loading="loading2" element-loading-text="拼命加载中"></table-option>
                        </el-collapse-item>
                    </el-collapse>
                </el-tab-pane>
                <el-tab-pane label="活跃用户" name="1">
                    <el-collapse v-model="acUserName">
                        <el-collapse-item title="概况" name="0">
                            <ele-form :config="acUserSurvey_config" v-on:receive="acUserSurvey_submit" :defaultdata="acUserSurveyHtml"></ele-form>
                            <table-option :parent-message="acUserSurvey_Msg" v-loading="loading3" element-loading-text="拼命加载中"></table-option>
                        </el-collapse-item>
                        <el-collapse-item title="活跃列表" name="1">
                            <ele-form :config="active_config" v-on:receive="active_submit" :defaultdata="activeHtml"></ele-form>
                            <table-option :parent-message="active_Msg" v-on:pagedata="activeUserChangePage" v-on:message="activeMessage" v-loading="loading4" element-loading-text="拼命加载中"></table-option>
                        </el-collapse-item>
                    </el-collapse>
                </el-tab-pane>
                <el-tab-pane label="留存用户" name="2">
                    <ele-form :config="keep_user_config" v-on:receive="keep_user_submit" :defaultdata="keepUserHtml"></ele-form>
                    <table-option :parent-message="keep_Msg" v-on:pagedata="keepUserChangePage" v-on:message="keepMessage" v-loading="loading5" element-loading-text="拼命加载中"></table-option>
                </el-tab-pane>
            </el-tabs>
            <br />
            <h1 class="h1-title">漏斗分析</h1>
        </div>
    </div>
</template>
<script>
//引入表格搜索
import {
    tableSearch
} from '@/libs/tableSearch'
import {
    surveyForm,
    newUserForm,
    serveyForm,
    activeForm,
    keepForm
} from '@/form/config/user_analysis'
import {
    newUserserveyTable,
    newUserTable,
    acUserserveyTable,
    activeTable,
    keepTable
} from '@/table/config/user_analysis'
export default {
    name: 'user_analysis',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            activeName: '0',
            loading1: false,
            loading2: false,
            loading3: false,
            loading4: false,
            loading5: false,
            /* 新增用户 */
            /* 概况 */
            newUserName: '',
            newUserSurvey_config: surveyForm(),
            newUserSurvey_Msg: newUserserveyTable(),
            newUserSurveyHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 7),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            /* 新增列表 */
            new_user_config: newUserForm(),
            newUser_Msg: newUserTable(),
            newUserHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            /* 活跃用户 */
            acUserName: '',
            /* 概况 */
            acUserSurvey_config: serveyForm(),
            acUserSurvey_Msg: acUserserveyTable(),
            acUserSurveyHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 7),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            /* 活跃列表 */
            active_config: activeForm(),
            active_Msg: activeTable(),
            activeHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            /* 留存用户 */
            keep_user_config: keepForm(),
            keepUserHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            keep_Msg: keepTable(),
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 新增用户 */
        /* 概况 */
        newUserSurvey_submit(arg) {
            let _self = this;
            _self.loading1 = true;
            _self.$res.postData(_self, '/Useranalysis/query_new_user_info/', arg[0]).then((response) => {
                _self.newUserSurvey_Msg.data = [];
                _self.newUserSurvey_Msg.data = response;
                _self.loading1 = false;
                _self.$message.success('查询成功');
            });
        },
        /* 新增列表 */
        new_user_submit(arg) {
            let _self = this;
            _self.loading2 = true;
            _self.newUserHtml.query_start_time = arg[0].query_start_time;
            _self.newUserHtml.query_end_time = arg[0].query_end_time;
            _self.$res.postData(_self, '/Useranalysis/query_create_account_info/', arg[0]).then((response) => {
                this.newUser_Msg.data = response.rows.map((val) => {
                    return val;
                });
                this.newUser_Msg.total = response.total;
                _self.loading2 = false;
                _self.$message.success('查询成功');
            });
        },
        newUserMessage(text) {
            this.newUser_Msg.data = tableSearch(text, this.newUser_Msg.data);
        },
        /* 新增用户 - 服务器分页 */
        newUserChangePage(arg) {
            this.loading2 = true;
            this.$res.postData(this, '/Useranalysis/query_create_account_info/', {
                page: arg[0],
                psize: arg[1],
                query_start_time: this.newUserHtml.query_start_time,
                query_end_time: this.newUserHtml.query_end_time
            }).then((response) => {
                this.newUser_Msg.data = response.rows;
                this.newUser_Msg.total = response.total;
                this.loading2 = false;
            });
        },
        /* 活跃用户 */
        /* 概况 */
        acUserSurvey_submit(arg) {
            let _self = this;
            _self.loading3 = true;
            _self.$res.postData(_self, '/Useranalysis/active_user_statistics_info/', arg[0]).then((res) => {
                _self.acUserSurvey_Msg.data = [];
                _self.acUserSurvey_Msg.data = res;
                _self.loading3 = false;
                _self.$message.success('查询成功');
            });
        },
        /* 活跃列表 */
        active_submit(arg) {
            let _self = this;
            _self.loading4 = true;
            _self.activeHtml.query_start_time = arg[0].query_start_time;
            _self.activeHtml.query_end_time = arg[0].query_end_time;
            _self.$res.postData(_self, '/Useranalysis/query_active_user/', arg[0]).then((response) => {
                _self.active_Msg.data = response.rows.map((val) => {
                    return val;
                });
                _self.active_Msg.total = response.total;
                _self.loading4 = false;
                _self.$message.success('查询成功');
            });
        },
        activeMessage(text) {
            this.active_Msg.data = tableSearch(text, this.active_Msg.data);
        },
        /* 活跃用户 - 服务器分页 */
        activeUserChangePage(arg) {
            this.loading4 = true;
            this.$res.postData(this, '/Useranalysis/query_active_user/', {
                page: arg[0],
                psize: arg[1],
                query_start_time: this.activeHtml.query_start_time,
                query_end_time: this.activeHtml.query_end_time
            }).then((response) => {
                this.active_Msg.data = response.rows;
                this.active_Msg.total = response.total;
                this.loading4 = false;
            });
        },
        /* 留存用户 */
        keep_user_submit(arg) {
            this.loading5 = true;
            this.$res.postData(this, '/Useranalysis/remain_user_statistics_info').then((response) => {
                this.keep_Msg.data = response.rows.map((val) => {
                    return val;
                });
                this.keep_Msg.total = response.total;
                this.loading5 = false;
                this.$message.success('查询成功');
            });
        },
        keepMessage(text) {
            this.keep_Msg.data = tableSearch(text, this.keep_Msg.data);
        },
        /* 留存用户 -- 服务器分页 */
        keepUserChangePage(arg) {
            this.loading5 = true;
            this.$res.postData(this, '/Useranalysis/remain_user_statistics_info/', {
                page: arg[0],
                psize: arg[1]
            }).then((response) => {
                this.keep_Msg.data = response.rows;
                this.keep_Msg.total = response.total;
                this.loading5 = false;
            });
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        /* 新增用户 */
        let _self = this;
        /* 概况 */
        _self.$res.postData(_self, '/Useranalysis/query_new_user_info/', {
            query_start_time: _self.newUserSurveyHtml.query_start_time,
            query_end_time: _self.newUserSurveyHtml.query_end_time
        }).then((response) => {
            _self.newUserSurvey_Msg.data = [];
            _self.newUserSurvey_Msg.data = response.reverse();
        });
        /* 新增列表 */
        _self.$res.postData(_self, '/Useranalysis/query_create_account_info/', {
            query_start_time: _self.newUserHtml.query_start_time,
            query_end_time: _self.newUserHtml.query_end_time
        }).then((res) => {
            _self.newUser_Msg.data = [];
            _self.newUser_Msg.data = res.rows;
            _self.newUser_Msg.total = res.total;
        });
        /* 活跃用户 */
        /* 概况 */
        _self.$res.postData(_self, '/Useranalysis/active_user_statistics_info/', {
            query_start_time: _self.acUserSurveyHtml.query_start_time,
            query_end_time: _self.acUserSurveyHtml.query_end_time
        }).then((res) => {
            _self.acUserSurvey_Msg.data = [];
            _self.acUserSurvey_Msg.data = res;
        });
        /* 活跃列表 */
        _self.$res.postData(_self, '/Useranalysis/query_active_user/', {
            query_start_time: _self.activeHtml.query_start_time,
            query_end_time: _self.activeHtml.query_end_time
        }).then((res) => {
            _self.active_Msg.data = [];
            _self.active_Msg.data = res.rows;
            _self.active_Msg.total = res.total;
        });
        /* 留存用户列表 */
        _self.$res.postData(_self, '/Useranalysis/remain_user_statistics_info').then((res) => {
            _self.keep_Msg.data = [];
            _self.keep_Msg.data = res.rows;
            _self.keep_Msg.total = res.total;
        });
    }
}

</script>
