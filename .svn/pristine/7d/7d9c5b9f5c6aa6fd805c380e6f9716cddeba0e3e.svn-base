import {transToTime2, avatarExamine} from '@/libs/dataColumnFormatter'

export function avatarTable() {
    return {
        //生成索引
        index: true,
        columns: [{
            title: '上传时间',
            name: 'InsertTime',
            sortable: true,
            formatter: transToTime2,
            width: '180px'
        }, {
            title: '审核状态',
            name: 'ExamineStatus',
            sortable: true,
            width: '180px',
            formatter: avatarExamine
        }, {
            title: '玩家ID',
            name: 'UserID',
            sortable: true,
            template: {'user_link': true},
            width: '180px'
        }, {
            title: '昵称',
            name: 'NickName',
            sortable: true,
            width: '180px'
        }, {
            title: 'IP地址',
            name: 'InsertAddr',
            sortable: true,
            width: '180px'
        }, {
            title: '头像',
            name: 'HeadimgUrl',
            sortable: true,
            template: {
                img: true
            }
        }, {
            title: '操作',
            name: '',
            width: '180px',
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
                    name: '已通过',
                    funcName: 'yes_info',
                    type: 'info',
                    disabled: true,
                    if: true,
                }, {
                    name: '未通过',
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
