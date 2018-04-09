<template>
    <div id="container">
        <h1 class="h1-title">短信验证码</h1>
        <div class="cms-content">
            <ele-form :config="sms_config" v-on:receive="sms_submit"></ele-form>
            <ele-form :config="smsCode_config" v-on:receive="smsCode_submit"></ele-form>
            <el-button type="primary" plain @click="five_step">5步兑话费</el-button>
            <el-button type="primary" plain @click="five_step_reward">5步兑话费（领取奖励）</el-button>
            <el-button type="primary" plain @click="five_step_unlock">5步兑话费（解锁步骤）</el-button>
            <el-button type="success" plain @click="seven_day_happy">七天大乐透</el-button>
            <el-button type="success" plain @click="luckDraw">七天大乐透（随机数字）</el-button>
            <el-button type="success" plain @click="get_7day_reward">七天大乐透（领取）</el-button>
            <el-button type="success" plain @click="get_item">获取道具表</el-button>
            <el-button type="success" plain @click="moon_card">至尊月卡（查询）</el-button>
            <el-button type="success" plain @click="moon_card_reward">至尊月卡（奖励）</el-button>
            <el-button type="success" plain @click="buy_moon_card">至尊月卡（购买）</el-button>
            <el-button type="success" plain @click="test_recharge">测试充值话费</el-button>
            <el-button type="success" plain @click="level_query">等级领取奖励（查询）</el-button>
            <el-button type="success" plain @click="level_reward">等级领取奖励（领取）</el-button>
            <el-button type="success" plain @click="test_cun">存储过程（测试）</el-button>
            <el-button type="success" plain @click="task_query">任务系统（查询）</el-button>
            <el-button type="success" plain @click="task_reveive">任务系统（奖励）</el-button>
            <el-button type="success" plain @click="task_comReveive">组合礼包（奖励）</el-button>
        </div>
    </div>
</template>

<script>
    //引入表格搜索
    import {
        tableSearch
    } from '@/libs/tableSearch'
    import {
        smsForm,
        smsCodeForm
    } from '@/form/config/sms'
    export default {
        name: 'match_config',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                loading: false,
                sms_config: {},
                smsCode_config: {},
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            buy_moon_card() {
                this.$res.getSingleData(this, '/Mooncard/buy_moon_card/', {
                    params: {
                        uid: 118
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            task_comReveive() {
                this.$res.getSingleData(this, '/Task/user_combination_bag/', {
                    params: {
                        uid: 135,
                        packid: 1
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            task_reveive() {
                this.$res.getSingleData(this, '/Task/user_receive_bag/', {
                    params: {
                        uid: 135,
                        taskid: 1
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            test_cun() {
                this.$res.getSingleData(this, '/Clientapi/t1/', {
                    params: {
                        UserID: 118
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            task_query() {
                this.$res.getSingleData(this, '/Task/get_task_sys/', {
                    params: {
                        uid: 148
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            level_query() {
                this.$res.getSingleData(this, '/Clientapi/get_user_level/', {
                    params: {
                        uid: 508
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            level_reward() {
                this.$res.getSingleData(this, '/Clientapi/user_level_reward/', {
                    params: {
                        uid: 508,
                        level: 5,
                        type: 1
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            test_recharge() {
                this.$message.success('success');
                this.$res.getSingleData(this, '/Recharge/Test_Recharge/').then((response) => {
                    console.log(response);
                });
            },
            get_item() {
                this.$res.postData(this, '/Shop/query_shop_prop/').then((response) => {
                    console.log(response);
                });
            },
            five_step() {
                this.$res.getSingleData(this, '/Clientapi/get_five_step/', {
                    params: {
                        uid: 234
                    }
                }).then((res) => {
                    console.log(res);
                });
            },
            five_step_reward() {
                this.$res.getSingleData(this, '/Clientapi/tel_fare_exchange/', {
                    params: {
                        uid: 234
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            five_step_unlock() {
                this.$res.getSingleData(this, '/Clientapi/five_step_unlock/', {
                    params: {
                        uid: 234,
                        unlock: 1
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            moon_card() {
                this.$res.getSingleData(this, '/Mooncard/moon_card/', {
                    params: {
                        uid: 233
                    }
                }).then((res) => {
                    console.log(res);
                });
            },
            moon_card_reward() {
                this.$res.getSingleData(this, '/Mooncard/moon_card_reward/', {
                    params: {
                        uid: 233
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            seven_day_happy(arg) {
                this.$res.getSingleData(this, '/Clientapi/get_7day_happy/', {
                    params: {
                        uid: "102"
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            luckDraw(arg) {
                this.$res.postData(this, '/Clientapi/luck_draw_7day/', {
                    uid: 102,
                    day: 1
                }).then((response) => {
                    console.log(response);
                    // console.log('剩余抽奖次数：' + response[0].left_random_time);
                    // console.log('随机数字：' + response[0].n1);
                });
            },
            get_7day_reward(arg) {
                this.$res.getSingleData(this, '/Clientapi/get_7day_reward/', {
                    params: {
                        uid: 282,
                        gold: 1,
                        diamonds: 1
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            smsCode_submit(arg) {
                let param = arg[0];
                this.$res.getSingleData(this, '/Register/send_sms_login/', {
                    params: param
                }).then((response) => {
                    console.log(response);
                    this.$message.success('验证码发送成功');
                });
            },
            sms_submit(arg) {
                switch (arg[1]) {
                    case 'send':
                        let param = arg[0];
                        this.$res.postData(this, '/Register/account_register_sms/', param).then((response) => {
                            this.$message.success('短信验证码');
                        });
                        break;
                    case 'reg':
                        let paramss = arg[0];
                        this.$res.postData(this, '/Register/account_register/', paramss).then((response) => {
                            this.$message.success('发送成功');
                        });
                        break;
                }
            },
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            this.sms_config = smsForm();
            this.smsCode_config = smsCodeForm();
        }
    }
</script>


