<template>
<div id="container">
    <h1 class="h1-title">弹窗配置</h1>
    <div class="cms-content">
        <el-collapse v-model="activeName">
            <el-collapse-item title="配置" name="0">
                <ele-form :config="popup_config" v-on:receive="popup_submit" :defaltdata="popupHtml"></ele-form>
            </el-collapse-item>
            <el-collapse-item title="配置列表" name="1">
                <el-button type="success" plain @click.native="popup_btn">查 询</el-button>
                <table-option :parent-message="popup_msg" v-on:message="popup_Message" v-on:outputrow="popupRow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
            </el-collapse-item>
        </el-collapse>
    </div>
    <el-dialog title="编辑" width="90%" :visible.sync="popup_dialog">
        <ele-form :config="popup_dialog_config" v-on:receive="popup_dialog_submit" :eventname="popupdialogEvent" :defaultdata="popupdialogHtml"></ele-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="popup_dialog = false">取 消</el-button>
            <el-button type="primary" @click="popup_dialog_name">确 定</el-button>
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
    popupForm,
    popupDialotForm
} from '@/form/config/popup_config'
import {
    popupTable
} from '@/table/config/popup_config'
export default {
    name: 'popup_config',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            popup_config: popupForm(),
            popupHtml: {},
            popup_msg: popupTable(),
            popup_dialog: false,
            popup_dialog_config: popupDialotForm(),
            popupdialogEvent: false,
            popupdialogHtml: {},
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        popup_submit(arg) {
            let param = {
                SortID: arg[0].SortID,
                StartTime: arg[0].Starttime,
                EndTime: arg[0].Endtime,
                PopupType: arg[0].PopupType,
                PopupRate: arg[0].PopupRate,
                DeviceType: arg[0].DeviceType,
                AccountType: JSON.stringify(arg[0].AccountType),
                Recharge: arg[0].Recharge,
                PlayerID: arg[0].PlayerID,
                ImageUrl: arg[0].ImageUrl,
                LocationUrl: arg[0].LocationUrl,
                WebUrl: arg[0].WebUrl,
                PopupContent: arg[0].PopupContent,
                RegisterStartDate: arg[0].query_start_time,
                RegisterEndDate: arg[0].query_end_time,
                InsertName: localStorage.getItem('Username'),
            };
            this.$res.postData(this, '/Popupconfig/setup_popup_info/', param).then((response) => {
                if (response.code == 0) {
                    this.$message.success(response.msg);
                } else {
                    this.$message.error(response.msg);
                }
            });
        },
        /* 配置列表 */
        popup_btn() {
            this.loading = true;
            this.$res.postData(this, '/Popupconfig/query_popup_list/').then((response) => {
                this.popup_msg.data = [];
                this.popup_msg.data = response;
                this.loading = false;
                this.$message.success('查询成功');
            });
        },
        popup_Message(text) {
            this.popup_msg.data = tableSearch(text, this.popup_msg.data);
        },
        popupRow(arg) {
            switch (arg[2]) {
                case 'edit':
                    // 编辑
                    this.popup_dialog = true;
                    this.popupdialogHtml = arg[1];
                    break;
                case 'delete':
                    // 删除
                    this.$confirm('此操作将永久删除该文件, 是否继续?', '温馨提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        // 接口
                        this.$res.postData(this, '/Popupconfig/del_popup_info/', arg[1].SortID).then((res) => {
                            if (res.code == 0) {
                                this.$res.postData(this, '/Popupconfig/query_popup_list/').then((response) => {
                                    this.popup_msg.data = [];
                                    this.popup_msg.data = response;
                                    this.$message.success(res.msg);
                                });
                            } else {
                                this.$message.error(res.msg);
                            }
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    });
                    break;
            }
        },
        popup_dialog_submit(arg) {
            let param = {
                SortID: arg[0].SortID,
                StartTime: arg[0].Starttime,
                EndTime: arg[0].Endtime,
                PopupType: arg[0].PopupType,
                PopupRate: arg[0].PopupRate,
                DeviceType: arg[0].DeviceType,
                AccountType: JSON.stringify(arg[0].AccountType),
                Recharge: arg[0].Recharge,
                PlayerID: arg[0].PlayerID,
                ImageUrl: arg[0].ImageUrl,
                LocationUrl: arg[0].LocationUrl,
                WebUrl: arg[0].WebUrl,
                PopupContent: arg[0].PopupContent,
                RegisterStartDate: arg[0].query_start_time,
                RegisterEndDate: arg[0].query_end_time,
                InsertName: localStorage.getItem('Username'),
            };
            this.popupdialogEvent = false;
            this.$res.postData(this, '/Popupconfig/edit_popup_info/', param).then((res) => {
                if (res.code == 0) {
                    this.popup_dialog = false;
                    this.$res.postData(this, '/Popupconfig/query_popup_list/').then((response) => {
                        this.popup_msg.data = [];
                        this.popup_msg.data = response;
                        this.$message.success(res.msg);
                    });
                } else {
                    this.$message.error(res.msg);
                }
            })
        },
        popup_dialog_name() {
            this.popupdialogEvent = 'submitEvent';
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        this.$res.postData(this, '/Popupconfig/query_popup_list/').then((response) => {
            this.popup_msg.data = [];
            this.popup_msg.data = response;
        });
    }
}
</script>
