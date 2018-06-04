//表格搜索方法
export function tableSearch(text, target) {
    let data = JSON.parse(JSON.stringify(target));
    data.forEach(function(obj, i, row) {
        let reg = new RegExp(text);
        let hasMatch = false;
        var new_obj = obj;
        for (let key in obj) {
            if (obj[key].toString().match(reg)) {
                hasMatch = true;
            }
        }
        new_obj.noMatch = !hasMatch;
        return new_obj;
    });
    return data;
}