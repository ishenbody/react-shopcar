const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())
// 引入模拟的数据
const beijing_hot = require('./data/home/beijing_homehot');
const shanghai_hot = require('./data/home/shanghai_homehot')
const searchdata = require('./data/search')
const detaildata = require('./data/details')
const commentdata = require('./data/comment')
const orderdata = require('./data/shopcar')

// 首页产品
app.get('/homehot',function(req,res){
    let city = req.query.city;
    if(city === 'beijing'){
        res.send(beijing_hot)
    }else{
        res.send(shanghai_hot)
    }
})

// 搜索接口
// ?问号携带数据
app.get('/search',function(req,res){
    let keyword = req.query.keyword;
    console.log(keyword)
    res.send(searchdata)
})

// restful数据
app.get('/search2/:keyword',function(req,res){
    let keyword = req.params.keyword;
    console.log(keyword)
    res.send(searchdata)
})


// 详情接口
app.post('/detail',(req,res)=>{
    let id = req.body.id;
    console.log(id)
    res.send(detaildata)
})


// 房屋评论接口，应该有两个参数，一个是id，一个是页码
app.get('/comment',(req,res)=>{
    let id = req.query.id;
    let page = req.query.page;
    console.log(id,page)
    res.send(commentdata)
})


// 全部订单数据
app.get('/order/:user',(req,res)=>{
    let user = req.params.user;
    console.log(user)
    res.send(orderdata)
})

app.listen(4000,function(){
    console.log('运行在4000端口')
})

