import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './home-swiper.less'
import Pagination from './Pagination';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class HomeSwiper extends Component {
    constructor(){
        super()
        this.state={
            index:0
            // arr:[]
        }
    }
    // componentDidMount(){
    //     this.setState({
    //         arr:this.props.arr
    //     })
    // }
    handleChangeIndex=(index)=>{
        // console.log(index)
        this.setState({
            index,
        });
    }
    // 传递给Pagination组件的一个事件
    getIndex=(cs)=>{
        this.setState({
            index:cs,
        });
    }
    render() {
        return (
            <div className='home-swiper'>
                <AutoPlaySwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
                    {this.props.arr && this.props.arr.length>0 
                        ?
                    this.props.arr.map((ele,index)=>(<div key={index}><img src={ele} /></div>  ))
                        :
                    <div>暂无数据</div>
                    }
                </AutoPlaySwipeableViews>
                <Pagination 
                    getIndex={this.getIndex} 
                    index={this.state.index} 
                    num={this.props.arr?this.props.arr.length:0} 
                />
            </div>
        )
    }
}