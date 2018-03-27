<template>
    <div id="container">
        <h1 class="h1-title">活跃用户</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="概况" name="1">
                    <ele-form :config="survey_config" v-on:receive="survey_submit" :defaultdata="surveyHtml"></ele-form>
                    <table-option :parent-message="survey_Msg" v-on:message="surveyMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="活跃列表" name="1">
                    <ele-form :config="active_config" v-on:receive="active_submit" :defaultdata="activeHtml"></ele-form>
                    <table-option :parent-message="active_Msg" v-on:message="activeMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
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
    serveyForm,
    activeForm
} from '@/form/config/active_user'
import {
    serveyTable,
    activeTable
} from '@/table/config/active_user'
export default {
    name: 'active_user',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            activeName: '1',
            /* 概况 */
            survey_config: serveyForm(),
            survey_Msg: serveyTable(),
            surveyHtml: {
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
            _self.$res.postData(_self, '/User/active_user_statistics_info/', arg[0]).then((res) => {
                _self.survey_Msg.data = [];
                _self.survey_Msg.data = res;
                _self.loading = false;
                _self.$message.success('查询成功');
            });
        },
        surveyMessage(text) {
            this.survey_Msg.data = tableSearch(text, this.survey_Msg.data);
        },
        /* 活跃列表 */
        active_submit(arg) {
            let _self = this;
            _self.loading = true;
            _self.$res.postData(_self, '/User/query_active_user/', arg[0]).then((res) => {
                _self.active_Msg.data = [];
                _self.active_Msg.data = res;
                _self.loading = false;
                _self.$message.success('查询成功');
            });
        },
        activeMessage(text) {
            this.active_Msg.data = tableSearch(text, this.active_Msg.data);
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        let _self = this;
        /* 概况 */
        _self.$res.postData(_self, '/User/active_user_statistics_info/', {
            query_start_time: _self.surveyHtml.query_start_time,
            query_end_time: _self.surveyHtml.query_end_time
        }).then((res) => {
            _self.survey_Msg.data = [];
            _self.survey_Msg.data = res;
        });
        /* 活跃列表 */
        _self.$res.postData(_self, '/User/query_active_user/', {
            query_start_time: _self.activeHtml.query_start_time,
            query_end_time: _self.activeHtml.query_end_time
        }).then((res) => {
            _self.active_Msg.data = [];
            _self.active_Msg.data = res;
        });
    }
}

</script>
