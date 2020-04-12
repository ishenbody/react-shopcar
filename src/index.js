import React from 'react';
import ReactDOM from 'react-dom';
// 使用初始化css样式
import './static/css/common.less'
// 让字体图标生效
import './static/font/iconfont.css'
import MyRouter from './router/myRouter';

// react关联redux
import {Provider} from 'react-redux'
import store from './store/store'
// 引入action
import setcity from './store/actions/cityAction'
import setkeyword from './store/actions/searchAction'
import setuser from './store/actions/userAction'
// console.log(store)

// 从localStorage中获取数据
let user = localStorage.getItem('react-user')
let city = localStorage.getItem('react-city')
let keyword = localStorage.getItem('react-keyword')

// 设置到redux上
if(user){
    store.dispatch(setuser(user))
}
if(city){
    store.dispatch(setcity(city))
}
if(keyword){
    store.dispatch(setkeyword(keyword))
}


ReactDOM.render(<Provider store={store}><MyRouter /></Provider>, document.getElementById('root'));

