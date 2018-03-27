import {
  transToTime2,
  bigNumberFormatter
} from '@/libs/dataColumnFormatter'
export function phoneBlackTable() {
  return {
    columns: [{
      title: '手机号码',
      name: 'InsureMobile',
      sortable: true,
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
      formatter: transToTime2
    }, {
      title: '创建IP',
      name: 'RegisterIP',
      sortable: true,
    }, {
      title: '封号时间',
      name: 'NullityOverDate',
      sortable: true,
      formatter: transToTime2
    }, {
      title: '操作人',
      name: 'Operator',
      sortable: true,
    }, {
      title: '拉黑理由',
      name: 'Reason',
      sortable: true,
    }, {
      title: '操作',
      name: 're',
      template: {
        btns: [{
          name: '移除黑名单',
          type: 'danger',
          funcName: 'remove'
        }]
      }
    }],
    data: []
  }
}
export function freezeTable() {
  return {
    //行选择框
    select: true,
    //分页
    pagination: true,
    columns: [{
      title: '用户ID',
      name: 'UserID',
      sortable: true,
      template: { 'user_link': true }
    }, {
      title: '昵称',
      name: 'NickName',
      sortable: true,
    }, {
      title: '钻石',
      name: 'UserMedal',
      sortable: true,
    }, {
      title: '经验',
      name: 'Experience',
      sortable: true,
    }, {
      title: '创建时间',
      name: 'RegisterDate',
      sortable: true,
      formatter: transToTime2
    }, {
      title: '创建IP',
      name: 'RegisterIP',
      sortable: true,
    }, {
      title: '等级',
      name: 'GrowLevelID',
      sortable: true,
    }, {
      title: '会员等级',
      name: 'MemberOrder',
      sortable: true,
    }, {
      title: '封号时间',
      name: 'NullityOverDate',
      sortable: true,
      formatter: transToTime2
    }],
    data: []
  }
}
export function nicknameTable() {
  return {
    //导出按钮
    export: false,
    //搜索内容
    search: false,
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
      formatter: transToTime2
    }, {
      title: '创建IP',
      name: 'RegisterIP',
      sortable: true,
    }, {
      title: '推广渠道',
      name: 'client_channel_id',
      sortable: true,
    }, {
      title: '总充值',
      name: 'total_pay_amount',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '封号时间',
      name: 'NullityOverDate',
      sortable: true,
      formatter: transToTime2
    }],
    data: []
  }
}
