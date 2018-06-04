<template>
    <div id="container">
        <h1 class="h1-title">渠道分析</h1>
        <div class="cms-content">
            <ele-form :config="channel_config" v-on:receive="channel_submit" :defaultdata="defaultHtml"></ele-form>
            <collapse-table-option :parent-message="channel_Msg" v-loading="loading" element-loading-text="拼命加载中"></collapse-table-option>
        </div>
    </div>
</template>
<script>
import {
    channleAnalyzeForm
} from "@/form/config/channel_analyze"
import {
    channelAnalyzeTable
} from "@/table/config/channel_analyze";
export default {
    name: 'channel_analyze',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            channel_config: channleAnalyzeForm(),
            channel_Msg: channelAnalyzeTable(),
            defaultHtml: {
                date_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 29),
                date_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1)
            }
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 查询 */
        channel_submit(arg) {
            this.loading = true;
            this.$res.postData(this, '/Channel/get_visit_download_info/', arg[0]).then((response) => {
                let data = [],
                    ldy_data = [],
                    ldy_dict = {};
                response.forEach((val) => {
                    data.push(this.$res.deepClone(val));
                    if (ldy_dict[val.channel_id]) {
                        ldy_data.map((obj, i, row) => {
                            if (obj.channel_id === val.channel_id) {
                                row[i].viewCount = row[i].viewCount + val.viewCount;
                                row[i].downloadCount = row[i].downloadCount + val.downloadCount;
                            }
                        });
                    } else {
                        ldy_data.push(this.$res.deepClone(val));
                        ldy_dict[val.channel_id] = '1';
                    }
                });
                ldy_data = ldy_data.map((obj) => {
                    let res = obj;
                    res.children = [];
                    data.map((val) => {
                        if (obj.channel_id === val.channel_id) {
                            res.children.push(val);
                        }
                    });
                    return res;
                });
                this.channel_Msg.data = [];
                this.channel_Msg.data = ldy_data;
                this.loading = false;
                this.$message.success('查询成功');
            });
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        let _self = this;
        let baseChannleConfig = channleAnalyzeForm();
        if (!window.channle_info) {
            let channel_list = new Promise((resolve, reject) => {
                _self.$res.getSingleData(_self, '/Channel/get_channel/').then((response) => {
                    if (response) {
                        resolve(response);
                    } else {
                        reject('error');
                    }
                });
            });
            channel_list.then((response) => {
                window.channle_info = response;
                fillChannel(response);
            }, () => {
                _self.$message.error('获取推广渠道失败');
            });
        } else {
            fillChannel(window.channle_info);
        }

        function fillChannel(response) {
            response.map((val, i) => {
                if (i >= 0) {
                    baseChannleConfig.formEle[1].options.push({
                        value: val.channel_id,
                        label: val.channel_name
                    });
                }
            });
            _self.channel_config = _self.$res.deepClone(baseChannleConfig);
        }

        /* 自动查询 */
        _self.loading = true;
        _self.$res.postData(_self, '/Channel/get_visit_download_info/', {
            date_start_time: _self.defaultHtml.date_start_time,
            date_end_time: _self.defaultHtml.date_end_time
        }).then((response) => {
            let data = [],
                ldy_data = [],
                ldy_dict = {};
            response.forEach((val) => {
                data.push(_self.$res.deepClone(val));
                if (ldy_dict[val.channel_id]) {
                    ldy_data.map((obj, i, row) => {
                        if (obj.channel_id === val.channel_id) {
                            row[i].viewCount = row[i].viewCount + val.viewCount;
                            row[i].downloadCount = row[i].downloadCount + val.downloadCount;
                        }
                    });
                } else {
                    ldy_data.push(_self.$res.deepClone(val));
                    ldy_dict[val.channel_id] = '1';
                }
            });
            ldy_data = ldy_data.map((obj) => {
                let res = obj;
                res.children = [];
                data.map((val) => {
                    if (obj.channel_id === val.channel_id) {
                        res.children.push(val);
                    }
                });
                return res;
            });
            _self.channel_Msg.data = [];
            _self.channel_Msg.data = ldy_data;
            _self.loading = false;
            _self.$message.success('查询成功');
        });
    }
}

</script>
