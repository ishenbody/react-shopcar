import React, { Component } from 'react'
import {connect} from 'react-redux'
import setuser from '../../store/actions/userAction'

class Login extends Component{
    constructor(){
        super()
        this.state={
            username:''
        }
    }
    cname(e){
        this.setState({
            username:e.target.value
        })
    }
    // 登录事件
    clickme(){
        if(this.state.username){
            // 需要把登录的用户名存储起来,存储到redux
            this.props.setuser(this.state.username);

            // 把登录的用户名存储到localStorage
            localStorage.setItem('react-user',this.state.username);
            // 返回上一层页面
            this.props.history.goBack();
        }else{
            alert('用户名不能为空');
        }
    }
    render(){
        return(
            <div>
                用户名：<input type="text" value={this.state.username} onChange={this.cname.bind(this)} />
                <button onClick={this.clickme.bind(this)}>登录</button>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        user:state.user
    }
}

function mapDispatchToProps(dispatch){
    return{
        setuser:(data)=>{dispatch(setuser(data))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)