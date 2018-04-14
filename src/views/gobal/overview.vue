<template>
    <div id="container">
        <h1 class="h1-title">游戏概况</h1>
        <div class="cms-content">
            <el-button type="success" plain @click="zhichong_btn">直充订单（创建）</el-button>
            <el-button type="success" plain @click="kami_btn">卡密订单（创建）</el-button>
            <el-button type="success" plain @click="jiguang_btn">极光推送SDK</el-button>
            <el-button type="success" plain @click="xml_btn">解析XML</el-button>
            <el-button type="success" plain @click="pay_btn">alipay</el-button>
            <el-button type="success" plain @click="wxpay_btn">wxpay</el-button>
            <el-button type="success" plain @click="month_btn">至尊月卡</el-button>
            <el-button type="success" plain @click="global_btn">全局统计</el-button>
            <el-button type="success" plain @click="exchange_btn">兑换记录</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'overview',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {}
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            exchange_btn() {
                this.$res.getSingleData(this, '/Playerinfo/query_order_info/', {
                    params: {
                        uid: 118
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            global_btn() {
                this.$res.getSingleData(this, '/Playerinfo/query_user_global_info/', {
                    params: {
                        uid: 118
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            month_btn() {
                this.$res.getSingleData(this, '/Card/buy_month_card/', {
                    params: {
                        uid: 118,
                        sys: 'ios',
                        chargeid: 5010,
                        platform: 'zfb'
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            zhichong_btn() {
                this.$res.getSingleData(this, '/Recharge/Test_Recharge/').then((response) => {
                    console.log(response);
                });
            },
            kami_btn() {
                this.$res.postData(this, '/Recharge/Test_kami/').then((response) => {
                    console.log(response);
                });
            },
            jiguang_btn() {
                this.$res.postData(this, '/Jpush/push_id/').then((response) => {
                    this.$message.success('极光推送SDK');
                });
            },
            xml_btn() {
                this.$res.postData(this, '/Recharge/xml/', {
                    xml: "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\r\n<ctuport>\r\n<result>0000<\/result>\r\n<content>\r\n<cardno>170001038341<\/cardno>\r\n<cardpwd>100336813141<\/cardpwd>\r\n<expiredate>2018-07-28 23:59:59<\/expiredate>\r\n<\/content>\r\n<\/ctuport>\r\n"
                }).then((response) => {
                    this.$message.success('success');
                });
            },
            pay_btn() {
                this.$res.getSingleData(this, '/Wechatalipay/pay/', {
                    params: {
                        uid: 125,
                        sys: 'android',
                        chargeid: 1001,
                        platform: 'zfb'
                    }
                }).then((response) => {
                    this.$message.success('支付宝支付');
                });
            },
            wxpay_btn() {
                this.$res.getSingleData(this, '/Wechatalipay/pay/', {
                    params: {
                        uid: 890,
                        sys: 'ios',
                        chargeid: 1012,
                        platform: 'wx'
                    }
                }).then((response) => {
                    console.log(response);
                    this.$message.success('微信支付');
                });
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {}
    }
</script>
