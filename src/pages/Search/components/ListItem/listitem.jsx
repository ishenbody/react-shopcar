import React, { Component } from 'react'
import './listitem.less'

export default  class ListItem extends Component{
    render(){
        // console.log(this.props.item)
        let item = this.props.item;
        // let {item} = this.props;
        return(
            <div className='item-box'>
                <div className='item-pic'>
                    <img src={item.img} alt=""/>
                </div>
                <div className='item-info'>
                    <div className='item-info-left'>
                        <p>{item.title}</p>
                        <p>{item.houseType}</p>
                    </div>
                    <div className='item-info-right'>
                        <p>{item.rentType}</p>
                        <p dangerouslySetInnerHTML={{"__html":item.price}}></p>
                    </div>
                </div>
            </div>
        )
    }
}