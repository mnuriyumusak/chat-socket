/**
 * Created by sreejeshpillai on 09/05/15.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})


io.on('connection',function(socket){
    console.log('one user connected '+socket.id);
    
    socket.on('join', function (data) {
      socket.join(data.p_id); // We are using room of socket io
    })
    
    socket.on('leave', function (data) {
      socket.leave(data.p_id);  
    })
  
    socket.on('message',function(data){
        var sockets = io.sockets.sockets;
       // socket.broadcast.emit('message', data);
        socket.broadcast.to(data.p_id).emit('message', data);
    })
    
    socket.on('disconnect',function(){
        console.log('one user disconnected '+socket.id);
    })
})

http.listen(3000,function(){
    console.log('server listening on port 3000');
})
