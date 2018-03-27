//引入数据处理方法
import { transToTime, userInfoFormatter, gameInfoFormatter, roomInfoFormatter, NullityFormatter, isAndroidFormatter } from '@/libs/dataColumnFormatter'

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
      width: '120px'
    }, {
      title: '玩家ID',
      name: 'UserID',
      sortable: true,
      width: '120px',
      template: { 'user_link': true }
    }, {
      title: '玩家帐号',
      name: 'Accounts',
      sortable: true,
    }, {
      title: '昵称',
      name: 'NickName',
      sortable: true,
    }, {
      title: '注册帐号',
      name: 'RegAccounts',
      sortable: true,
    }, {
      title: '经验',
      name: 'Experience',
      sortable: true,
      width: '120px'
    }, {
      title: '等级',
      name: 'GrowLevelID',
      sortable: true,
      width: '120px'
    }, {
      title: '玩家类型',
      name: 'IsAndroid',
      sortable: true,
      formatter: isAndroidFormatter,
      width: '120px'
    }, {
      title: '注册IP',
      name: 'RegisterIP',
      sortable: true,
      width: '130px'
    }, {
      title: '注册手机号',
      name: 'RegisterMobile',
      sortable: true,
      width: '130px'
    }, {
      title: '注册机器',
      name: 'RegisterMachine',
      sortable: true,
      width: '120px'
    }, {
      title: '绑定手机号',
      name: 'InsureMobile',
      sortable: true,
      width: '130px'
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
      name: 'UserID',
      sortable: true,
      formatter: userInfoFormatter
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
