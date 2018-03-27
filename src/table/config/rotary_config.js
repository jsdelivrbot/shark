import { zpRewardTypeFormatter, sevenDayStateFormatter } from '@/libs/dataColumnFormatter'

export function prizeTable() {
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
    serverPagination: false,
    //默认排序
    defaultSort: {
      prop: ''
    },
    //表头配置
    columns: [{
      title: '奖品索引',
      name: 'ItemIndex',
      sortable: true,
    }, {
      title: '奖品类型(0：游戏币 1：游戏豆 2：钻石)',
      name: 'ItemType',
      sortable: true,
      formatter: zpRewardTypeFormatter
    }, {
      title: '奖品数量',
      name: 'ItemQuota',
      sortable: true,
    }, {
      title: '中奖几率(%)',
      name: 'ItemRate',
      sortable: true,
    }, {
      title: '操作',
      name: '',
      template: {
        btns: [{
          name: '编辑',
          funcName: 'editor'
        }]
      }
    }],
    data: []
  }
}

export function luckDrawTable() {
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
      title: '日期',
      name: '',
      sortable: true,
    }, {
      title: '帐号',
      name: '',
      sortable: true,
    }, {
      title: '付费',
      name: '',
      sortable: true,
    }, {
      title: '奖品类型',
      name: '',
      sortable: true,
    }, {
      title: '奖品数量',
      name: '',
      sortable: true,
    }],
    data: []
  }
}

export function reward7DayTable() {
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
      title: '用户ID',
      name: 'uid',
      sortable: true,
      template: { 'user_link': true }
    }, {
      title: '剩余抽奖次数',
      name: 'left_random_time',
      sortable: true,
    }, {
      title: '领取状态',
      name: 'flag',
      sortable: true,
      formatter: sevenDayStateFormatter
    }, {
      title: '第一天数字',
      name: 'n1',
      sortable: true,
    }, {
      title: '第二天数字',
      name: 'n2',
      sortable: true,
    }, {
      title: '第三天数字',
      name: 'n3',
      sortable: true,
    }, {
      title: '第四天数字',
      name: 'n4',
      sortable: true,
    }, {
      title: '第五天数字',
      name: 'n5',
      sortable: true,
    }, {
      title: '第六天数字',
      name: 'n6',
      sortable: true,
    }, {
      title: '第七天数字',
      name: 'n7',
      sortable: true,
    }],
    data: []
  }
}

export function fiveStepTable() {
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
      title: '用户ID',
      name: 'uid',
      sortable: true,
      template: { 'user_link': true }
    }, {
      title: '第一步',
      name: 'p1',
      sortable: true,
    }, {
      title: '第二步',
      name: 'p2',
      sortable: true,
    }, {
      title: '第三步',
      name: 'p3',
      sortable: true,
    }, {
      title: '第四步',
      name: 'p4',
      sortable: true,
    }, {
      title: '第五步',
      name: 'p5',
      sortable: true,
    }, {
      title: '是否兑换了话费',
      name: 'flag',
      sortable: true,
      formatter: sevenDayStateFormatter
    }, {
      title: '备注',
      name: 'note',
      sortable: true,
    }],
    data: []
  }
}

export function moonCardTable() {
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
      title: '用户ID',
      name: 'uid',
      sortable: true,
      template: { 'user_link': true }
    }, {
      title: '到期时间',
      name: 'expired_date',
      sortable: true,
    }, {
      title: '获得时间',
      name: 'last_get_date',
      sortable: true,
    }, {
      title: '是否到期',
      name: 'flag',
      sortable: true,
    }],
    data: []
  }
}
