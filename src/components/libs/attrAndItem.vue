<template>
    <el-row :gutter="20">
        <el-col :span="12">
            <ele-form :config="attrConfig" v-on:receive="attrMessage"></ele-form>
            <table-option :parent-message="attrMsg" v-on:outputrow="attrRow"></table-option>
        </el-col>
        <el-col :span="12">
            <ele-form :config="itemConfig" v-on:receive="itemMessage"></ele-form>
            <table-option :parent-message="itemMsg" v-on:outputrow="itemRow"></table-option>
        </el-col>
    </el-row>
</template>

<script>
    import {
        attrForm,
        itemForm
    } from '@/form/config/attrAndItem'
    import {
        attrTable,
        itemTable
    } from '@/table/config/attrAndItem'
    export default {
        name: 'attrAndItem',
        data() {
            return {
                attrConfig: {},
                itemConfig: {},
                attrMsg: {},
                itemMsg: {}
            }
        },
        methods: {
            attrMessage(arg) {
                if (!arg[0].res_type || arg[0].amount == 0) {
                    return false;
                } else {
                    let data = this.attrMsg.data;
                    let is_old = false;
                    data.map((res, i, row) => {
                        if (res.res_type == arg[0].res_type) {
                            is_old = true;
                            row[i].amount = arg[0].amount;
                        }
                    });
                    if (!is_old) {
                        data.push({
                            res_type: arg[0].res_type,
                            amount: arg[0].amount
                        });
                    }
                    this.attrMsg.data = this.$res.deepClone(data);
                    this.outPutData();
                }
            },
            itemMessage(arg) {
                if (!arg[0].item_id || arg[0].amount == 0) {
                    return false;
                } else {
                    let data = this.itemMsg.data;
                    let is_old = false;
                    data.map((res, i, row) => {
                        if (res.item_id == arg[0].item_id) {
                            is_old = true;
                            row[i].amount = arg[0].amount;
                        }
                    });
                    if (!is_old) {
                        data.push({
                            item_id: arg[0].item_id,
                            amount: arg[0].amount
                        });
                    }
                    this.itemMsg.data = this.$res.deepClone(data);
                    this.outPutData();
                }
            },
            attrRow(arg) {
                this.attrMsg.data.splice(arg[0], 1);
                this.outPutData();
            },
            itemRow(arg) {
                this.itemMsg.data.splice(arg[0], 1);
                this.outPutData();
            },
            outPutData() {
                let data = [{}, {}];
                this.attrMsg.data.map((res) => {
                    data[0][res.res_type] = res.amount;
                });
                this.itemMsg.data.map((res) => {
                    data[1][res.item_id] = res.amount;
                });
                this.$emit('attrAndItem', data);
            }
        },
        mounted() {},
        computed: {},
        created() {
            this.attrConfig = attrForm();
            this.attrMsg = attrTable();
            this.itemConfig = itemForm();
            this.itemMsg = itemTable();
            let baseItem = itemForm();
            let _self = this;
            if (!window.ITEM_DICT) {
                let request = new Promise((resolve, reject) => {
                    _self.$res.getSingleData(_self, '/Shop/query_shop_prop/', ).then((response) => {
                        if (response) {
                            resolve(response);
                        } else {
                            reject('error');
                        }
                    });
                });
                request.then((response) => {
                    window.ITEM_DICT = response;
                    response.map((item, i) => {
                        if (i > 0) {
                            baseItem.formEle[0].options.push({
                                value: item['ID'],
                                label: item['Name']
                            });
                        }
                    });
                }, () => {
                    _self.$message.error('获取道具表失败');
                });
            } else {
                window.ITEM_DICT.map((item, i) => {
                    if (i > 0) {
                        baseItem.formEle[0].options.push({
                            value: item['ID'],
                            label: item['Name']
                        });
                    }
                });
            }
            this.itemConfig = baseItem;
        }
    }
</script>
