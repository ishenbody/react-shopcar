import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './mynav.less'

export default class Mynav extends Component {
    render() {
        return (
            <div className='nav-box'>
                <div>
                    <NavLink exact to='/'>
                        <i className='iconfont icon-shouye'></i> <br/>
                        首页
                    </NavLink>
                </div>
                <div>
                    <NavLink  to='/shop'>
                        <i className='iconfont icon-shangcheng'></i> <br/>
                        商城
                    </NavLink>

                </div>
                <div>
                    <NavLink  to='/lifeserve'>
                        <i className='iconfont icon-fuwu'></i> <br/>
                        生活服务
                    </NavLink>
                </div>
                <div>
                    <NavLink  to='/mine'>
                        <i className='iconfont icon-wodedangxuan'></i> <br/>
                        我的
                    </NavLink>
                </div>
            </div>
        )
    }
}