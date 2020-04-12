1. 项目分析
    1. 页面：
        首页(所在城市，轮播图，2组列表展示)
        城市选择(当前城市，热门城市)
        搜索页面( 再次搜索，搜索历史，加载更多，跳转详情页 )
        详情页(轮播图，tab切换，加载更多)
        评论页面(登陆的用户名，所在城市，评论功能)
        登录页面(登录功能)
        3个没有内容的页面
    2. 路由
        首页
        商城
        生活服务
        我的
        城市选择
        搜索页面
        详情页面
        评论页面
        登录页
    3. 需要的安装包
        react基础环境
        react-router
        react-router-dom
        express
        cors(可选)
        nodemon 
        concurrently 一次启动多个命令
        轮播图插件
        less
        less-loader
    4. 配置less
        运行 npm run eject
        在webpack.config.js中修改
    5. 配置rem
        在index.html页面中添加如下js
    6. 创建文件夹，引入字体图标库
        让字体图标生效：
            在index.js中引入iconfont.css
    7. 搭建后台服务器
        server.js
        配置启动命令
            在package.json中配置
            "ser":"nodemon server/server.js",
            "dev":"concurrently \" npm start\" \" npm run ser \" "
    
2. 创建路由
    分析：有些页面是需要导航条的，有一些是不需要的
    解决方案：
        1. 单独再需要导航条的组件中添加导航条，不需要的就不添加
        2. 做一层嵌套路由，把所有需要导航条的组件都作为子级路由
    动态加载组件
        需要使用插件：react-loadable
        安装：npm i -S react-loadable
        使用：
            引入 import Loadable from 'react-loadable'
            Loadable({
                loader: () => import('./my-component'),
                loading:function(){return <div>loading</div>}
            });

3. 创建导航条

4. 首页
    状态栏(城市定位，输入框，图标)
    轮播图(自动轮播)
        安装轮播图插件:react-swipeable-views
        npm i -S react-swipeable-views react-swipeable-views-utils
        轮播图中Pagination(分页器)需要自己实现，这个插件中没有这个功能
    2组展示数据
        


5. 城市选择
    1. 从首页点击"城市"，跳转到"城市选择"页面
        可以使用<Link>跳转
        也可以使用编程式导航跳转
            编程式导航：组件中如果访问不到history，解决方案有3种
            1. 让具有history对象的父级或祖先级元素向下传递数据
            2. 使用react-router中提供的一个高阶组件withRouter
            3. 自己写高阶组件，实现访问history对象
    2. 头部
        做成公共组件
        返回键：this.props.history.goBack() 返回到上一层
                window.history.back(); 返回到上一层
       当前选中的城市
        需要使用redux
            安装 cnpm i -S redux
                 cnpm i -S react-redux
        创建store
            const store = createStore(reducer,配置工具)
        关联react项目
            // react关联redux
            import {Provider} from 'react-redux'
            import store from './store/store'

            ReactDOM.render(<Provider store={store}><MyRouter /></Provider>, document.getElementById('root'));
        关联组件
            import {connect} from 'react-redux'
            import setcity from '../../store/actions/cityAction'

            export default connect(mapStateToProps,mapDispatchToProps)(City)
       热门城市
    3. 点击"热门城市"中的城市时，要把选中的城市存储到redux中


6. 搜索页面
    1. 从首页搜索，进入搜索页面
        需要定义一个路由，得有携带参数的功能
        跳转页面必须是按的回车键
            键盘上的每一个按键都对应着一个ASCII码，回车键对应13
    2. 搜索页面中也有搜索功能，所以需要把搜索功能提取成公共组件
    3. 显示搜索的列表
        显示数据时，如果有带标签的数据，使用dangerouslySetInnerHTML={{"__html":item.price}}
        来渲染
    4. 搜索列表可以加载更多
        页面滚动到底部时，需要显示一个加载更多的标识，请求新数据，再添加到页面中
        加载更多功能一次只能触发一回
        节流
    5. 再次搜索功能
        触发的是组件的更新功能，而不是删除重新加载
    6. 搜索历史功能
        搜索框中的数据、地址栏中的数据、搜索列表数据要对应
        现在地址栏中的数据和搜索列表数据已经对应了，缺搜索框的中数据对应。

        解决方案：
            1. 使用redux
            2. 让input组件获取地址栏信息，把地址栏中的数据放到input标签中去

详情页
    头部(显示详情页和返回键)
    轮播图(要提取公共组件)
    tabs切换(自己实现,参考antd实现方式)
    房屋评价中(加载更多，提取成功能组件)


订单评论页
    创建路由
    在首页点击时要判断是否登录了，如果登录了进允许跳转到订单评论页面，如果没登录跳转登录页面
    页面结构；
        头部
        登录用户名，地理定位信息
        订单数据
            数据中有个一个属性commentState，作用是当前订单是否被评论过
                0  没被评论过
                2  被评论过

收藏
    收藏的数据格式：
        "react-sc":{'id':true,'id2':true}
如果没有登录需要先登录，需要把登录的用户名存储起来redux



优化
    1. 刷新页面后redux中的数据就清空了，这是不合理的，redux中应该有这些数据
        在index.js或者myRouter文件中把localStorage中的数据存储到redux中
    2. 当组件注销时需要把全局事件取消监听，网络请求取消，定时器要取消
        


