const express=require('express')
const socketio=require('socket.io')
const http=require('http')

const app=express();  //here we want both app and socketio to run on the same http server...app is like a middleware which can handle get & post requests
const server=http.createServer(app)
const io=socketio(server)   //io is our socket.io server

app.use('/',express.static(__dirname+"/frontend"))


io.on('connection',(socket)=>{
    console.log('server connected at '+socket.id );
    socket.emit('connected')
    socket.on('send_val',(data)=>{
    console.log(data.key)
    })
})

// app.use('/update',(req,res)=>{
//     res.send(plot)
//     res.redirect('/')
// })

server.listen(4000,()=>{
    console.log('server started')
})
