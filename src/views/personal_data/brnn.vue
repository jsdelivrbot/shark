<template>
    <div :userid="open_user_id">
        <el-tabs v-model="gameCollaspe" type="border-card">
            <el-tab-pane label="单局记录" name="1">
                <!-- <ele-form :config="brnn_single_config" v-on:receive="brnn_single_submit" :defaultdata="brnnSingleHtml"></ele-form>
                <table-option :parent-message="brnn_single_Msg"></table-option> -->
            </el-tab-pane>
            <el-tab-pane label="盈亏曲线" name="2">盈亏曲线</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
//引入表格搜索
import {
    tableSearch
} from '@/libs/tableSearch'
import {
    personalBrnnSingleForm
} from '@/form/config/brnn'
import {
    personalBrnnSingleTable
} from '@/table/config/brnn'
export default {
    name: 'brnn',
    data() {
        return {
            gameCollaspe: '1',
            brnn_single_config: personalBrnnSingleForm(),
            brnn_single_Msg: personalBrnnSingleTable(),
            brnnSingleHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
        }
    },
    mounted() {

    },
    methods: {
        brnn_single_submit(arg) {
            // this.$res.postData(this, '/Personal/brnn_user_info/', {
            //     open_user_id: this.userid,
            //     KindID: 10005,
            //     query_start_time: arg[0].query_start_time,
            //     query_end_time: arg[0].query_end_time
            // }).then((res) => {
            //     this.brnn_single_Msg.data = [];
            //     this.brnn_single_Msg.data = res;
            // });
        }
    },
    components: {},
    props: ['userid'],
    computed: {
        open_user_id() {
            return this.userid;
        }
    },
    created() {
        // this.$res.postData(this, '/Personal/brnn_user_info/', {
        //     open_user_id: this.userid,
        //     KindID: 10005,
        //     query_start_time: this.brnnSingleHtml.query_start_time,
        //     query_end_time: this.brnnSingleHtml.query_end_time
        // }).then((res) => {
        //     this.brnn_single_Msg.data = [];
        //     this.brnn_single_Msg.data = res;
        // });
    }
}

</script>
