<template>
    <div id="container">
        <h1 class="h1-title">新增用户</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="概况" name="0">
                    <ele-form :config="survey_config" v-on:receive="survey_submit" :defaultdata="surveyHtml"></ele-form>
                    <table-option :parent-message="survey_Msg" v-on:message="surveyMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="新增列表" name="0">
                    <ele-form :config="new_user_config" v-on:receive="new_user_submit" :defaultdata="newUserHtml"></ele-form>
                    <table-option :parent-message="newUser_Msg" v-on:message="newUserMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
            </el-collapse>
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
    newUserForm
} from '@/form/config/new_user'
import {
    serveyTable,
    newUserTable
} from '@/table/config/new_user'
export default {
    name: 'new_user',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            activeName: '0',
            loading: false,
            /* 概况 */
            survey_config: surveyForm(),
            survey_Msg: serveyTable(),
            surveyHtml: {
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
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 概况 */
        survey_submit(arg) {
            let _self = this;
            _self.loading = true;
            _self.$res.postData(_self, '/User/get_new_user_info/', arg[0]).then((response) => {
                _self.survey_Msg.data = [];
                _self.survey_Msg.data = response;
                _self.loading = false;
                _self.$message.success('查询成功');
            });
        },
        surveyMessage(text) {
            this.survey_Msg.data = tableSearch(text, this.survey_Msg.data);
        },
        /* 新增列表 */
        new_user_submit(arg) {
            let _self = this;
            _self.loading = true;
            _self.$res.postData(_self, '/User/get_create_account_info/', arg[0]).then((response) => {
                _self.newUser_Msg.data = [];
                _self.newUser_Msg.data = response;
                _self.loading = false;
                _self.$message.success('查询成功');
            });
        },
        newUserMessage(text) {
            this.newUser_Msg.data = tableSearch(text, this.newUser_Msg.data);
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        let _self = this;
        /* 概况 */
        _self.$res.postData(_self, '/User/get_new_user_info/', {
            query_start_time: _self.surveyHtml.query_start_time,
            query_end_time: _self.surveyHtml.query_end_time
        }).then((response) => {
            _self.survey_Msg.data = [];
            _self.survey_Msg.data = response;
        });

        /* 新增列表 */
        _self.$res.postData(_self, '/User/get_create_account_info/', {
            query_start_time: _self.newUserHtml.query_start_time,
            query_end_time: _self.newUserHtml.query_end_time
        }).then((res) => {
            _self.newUser_Msg.data = [];
            _self.newUser_Msg.data = res;
        });
    }
}

</script>
