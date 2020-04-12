import React, { Component } from 'react'

export default class LoadMore extends Component{
    constructor(props) {
        super(props)
        this.more=React.createRef();
        this.state={
            timer:null,
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.scrFn)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.scrFn)
        clearTimeout(this.state.timer)
        this.setState =(state,callback)=>{
            return ;
        }
    }
    scrFn=()=>{
        console.log('滚动了')
        // 先判断 '加载更多' 按钮是否存在
        let more = this.more.current;
        if(more){
            // 存在 添加事件功能
            // 获取more按钮距离页面顶部的高度 offsetTop
            let moreHeight = more.offsetTop;
            // 获取视口高度
            let sHeight = document.documentElement.clientHeight;
            // 获取页面滚动高度
            let scrollHeight = document.documentElement.scrollTop;
            
            // 判断到底部的条件:sHeight+scrollHeight>=moreHeight 
            // if(scrollHeight+sHeight >= moreHeight && this.state.flag){
            //     this.setState({
            //         flag:false
            //     })
            //     console.log('到底了')
            // }
            
            if(scrollHeight+sHeight >= moreHeight){
                // console.log(this.state.oldSetState)
                if(this.state.timer){
                    clearTimeout(this.state.timer);
                    // 清除网络请求
                    this.setState =(state,callback)=>{
                        return ;
                    }
                }
                
                this.state.timer = setTimeout(()=>{
                    // 触发调用者的一个函数
                    this.props.getdata();      
                },300)
            }
        }
    }
    render(){
        return(
            <div ref={this.more}>
                加载更多...
            </div>
        )
    }
}