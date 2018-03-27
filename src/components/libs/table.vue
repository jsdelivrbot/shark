<template>
    <div class="single-table">
        <el-row>
            <el-col :span="4" :offset="17" v-if="tableConfigData.search">
                <el-input placeholder="请输入搜索内容" icon="search" v-model="inputSearch" :on-icon-click="handleIconClick"></el-input>
            </el-col>
            <el-col :span="2" :offset="1" v-if="tableConfigData.export">
                <el-button type="primary" @click="exportTable">导出表格</el-button>
            </el-col>
        </el-row>
        <el-table :data="tableData" :height="tableConfigData.height" :default-sort="tableConfigData.defaultSort" @cell-dblclick="handleCellDbclick" @selection-change="handleSelectionChange" border style="width: 100%; margin-top: 15px;">
            <!--多选框-->
            <el-table-column v-if="tableConfigData.select" type="selection" width="55"> </el-table-column>
            <!--多选框-->
            <el-table-column v-if="tableConfigData.index" type="index" width="55"> </el-table-column>
            <!--循环内容-->
            <el-table-column v-for="col in tableConfigData.columns" :key="col.name" :prop="col.name" :label="col.title" :width="col.width" :min-width="col.minWidth" :fixed="col.fixed" :sortable="col.sortable" :formatter="col.formatter" :align="col.align">
                <template scope="scope">
                    <div v-if="col.template && col.template.btns">
                        <el-button v-for="btn in col.template.btns" size="small" :key="btn.name" :type="btn.type" v-if="!btn.if||scope.row[btn.name+'_'+'show']" @click="outPutRow(scope.$index, scope.row,btn.funcName,scope)">{{btn.name}}</el-button>
                    </div>
                    <div v-if="col.template&&col.template.user_link">
                        <a :href="pathname+'#/user/user_data?userid='+scope.row[col.name]" target="_blank" :style="{'color':'#20A0FF'}">{{scope.row[col.name]}}</a>
                    </div>
                    <div v-if="!col.template">
                        {{col.formatter?col.formatter(scope.row,'',scope.row[col.name]):scope.row[col.name]}}
                    </div>
                </template>
                <el-table-column v-for="sub_col in col.sub" :key="sub_col.name" :prop="sub_col.name" :label="sub_col.title" :width="sub_col.width" :sortable="sub_col.sortable" :fixed="sub_col.fixed" :formatter="sub_col.formatter">
                    <template scope="scope">
                        <div v-if="sub_col.template && sub_col.template.btns">
                            <el-button v-for="btn in sub_col.template.btns" size="small" :key="btn.name" :type="btn.type" v-if="!btn.if||scope.row[btn.name+'_'+'show']" @click="outPutRow(scope.$index, scope.row,btn.funcName,scope)">{{btn.name}}</el-button>
                        </div>
                        <div v-if="sub_col.template&&sub_col.template.user_link">
                            <a :href="pathname+'#/user/user_data?userid='+scope.row[col.name]" target="_blank" :style="{'color':'#20A0FF'}">{{scope.row[col.name]}}</a>
                        </div>
                        <div v-if="!sub_col.template">
                            {{sub_col.formatter?sub_col.formatter(scope.row,'',scope.row[sub_col.name]):scope.row[sub_col.name]}}
                        </div>
                    </template>
                </el-table-column>
            </el-table-column>
        </el-table>
        <div style="margin-top: 15px; overflow: hidden" v-if="this.tableConfigData.pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 50, 100, 1000]" :page-size="this.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="this.tableConfigData.serverPagination?this.tableConfigData.total:this.tableConfigData.data.length" style="float:right">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import {
    tableExport
} from '@/libs/tableExport'
export default {
    name: 'table-option',
    data() {
        return {
            pathname: location.pathname,
            inputSearch: '',
            currentPage: 1,
            pageSize: 10,
            data: [],
        }
    },
    props: ['parentMessage', 'loading'],
    methods: {
        //导出方法
        exportTable() {
            tableExport('tableExport', this.$el);
        },
        //搜索方法
        handleIconClick() {
            this.$emit('message', this.inputSearch);
        },
        //数据行按钮方法
        outPutRow() {
            this.$emit('outputrow', arguments);
        },
        handleSelectionChange(val) {
            this.$emit('selectedrow', val);
        },
        handleCellDbclick() {
            this.$emit('cellDbclick', arguments);
        },
        handleSizeChange(val) {
            this.pageSize = val;
            if (this.parentMessage.serverPagination) {
                this.$emit('pagedata', [this.currentPage, this.pageSize]);
            }
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            if (this.parentMessage.serverPagination) {
                this.$emit('pagedata', [this.currentPage, this.pageSize]);
            }
        },
        searchData() {
            if (!this.parentMessage || !this.parentMessage.data) {
                return [];
            }
            let returnData = [];
            let _self = this;
            let reg = new RegExp(this.inputSearch);
            this.parentMessage.data.map(function(val, i) {
                if (_self.inputSearch) {
                    for (let key in val) {
                        if (val[key] && val[key].toString().match(reg)) {
                            returnData.push(val);
                            return true;
                        }
                    }
                } else {
                    returnData.push(val);
                }
            });
            if (this.parentMessage.pagination && !this.parentMessage.serverPagination) {
                returnData = returnData.filter((val, i) => {
                    if (i < (_self.pageSize * _self.currentPage) && i >= (_self.pageSize * (_self.currentPage - 1))) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }
            this.data = returnData;
            return returnData;
        }
    },
    computed: {
        //数据渲染方法
        tableData: function() {
            if (!this.parentMessage || !this.parentMessage.data) {
                return [];
            }
            let returnData = [];
            this.parentMessage.data.map(function(val, i) {
                if (!val.noMatch) {
                    returnData.push(val);
                }
            });
            let _self = this;
            if (this.parentMessage.pagination && !this.parentMessage.serverPagination) {
                returnData = returnData.filter((val, i) => {
                    if (i < (_self.pageSize * _self.currentPage) && i >= (_self.pageSize * (_self.currentPage - 1))) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }
            return returnData;
        },
        tableConfigData: function() {
            // console.log(this.parentMessage.columns);
            return this.parentMessage;
        },
        loadingPage: function() {
            return this.loading;
        }
    },
    components: {}
}

</script>
<style>


</style>
