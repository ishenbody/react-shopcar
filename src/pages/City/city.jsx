import React, { Component } from 'react'
import CityHeader from '../../components/Header/header'
import CurCity from './components/curCity/curcity'
import HotCity from './components/hotCity/hotcity'
import {connect} from 'react-redux'
import setcity from '../../store/actions/cityAction'

class City extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <CityHeader title='城市选择' />
                {/* 当前城市 */}
                <CurCity city={this.props.city} />
                {/* 热门城市 */}
                <HotCity setcity={this.props.setcity} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        city:state.city
    }
}

function mapDispatchToProps(dispacth){
    return {
        setcity:(data)=>dispacth(setcity(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(City)