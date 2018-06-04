<template>
    <div class="login-container">
        <div class="clouds clouds-footer"></div>
        <div class="clouds"></div>
        <div class="clouds clouds-fast"></div>
        <div class="header">
            <span>欢迎登录<em>{{serverName}}</em>管理界面平台</span>
        </div>
        <div class="container">
            <div class="container-box">
                <div class="content-wrap">
                    <h1 id="site-name">
                        <a href="javascript:;">{{serverName2}} 鲨鱼互动 管理平台</a>
                    </h1>
                    <el-form :model="loginForm" ref="loginForm" label-width="80px" class="demo-dynamic">
                        <el-form-item class="no-star" prop="username" label="用户名" :rules="{  required: true, message: '请输入用户名', trigger: 'blur' }">
                            <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item class="no-star" prop="password" label="密码" :rules="{ required: true, message: '请输入密码', trigger: 'blur' }">
                            <el-input v-model="loginForm.password" placeholder="请输入密码" type="password"></el-input>
                        </el-form-item>
                        <!-- <el-form-item class="no-star" prop="img_verification_code" label="验证码" :rules="{ required: true, message: '请输入验证码', trigger: 'blur' }">
                                    <el-col :span="11">
                                        <el-input v-model="loginForm.img_verification_code" placeholder="请输入验证码"></el-input>
                                    </el-col>
                                    <el-col :span="9" :offset="1">
                                        <img v-bind:src="codeSrc" alt="" style="width:78px; height:33px; margin-top: 4px;" @load="loadCode">
                                    </el-col>
                                    <el-col :span="3" style="margin-top: 2px;">
                                        <a href="javascript:void(0);" @click="refreshCode">刷新</a>
                                    </el-col>
                                </el-form-item> -->
                        <el-form-item class="center-btn">
                            <el-button type="primary" @click="submitForm('loginForm')">登&nbsp;&nbsp;&nbsp;录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
        <div class="footer">
            推荐使用
            <a style="color:#f3f3f3;text-decoration: underline;" href="https://guanjia.qq.com/sem/13/index.html" target="_blank">Chrome浏览器</a> 或
            <a style="color:#f3f3f3;text-decoration: underline;" href="http://browser.qq.com/" target="_blank">QQ浏览器</a>
            <br> 天津市鲨鱼互动科技有限公司 版权所有 津ICP备18000396号
        </div>
    </div>
</template>
<script>
export default {
    name: 'demo',
    data() {
        return {
            serverName: '鲨鱼互动',
            serverName2: (location.hostname == 'cms.oa.sharkfaith.com' ? '本地服' : (location.hostname == 'cms.oa.pokerhope.com' || '183.60.191.123' ? '开发服' : '模拟服')),
            loginForm: {
                username: '',
                password: '',
                // img_verification_code: '',
            },
        }
    },
    methods: {
        submitForm(formName) {
            let _self = this;
            _self.$refs[formName].validate((valid) => {
                if (valid) {
                    /* 输入框不为空 */
                    let data = new FormData();
                    for (let key in this.loginForm) {
                        data.append(key, this.loginForm[key]);
                    }
                    _self.$res.loginData(_self, '/Loginuser/user_login/', data).then((response) => {
                        if (response.code === -11006) {
                            _self.$message.error(response.msg);
                        } else if (response.code === -11007) {
                            _self.$message.error(response.msg);
                        } else if (response.code === -11009) {
                            _self.$message.error(response.msg);
                        } else {
                            _self.$message.success('登录成功，正在跳转...');
                            localStorage.setItem('Username', _self.loginForm.username);
                            _self.$emit('login', true);
                            _self.$cms.login();
                        }
                    });
                } else {
                    _self.$message.error('登录失败');
                }
            });
        },
        /* 刷新验证码 */
        refreshCode() {
            let _self = this;
            _self.codeSrc = '';
            setTimeout(() => {
                _self.codeSrc = '/api/user/send_img_verification_code/?' + (new Date().getTime());
            }, 200)
        },
    }
}

</script>
<style scoped>
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
}

a {
    text-decoration: none;
    color: #333;
}

a:hover,
a:focus {
    text-decoration: none;
}

i,
em {
    font-style: normal;
}

input {
    margin: 0;
    padding: 0;
}

@-webkit-keyframes cloudmove {
    0% {
        left: -100%;
    }
    99.9999999% {
        left: 100%;
    }
    100% {
        left: -100%;
    }
}

