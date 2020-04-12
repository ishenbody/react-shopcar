import React, { Component } from 'react'
import {withRouter} from 'react-router'
import './header.less'

class Header extends Component{
    goBack(){
        // 路由中的 history.goBack() 返回到上一层
        // console.log(this.props)
        // this.props.history.goBack();

        // window对象中的history
        // console.log(window.history)
        window.history.back();
    }
    render(){
        return(
            <div className='header-box'>
                <i onClick={this.goBack.bind(this)} className='iconfont icon-fanhui'></i>
                <span>{this.props.title}</span>
            </div>
        )
    }
}

export default withRouter(Header)