import React, { Component } from 'react'
import OrderItem from '../OrderItem/orderitem'

export default class OrderList extends Component{
    render(){
        return(
            <div>
                {this.props.list.map((ele,index)=>{
                    return <OrderItem changeCommentState={this.props.changeCommentState} key={index} item={ele} />
                })}
            </div>
        )
    }
}