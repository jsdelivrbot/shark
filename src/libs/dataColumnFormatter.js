/*! 所有表格数据格式化函数在此定义，统一引入调用 */

/*! 保留两位小数 */
export function numberFixed2(row, column, cellValue) {
    return isNaN(cellValue) ? '-' : cellValue.toFixed(2);
}

/*! 转换为百分数 */
export function numberPercent(row, column, cellValue) {
    return isNaN(cellValue) ? '-' : (cellValue * 100).toFixed(2);
}

/*! unix时间戳转换为日期 */
export function transToDate(row, column, cellValue) {
    return isNaN(cellValue) ? cellValue : convertIntToTime(cellValue).slice(0, 10);
}

/*! unix时间戳转换为准确时间 */
export function transToTime(row, column, cellValue) {
    return isNaN(cellValue) ? cellValue : convertIntToTime(cellValue);
}

export function transToTime2(row, column, cellValue) {
    if (!cellValue) {
        return '';
    } else {
        return convertIntToTime(cellValue);
    }
}

/*! 时间戳转换某个时间格式 */
export function convertIntToTime(tm) {
    let _time = new Date(tm * 1000);
    return _time.getFullYear() + '-' + fillZero(_time.getMonth() + 1) + '-' + fillZero(_time.getDate()) + ' ' + fillZero(_time.getHours()) + ':' + fillZero(_time.getMinutes()) + ':' + fillZero(_time.getSeconds());
}

export function fillZero(val) {
    return (val - 0 + 100 + '').slice(1, 3);
}

/*! 时间转换方法2 */
export function convertIntToTime2(params) {
    let _tm = new Date(params);
    return _tm.getFullYear() + '-' + fillZero(_tm.getMonth() + 1) + '-' + fillZero(_tm.getDate()) + ' ' + fillZero(_tm.getHours()) + ':' + fillZero(_tm.getMinutes()) + ':' + fillZero(_tm.getSeconds());
}

/*! 获取某个时间格式的时间戳  */
export function timestamp(tm) {
    let stringTime = tm;
    let _timestamp = Date.parse(new Date(stringTime)) / 1000;
    return _timestamp;
}

export function stateFormatter(row, column, cellValue) {
    return cellValue ? '正常使用' : '暂停使用';
}

export function nameFormatter(row, column, cellValue) {
    return row['last_name'] + row['first_name'];
}

export function bigNumberFormatter(row, column, cellValue) {
    return cellValue ? (cellValue + '').replace(/\d(?=(\d{3})+$)/g, ($1) => {
        return $1 + ','
    }) : 0;
}

export function userStateFormatter(row, column, cellValue) {
    return cellValue;
}

//格式化牌
export function convertNumToCard(row, columns, cards) {
    let result = [];
    if (!cards) {
        return '';
    } else {
        let special = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
        let color = ['黑', '红', '梅', '方'];
        for (let i = 0; i < cards.length; i++) {
            let num = cards[i] % 16,
                colorNum = Math.floor(cards[i] / 16);

            if (cards[i] == 79) {
                result.push('大王')
            } else if (cards[i] == 95) {
                result.push('小王')
            } else {
                result.push(color[colorNum] + (special[num] ? special[num] : num));
            }
        }
    }
    return JSON.stringify(result);
}

//转换牌型为中文
export function convertNumToCardType(row, columns, cardType) {
    let result = [];
    switch (cardType) {
        case 0:
            result.push('没牛');
            break;
        case 1:
            result.push('牛一');
            break;
        case 2:
            result.push('牛二');
            break;
        case 3:
            result.push('牛三');
            break;
        case 4:
            result.push('牛四');
            break;
        case 5:
            result.push('牛五');
            break;
        case 6:
            result.push('牛六');
            break;
        case 7:
            result.push('牛七');
            break;
        case 8:
            result.push('牛八');
            break;
        case 9:
            result.push('牛九');
            break;
        case 10:
            result.push('牛牛');
            break;
        case 11:
            result.push('四花牛');
            break;
        case 12:
            result.push('五花牛');
            break;
        case 13:
            result.push('四炸');
            break;
        case 14:
            result.push('五小牛');
            break;
    }
    return JSON.stringify(result);
}

