const express = require('express');
const path = require("path");
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
// const express = require('express')();
// const app = express();
// const http = require('http').Server(express);
// const io = require('socket.io')(http);
// 
// 
// const path = require('path');

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));//for serving static files
// app.use(express.urlencoded());//help to take form data

// Use the 'express.urlencoded' middleware with the 'extended' option
app.use(express.urlencoded({ extended: true }));

//PUG SPECIFIC STUFF
app.set('view engine','pug');//set the template engine as pug
app.set('views',path.join(__dirname,'views'));//set the views directory
//ENDPOINTS

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
//   });

// io.on('connection', (socket) => {
//     console.log('A user connected');
  
//     // Define 'socket' here, inside the connection event handler
  
//     socket.on('chat message', (message) => {
//       io.emit('chat message', message); // Sends the message to all connected clients
//     });

    // io.on('connection', (socket) => {
    //   socket.on('chat message', (msg) => {
    //     console.log('message: ' + msg);
    //   });
    // });

    // io.on('connection', (socket) => {
    //   socket.on('chat message', (msg) => {
    //     io.emit('chat message', msg);
    //     console.log('message: ' + msg);
    //   });
    // });

  
    /*socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });*/

  // Define a route to handle the form submission

  
// var username;
app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
});
  // app.post('/', (req, res) => {
  //   username = req.body.username;
  //   // Handle the username, you can store it in a variable, database, etc.
  //   console.log('Username entered:', username);
  //   res.send('Username submitted successfully.');
  // });
// app.get('/messaging',(req,res)=>{
//   res.status(200).render('messaging.pug');
// });




//START THE SERVER
// app.listen(port,()=>{
//     console.log(`The application started successfully on port ${port}`)
// })

// io.on('connection', (socket) => {
//   socket.on('chat message', msg => {
//     io.emit('chat message', msg);
//   });
// });

io.on('connection', (socket) => {
  // Listen for a "user joined" event and broadcast the user's name to all clients
  // Emit the username to the connected client
  //socket.emit('username', username);

  socket.on('user joined', (username) => {
    socket.broadcast.emit('user joined', username);
  });

  

  socket.on('chat message', (msg,username) => {
    // Broadcast the message to all connected clients except the sender
    socket.broadcast.emit('chat message', { message: msg, isSender: false, sender: username});
  });

});




http.listen(port, host, () => {
  console.log(`Socket.IO server running at http://${host}:${port}/`);
});