<template>
<div id="container">
    <h1 class="h1-title">兑换系统数值表</h1>
    <div class="cms-content">
        <el-button type="success" plain @click.native="numeric_table_btn">刷 新</el-button>
        <table-option :parent-message="numeric_msg" v-on:message="numeric_Message" v-on:outputrow="numericRow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
    </div>
    <el-dialog title="编辑" width="98%" :visible.sync="numeric_table_dialog">
        <ele-form :config="numeric_table_dialog_config" v-on:receive="numeric_table_dialog_submit" :eventname="numeric_table_dialog_event" :defaultdata="dialogHtml"></ele-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="numeric_table_dialog = false">取 消</el-button>
            <el-button type="primary" @click="numeric_table_dialog_name">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
//引入表格搜索
import {
    tableSearch
} from '@/libs/tableSearch'
import {
    numericTableDialogForm
} from '@/form/config/numeric_table'
import {
    numericTable
} from '@/table/config/numeric_table'
export default {
    name: 'numeric_table',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            numeric_msg: numericTable(),
            numeric_table_dialog: false,
            numeric_table_dialog_config: numericTableDialogForm(),
            numeric_table_dialog_event: false,
            dialogHtml: {},
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        numeric_table_btn() {
            this.loading = true;
            this.$res.postData(this, '/Numerictable/query_numeric_table_info/').then((res) => {
                this.numeric_msg.data = [];
                this.numeric_msg.data = res;
                this.loading = false;
                this.$message.success('刷新成功');
            });
        },
        numeric_Message(text) {
            this.numeric_msg.data = tableSearch(text, this.numeric_msg.data);
        },
        numericRow(arg) {
            switch (arg[2]) {
                case 'edit':
                    /* 编辑 */
                    this.numeric_table_dialog = true;
                    this.dialogHtml = arg[1];
                    break;
                case 'delete':
                    /* 删除 */
                    this.$message.error('删除功能暂时不实现，请使用编辑功能！');
                    break;
            }
        },
        numeric_table_dialog_submit(arg) {
            console.log(arg[0]);
            this.numeric_table_dialog_event = false;
            this.$res.postData(this, '/Numerictable/edit_numeric_table_info/', arg[0]).then((response) => {
                if (response.code == 0) {
                    this.$res.postData(this, '/Numerictable/query_numeric_table_info/').then((res) => {
                        this.numeric_msg.data = [];
                        this.numeric_msg.data = res;
                        this.numeric_table_dialog = false;
                        this.$message.success(response.msg);
                    });
                } else {
                    this.$message.error(response.msg);
                }
            });
        },
        numeric_table_dialog_name() {
            this.numeric_table_dialog_event = 'submitEvent';
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        this.$res.postData(this, '/Numerictable/query_numeric_table_info/').then((res) => {
            this.numeric_msg.data = [];
            this.numeric_msg.data = res;
        });
    }
}
</script>
