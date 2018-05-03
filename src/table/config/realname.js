import { userInfoFormatter, isRealNameCnFormatter, realNameStateFormatter, transToTime2 } from '@/libs/dataColumnFormatter'

export function realnameTable() {
  return {
    //生成索引
    index: true,
    //分页
    pagination: true,
    columns: [{
      title: '认证日期',
      name: 'IdentiDate',
      sortable: true,
      formatter: transToTime2
    }, {
      title: '玩家ID',
      name: 'UserID',
      sortable: true,
      template: { 'user_link': true }
    }, {
      title: '玩家昵称',
      name: 'UserID',
      sortable: true,
      formatter: userInfoFormatter
    }, {
      title: '身份证号',
      name: 'IDCard',
      sortable: true
    }, {
      title: '真实姓名',
      name: 'RealName',
      sortable: true
    }, {
      title: '生日',
      name: 'Birthday',
      sortable: true
    }, {
      title: '是否成年',
      name: 'flag',
      sortable: true,
      formatter: isRealNameCnFormatter
    }, {
      title: '审核状态',
      name: 'IsVerification',
      sortable: true,
      formatter: realNameStateFormatter
    }, {
      title: '审核人',
      name: 'Verifier',
      sortable: true
    }, {
      title: '审核日期',
      name: 'HandleDate',
      sortable: true,
      formatter: transToTime2
    }, {
      title: '操作',
      name: '',
      width: '160px',
      template: {
        btns: [{
          name: '通过',
          funcName: 'examine',
          type: 'success',
          if: true,
        }, {
          name: '不通过',
          funcName: 'not_examine',
          type: 'danger',
          if: true,
        }, {
          name: '信息真实',
          funcName: 'yes_info',
          type: 'info',
          disabled: true,
          if: true,
        }, {
          name: '信息虚假',
          funcName: 'not_info',
          type: 'info',
          disabled: true,
          if: true,
        }]
      }
    }],
    data: []
  }
}
