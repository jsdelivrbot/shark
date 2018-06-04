import { transToTime, NullityFormatter, bigNumberFormatter } from '@/libs/dataColumnFormatter'

export function newUserTable() {
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
    serverPagination: true,
    //默认排序
    defaultSort: {
      prop: ''
    },
    //表头配置
    columns: [{
      title: '创建时间',
      name: 'RegisterDate',
      sortable: true,
      formatter: transToTime
    }, {
      title: '用户ID',
      name: 'UserID',
      sortable: true,
      template: { 'user_link': true }
    }, {
      title: '用户昵称',
      name: 'NickName',
      sortable: true,
    }, {
      title: '推广渠道',
      name: 'client_channel_id',
      sortable: true,
    }, {
      title: '平台',
      name: 'platform',
      sortable: true,
    }, {
      title: '创建IP',
      name: 'RegisterIP',
      sortable: true,
    }, {
      title: '金币',
      name: 'Score',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '银行金币',
      name: 'InsureScore',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '封号状态',
      name: 'Nullity',
      sortable: true,
      formatter: NullityFormatter
    }],
    data: []
  }
}


export function newUserserveyTable() {
  return {
    //分页
    pagination: true,
    //表头配置
    columns: [{
      title: '日期',
      name: 'RegisterDate',
      sortable: true,
      formatter: transToTime
    }, {
      title: '新增用户数',
      name: 'active_cnt',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '付费总金额',
      name: 'active_pay_amount',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '付费总人数',
      name: 'active_pay_cnt',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '兑换总积分',
      name: 'active_exc_point',
      sortable: true,
      formatter: bigNumberFormatter
    }],
    data: []
  }
}

export function acUserserveyTable() {
  return {
    //分页
    pagination: true,
    //表头配置
    columns: [{
      title: '日期',
      name: 'LastLogonDate',
      sortable: true,
      formatter: transToTime
    }, {
      title: '活跃用户数',
      name: 'active_cnt',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '付费总金额',
      name: 'active_pay_amount',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '付费总人数',
      name: 'active_pay_cnt',
      sortable: true,
      formatter: bigNumberFormatter
  }, {
    title: '兑换总积分',
    name: 'active_exc_point',
    sortable: true,
    formatter: bigNumberFormatter
  }],
    data: []
  }
}

export function activeTable() {
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
    serverPagination: true,
    //默认排序
    defaultSort: {
      prop: ''
    },
    //表头配置
    columns: [{
      title: '登录时间',
      name: 'LastLogonDate',
      sortable: true,
      formatter: transToTime
    }, {
      title: '用户ID',
      name: 'UserID',
      sortable: true,
      template: { 'user_link': true }
    }, {
      title: '昵称',
      name: 'NickName',
      sortable: true,
    }, {
      title: '身上金币',
      name: 'Score',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '银行金币',
      name: 'InsureScore',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '创建时间',
      name: 'RegisterDate',
      sortable: true,
      formatter: transToTime
    }, {
      title: '创建IP',
      name: 'RegisterIP',
      sortable: true,
    }, {
      title: '推广渠道',
      name: 'client_channel_id',
      sortable: true,
    }, {
      title: '平台',
      name: 'platform',
      sortable: true,
    }],
    data: []
  }
}

export function keepTable() {
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
    serverPagination: true,
    //默认排序
    defaultSort: {
      prop: ''
    },
    //表头配置
    columns: [{
      title: '最后登录时间',
      name: 'LastLogonDate',
      sortable: true
    }, {
      title: '玩家ID',
      name: 'UserID',
      sortable: true,
      template: { 'user_link': true }
    }, {
      title: '昵称',
      name: 'NickName',
      sortable: true
    }, {
      title: '注册时间',
      name: 'RegisterDate',
      sortable: true
    }, {
      title: '注册IP',
      name: 'RegisterIP',
      sortable: true
    }, {
      title: '身上金币',
      name: 'Score',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '银行金币',
      name: 'InsureScore',
      sortable: true,
      formatter: bigNumberFormatter
    }],
    data: []
  }
}
