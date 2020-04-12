import React, { Component } from 'react'
import DetailsHeader from '../../components/Header/header'
import Dswiper from '../../components/Myswiper/home-swiper'
import Mytabs from '../../components/Mytabs/mytabs'
import Pinglun from './components/pinglun/pinglun'
import {connect} from 'react-redux'
import setuser from '../../store/actions/userAction'

class Details extends React.Component{
    constructor(){
        super()
        this.state={
            result:{},
            flag:true,  // true代表没收藏过
            scdata:{}
        }
    }
    changeKey(key){
        console.log(key)
    }
    componentDidMount(){
        fetch('http://localhost:4000/detail',{
            method:'post',
            headers:{
                'content-type':'application/x-www-form-urlencoded'
            },
            body:'id='+this.props.match.params.id
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setState({
                result:data
            })
        })


        // 组件一加载完成，就需要判断当前详情是否被收藏过
        // 存储的位置可以放在localStorage中,只能存储字符串
        let sc = localStorage.getItem('react-sc');
        if(sc){
            // 解析sc的字符串json
            sc = JSON.parse(sc);
            this.setState({
                scdata:sc
            })
            // 判断当前这条详情是否收藏过
            if(sc[this.props.match.params.id]){
                // 收藏过的
                this.setState({
                    flag:false
                })
                console.log('这是收藏过的，需要显示已收藏')
            }else{
                console.log('没有收藏过，显示收藏')
            }
        }else{
            console.log('没有收藏过，显示收藏')
        }
    }

    // 收藏事件
    shoucang(){
        // 判断是否登录过
        if(this.props.user){
            // 登录过,如果收藏过，要取消收藏；如果没有收藏过，进行收藏
            if(this.state.flag){
                // 收藏：存储到localStorage,把flag设置成false
                // let newscdata = Object.assign({},this.state.scdata,{[this.props.match.params.id]:true})
                let newscdata = {...this.state.scdata,[this.props.match.params.id]:true}
                // localStorage中只能存储字符串
                localStorage.setItem('react-sc',JSON.stringify(newscdata));
                this.setState({
                    flag:false
                })
            }else{
                // 取消收藏：从localStorage中删除数据，把flag设置成true
                delete this.state.scdata[this.props.match.params.id]
                localStorage.setItem('react-sc',JSON.stringify(this.state.scdata));
                this.setState({
                    flag:true
                })
            }
        }else{
            // 没有登录过
            console.log('没有登录，需要先登录')
            this.props.history.push('/login')
        }
    }

    // 购买事件
    buy(){
        console.log('要购买')
    }
    render(){
        return(
            <div>
                
                <DetailsHeader title='详情页' />
                {/* 轮播图 */}
                <Dswiper arr={this.state.result.imgs} />
                {/* tabs切换 */}
                <Mytabs defaultActiveKey='1' onChange={this.changeKey.bind(this)}>
                    <div tab='房屋信息' key='1'>
                        {this.state.result.title ? 
                        <div>
                            <h3>{this.state.result.title}</h3>
                            <div>
                                <div>
                                    <div>
                                        <span>{this.state.result.price}</span> 
                                        /月
                                    </div>
                                    <div>
                                        租金 
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>{this.state.result.info.type}</span>
                                    </div>
                                    <div>
                                        房型
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>{this.state.result.houseType}</span>
                                    </div>
                                    <div>
                                        面积
                                    </div>
                                </div>
                            </div>
                            <div>
                        <div>楼层：{this.state.result.info.level}</div>
                        <div>装修：{this.state.result.info.style}</div>
                        <div>类型：{this.state.result.info.type}</div>
                        <div>朝向：{this.state.result.info.orientation}</div>
                        <div>年代：{this.state.result.info.years}</div>
                            </div>
                            <div>
                                <button onClick={this.shoucang.bind(this)}>
                                    {this.state.flag?'收藏':'已收藏'}
                                </button>
                                <button onClick={this.buy.bind(this)}>
                                    购买
                                </button>
                            </div>
                        </div>
                        :<div>数据正在请求中...</div>    
                    }
                    </div>
                    <div tab='房屋评价' key='2'>
                        <Pinglun id={this.props.match.params.id} />
                    </div>
                </Mytabs>
            </div>
        )
    }   
}

function mapStateToProps(state){
    return {
        user:state.user
    }
}

function mapDispatchToProps(dispatch){
    return{
        setuser:(data)=>{dispatch(setuser(data))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Details)