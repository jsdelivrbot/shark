<template>
    <div id="container">
        <h1 class="h1-title">产出消耗</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="资源产出消耗" name="0">
                    <ele-form :config="gold_product_config" v-on:receive="gold_product_submit" :defaultdata="goldProductHtml"></ele-form>
                    <table-option :parent-message="product_Msg" v-on:message="productMessage" v-on:pagedata="productChangePage" v-loading="productloading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
                <el-collapse-item title="道具产出消耗" name="1">
                    <ele-form :config="item_product_config" v-on:receive="item_product_submit" :defaultdata="itemProductHtml"></ele-form>
                    <table-option :parent-message="item_Msg" v-on:message="itemMessage" v-loading="productloading2" element-loading-text="拼命加载中"></table-option>
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
    goldProductForm,
    itemProductForm
} from '@/form/config/product_consume'
import {
    goldProductTable,
    itemProductTable
} from '@/table/config/product_consume'
export default {
    name: 'product_consume',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            activeName: ['1'],
            /* 资源产出消耗 */
            gold_product_config: goldProductForm(),
            goldProductHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 7),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
                KindID: 10004,
            },
            product_Msg: goldProductTable(),
            productloading: false,
            /* 道具产出消耗 */
            item_product_config: itemProductForm(),
            itemProductHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 7),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            item_Msg: itemProductTable(),
            productloading2: false,
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
    	/* 资源产出消耗 */
        gold_product_submit(arg) {
        	this.productloading = true;
            this.$res.postData(this, '/Productconsume/query_gold_in_out_info/', arg[0]).then((response) => {
            	this.product_Msg.data = [];
            	this.product_Msg.data = response;
            	this.productloading = false;
            	this.$message.success('查询成功');
            });
        },
        productMessage(text) {
        	this.product_Msg.data = tableSearch(text, this.product_Msg.data);
        },
        productChangePage(arg) {
            console.log(arg);
        },
        /* 道具产出消耗 */
        item_product_submit(arg) {
            console.log(arg);
        },
        itemMessage(text) {
            this.item_Msg.data = tableSearch(text, this.item_Msg.data);
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        /* 资源产出消耗 */
    	this.$res.postData(this, '/Productconsume/query_gold_in_out_info/', {
    		query_start_time: this.goldProductHtml.query_start_time,
    		query_end_time: this.goldProductHtml.query_end_time,
    		KindID: 10004
    	}).then((response) => {
    		this.product_Msg.data = [];
    		this.product_Msg.data = response;
    	});

        /* 道具产出消耗 */
        this.$res.postData(this, '/Productconsume/query_item_in_out_info/', {
            query_start_time: this.itemProductHtml.query_start_time,
    		query_end_time: this.itemProductHtml.query_end_time,
        }).then((response) => {
            this.item_Msg.data = [];
            this.item_Msg.data = response.reverse();
        });


        let _self = this;
        /* 获取游戏列表 */
        let baseGameConfig = goldProductForm();
        if (!window.gamelist) {
            let gameinfo_list = new Promise((resolve, reject) => {
                _self.$res.getSingleData(_self, '/Cmsbase/game_info/').then((response) => {
                    if (response) {
                        resolve(response);
                    } else {
                        reject('error');
                    }
                });
            });
            gameinfo_list.then((response) => {
                window.gamelist = response;
                fillGameinfoList(response);
            }, () => {
                _self.$message.error('获取游戏列表失败');
            });
        } else {
            fillGameinfoList(window.gamelist);
        }

        function fillGameinfoList(response) {
            response.map((k, v) => {
                if (v >= 0) {
                    baseGameConfig.formEle[1].options.push({
                        value: k.GameID,
                        label: k.KindName
                    });
                }
            });
            _self.gold_product_config = _self.$res.deepClone(baseGameConfig);
        }
    }
}

</script>
