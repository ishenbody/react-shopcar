import React, { Component } from 'react'
import Searchheader from './components/SearchHeader/searchheader'
import SearchList from './components/SearchList/searchlist';

export default  class Search extends Component{
    
    render(){
        return(
            <div>
                {/* 头部，带搜索功能 */}
                <Searchheader />
                {/* 列表 */}
                <SearchList keyword={this.props.match.params.keyword} />
            </div>
        )
    }
}