<template>
    <div id="container">
        <h1 class="h1-title">走马灯</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="走马灯" name="0">
                    <h1 class="h1-title">消息内容：</h1>
                    <editor v-on:editorcontent="getEditorContent" :getcontext="getcontext"></editor>
                    <br />
                    <el-form ref="form" :inline="false" label-width="80px">
                        <el-col :span="6">
                            <el-form-item label="标签：">
                                <el-select v-model="value8" filterable placeholder="输入可搜索" v-on:change="getSingleLabel">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-form>
                    <ele-form :config="notice_config" v-on:receive="notice_submit" :defaultdata="noticeDefaultHtml" style="z-index: 9999;"></ele-form>
                </el-collapse-item>
                <el-collapse-item title="走马灯列表" name="1">
                    <ele-form :config="notice_list_config" v-on:receive="notice_list_submit" :defaultdata="noticeListHtml"></ele-form>
                    <table-option :parent-message="notice_msg" v-on:message="notice_Message"></table-option>
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
        noticeForm,
        noticeListForm
    } from '@/form/config/notice'
    import {
        noticeTable
    } from '@/table/config/notice'
    import editor from '@/components/libs/editor'
    export default {
        name: 'notice',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                value8: '',
                options: [{
                    value: 'vip1',
                    label: 'vip1'
                }, {
                    value: 'vip2',
                    label: 'vip2'
                }, {
                    value: 'vip3',
                    label: 'vip3'
                }, {
                    value: 'vip4',
                    label: 'vip4'
                }, {
                    value: 'vip5',
                    label: 'vip5'
                }, {
                    value: 'vip6',
                    label: 'vip6'
                }, {
                    value: 'vip7',
                    label: 'vip7'
                }, {
                    value: 'vip8',
                    label: 'vip8'
                }, {
                    value: 'vip9',
                    label: 'vip9'
                }, {
                    value: 'vp10',
                    label: 'vp10'
                }, {
                    value: 'vp11',
                    label: 'vp11'
                }, {
                    value: 'vp12',
                    label: 'vp12'
                }, {
                    value: 'vp13',
                    label: 'vp13'
                }, {
                    value: 'vp14',
                    label: 'vp14'
                }, {
                    value: 'gold',
                    label: '金币'
                }, {
                    value: 'zuan',
                    label: '钻石'
                }],
                noticeDefault: '',
                activeName: ['0'],
                notice_config: noticeForm(),
                noticeDefaultHtml: {
                    showPlace: '',
                    intervalTime: '10',
                },
                notice_list_config: noticeListForm(),
                notice_msg: noticeTable(),
                noticeListHtml: {
                    showPlace: '0',
                    query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 29),
                    query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                },
                getcontext: false,
                editorHtml: '',
                biaoqianHtml: '',
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            /* 推送走马灯 */
            getSingleLabel(val) {
                let info = '/:' + val;
                this.biaoqianHtml = info;
                $('#editorElem').find('.w-e-text-container').find('.w-e-text p').append(info);
            },
            notice_submit(arg) {
                this.getcontext = true;
                this.editorHtml = arg;
            },
            getEditorContent(html) {
                this.getcontext = false;
                let _self = this;
                let showPlace = this.editorHtml[0].showPlace;
                if (showPlace == 0) {
                    _self.$res.postData(_self, '/Notice/push_notification/', {
                        jumpID: this.editorHtml[0].jumpID, //前往场景
                        showPlace: this.editorHtml[0].showPlace, //显示场合
                        gameKindID: '', //选择游戏
                        gameServerID: '',//游戏房间
                        startTime: this.editorHtml[0].startTime,//开始时间
                        endTime: this.editorHtml[0].endTime,//结束时间
                        intervalTime: this.editorHtml[0].intervalTime,//间隔时间
                        message: html, //邮件内容
                        sendUserName: localStorage.getItem('Username'),//发送人
                        tag: this.biaoqianHtml, //标签
                        channel: JSON.stringify(this.editorHtml[0].channel_id), //渠道
                        accountType: JSON.stringify(this.editorHtml[0].account_id), //帐号类型
                        showID: this.editorHtml[0].UserID, //可见玩家ID
                        payArea: this.editorHtml[0].payArea, //充值区间
                        signTimeStart: this.editorHtml[0].query_start_time, //注册开始时间
                        signTimeEnd:　this.editorHtml[0].query_end_time, //注册结束时间
                        rollTime: this.editorHtml[0].rollTime, //滚动时长
                    }).then((response) => {
                        if (response.code == 0) {
                            _self.$message.success('推送成功');
                        } else {
                            _self.$message.error('推送失败');
                        }
                    });
                } else if (showPlace == 1) {
                    _self.$res.postData(_self, '/Notice/push_notification/', {
                        jumpID: this.editorHtml[0].jumpID,
                        showPlace: this.editorHtml[0].showPlace,
                        gameKindID: JSON.stringify(this.editorHtml[0].gameKindID),
                        gameServerID: '',
                        startTime: this.editorHtml[0].startTime,
                        endTime: this.editorHtml[0].endTime,
                        intervalTime: this.editorHtml[0].intervalTime,
                        message: html,
                        sendUserName: localStorage.getItem('Username'),
                        tag: this.biaoqianHtml, //标签
                        channel: JSON.stringify(this.editorHtml[0].channel_id), //渠道
                        accountType: JSON.this.editorHtml[0].account_id, //帐号类型
                        showID: this.editorHtml[0].UserID, //可见玩家ID
                        payArea: this.editorHtml[0].payArea, //充值区间
                        signTimeStart: this.editorHtml[0].query_start_time, //注册开始时间
                        signTimeEnd:　this.editorHtml[0].query_end_time, //注册结束时间
                        rollTime: this.editorHtml[0].rollTime, //滚动时长
                    }).then((response) => {
                        if (response.code == 0) {
                            _self.$message.success('推送成功');
                        } else {
                            _self.$message.error('推送失败');
                        }
                    });
                } else if (showPlace == 2) {
                    _self.$res.postData(_self, '/Notice/push_notification/', {
                        jumpID: this.editorHtml[0].jumpID,
                        showPlace: this.editorHtml[0].showPlace,
                        gameKindID: JSON.stringify(this.editorHtml[0].gameKindID),
                        gameServerID: JSON.stringify(this.editorHtml[0].gameServerID),
                        startTime: this.editorHtml[0].startTime,
                        endTime: this.editorHtml[0].endTime,
                        intervalTime: this.editorHtml[0].intervalTime,
                        message: html,
                        sendUserName: localStorage.getItem('Username'),
                        tag: this.biaoqianHtml, //标签
                        channel: JSON.stringify(this.editorHtml[0].channel_id), //渠道
                        accountType: JSON.stringify(this.editorHtml[0].account_id), //帐号类型
                        showID: this.editorHtml[0].UserID, //可见玩家ID
                        payArea: this.editorHtml[0].payArea, //充值区间
                        signTimeStart: this.editorHtml[0].query_start_time, //注册开始时间
                        signTimeEnd:　this.editorHtml[0].query_end_time, //注册结束时间
                        rollTime: this.editorHtml[0].rollTime, //滚动时长
                    }).then((response) => {
                        if (response.code == 0) {
                            _self.$message.success('推送成功');
                        } else {
                            _self.$message.error('推送失败');
                        }
                    });
                }
            },
            /* 走马灯列表 */
            //查询
            notice_list_submit(arg) {
                this.$res.postData(this, '/Notice/query_notice_list/', arg[0]).then((response) => {
                    this.notice_msg.data = [];
                    this.notice_msg.data = response;
                    this.$message.success('查询成功');
                });
            },
            /* 搜索 */
            notice_Message(text) {
                this.notice_msg.data = tableSearch(text, this.notice_msg.data);
            },
        },
        /* 引入组件放在components */
        components: {
            editor
        },
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            /* 前往场景 */
            let _self = this;
            let baseNoticeConfig = noticeForm();
            if (!window.changjing) {
                let changjing_list = new Promise((resolve, reject) => {
                    _self.$res.getSingleData(_self, '/Notice/init_notice/').then((response) => {
                        if (response) {
                            resolve(response);
                        } else {
                            reject('error');
                        }
                    });
                });
                changjing_list.then((response) => {
                    window.changjing = response;
                    fillChangjing(response);
                }, () => {
                    _self.$message.error('获取前往场景列表失败');
                });
            } else {
                fillChangjing(window.changjing);
            }
            function fillChangjing(response) {
                /* 前往场景 */
                response.Go_bound.map((val, i) => {
                    if (i >= 0) {
                        baseNoticeConfig.formEle[0].options.push({
                            value: val.event_id,
                            label: val.event_name
                        });
                    }
                });
                /* 游戏选择 */
                response.Change_game.map((k, v) => {
                    if (v >= 0) {
                        baseNoticeConfig.formEle[2].options.push({
                            value: k.GameID,
                            label: k.KindName
                        });
                    }
                });
                /* 游戏房间 */
                response.Game_room.map((k1, v1) => {
                    if (v1 >= 0) {
                        baseNoticeConfig.formEle[3].options.push({
                            value: k1.ServerID,
                            label: k1.ServerName + '-' + k1.ServerID
                        });
                    }
                });
                _self.notice_config = _self.$res.deepClone(baseNoticeConfig);
            }
            /* 走马灯列表 - 查询 */
            this.$res.postData(this, '/Notice/query_notice_list/', {
                query_start_time: this.noticeListHtml.query_start_time,
                query_end_time: this.noticeListHtml.query_end_time
            }).then((response) => {
                this.notice_msg.data = [];
                this.notice_msg.data = response;
            });
        }
    }
</script>
