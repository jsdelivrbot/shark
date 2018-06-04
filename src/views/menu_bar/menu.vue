<template>
    <div id="app">
        <header-tab></header-tab>
        <div class="side-tab">
            <el-menu class="el-menu-vertical-demo" default-active="2" unique-opened="true" router @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <template v-for="(tab, index) in sideTab">
                    <el-submenu v-bind:index="index+''" v-if="tab.permit && tab.sub" :key="tab.title">
                        <template slot="title">{{tab.title}}</template>
                        <el-menu-item v-if="sub.permit" v-bind:index="sub.to" v-for="sub in tab.sub" :key="sub.name" @click="addTab(sub)">
                            <a :href="'#' + sub.to" @click="addTab(sub)">{{sub.title}}</a>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item v-if="tab.permit && !tab.sub" v-bind:index="tab.to" :key="tab.name" @click="addTab(tab)">
                        <a :href="'#' + tab.to" @click="addTab(tab)">{{tab.title}}</a>
                    </el-menu-item>
                </template>
            </el-menu>
        </div>
        <div class="main-container">
            <el-tabs v-model="editableTabsValue2" type="border-card" closable @tab-remove="removeTab" @tab-click="clickTab">
                <el-tab-pane v-for="item in editableTabs2" :key="item.name" :label="item.title" :name="item.name" :to="item.to"></el-tab-pane>
            </el-tabs>
        </div>
        <div id="element-main" class="el-container element-main">
            <div class="element-content el-main">
                <keep-alive>
                    <router-view v-on:login="checkPermits"></router-view>
                    <!-- <router-view></router-view> -->
                </keep-alive>
            </div>
        </div>
    </div>
</template>
<script>
    import HeaderTab from '@/views/header/header'
    import {
        permits
    } from '@/libs/permit'
    export default {
        name: 'menu',
        data() {
            return {
                sideTab: [],
                editableTabs2: [{
                    title: '我的桌面',
                    name: 'index',
                    to: '/',
                    permit: true,
                    permit_id: 44,
                }],
                editableTabsValue2: 'index',
                permit_list: [],
            }
        },
        created() {
            this.sideTab = permits();
            this.checkPermits();
        },
        methods: {
            handleOpen(key, keyPath) {},
            handleClose(key, keyPath) {},
            addTab(tabData) {
                let old = false;
                for (let index in this.editableTabs2) {
                    if (this.editableTabs2[index].name === tabData.name) {
                        old = true;
                    }
                }
                if (!old) {
                    this.editableTabs2.push(tabData);
                }
                this.editableTabsValue2 = tabData.name;
                localStorage.setItem('tabs', JSON.stringify(this.editableTabs2));
                localStorage.setItem('activeTab', this.editableTabsValue2);
            },
            removeTab(targetName) {
                let tabs = this.editableTabs2;
                let activeName = this.editableTabsValue2;
                if (tabs.length === 1) {
                    return false;
                }
                console.log(tabs.length);
                let url = '';
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }
                tabs.map((tab, index) => {
                    if (tab.name === activeName) {
                        url = tab.to;
                    }
                });
                this.editableTabsValue2 = activeName;
                this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
                localStorage.setItem('tabs', JSON.stringify(this.editableTabs2));
                localStorage.setItem('activeTab', this.editableTabsValue2);
                location.href = location.href.replace(/#(\/?\S*)?$/, '#' + url);
            },
            clickTab(vobj, e) {
                e.preventDefault();
                let tabs = this.editableTabs2;
                let activeName = vobj['name'];
                let url = '';
                tabs.map((tab, index) => {
                    if (tab.name == activeName) {
                        url = tab.to;
                    }
                });
                localStorage.setItem('tabs', JSON.stringify(this.editableTabs2));
                localStorage.setItem('activeTab', activeName);
                location.href = location.href.replace(/#(\/?\S*)?$/, '#' + url);
            },
            checkPermits() {
                this.$cms.loginTest();
                let tabs = localStorage.getItem('tabs');
                if (tabs) {
                    this.editableTabs2 = JSON.parse(tabs);
                    this.editableTabsValue2 = localStorage.getItem('activeTab')
                }
                let permits = JSON.parse(localStorage.getItem('user_permit'));
                let activeUrl = location.hash.slice(1);
                let _self = this;
                _self.sideTab = _self.sideTab.map((val) => {
                    if (permits.indexOf(val['permit_id']) >= 0) {
                        val.permit = true;
                    } else {
                        val.permit = false;
                    }
                    if (val.sub) {
                        val.sub = val.sub.map((sub_val) => {
                            if (permits.indexOf(sub_val['permit_id']) >= 0) {
                                sub_val.permit = true;
                            } else {
                                sub_val.permit = false;
                            }
                            return sub_val;
                        });
                    }
                    return val;
                });
            },
        },
        components: {
            HeaderTab
        }
    }
</script>
<style>
    html,
    body,
    p,
    ul,
    li,
    ol {
        margin: 0;
        padding: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    th,
    tr,
    td {
        font-size: 100%;
        font-weight: normal
    }
    body,
    textarea {
        font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
        color: #333;
    }
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
    a:hover,
    a:focus {
        text-decoration: none;
    }
    i,
    em {
        font-style: normal;
    }
    input {
        margin: 0;
        padding: 0;
    }
    .side-tab {
        position: fixed;
        top: 60px;
        bottom: 0;
        z-index: 1999;
        overflow-x: hidden;
        width: 219px;
        background: #545c64;
    }
    .side-tab ul {
        position: relative;
        font-size: 0;
        box-sizing: border-box !important;
        width: 220px;
        padding: 0;
    }
    .side-tab .side_tab_scroll {
        width: 240px;
        height: 100%;
        overflow-x: hidden;
    }
    .main-container {
        position: relative;
        margin: 0;
        width: calc(100% - 220px);
        float: right;
    }
    .main-container .el-tabs.el-tabs--card {
        overflow: hidden;
        position: relative;
        margin-left: 220px;
        height: 42px;
    }
    .element-main {
        position: absolute;
        left: 220px;
        top: 138px;
        right: 0;
        bottom: 0;
        width: auto;
        overflow: hidden;
        overflow-y: auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .element-main .element-content {
        padding: 10px;
    }
    .h1-title {
        padding: 15px;
        background-color: #ecf8ff;
        border-radius: 4px;
        border-left: 5px solid #50BFFF;
        margin-bottom: 15px;
        font-size: 14px;
        color: #5e6d82;
        line-height: 1.5em;
    }
    .cms-content {
        border: 1px solid #d1dbe5;
        border-radius: 4px;
        padding: 15px;
    }
</style>
