import React, { Component } from 'react'
import './searchinput.less'
import {withRouter} from 'react-router'
import {connect} from 'react-redux';
import setkeyword from '../../store/actions/searchAction'

class SearchInput extends Component{
    constructor(props) {
        super(props)
        this.state={
            svalue:''
        }
    }
    componentDidMount(){
        if(this.props.keyword){
            this.setState({
                svalue:this.props.keyword
            })
        }
    }

    componentDidUpdate(prevProps,prevState){
        // console.log(prevProps,this.props)
        if(prevProps.match.params.keyword !== this.props.match.params.keyword){
            this.props.setkeyword(this.props.match.params.keyword);
            // console.log(this.props.keyword)
            // 把state中的svalue值修改了
            this.setState({
                svalue:this.props.match.params.keyword
            })
        }
    }
    
    toSearch(e){
        // 编程式导航，跳转到搜索页面，需要携带搜索的数
        if(e.keyCode === 13){
            // 把搜索数据存储到redux中
            this.props.setkeyword(e.target.value);
            // 存储到本地
            localStorage.setItem('react-keyword',e.target.value);
            this.props.history.push('/search/'+e.target.value);
        }
    }

    changevalue(e){
        this.setState({
            svalue:e.target.value
        })
    }

    render(){
        // console.log(this.props)
        return(
            <div className='home-search'>
                <i className='iconfont icon-sousuo'></i>
                <input type="text"
                   placeholder='请输入要搜索的内容' onKeyUp={this.toSearch.bind(this)}
                   value={this.state.svalue}
                   onChange={this.changevalue.bind(this)}
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        keyword:state.keyword
    }
}

function mapDispatchToProps(dispatch){
    return{
        setkeyword:(data)=>{dispatch(setkeyword(data))}
    }
}

// 关联redux
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SearchInput) );