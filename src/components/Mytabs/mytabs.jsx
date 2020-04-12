import React, { Component } from 'react'
import './mytabs.less'


export default class Mytabs extends Component{
    constructor(){
        super()
        this.state={
            cur:''
        }
    }
    componentDidMount(){
        let now = this.props.defaultActiveKey
        this.setState({
            cur:now?now-1:0
        })
    }
    clickme(e){
        // 要获取akey47属性，这是自定义属性
        // 需要使用getAttribute方法获取
        let now = e.target.getAttribute('akey47')
        this.props.onChange(now);
        this.setState({
            cur:now-1
        })
    }
    render(){
        console.log(this.props)
        return(
            <div>
                {/* tabs的选项 */}
                <div className='tabs-titles-box'>
                    {/* 需要使用React.Children.map() */}
                    {React.Children.map(this.props.children,(ele,index)=>{
                        return <div
                            className={this.state.cur === index ?'active':''}
                            key={index}
                            akey47={ele.key}
                            onClick={this.clickme.bind(this)}
                        >
                            {ele.props.tab}
                        </div>
                    })}
                </div>
                {/* tabs内容 */}
                <div className='tabs-content'>
                    {React.Children.map(this.props.children,(ele,index)=>{
                        return <div className={this.state.cur === index ?'active item':'item'}>{ele.props.children}</div>
                    })}
                </div>
            </div>
        )
    }
}

/**
 * 原生写法：
 *  <div class='titles'>
        <li class='active'>tab1</li>
        <li>tab2</li>
        <li>tab3</li>
    </div>
    <div class='content'>
        <div class='active'>Content of Tab Pane 1</div>
        <div>content2</div>
        <div>content3</div>
    </div>

    封装后的组件用法：
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
        </TabPane>
    </Tabs>
 * 
 */