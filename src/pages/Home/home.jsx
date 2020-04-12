import React, { Component } from 'react'
import HomeHeader from './components/home-header/home-header'
import HomeSwiper from '../../components/Myswiper/home-swiper'
import HomeProduct from './components/home-product/HomeProduct'
import pc1 from '../../static/images/banner1.png'
import pc2 from '../../static/images/banner2.png'
import pc3 from '../../static/images/banner3.png'
import pc4 from '../../static/images/banner4.png'
import pc5 from '../../static/images/banner5.png'
import pc6 from '../../static/images/banner6.png'


export default class Home extends Component{
    constructor(){
        super()
        this.state={
            arr:[pc1,pc2,pc3,pc4,pc5,pc6]
        }
    }
    render(){
        return(
            <div>
                <HomeHeader />
                {/* 轮播图 */}
                <HomeSwiper arr={this.state.arr} />
                {/* 两组产品 */}
                <HomeProduct title='热销单品' />
                <HomeProduct title='家庭常用' />
            </div>
        )
    }
}