//引入express
const express = require('express');
const {request, response} = require("express");
//创建应用对象
const app = express();

//创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.all('/server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应
    response.send('HELLO EXPRESS -2')
});
app.all('/json-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //响应一个数据
    const data={
        name:'atguigu'
    }
    //对对象进行字符串转换
    let str = JSON.stringify(data)
    //设置响应
    response.send(str)
});
//针对ie缓存
app.get('/ie',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应
    response.send('HELLO IE-2')
});
//延迟设置
app.all('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Headers','*')
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(()=>{
        response.send('延时响应')
    },3000)
});
//jQuery 服务
app.all('/jquery-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    const data = {name:'尚硅谷'}
    response.send(JSON.stringify(data))
});
//axios服务
app.all('/axios-server',(request,response)=>{
    //设置允许自定义头节点
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    const data = {name:'尚硅谷'}
    response.send(JSON.stringify(data))
});
//fetch服务
app.all('/fetch-server',(request,response)=>{
    //设置允许自定义头节点
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    const data = {name:'尚硅谷'}
    response.send(JSON.stringify(data))
});
//jsonp服务
app.all('/jsonp-server',(request,response)=>{
    //response.send('console.log("hello jsonp")').
    const data = {
        name:'尚硅谷'
    }
    //将数据转化为字符串
    let str = JSON.stringify(data)
    //返回结果
    response.end(`handle(${str})`)
})
//用户名检测是否存在
app.all('/check-server',(request,response)=>{
    //response.send('console.log("hello jsonp")').
    const data = {
        exist:1,
        msg:'用户名已经存在'
    }
    //将数据转化为字符串
    let str = JSON.stringify(data)
    //返回结果
    response.end(`handle(${str})`)
})
app.all('/jquery-jsonp-server',(request,response)=>{
    //response.send('console.log("hello jsonp")').
    const data = {
        name:'尚硅谷',
        city:['北京','上海','深圳']
    }
    //将数据转化为字符串
    let str = JSON.stringify(data)
    //接收callback参数
    let cb = request.query.callback
    //返回结果
    response.end(`${cb}(${str})`)
})
app.all('/cors-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Methods','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    response.send('hello CORS')
})

//4.监听端口启动服务
app.listen(8000,()=>{

    console.log("服务已经启动，8000端口监听中");
});

