<template>
    <div id="container">
        <div class="content">
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
    </div>
</template>
<script>
export default {
    name: 'index',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            version: '1.0.0',
            login_time: '',
            login_count: '',
            login_ip: '',
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {},
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
    }
}

</script>
