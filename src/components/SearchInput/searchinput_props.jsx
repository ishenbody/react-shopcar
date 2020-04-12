import React, { Component } from 'react'
import './searchinput.less'
import {withRouter} from 'react-router'

class SearchInput extends Component{
    constructor(props) {
        super(props)
        this.state = {
            svalue:''
        }
    }
    componentDidMount(){
        this.setState({
            svalue:this.props.match.params.keyword
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.keyword !== this.props.match.params.keyword){
            // 又会触发组件更新
            this.setState({
                svalue:this.props.match.params.keyword
            })
        }else{
            return;
        }
    }
    toSearch(e){
        // 编程式导航，跳转到搜索页面，需要携带搜索的数
        if(e.keyCode === 13){
            this.props.history.push('/search/'+e.target.value);
        }
    }
    changevalue(e){
        this.setState({
            svalue:e.target.value
        })
    }
    render(){
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

export default withRouter(SearchInput)     