import React, { Component } from 'react'
import './Pagination.less'

export default  class Pagination extends Component{
    clickme(cs){
        this.props.getIndex(cs)
    }
    render(){
        let arr = new Array(this.props.num).fill(1);
        return(
            <div className='home-swiper-pagination'>
                {arr.map((ele,index)=>(
                    <div  
                        key={index} 
                        className={index === this.props.index ? 'dot active':'dot'}
                        onClick={this.clickme.bind(this,index)}
                    ></div> 
                ))}
            </div>
        )
    }
}