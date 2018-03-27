<template>
    <div id="container">
        <h1 class="h1-title">系统邮件</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="新增邮件" name="0">
                    <!--新建邮件表单-->
                    <el-row>
                        <el-col :span="24">
                            <ele-form :config="createMailConfig" :eventname="createMailEvent" v-on:receive="createMailAction"></ele-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <attr-and-item v-on:attrAndItem="refreshAttrAndItem"></attr-and-item>
                        </el-col>
                    </el-row>
                    <br>
                    <el-row>
                        <el-col :offset="18" :span="6">
                            <el-button @click="createMail" type="success" plain>发 送</el-button>
                        </el-col>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item title="邮件列表" name="1">
                    <!--查询表单-->
                    <el-row>
                        <el-col :span="24">
                            <ele-form :config="queryMailConfig" v-on:receive="queryMailFormData" :defaultdata="mailListHtml">
                            </ele-form>
                        </el-col>
                    </el-row>
                    <!--表格区域-->
                    <el-row>
                        <el-col :span="24">
                            <table-option :parent-message="tableMsg" v-on:message="mailMessage" v-on:outputrow="mailRow">
                            </table-option>
                        </el-col>
                    </el-row>
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
    createMailForm,
    queryMailForm
} from '@/form/config/mail'
import {
    mailTable
} from '@/table/config/mail'
//引入资源和道具配置组件
import attrAndItem from '@/components/libs/attrAndItem'
export default {
    name: 'mail',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            activeName: '1',
            /* 发送邮件 */
            createMailConfig: createMailForm(),
            createMailEvent: '',
            createAttrAndItem: [{}, {}],
            /* 邮件列表 */
            queryMailConfig: queryMailForm(),
            tableMsg: mailTable(),
            mailListHtml: {
                IsAll: '1',
                IsRead: '0',
                IsGot: '0',
                send_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 29),
                send_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        //发邮件操作
        createMailAction(arg) {
            let _self = this;
            _self.createMailEvent = '';
            //发送邮件接口操作
            let param = _self.$res.deepClone(arg[0]);
            param.attachment = JSON.stringify(_self.createAttrAndItem);
            _self.$res.postData(_self, '/Manu/send_mail/', param).then((response) => {
                if (response.code == 0) {
                    _self.$message.success('邮件发送成功');
                } else {
                    _self.$message.error('邮件发送失败');
                }
            });
        },
        refreshAttrAndItem(arg) {
            this.createAttrAndItem = arg;
        },
        createMail() {
            let _self = this;
            _self.createMailEvent = 'create';
            setTimeout(() => {
                _self.createMailEvent = '';
            }, 100);
        },
        /* 邮件列表 */
        queryMailFormData(arg) {
            this.$res.postData(this, '/Manu/get_mail_list/', arg[0]).then((response) => {
                this.tableMsg.data = [];
                this.tableMsg.data = response;
                this.$message.success('查询成功');
            });
        },
        mailMessage(text) {
            this.tableMsg.data = tableSearch(text, this.tableMsg.data);
        },
        mailRow(arg) {
            this.$message.success('操作');
        },
    },
    /* 引入组件放在components */
    components: {
        attrAndItem
    },
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        /* 邮件列表 */
        this.$res.postData(this, '/Manu/get_mail_list/', {
            send_start_time: this.mailListHtml.send_start_time,
            send_end_time: this.mailListHtml.send_end_time,
            IsAll: '1',
            IsRead: '0',
            IsGot: '0',
        }).then((response) => {
            this.tableMsg.data = [];
            this.tableMsg.data = response;
            this.$message.success('查询成功');
        });
    }
}

</script>
