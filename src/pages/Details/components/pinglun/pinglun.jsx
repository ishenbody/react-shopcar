import React, { Component } from 'react'
import './pinglun.less'
import LoadMore from '../../../../components/LoadMore/loadmore'
import greystar from '../../../../static/images/chat.png'
import redstar from '../../../../static/images/star.png'


export default class Pinglun extends Component{
    constructor(){
        super()
        this.state ={
            pdata:[],
            hasMore:false,
            page:0
        }
    }
    componentDidMount(){
        this.getdata();
    }
    getdata(){
        fetch('http://localhost:4000/comment?id='+this.props.id+'&page='+this.state.page)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.setState({
                pdata:this.state.pdata.concat(data.data),
                hasMore:data.hasMore,
                page:this.state.page + 1
            })
        })
    }
    // getcomment(){
    //     this.getdata()
    // }
    render(){
        return(
            <div>
                <ul>
                    {this.state.pdata && this.state.pdata.length>0 
                    ? this.state.pdata.map((ele,index)=>{
                        let stararr = [1,1,1,1,1]
                        return <div key={index}>
                            <h3>{ele.username}</h3>
                            <div>
                                {stararr.map((item,idx)=>{
                                    return <img key={idx} src={ele.star > idx 
                                        ?
                                        redstar
                                        :
                                        greystar
                                    } 
                                    />
                                })}
                            </div>
                            <div>{ele.comment}</div>
                        </div>
                    })
                    :<div>数据正在请求中....</div>
                }
                </ul>
                {this.state.hasMore
                ?
                <LoadMore getdata={this.getdata.bind(this)} />
                :''}
            </div>
        )
    }
}