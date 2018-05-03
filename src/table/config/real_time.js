//引入数据处理方法
import { transToTime, gameInfoFormatter, roomInfoFormatter, isAndroidFormatter } from '@/libs/dataColumnFormatter'

export function registerUserTable() {
    return {
        //导出按钮
        export: true,
        //搜索内容
        search: true,
        //生成索引
        index: false,
        //行选择框
        select: false,
        //分页
        pagination: true,
        //是否为服务器分页
        serverPagination: false,
        //默认排序
        defaultSort: {
            prop: ''
        },
        //表头配置
        columns: [{
            title: '注册时间',
            name: 'RegisterDate',
            sortable: true,
            formatter: transToTime,
        }, {
            title: '玩家ID',
            name: 'UserID',
            sortable: true,
            template: { 'user_link': true }
        }, {
            title: '昵称',
            name: 'NickName',
            sortable: true,
        }, {
            title: '经验',
            name: 'Experience',
            sortable: true,
        }, {
            title: '等级',
            name: 'GrowLevelID',
            sortable: true,
        }, {
            title: '玩家类型',
            name: 'IsAndroid',
            sortable: true,
            formatter: isAndroidFormatter,
        }, {
            title: '注册IP',
            name: 'RegisterIP',
            sortable: true,
        }, {
            title: '注册手机号',
            name: 'RegisterMobile',
            sortable: true,
        }, {
            title: '注册机器',
            name: 'RegisterMachine',
            sortable: true,
        }, {
            title: '绑定手机号',
            name: 'InsureMobile',
            sortable: true,
        }],
        data: []
    }
}

export function roomUserTable() {
    return {
        //导出按钮
        export: true,
        //搜索内容
        search: true,
        //生成索引
        index: false,
        //行选择框
        select: false,
        //分页
        pagination: true,
        //是否为服务器分页
        serverPagination: false,
        //默认排序
        defaultSort: {
            prop: ''
        },
        //表头配置
        columns: [{
            title: '时间',
            name: 'CollectDate',
            sortable: true,
            formatter: transToTime
        }, {
            title: '玩家ID',
            name: 'UserID',
            sortable: true,
            template: { 'user_link': true }
        }, {
            title: '昵称',
            name: 'Accounts',
            sortable: true,
        }, {
            title: '游戏',
            name: 'KindID',
            sortable: true,
            formatter: gameInfoFormatter
        }, {
            title: '房间',
            name: 'ServerID',
            sortable: true,
            formatter: roomInfoFormatter
        }, {
            title: 'IP地址',
            name: 'EnterIP',
            sortable: true,
        }, {
            title: '机器',
            name: 'EnterMachine',
            sortable: true,
        }],
        data: []
    }
}

export function lossTable() {
    return {
        //导出按钮
        export: true,
        //搜索内容
        search: true,
        //生成索引
        index: false,
        //行选择框
        select: false,
        //分页
        pagination: true,
        //是否为服务器分页
        serverPagination: false,
        //默认排序
        defaultSort: {
            prop: ''
        },
        //表头配置
        columns: [{
            title: '最后登录时间',
            name: 'LastLogonDate',
            sortable: true,
            formatter: transToTime,
        }, {
            title: '玩家ID',
            name: 'UserID',
            sortable: true,
            template: { 'user_link': true }
        }, {
            title: '昵称',
            name: 'NickName',
            sortable: true,
        }, {
            title: '经验',
            name: 'Experience',
            sortable: true,
        }, {
            title: '等级',
            name: 'GrowLevelID',
            sortable: true,
        }, {
            title: '注册时间',
            name: 'RegisterDate',
            sortable: true,
            formatter: transToTime,
        }, {
            title: '注册IP',
            name: 'RegisterIP',
            sortable: true,
        }, {
            title: '注册手机号',
            name: 'RegisterMobile',
            sortable: true,
        }, {
            title: '注册机器',
            name: 'RegisterMachine',
            sortable: true,
        }],
        data: []
    }
}

export function goldCoinTable() {
    return {
        columns: [{
            title: '1千以下',
            name: 'n1'
        }, {
            title: '1千-6万',
            name: 'n2'
        }, {
            title: '6万-28.8万',
            name: 'n3'
        }, {
            title: '28.8万-84万',
            name: 'n4'
        }, {
            title: '84万-192万',
            name: 'n5'
        }, {
            title: '192万-540万',
            name: 'n6'
        }, {
            title: '540万-1000万',
            name: 'n7'
        }, {
            title: '1000万-1亿',
            name: 'n8'
        }, {
            title: '1亿-3亿',
            name: 'n9'
        }, {
            title: '3亿以上',
            name: 'n10'
        }],
        data: []
    }
}