/* 网狐棋牌CMS管理系统 */
//反馈管理 -- 问题类型
export function feedbackProblemTypeFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case '1':
            res = '建议';
            break;
        case '2':
            res = 'BUG';
            break;
    }
    return res;
}
//反馈管理 -- 游戏类型
export function feedbackGameTypeFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case '1':
            res = '牛牛';
            break;
        case '2':
            res = '';
    }
    return res;
}
//反馈管理 -- 回复人
export function feedbackReverUserFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case '0':
            res = '';
            break;
        case '1':
            res = 'admin';
    }
    return res;
}
//反馈管理 -- 显示状态
export function feedbackShowStatusFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case '1':
            res = '禁用'
            break;
    }
    return res;
}
//反馈管理 -- 处理状态
export function feedbackHandleStatusFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case '0':
            res = '未处理';
            break;
        case '1':
            res = '已处理';
            break;
    }
    return res;
}

//帐号状态
export function accountStatuFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case '0':
            res = '正常使用';
            break;
        case '1':
            res = '暂停使用';
            break;
    }
    return res;
}

//角色名称
export function roleNameFormatter(row, columns, result) {
    let res = '';
    if (window.role_list) {
        window.role_list.map((val) => {
            if (result == val['RoleID']) {
                res = val['RoleName'];
            }
        });
    }
    return res;
}


//银行记录 -- 交易类型
export function bankTranstFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case 1:
            res = '存款';
            break;
        case 2:
            res = '取款';
            break;
        case 3:
            res = '转账';
            break;
    }
    return res;
}

//银行记录 -- 汇款场所
export function transtPlaceFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case 0:
            res = '大厅';
            break;
        case 1:
            res = '网页';
            break;
    }
    return res;
}


//游戏类型
export function gameTypeFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case '10004':
            res = '看牌抢庄';
            break;
        case '10005':
            res = '百人场';
            break;
    }
    return res;
}

//抽奖记录 -- 转盘配置 - 奖品配置 - 奖品类型
export function zpRewardTypeFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case '0':
            res = '游戏币';
            break;
        case '1':
            res = '游戏豆';
            break;
        case '2':
            res = '钻石';
            break;
    }
    return res;
}

//抽奖记录 -- 7天大乐透 - 领取状态
export function sevenDayStateFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case '0':
            res = '未领取';
            break;
        case '1':
            res = '已领取';
            break;
    }
    return res;
}

export function itemTypeFormatter(row, columns, result) {
    let res = '';
    if (window.item_info) {
        window.item_info.map((val) => {
            if (result == val['ID']) {
                res = val['Name'];
            }
        });
    }
    return res;
}

//状态格式化
export function cashStateFormatter(row, columns, state) {
    let status = '';
    switch (state) {
        case '0':
            status = '已提交';
            break;
        case '1':
            status = '在处理';
            break;
        case '2':
            status = '已寄出';
            break;
        case '3':
            status = '已完成';
            break;
        case '4':
            status = '已废弃';
            break;
        case '5':
            status = '需要人工处理';
            break;
    }
    return status;
}

//资源类型
export function resourceFormatter(row, columns, result) {
    let res = ''
    switch (result) {
        case 'gold':
            res = '金币';
            break;
        case 'diamonds':
            res = '钻石';
            break;
        case 'exp':
            res = '经验';
            break;
        case 'vip_exp':
            res = 'VIP经验';
            break;
    }
    return res;
}

//资源类型
export function mailFormatter(row, columns, result) {
    let res = ''
    switch (result) {
        case 1001:
            res = '金币';
            break;
        case 2001:
            res = '钻石';
            break;
        case 'exp':
            res = '经验';
            break;
        case 'vip_exp':
            res = 'VIP经验';
            break;
    }
    return res;
}

//邮件发送范围
export function mailRangeFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case 0:
            res = '个人';
            break;
        case 1:
            res = '全体'
            break;
    }
    return res;
}

//邮件类型
export function mailTypeFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case 0:
            res = '系统邮件';
            break;
        case 1:
            res = '玩家邮件'
            break;
    }
    return res;
}

//邮件是否领取奖励
export function mailIsGotFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case 0:
            res = '未领取';
            break;
        case 1:
            res = '已领取'
            break;
    }
    return res;
}

//邮件是否已读
export function mailIsReadFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case 0:
            res = '未读';
            break;
        case 1:
            res = '已读'
            break;
    }
    return res;
}

