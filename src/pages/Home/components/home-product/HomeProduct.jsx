import React, { Component } from 'react'
import HomeProductItem from './HomeProductItem'

export default  class HomeProduct extends Component{
    constructor(props) {
        super(props)
        this.state={
            result:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:4000/homehot?city=beijing')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(this.props.title === '热销单品'){
                this.setState({
                    result:data.hot1
                })
            }else{
                this.setState({
                    result:data.hot2
                })
            }
        })
    }
    render(){
        return(
            <div className='home-product'>
                <div>{this.props.title}</div>
                { 
                this.state.result.length>0 ?
                    <div  className='home-product-list'>
                        {this.state.result.map((ele,index)=>{
                            return <HomeProductItem key={index} data={ele} />
                        })}
                    </div> 
                : 
                    <div>数据正在请求中...</div>
                }

            </div>
        )
    }
}