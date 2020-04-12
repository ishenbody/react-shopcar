import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import {withRouter} from 'react-router'
import './home-header.less'
import {connect} from 'react-redux'
import SearchInput from '../../../../components/SearchInput/searchinput'

class HomeHeader extends Component{
    toCity(){
        // 编程式导航
        this.props.history.push('/city');
    }
    toOrder(){
        // 判断是否登录过
        if(this.props.user){
            // 跳转全部订单页面是要携带登录用户
            this.props.history.push('/order/'+this.props.user);
        }else{
            this.props.history.push('/login')
        }
    }
    render(){
        console.log(this.props)
        return(
            <div className='home-header'>
                <div className='cur-city' onClick={this.toCity.bind(this)}>
                    {/* <Link to='/city'> */}
                        {this.props.city}
                        <i className='iconfont icon-xiala'></i>
                    {/* </Link> */}
                </div>
                <SearchInput />
                <div className='home-pinglun' onClick={this.toOrder.bind(this)}>
                    <i className='iconfont icon-pinglun'></i>
                </div>
            </div>
        )
    }
}

// 3.自己定义高阶组件
// function Gao(Comp){
//     return function(){
//         return <Route component={Comp} />
//     }
// }

// const newComp = Gao(HomeHeader);

const mapStateToProps =(state) =>{
    return {
        city:state.city,
        user:state.user
    }
}

// 2. 使用withRouter
export default connect(mapStateToProps)(withRouter(HomeHeader));