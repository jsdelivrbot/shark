<template>
    <div id="container">
        <h1 class="h1-title">签到/等级管理</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="签到配置" name="0">
                    <table-option :parent-message="sign_Msg" v-on:outputrow="sign_recieveRow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                    <el-dialog title="编辑" size="tiny" :visible.sync="signDialog">
                        <ele-form :config="signDialog_config" v-on:receive="signDialog_submit" :defaultdata="defaultHtml"></ele-form>
                    </el-dialog>
                </el-collapse-item>
                <el-collapse-item title="等级配置" name="0">
                    <ele-form :config="grade_config" v-on:receive="grade_submit"></ele-form>
                    <table-option :parent-message="grade_Msg" v-on:outputrow="grade_recieveRow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
            </el-collapse>
        </div>
        <el-dialog title="编辑等级配置" size="tiny" :visible.sync="gradeDialog">
            <ele-form :config="gradeDialog_config" v-on:receive="gradeDialog_submit" :defaultdata="defaultDialogHtml"></ele-form>
        </el-dialog>
    </div>
</template>
<script>
import {
    signDialogForm,
    gradeForm,
    gradeDialogForm
} from '@/form/config/sign_setup'
import {
    signTable,
    gradeTable
} from '@/table/config/sign_setup'
export default {
    name: 'sign_setup',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            activeName: '0',
            loading: false,
            /* 签到配置 */
            sign_Msg: signTable(),
            signDialog: false,
            defaultHtml: {},
            signDialog_config: signDialogForm(),
            /* 等级配置 */
            grade_config: gradeForm(),
            grade_Msg: gradeTable(),
            gradeDialog: false,
            gradeDialog_config: gradeDialogForm(),
            defaultDialogHtml: {},
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 签到配置 */
        sign_recieveRow(arg) {
            this.signDialog = true;
            this.defaultHtml = arg[1];
        },
        signDialog_submit(arg) {
            this.$res.postData(this, '/Sys/sign_set/', arg[0]).then((response) => {
                this.signDialog = false;
                this.$message.success('设置成功');
                this.loading = true;
                this.$res.postData(this, '/Sys/sign/').then((response) => {
                    this.sign_Msg.data = [];
                    this.sign_Msg.data = response;
                    this.loading = false;
                });
            });
        },
        /* 等级配置 */
        grade_submit(arg) {
            this.loading = true;
            let _self = this;
            _self.$res.postData(_self, '/Sys/grade/').then((response) => {
                _self.grade_Msg.data = [];
                _self.grade_Msg.data = response;
                this.loading = false;
                this.$message.success('查询成功');
            });
        },
        grade_recieveRow(arg) {
            this.gradeDialog = true;
            this.defaultDialogHtml = arg[1];
        },
        gradeDialog_submit(arg) {
            this.gradeDialog = false;
            this.$res.postData(this, '/Sys/edit_grade/', arg[0]).then((response) => {
                this.$message.success('设置成功');
                this.loading = true;
                this.$res.postData(this, '/Sys/grade/').then((response) => {
                    this.grade_Msg.data = [];
                    this.grade_Msg.data = response;
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            });
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        /* 签到配置 */
        this.$res.postData(this, '/Sys/sign/').then((response) => {
            this.sign_Msg.data = [];
            this.sign_Msg.data = response;
            this.$message.success('查询成功');
        });
        /* 等级配置 */
        let _self = this;
        _self.$res.postData(_self, '/Sys/grade/').then((response) => {
            _self.grade_Msg.data = [];
            _self.grade_Msg.data = response;
            this.$message.success('查询成功');
        });
    }
}

</script>
