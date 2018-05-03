/*! 所有数据请求方法在这里进行请求，调用vue-resource方法 */

/*! get请求单个表格数据 */
export function getSingleData(self, url, option) {
    return self.$http.get(url, option).then((response) => {
        let data = response.body;
        if (data.code === 0) {
            let res = Object.prototype.toString.call(data.data).match(/Array/) ? data.data : data.data;
            return res;
        } else {
            console.warn(data.data);
        }
    }, (response) => {
        console.log('error');
        console.log(arguments);
    });
}

/*! jsonp请求数据 */
export function getJsonpData(self, url, option) {
    return self.$http.jsonp(url, option).then((response) => {
        let data = response.body;
        if (data.code === 0) {
            return data.data ? data.data : data;
        } else {
            console.warn(data.data);
            return data;
        }
    }, (response) => {
        console.log('error');
        console.log(arguments);
    });
}

/*! post请求数据 */
export function postData(self, url, body, option) {
    return self.$http.post(url, body, option).then((response) => {
        let data = response.body;
        if (data.code === 0) {
            return data.data ? data.data : data;
        } else {
            console.warn(data.data);
            return data;
        }
    }, (response) => {
        console.log('error');
        console.log(arguments);
    });
}

/*! put数据 */
export function putData(self, url, body, option) {
    return self.$http.put(url, body, option).then((response) => {
        let data = response.body;
        if (data.code === 0) {
            return data.data ? data.data : data;
        } else {
            console.warn(data.data);
            return data;
        }
    }, (response) => {
        console.log('error');
        console.log(arguments);
    });
}

/*! delete数据 */
export function deleteData(self, url, option) {
    return self.$http.delete(url, option).then((response) => {
        let data = response.body;
        if (data.code === 0) {
            return data.data ? data.data : data;
        } else {
            console.warn(data.data);
            return data;
        }
    }, (response) => {
        console.log('error');
        console.log(arguments);
    });
}

export function getCode(self, url, option) {
    return self.$http.get(url, option).then((response) => {
        let res = new Blob([response.data], { type: 'image/png' });
        return res;
    }, (response) => {
        console.log('err');
        console.log(arguments);
    });
}

export function loginData(self, url, body, option) {
    localStorage.removeItem('user_permit');
    return self.$http.post(url, body, option).then((response) => {
        let data = response.body;
        if (data.code === 0) {
            localStorage.setItem('user_permit', JSON.stringify(data.data));
            return 'success';
        } else {
            console.warn(data.data);
            return data;
        }
    }, (response) => {
        console.log('err');
        console.log(arguments);
    });
}

export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let http = {
    getSingleData: getSingleData,
    getCode: getCode,
    getJsonpData: getJsonpData,
    postData: postData,
    putData: putData,
    deleteData: deleteData,
    deepClone: deepClone,
    loginData: loginData,
};

export default {
    install: function(Vue) {
        Object.defineProperty(Vue.prototype, '$res', { value: http });
    }
}
