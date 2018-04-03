<template>
    <div id="container">
        <h1 class="h1-title">走马灯</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="走马灯" name="0">
                    <editor v-on:editorcontent="getEditorContent" :getcontext="getcontext"></editor>
                    <br />
                    <ele-form :config="notice_config" v-on:receive="notice_submit" :defaultdata="noticeDefaultHtml"></ele-form>
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
                noticeDefault: '',
                activeName: '',
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
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            /* 推送走马灯 */
            notice_submit(arg) {
                this.getcontext = true;
                this.editorHtml = arg;
                // let _self = this;
                // let showPlace = arg[0].showPlace;
                // if (showPlace == 0) {
                //     _self.$res.postData(_self, '/Manu/push_notification/', {
                //         jumpID: arg[0].jumpID,
                //         showPlace: arg[0].showPlace,
                //         gameKindID: '',
                //         gameServerID: '',
                //         startTime: arg[0].startTime,
                //         endTime: arg[0].endTime,
                //         intervalTime: arg[0].intervalTime,
                //         message: arg[0].message,
                //         sendUserName: localStorage.getItem('Username'),
                //     }).then((response) => {
                //         if (response.code == 0) {
                //             _self.$message.success('推送成功');
                //         } else {
                //             _self.$message.error('推送失败');
                //         }
                //     });
                // } else if (showPlace == 1) {
                //     _self.$res.postData(_self, '/Manu/push_notification/', {
                //         jumpID: arg[0].jumpID,
                //         showPlace: arg[0].showPlace,
                //         gameKindID: JSON.stringify(arg[0].gameKindID),
                //         gameServerID: '',
                //         startTime: arg[0].startTime,
                //         endTime: arg[0].endTime,
                //         intervalTime: arg[0].intervalTime,
                //         message: arg[0].message,
                //         sendUserName: localStorage.getItem('Username'),
                //     }).then((response) => {
                //         if (response.code == 0) {
                //             _self.$message.success('推送成功');
                //         } else {
                //             _self.$message.error('推送失败');
                //         }
                //     });
                // } else if (showPlace == 2) {
                //     _self.$res.postData(_self, '/Manu/push_notification/', {
                //         jumpID: arg[0].jumpID,
                //         showPlace: arg[0].showPlace,
                //         gameKindID: JSON.stringify(arg[0].gameKindID),
                //         gameServerID: JSON.stringify(arg[0].gameServerID),
                //         startTime: arg[0].startTime,
                //         endTime: arg[0].endTime,
                //         intervalTime: arg[0].intervalTime,
                //         message: arg[0].message,
                //         sendUserName: localStorage.getItem('Username'),
                //     }).then((response) => {
                //         if (response.code == 0) {
                //             _self.$message.success('推送成功');
                //         } else {
                //             _self.$message.error('推送失败');
                //         }
                //     });
                // }
            },
            /* 走马灯列表 */
            //查询
            notice_list_submit(arg) {
                this.$res.postData(this, '/Manu/get_notice_list/', arg[0]).then((response) => {
                    this.notice_msg.data = [];
                    this.notice_msg.data = response;
                    this.$message.success('查询成功');
                });
            },
            /* 搜索 */
            notice_Message(text) {
                this.notice_msg.data = tableSearch(text, this.notice_msg.data);
            },
            getEditorContent(html) {
                this.getcontext = false;
                let _self = this;
                let showPlace = this.editorHtml[0].showPlace;
                if (showPlace == 0) {
                    _self.$res.postData(_self, '/Manu/push_notification/', {
                        jumpID: this.editorHtml[0].jumpID,
                        showPlace: this.editorHtml[0].showPlace,
                        gameKindID: '',
                        gameServerID: '',
                        startTime: this.editorHtml[0].startTime,
                        endTime: this.editorHtml[0].endTime,
                        intervalTime: this.editorHtml[0].intervalTime,
                        message: html,
                        sendUserName: localStorage.getItem('Username'),
                    }).then((response) => {
                        if (response.code == 0) {
                            _self.$message.success('推送成功');
                        } else {
                            _self.$message.error('推送失败');
                        }
                    });
                } else if (showPlace == 1) {
                    _self.$res.postData(_self, '/Manu/push_notification/', {
                        jumpID: this.editorHtml[0].jumpID,
                        showPlace: this.editorHtml[0].showPlace,
                        gameKindID: JSON.stringify(this.editorHtml[0].gameKindID),
                        gameServerID: '',
                        startTime: this.editorHtml[0].startTime,
                        endTime: this.editorHtml[0].endTime,
                        intervalTime: this.editorHtml[0].intervalTime,
                        message: html,
                        sendUserName: localStorage.getItem('Username'),
                    }).then((response) => {
                        if (response.code == 0) {
                            _self.$message.success('推送成功');
                        } else {
                            _self.$message.error('推送失败');
                        }
                    });
                } else if (showPlace == 2) {
                    _self.$res.postData(_self, '/Manu/push_notification/', {
                        jumpID: this.editorHtml[0].jumpID,
                        showPlace: this.editorHtml[0].showPlace,
                        gameKindID: JSON.stringify(this.editorHtml[0].gameKindID),
                        gameServerID: JSON.stringify(this.editorHtml[0].gameServerID),
                        startTime: this.editorHtml[0].startTime,
                        endTime: this.editorHtml[0].endTime,
                        intervalTime: this.editorHtml[0].intervalTime,
                        message: html,
                        sendUserName: localStorage.getItem('Username'),
                    }).then((response) => {
                        if (response.code == 0) {
                            _self.$message.success('推送成功');
                        } else {
                            _self.$message.error('推送失败');
                        }
                    });
                }
            }
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
                    _self.$res.getSingleData(_self, '/Manu/init_notice/').then((response) => {
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
            this.$res.postData(this, '/Manu/get_notice_list/', {
                query_start_time: this.noticeListHtml.query_start_time,
                query_end_time: this.noticeListHtml.query_end_time
            }).then((response) => {
                this.notice_msg.data = [];
                this.notice_msg.data = response;
            });
        }
    }
</script>
