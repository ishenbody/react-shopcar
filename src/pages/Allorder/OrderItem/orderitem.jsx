import React, { Component } from 'react'

export default class OrderItem extends Component{
    constructor(props) {
        super(props)
        this.state={
            show:false
        }
    }
    // 显示评论输入框
    gotocomment(){
        if(this.props.item.commentState === 0){
            this.setState({
                show:true
            })
        }
    }
    // 提交功能
    tijiao(){
        // 要提交到后台
        setTimeout(function(){
            alert('评论提交成功')
        },1000)
        // 隐藏评论输入框
        this.setState({
            show:false
        })
        // 吧"评论"改成"已评论"，其实是需要把数据中的commentState的值修改为2
        // 这个数据是从allorder中来的,中间还经过了一层orderlist
        this.props.changeCommentState(2,this.props.item.id);

    }
    quxiao(){
        this.setState({
            show:false
        })
    }
    render(){
        let {item} = this.props
        return(
            <div>
                <div>
                    <img src={item.img} alt=""/>
                </div>
                <div>
                    <p>商户：{item.title}</p>
                    <p>类型：{item.houseType}</p>
                    <p>价格：￥{item.price}</p>
                </div>
                <div>
                    <button onClick={this.gotocomment.bind(this)}>
                        {item.commentState === 0 
                          ? '评论'
                          : item.commentState === 2
                          ? '已评论'
                          : ''
                        }
                    </button>
                </div>

                {/* 评论区域 */}
                {this.state.show
                ?
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button onClick={this.tijiao.bind(this)}>提交</button>
                    <button onClick={this.quxiao.bind(this)}>取消</button>
                </div>
                : ''
                }
            </div>
        )
    }
}