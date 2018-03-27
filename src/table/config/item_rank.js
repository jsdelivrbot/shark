import { bigNumberFormatter, transToTime2 } from '@/libs/dataColumnFormatter'
export function itemRankTable() {
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
        title: '玩家ID',
        name: 'UserID',
        sortable: true,
        template: { 'user_link': true }
      }, {
        title: '昵称',
        name: 'NickName',
        sortable: true,
      }, {
        title: '推广渠道',
        name: '',
        sortable: true,
      }, {
        title: '平台',
        name: '',
        sortable: true,
      }, {
        title: '玩家总金币',
        name: 'allScore',
        sortable: true,
        formatter: bigNumberFormatter
      }, {
        title: '玩家身上金币',
        name: 'Score',
        sortable: true,
        formatter: bigNumberFormatter
      }, {
        title: '玩家银行金币',
        name: 'InsureScore',
        sortable: true,
        formatter: bigNumberFormatter
      },
      // {
      //     title: '总兑现',
      //     name: '',
      //     sortable: true,
      // }, {
      //     title: '总充值',
      //     name: '',
      //     sortable: true,
      // }, 
      {
        title: '封号时间',
        name: 'NullityOverDate',
        sortable: true,
        formatter: transToTime2
      }, {
        title: '玩家背包道具信息',
        name: 'GoodsID',
        sortable: true,
      }
    ],
    data: []
  }
}
