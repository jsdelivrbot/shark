<template>
    <div id="container">
        <h1 class="h1-title">道具购买记录</h1>
        <div class="cms-content">
            <ele-form :config="buyItem_config" v-on:receive="buyItem_submit" :defaultdata="itemHtml"></ele-form>
            <collapse-table-option :parent-message="buyItem_Msg" v-on:message="buyItemMessage" v-loading="loading" element-loading-text="拼命加载中"></collapse-table-option>
        </div>
    </div>
</template>
<script>
//引入表格搜索
import {
    tableSearch
} from '@/libs/tableSearch'
import {
    buyItemForm
} from '@/form/config/buy_item'
import {
    buyItemTable
} from '@/table/config/buy_item'
export default {
    name: 'buy_item',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            buyItem_config: buyItemForm(),
            buyItem_Msg: buyItemTable(),
            itemHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 29),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            }
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        buyItem_submit(arg) {
            this.$res.postData(this, '/Pay/buy_item_record/', arg[0]).then((response) => {
                let data = [],
                    item_data = [],
                    item_dict = {};
                response.forEach((val) => {
                    data.push(this.$res.deepClone(val));
                    if (item_dict[val.UserID]) {
                        item_data.map((obj, i, row) => {
                            if (obj.UserID == val.UserID) {
                                row[i].Gold = row[i].Gold + val.Gold;
                                row[i].UserMedal = row[i].UserMedal + val.UserMedal;
                                row[i].PropertyCount = row[i].PropertyCount + val.PropertyCount;
                                row[i].BuyGold = row[i].BuyGold + val.BuyGold;
                                row[i].BuyUserMedal = row[i].BuyUserMedal + val.BuyUserMedal;
                            }
                        });
                    } else {
                        item_data.push(this.$res.deepClone(val));
                        item_dict[val.UserID] = '1';
                    }
                });

                item_data = item_data.map((obj) => {
                    let res = obj;
                    res.children = [];
                    data.map((val) => {
                        if (obj.UserID == val.UserID) {
                            res.children.push(val);
                        }
                    });
                    return res;
                });
                this.buyItem_Msg.data = [];
                this.buyItem_Msg.data = item_data;
                this.$message.success('查询成功');
            });
        },
        /* 搜索功能 */
        buyItemMessage(text) {
            this.buyItem_Msg.data = tableSearch(text, this.buyItem_Msg.data);
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        this.$res.postData(this, '/Pay/buy_item_record/', {
            query_start_time: this.itemHtml.query_start_time,
            query_end_time: this.itemHtml.query_end_time,
        }).then((response) => {
            let data = [],
                item_data = [],
                item_dict = {};
            response.forEach((val) => {
                data.push(this.$res.deepClone(val));
                if (item_dict[val.UserID]) {
                    item_data.map((obj, i, row) => {
                        if (obj.UserID == val.UserID) {
                            row[i].Gold = row[i].Gold + val.Gold;
                            row[i].UserMedal = row[i].UserMedal + val.UserMedal;
                            row[i].PropertyCount = row[i].PropertyCount + val.PropertyCount;
                            row[i].BuyGold = row[i].BuyGold + val.BuyGold;
                            row[i].BuyUserMedal = row[i].BuyUserMedal + val.BuyUserMedal;
                        }
                    });
                } else {
                    item_data.push(this.$res.deepClone(val));
                    item_dict[val.UserID] = '1';
                }
            });

            item_data = item_data.map((obj) => {
                let res = obj;
                res.children = [];
                data.map((val) => {
                    if (obj.UserID == val.UserID) {
                        res.children.push(val);
                    }
                });
                return res;
            });
            this.buyItem_Msg.data = [];
            this.buyItem_Msg.data = item_data;
            this.$message.success('查询成功');
        });
    }
}

</script>
