<template>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" style="font-size: 24px">{{serverName2}} CMS管理系统</el-menu-item>
        <el-menu-item index="3">
            未处理的留言反馈<span style="margin: 0 6px; color: #ff6700;">{{feedback}}</span>条<span style="margin: 0 6px;">|</span>已处理的留言反馈<span style="margin: 0 6px; color: #ff6700;">{{is_feedback}}</span>条
        </el-menu-item>
        <el-menu-item-group style="float:right;">
            <el-submenu index="2">
                <template slot="title">{{username}}
                </template>
                <el-menu-item index="2-2" @click="modify_password">修改密码</el-menu-item>
                <el-menu-item index="2-3" @click="logout">注销</el-menu-item>
            </el-submenu>
        </el-menu-item-group>
        <el-dialog title="修改密码" size="tiny" :visible.sync="dialogFormVisible">
            <ele-form :config="headerDialogConfig" v-on:receive="headerDialogSubmit" :defaultdata="defaultHtml"></ele-form>
        </el-dialog>
    </el-menu>
</template>
<script>
import {
    modityPassForm
} from '@/form/config/header'
export default {
    data() {
        return {
            activeIndex: '1',
            username: '',
            dialogFormVisible: false,
            headerDialogConfig: {},
            defaultHtml: {},
            feedback: '',
            is_feedback: '',
            serverName: location.hostname == 'product-cms-sharkfaith.com' ? '生产服' : '开发服',
            serverName2: '鲨鱼互动'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        modify_password() {
            this.dialogFormVisible = true;
            this.defaultHtml = {
                Username: localStorage.getItem('Username'),
            }
        },
        headerDialogSubmit(arg) {
            switch (arg[1]) {
                case 'cancel':
                    this.dialogFormVisible = false;
                    this.$message.error('已取消修改密码');
                    break;
                case 'modity':
                    let _self = this;
                    let param = {
                        username: arg[0].Username,
                        password: arg[0].yuanPass,
                        new_password: arg[0].newPass
                    };
                    _self.$res.postData(_self, '/Loginuser/user_modity_passward/', param).then((response) => {
                        if (response.code === -11008) {
                            _self.dialogFormVisible = true;
                            _self.$message.error(response.msg);
                        } else {
                            _self.dialogFormVisible = false;
                            _self.$message.success('密码修改成功，请重新登录');
                            setTimeout(() => {
                                _self.$cms.logout(_self);
                            }, 1000);
                        }
                    });
                    break;
            }
        },
        logout() {
            this.$confirm('此操作将退出此系统，是否继续？', '温馨提示', {
                confirmButtonText: '确 定',
                cancelButtonText: '取 消',
                type: 'warning'
            }).then(() => {
                this.$res.postData(this, '/Loginuser/user_logout/', {
                    username: localStorage.getItem('Username')
                }).then((response) => {
                    this.$message.success('注销成功');
                    this.$cms.logout(this);
                });
            }).catch(() => {
                this.$message.error('已取消注销');
            });
        }
    },
    created() {
        this.username = localStorage.getItem('Username');
        this.headerDialogConfig = modityPassForm();
        /* 未处理留言反馈条数 */
        let _self = this;
        _self.$res.postData(_self, '/Manu/get_not_feecback/', {
            deal: 0
        }).then((response) => {
            this.feedback = response.length;
        });
        /* 已处理留言反馈条数 */
        _self.$res.postData(_self, '/Manu/get_not_feecback/', {
            deal: 1
        }).then((response) => {
            this.is_feedback = response.length;
        });

        /* 玩家昵称 */
        this.$res.getSingleData(this, '/Aashare/user_info/').then((response) => {
            window.userInfo = response;
        });

        /* 在线人数统计 */
        this.$res.getSingleData(this, '/Aashare/room_info').then((response) => {
            window.roomInfo = response;
        });
    }
}

</script>
<style>
.el-menu-item-group__title {
    padding: 0;
}

.el-menu--dark {
    background: #495060;
    border-radius: 0;
}

</style>
