const express=require('express');
const app=express();
const path=require('path');
const chat_list=require('./router/chat_list')
const login=require('./router/login')
const readchat=require('./router/readchat')
const write=require('./router/write')
var server = require('http').Server(app);
app.use('/login',login)
let num=0
var io = require('socket.io')(server);
app.use(express.static(path.join(__dirname, "public"))); //使用静态资源
app.use('/addchatlist',chat_list)
app.use('/readchat',readchat)
app.use('/friendlist',write)
io.set('origins', '*:*');
io.on('connection', function (socket) {
    
    socket.on('message', function (data) {
        //服务端像所以也没发送数据
     
        console.log(data,socket.id)
            if(data.id!=undefined){
                socket.id=data.Receiveid
            }
        
            socket.broadcast.emit('message', data);
        
        console.log(data,socket.id,data.id)
    });
 
});


server.listen(3333,res=>{
  
})