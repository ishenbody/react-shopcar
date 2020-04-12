import React, { Component } from 'react'

export default class HomeProductItem extends Component{
    render(){
        // let data = this.props.data;
        let {data} = this.props;
        return(
            <div>
                <img src={data.img} alt=""/>
                <p>{data.title}</p>
            </div>
        )
    }
}