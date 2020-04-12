import React, { Component } from 'react'
import Loadable from 'react-loadable'
import {HashRouter,Route,Switch} from 'react-router-dom'
// 提前加载
import Layout from '../pages/layout'


export default class MyRouter extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path='/city' component={Loadable({
                        loader:()=>import('../pages/City/city'),
                        loading:function(){return <div>loading</div>}
                        })} />
                    {/* 搜索页面的路由 */}
                    <Route path='/search/:keyword' component={Loadable({
                        loader:()=>import('../pages/Search/search'),
                        loading:function(){return <div>loading</div>}
                        })} />
                    {/* 登录页面的路由 */}
                    <Route path='/login' component={Loadable({
                        loader:()=>import('../pages/Login/login'),
                        loading:function(){return <div>loading</div>}
                        })} />
                    {/* 全部订单页面的路由 */}
                    <Route path='/order/:user' component={Loadable({
                        loader:()=>import('../pages/Allorder/allorder'),
                        loading:function(){return <div>loading</div>}
                        })} />
                    {/* 详情页面 */}
                    <Route path='/details/:id' component={Loadable({
                        loader:()=>import('../pages/Details/details'),
                        loading:function(){return <div>loading</div>}
                        })} />
                    {/* 路由嵌套上不能加精准匹配 exact */}
                    <Layout path='/'>
                        {/* 动态加载组件 */}
                        <Route exact path='/' component={
                            Loadable({loader:()=>import('../pages/Home/home'),
                            loading:function(){return <div>loading</div>}
                        })
                            } />
                        <Route path='/shop' component={Loadable({
                            loader:()=>import('../pages/Shop/shop'),
                            loading:function(){return <div>loading</div>}
                            })} />
                        <Route path='/lifeserve' component={Loadable({
                            loader:()=>import('../pages/LifeServe/lifeserve'),loading:function(){return <div>loading</div>}
                            })} />
                        <Route path='/mine' component={Loadable({
                            loader:()=>import('../pages/Mine/mine'),
                            loading:function(){return <div>loading</div>}
                            })} />
                    </Layout>
                    
                </Switch>
            </HashRouter>
        )
    }
}