@-moz-keyframes cloudmove {
    0% {
        left: -100%;
    }
    99.9999999% {
        left: 100%;
    }
    100% {
        left: -100%;
    }
}

@keyframes cloudmove {
    0% {
        left: -100%;
    }
    99.9999999% {
        left: 100%;
    }
    100% {
        left: -100%;
    }
}

#layui-body {
    z-index: auto !important;
}

.login-container {
    height: 100%;
    background-color: #1c77ac;
    overflow: hidden;
    font-family: '微软雅黑', serif;
    margin: 0 auto;
    /*min-width: 980px;*/
    font-size: 9pt;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
}

.login-container .clouds {
    background: url("/static/images/cloud_three.png") repeat-x left 15%;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 300%;
    -webkit-animation: cloudmove 200s linear infinite;
    -moz-animation: cloudmove 200s linear infinite;
    -o-animation: cloudmove 200s linear infinite;
    animation: cloudmove 200s linear infinite;
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

.login-container .clouds-fast {
    background: url("/static/images/cloud.png") no-repeat 0px 40%;
    -webkit-animation: cloudmove 30s linear infinite;
    -moz-animation: cloudmove 30s linear infinite;
    -o-animation: cloudmove 30s linear infinite;
    animation: cloudmove 30s linear infinite;
}

.login-container .clouds-footer {
    background: url("/static/images/cloud_one.png") no-repeat left 100%;
    animation: none;
}

.login-container .header {
    height: 47px;
    position: absolute;
    position: fixed;
    top: 0;
    background: url('/static/images/loginbg1.png') repeat-x;
    z-index: 100;
    width: 100%;
}

.login-container .header span {
    color: #ddd;
    line-height: 47px;
    float: left;
    margin-left: 45px;
    font-family: "Helvetica Neue", "Hiragino Sans GB", "Microsoft YaHei", "\9ED1\4F53", Arial, sans-serif;
    font-size: 14px;
}

.login-container .header em {
    margin: 0 5px;
}

.login-container .container {
    background: url('/static/images/loginbg3.png') no-repeat center center;
    width: 100%;
    height: 585px;
    overflow: hidden;
    position: relative;
    top: 47px;
    top: 50%;
    -webkit-transform: translateY(-45%);
    transform: translateY(-45%);
}

.login-container .container-box {
    width: 400px;
    margin: 0 auto;
    float: none;
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, .1);
    border-radius: 5px;
    background: rgba(255, 255, 255, .65);
}

.login-container .content-wrap {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 1px;
}

.login-container h1 {
    font-weight: normal;
    font-size: 24px;
    margin: 0;
    padding: 20px 0;
    text-align: center;
}

.login-container input[type="text"],
.login-container input[type="password"] {
    width: 100%;
    height: 40px;
    border-radius: 6px;
    border: 1px solid #b2bfc7;
    padding: 5px 6px;
    clear: both;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
    font-size: 14px;
    color: #555;
    vertical-align: middle;
    outline: none;
    font-family: "微软雅黑";
}

.login-container input:focus {
    border-color: #0085EB;
}

.login-container .form-row {
    width: 100%;
    margin-bottom: 16px;
}

.login-container .verfication_code {
    width: 50% !important;
}

.login-container .yanzhengma {
    vertical-align: middle;
    width: 30%;
    height: 34px;
    margin: 4px;
}

.login-container .refresh {
    font-size: 14px;
    vertical-align: middle;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
}

.login-container .refresh:hover {
    color: #0085EB;
}

.login-container .form-tips {
    font-size: 16px;
    margin-bottom: 15px;
    color: red;
    text-align: center;
}

.login-container .submit-row {
    padding-bottom: 20px;
    border: none;
    background: none;
}

.login-container .submit-row input {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    border: none;
    background-color: #1E9FFF;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
    letter-spacing: 20px;
    padding-left: 20px;
    font-family: "微软雅黑";
}

.login-container .submit-row input:focus {
    outline: none;
}

.login-container .submit-row input:hover {
    background-color: #0085EB;
}

.login-container .submit-row input:active {
    background-color: #1E9FFF;
}

.login-container .footer {
    height: 50px;
    line-height: 24px;
    text-align: center;
    background: url('/static/images/loginbg2.png') repeat-x;
    position: fixed;
    bottom: 0;
    width: 100%;
    color: #fff;
    letter-spacing: 1px;
    padding-left: 1px;
}

.el-form-item.is-required.no-star .el-form-item__label:before {
    content: '';
}

.center-btn .el-form-item__content {
    margin-left: 0 !important;
    text-align: center;
}

</style>
