<template>
    <div id="container">
        <div class="content">
            <h1 class="h1-title" style="font-size: 24px;">团队原则</h1>
            <el-row>
                <el-col :span="24">
                    <div class="team-content">
                        <ul class="clearfix">
                            <template v-for="todo in teamHtml">
                                <li>
                                    <div class="main-team">
                                        <span class="title">{{todo.ID}}</span>
                                        <div class="text">{{todo.Content}}</div>
                                        <div class="bottom">
                                            <span class="time">{{todo.CollectDate}}</span>
                                            <div slot="footer" class="dialog-footer">
                                                <el-button type="warning" plain @click.native="editTeam">编 辑</el-button>
                                                <el-button type="success" plain @click.native="detailTeam">详 情</el-button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </template>
                            <li style="cursor: pointer;" @click="addTeamPrinciple">
                                <i class="el-icon-circle-plus-outline"></i>
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="24">
                    <h2 style="font-size: 22px;">欢迎登录 鲨鱼互动 管理界面平台</h2>
                    <p style="margin: 10px 0;">系统版本：
                        <span>{{version}}</span>
                    </p>
                    <p style="margin: 10px 0;">登录次数：
                        <span>{{login_count}}</span>
                    </p>
                    <p style="margin-bottom: 10px;">上次登录IP：
                        <span>{{login_ip}}</span>
                    </p>
                    <p style="margin-bottom: 10px;">上次登录时间：
                        <span>{{login_time}}</span>
                    </p>
                </el-col>
            </el-row>
        </div>
        <!-- 新增团队原则 -->
        <el-dialog title="新增团队原则" :visible.sync="addTeamPrincipleDialog">
            <ele-form :config="addTeamPrincipleDialogConfig" :eventname="teamPrincipleSubmitEvent" v-on:receive="teamPrincipleDialogSubmit"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addTeamPrincipleDialog = false">取 消</el-button>
                <el-button type="success" @click="submitTeamPrincipleEvent">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 编辑 -->
        <el-dialog title="编辑" :visible.sync="editDialog">
            <ele-form :config="editTeamPrincipleDialogConfig" :eventname="teamPrincipleSubmitEvent1" v-on:receive="teamPrincipleDialogSubmit1" :defaultdata="editHtml"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editDialog = false">取 消</el-button>
                <el-button type="success" @click="submitTeamPrincipleEvent1">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import {
        addTeamPrincipleDialogForm
    } from '@/form/config/team'
    export default {
        name: 'index',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                version: '1.0.1',
                login_time: '',
                login_count: '',
                login_ip: '',
                /* 新增团队原则 */
                addTeamPrincipleDialog: false,
                addTeamPrincipleDialogConfig: addTeamPrincipleDialogForm(),
                teamPrincipleSubmitEvent: false,
                teamHtml: null,
                /* 编辑 */
                editDialog: false,
                editTeamPrincipleDialogConfig: addTeamPrincipleDialogForm(),
                teamPrincipleSubmitEvent1: false,
                editHtml: {},
                /* 详情 */
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            /* 新增团队原则 */
            addTeamPrinciple() {
                this.addTeamPrincipleDialog = true;
            },
            teamPrincipleDialogSubmit(arg) {
                switch (arg[1]) {
                    case 'submitEvent':
                        let param = {
                            title: arg[0].title,
                            content: arg[0].content,
                            author: localStorage.getItem('Username')
                        };
                        this.$res.postData(this, '/Team/add_team_principle/', param).then((response) => {
                            if (response.code == 0) {
                                this.addTeamPrincipleDialog = false;
                                this.teamPrincipleSubmitEvent = false;
                                this.$res.postData(this, '/Team/get_team_principle/').then((response) => {
                                    this.teamHtml = response;
                                    this.$message.success('新增成功');
                                });
                            } else {
                                this.$message.error('标题重复');
                            }
                        });
                        break;
                }
            },
            submitTeamPrincipleEvent() {
                this.teamPrincipleSubmitEvent = 'submitEvent';
            },
            /* 编辑 */
            editTeam(text) {
                let username = localStorage.getItem('Username');
                if (username == 'huangjingshan') {
                    this.editDialog = true;
                    this.$message.success('足够权限');
                } else {
                    this.$message.error('没有权限，请联系管理员');
                }
            },
            teamPrincipleDialogSubmit1(arg) {
                switch (arg[1]) {
                    case 'submitEvent':
                        this.editDialog = false;
                        this.teamPrincipleSubmitEvent1 = false;
                }
            },
            submitTeamPrincipleEvent1() {
                this.teamPrincipleSubmitEvent1 = 'submitEvent';
            },
            /* 详情 */
            detailTeam() {
                this.editDialog = true;
                this.$message.success('详情');
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            let _self = this;
            let username = localStorage.getItem('Username');
            _self.$res.postData(_self, '/Loginuser/get_user_Info/', {
                username: username
            }).then((response) => {
                _self.login_count = response.LoginTimes;
                _self.login_time = response.PreLogintime;
                _self.login_ip = response.PreLoginIP;
            });
            _self.$res.postData(_self, '/Team/get_team_principle/').then((response) => {
                _self.teamHtml = response;
            });
        }
    }
</script>
<style lang="scss" scoped>
    .team-content {
        li {
            position: relative;
            float: left;
            width: 234px;
            height: 366px;
            border: 1px solid #ebeef5;
            color: #303133;
            background-color: #fff;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
            -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
            border-radius: 4px;
            overflow: hidden;
            margin-right: 40px;
            margin-bottom: 30px;
            i.el-icon-circle-close-outline {
                position: absolute;
                top: 0;
                right: 0;
                font-size: 32px;
                cursor: pointer;
            }
            i.el-icon-circle-plus-outline {
                position: absolute;
                top: 50%;
                left: 50%;
                font-size: 100px;
                -webkit-transform: translate3d(-50%, -50%, 0);
                transform: translate3d(-50%, -50%, 0);
                font-weight: normal;
            }
            .main-team {
                padding: 15px;
            }
            .title {
                display: block;
                margin-bottom: 10px;
                font-size: 24px;
                color: #ff6700;
                text-align: center;
            }
            .text {
                height: 203px;
                font-size: 14px;
                color: #303133;
                line-height: 26px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 8;
                overflow: hidden;
            }
            .bottom {
                margin-top: 10px;
                font-size: 14px;
                color: #999;
            }
            .time {
                display: block;
                margin-bottom: 10px;
            }
        }
    }
    .clearfix:before,
    .clearfix:after {
        display: none;
        content: "";
    }
    .clearfix:after {
        clear: both;
    }
</style>