//格式化邮箱中的附件信息
// export function rewardsFormatter(row, columns, result) {
//     let res = [];

//     result.map((val) => {

//     });

//     return val;
// }

//邮箱列表中 用户Id
export function mailUserIDFormatter(row, columns, res) {
    let result = '';
    switch (res) {
        case 1:
            result = '全体玩家';
            break;
        default:
            result = res;
            break;
    }
    return result;
}

//角色权限转换为中文
export function rolePetmitFormatter(row, columns, RolePermit) {
    let res = [];
    if (window.permit_list) {
        window.permit_list.map((val) => {
            RolePermit.map((permit_info) => {
                if (permit_info == val.permit_id) {
                    res.push(val.permit_name);
                }
            });
        });
    }
    return JSON.stringify(res);
}

export function noticeChanjingFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case 1:
            res = '商店';
            break;
        case 2:
            res = '看牌抢庄';
            break;
        case 3:
            res = '百人场';
            break;
        case 4:
            res = '比赛场';
            break;
        case 5:
            res = '分享';
            break;
        case 6:
            res = '加好友';
            break;
    }
    return res;
}

export function noticeShowPlaceFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case 0:
            res = '全部场景';
            break;
        case 1:
            res = '大厅场景';
            break;
        case 2:
            res = '游戏场景';
            break;
    }
    return res;
}

export function noticeGameIDFormatter(row, columns, GameChange) {
    let res = [];
    if (window.changjing) {
        window.changjing.Change_game.map((val) => {
            if (GameChange == '' || GameChange == null) {
                res.push();
            } else {
                GameChange.map((game_id) => {
                    if (game_id == val.KindID) {
                        res.push(val.KindName);
                    }
                });
            }
        });
    }
    return JSON.stringify(res);
}

export function noticeServerIDFormatter(row, columns, ServerID) {
    let res = [];
    if (window.changjing) {
        window.changjing.Game_room.map((val) => {
            if (ServerID == '' || ServerID == null) {
                res.push();
            } else {
                ServerID.map((server_id) => {
                    if (server_id == val.ServerID) {
                        res.push(val.ServerName);
                    }
                });
            }
        });
    }
    return JSON.stringify(res);
}

//订单状态
export function orderStatusFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case 0:
            res = '待审核';
            break;
        case 1:
            res = '已完成';
            break;
        case 2:
            res = '已发货';
            break;
        case 3:
            res = '已收货';
            break;
        case 4:
            res = '待发货';
            break;
        case 5:
            res = '审核不通过';
            break;
        case 6:
            res = '';
            break;
    }
    return res;
}

export function zhichongOrderFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case 0:
            res = '充值成功';
            break;
        case 1:
            res = '充值失败';
            break;
    }
    return res;
}

export function shuzhibiaoFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case 1:
            res = '虚拟物品';
            break;
        case 2:
            res = '话费卡';
            break;
        case 3:
            res = '实物';
            break;
    }
    return res;
}

export function userInfoFormatter(row, columns, result) {
    let res = '';
    if (window.userInfo) {
        window.userInfo.map((val) => {
            if (val.UserID == result) {
                res = val.NickName;
            }
        });
    }
    return res;
}

export function gameInfoFormatter(row, columns, result) {
    let res = '';
    if (window.game_info) {
        window.game_info.map((val) => {
            if (val.KindID == result) {
                res = val.KindName;
            }
        });
    }
    return res;
}

export function roomInfoFormatter(row, columns, result) {
    let res = '';
    if (window.roomInfo) {
        window.roomInfo.map((val) => {
            if (val.ServerID == result) {
                res = val.ServerName;
            }
        });
    }
    return res;
}

export function isAndroidFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case 0:
            res = '真人';
            break;
        case 1:
            res = '机器人';
            break;
    }
    return res;
}

export function NullityFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case 0:
            res = '正常使用';
            break;
        case 1:
            res = '暂停使用';
            break;
    }
    return res;
}

export function payStatusFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case 0:
            res = '未支付';
            break;
        case 1:
            res = '支付成功';
            break;
        case 2:
            res = '交易关闭';
            break;
    }
    return res;
}

export function payPlatformFormatter(row, columns, result) {
    let res = '';
    switch (result) {
        case 'wx':
            res = '微信';
            break;
        case 'zfb':
            res = '支付宝';
            break;
    }
    return res;
}