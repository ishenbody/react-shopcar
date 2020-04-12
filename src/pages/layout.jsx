import React, { Component } from 'react'
import Mynav from '../components/MyNav/mynav'


export default class Layout extends Component{
    render(){
        return(
            <>
                <Mynav />
               <div style={{'paddingBottom':'0.9rem'}}>
                    {this.props.children}
               </div>
            </>
        )
    }
}