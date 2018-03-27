import { permits } from "@/libs/permit";

function loginTest() {
    if (!localStorage.getItem('login')) {
        location.href = location.href.replace(/#.*$/, '#/login');
    }
}

function logout(self) {
    localStorage.removeItem('login');
    // localStorage.removeItem('Username');
    localStorage.removeItem('tabs');
    // localStorage.removeItem('activeTab');
    // localStorage.removeItem('user_permit');
    location.href = location.href.replace(/#.*$/, '#/login');
}

function login() {
    localStorage.setItem('login', 'success');
    setTimeout(() => {
        location.href = location.href.replace(/#\/login/, '');
        let permits_arr = JSON.parse(localStorage.getItem('user_permit'));
        // if (permits_arr.indexOf('01index') >= 0) {
        //     location.href = location.href.replace(/#\/login/, '');
        //     console.log('第一步');
        // } else {
        //     let permit_list = permits();
        //     permit_list.map((tab) => {
        //         if (tab.sub) {
        //             console.log('第二步');
        //             tab.sub.map((sub_tab) => {
        //                 if (permits_arr.indexOf('01' + sub_tab.name) >= 0) {
        //                     console.log('didiiii');
        //                     location.href = location.href.replace(/#\/login/, '#' + sub_tab.to);
        //                 } else {
        //                     console.log('3131231231');
        //                 }
        //             });
        //         } else {
        //             console.log('第三步');
        //             if (permits_arr.indexOf('01' + tab.name) >= 0) {
        //                 location.href = location.href.replace(/#\/login/, '#' + tab.to);
        //             }
        //         }
        //     });
        // }
    }, 1000);
}

let cms = {
    loginTest: loginTest,
    logout: logout,
    login: login
};

export default {
    install: function(Vue) {
        Object.defineProperty(Vue.prototype, '$cms', { value: cms });
    }
}