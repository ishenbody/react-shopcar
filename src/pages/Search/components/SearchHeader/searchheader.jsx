import React, { Component } from 'react'
import {withRouter} from 'react-router'
import SearchInput from '../../../../components/SearchInput/searchinput'
import './SearchInputHead.less'

class SearchInputHead extends Component{
    goBack(){
        this.props.history.goBack();
    }
    render() {
        return (
            <div className='header-box'>
                <i onClick={this.goBack.bind(this)} className='iconfont icon-fanhui'></i>
                {/* 搜索组件 */}
                <SearchInput />
            </div>
        )
    }
}

export default withRouter(SearchInputHead)