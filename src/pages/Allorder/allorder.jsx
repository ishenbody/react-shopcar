import React, { Component } from 'react'
import OrderHeader from '../../components/Header/header'
import {connect} from 'react-redux'
import OrderList from './OrderList/orderlist'

class AllOrder extends Component{
    constructor(){
        super()
        this.state={
            orderlist:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:4000/order/'+this.props.match.params.user)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setState({
                orderlist:data
            })
        })
    }
    changeCommentState(cs,id){
        console.log('修改commentState',cs,id)
        for(let i=0; i<this.state.orderlist.length; i++){
            if(this.state.orderlist[i].id == id){
                this.state.orderlist[i].commentState = cs;
                this.setState({
                    orderlist:this.state.orderlist
                })
            }
        }
    }
    render(){
        return(
            <div>
                <OrderHeader title='全部订单' />
                {/* 显示位置和登录用户 */}
                <div>
                    <p>
                        <i></i>
                        {this.props.match.params.user}
                    </p>
                    <p>
                        <i></i>
                        {this.props.city}
                    </p>
                </div>
                {/* 全部订单列表 */}
                {this.state.orderlist.length>0 
                ?
                //作业： 试着使用Context向Orderitem传递事件
                <OrderList changeCommentState={this.changeCommentState.bind(this)} list={this.state.orderlist} />
                :
                <div>数据正在请求中...</div>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        city:state.city
    }
}


export default connect(mapStateToProps)(AllOrder)