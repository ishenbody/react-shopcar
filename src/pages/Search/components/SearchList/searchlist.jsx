import React, { Component } from 'react'
import ListItem from '../ListItem/listitem'
import {Link} from 'react-router-dom'
import LoadMore from '../../../../components/LoadMore/loadmore';

export default  class SearchList extends Component{
    constructor(props) {
        super(props)
        this.state  ={
            oldSetState:null,
            page:0,
            list:[],    //请求到的列表数据
            hasMore:false // 是否还有更多数据
        }
    }
    // 应该接受2个参数，一个是关键字，一个是页码
    getdata(){
        let keyword = this.props.keyword;
        
        fetch('http://localhost:4000/search?keyword='+keyword+'&page='+this.state.page)
        .then(res=>res.json())
        .then(data=>{
            let newarr = this.state.list.concat(data.data);
            this.setState = this.state.oldSetState;
            this.setState({
                list:newarr,
                hasMore:data.hasMore,
                // 更新page页码
                page:this.state.page+1
            })
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.keyword === this.props.keyword){
            return;
        }else{
            // 有新的网络请求
            // 页码应该从第一页开始 page:0
            // list中原来的数据都要删除
            this.setState({
                list:[],
                page:0
            },()=>{
                this.getdata();
            })
        }
    }
    componentDidMount(){
        // console.log(this)
        this.state.oldSetState = this.setState;
        // 组件加载完成就请求第一页数据
        this.getdata();
    }
    
    render(){
        // console.log(this.props.data)
        return(
            <div>
                <div>
                    { this.state.list.length >0 ?
                    this.state.list.map((ele,index)=>{
                        return <Link key={index} to={`/details/${ele.id}`}>
                            <ListItem  item={ele} />
                        </Link>
                    })
                    :
                    <div>数据正在加载中...</div>
                }
                </div>
                {this.state.hasMore?
                    // 添加ref
                    <LoadMore 
                        getdata={this.getdata.bind(this)}  
                    />
                    :
                    <div>
                        <hr/>
                        我是有底线的
                    </div> 
                }
            </div>
        )
    }
}