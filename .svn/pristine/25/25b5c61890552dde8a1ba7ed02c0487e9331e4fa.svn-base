//所有表格数据格式化函数再此定义，统一引入调用

//保留两位小数
export function numberFixed2(cellValue) {
    return isNaN(cellValue)
        ? '-'
        : cellValue.toFixed(2);
}
//转换为百分数
export function numberPercent(cellValue) {
    return isNaN(cellValue)
        ? '-'
        : (cellValue * 100).toFixed(2);
}

//unix时间戳转换为日期
export function transToDate(cellValue) {
    return isNaN(cellValue)
        ? (cellValue || '')
        : (
            cellValue
            ? convertIntToTime(cellValue).slice(0, 10)
            : '');
}
//unix时间戳转换为准确时间
export function transToTime(cellValue) {
    return isNaN(cellValue)
        ? (cellValue || '')
        : (
            cellValue
            ? convertIntToTime(cellValue)
            : '');
}

//时间转换方法
export function convertIntToTime(val) {
    let time = new Date(val * 1000);
    return time.getFullYear() + '-' + fillZero(time.getMonth() + 1) + '-' + fillZero(time.getDate()) + ' ' + fillZero(time.getHours()) + ':' + fillZero(time.getMinutes()) + ':' + fillZero(time.getSeconds());
}

export function convertTimeToInt(val) {
    let time = val
        ? new Date(val)
        : new Date();
    return Math.round(time.getTime() / 1000 - 3600 * 8);
}

export function fillZero(val) {
    return (val - 0 + 100 + '').slice(1, 3);
}

export function stateFormatter(cellValue) {
    return cellValue
        ? "正常使用"
        : "暂停使用";
}
export function nameFormatter(cellValue) {
    return row['last_name'] + row['first_name'];
}

export function bigNumberFormatter(cellValue) {
    return cellValue
        ? (cellValue + '').replace(/\d(?=(\d{3})+(\.\d{1,2})?$)/g, ($1) => {
            return $1 + ','
        })
        : 0;
}

export function bigNumberMoneyFormatter(cellValue) {
    let num = ((cellValue || 0) / 100).toFixed(2);
    return num
        ? (num + '').replace(/\d(?=(\d{3})+(\.\d{1,2})?$)/g, ($1) => {
            return $1 + ','
        })
        : 0;
}

export function userStateFormatter(cellValue) {
    return cellValue;
}

export function itemFormatter(cellValue) {
    if (window.ITEM_DICT) {
        for (let i = 1, l = window.ITEM_DICT.length; i < l; i++) {
            if (window.ITEM_DICT[i][0] == cellValue) {
                return window.ITEM_DICT[i][1];
            }
        }
    }
    return cellValue;
}

export function resFormatter(cellValue) {
    let res_dict = {
        gold: '金币'
    };
    return res_dict[cellValue] || cellValue;
}

export function channelFormatter(channel_id) {
    let res = channel_id;
    // console.log(channel_id);
    if (!channel_id) {
        return '';
    }
    if (window.channel_list) {
        window.channel_list.map((val) => {
            if (channel_id === val.client_channel_id) {
                res = val.client_channel_name;
            } else if (channel_id.match(/[0-9a-zA-Z]{8}/) && val.client_channel_id.match(/[0-9a-zA-Z]{12}/) && channel_id === val.client_channel_id.slice(0, 8)) {
                res = val.client_channel_name;
            }
        });
    }
    // console.log(res);
    return res;
}
