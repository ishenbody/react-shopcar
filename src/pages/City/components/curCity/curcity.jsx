import React, { Component } from 'react'
import './curcity.less'

export default  class CurCity extends Component{
    render(){
        return(
            <div className='curcity'>
                当前城市：{this.props.city}
            </div>
        )
    }
}
