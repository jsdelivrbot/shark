// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './views/menu_bar/menu'
import router from './router'

//引入普通表格组件
import tableOption from '@/components/libs/table'
//引入父子表格组件
import collapseTableOption from '@/components/libs/collapseTable'
//引入图表组件
import chartOption from '@/components/libs/chart'
//引入表单组件
import eleForm from '@/components/form/form'
//引入请求接口公用方法
import getData from '@/libs/getData'
//引入登录判断方法
import login from '@/libs/loginTest'

Vue.use(ElementUI)
Vue.use(getData);
Vue.use(login);

Vue.config.productionTip = false

Vue.component('eleForm', eleForm);
Vue.component('tableOption', tableOption);
Vue.component('collapseTableOption', collapseTableOption);
Vue.component('chartOption', chartOption);

router.beforeEach((to, from, next) => {
    if (to.name != 'login') {
        if (localStorage.getItem('login')) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});