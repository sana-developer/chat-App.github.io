
var socket = io();
var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');
var username = prompt("Enter your name: ");

// socket.emit('username', username);
// socket.on('username', (username) => {
//   console.log(username);
// user = username;
// });
// console.log(user)

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    var message = input.value;
    input.value = '';

    // Emit the message to the server
    socket.emit('chat message', message,username);
    
    // Emit the message and sender's name to the server
    //socket.emit('chat message', { message: message, sender: username });

    // Emit the message and sender's name to the server
    //socket.emit('chat message', { message: message, sender: username });

    // Display the sender message immediately with the "right" class
    displayMessage({ message: message, isSender: true });
  }
});






socket.emit('user joined', username);


// Listen for the "user joined" event and display the user's name
socket.on('user joined', function(username) {
  var userJoinedMessage = username + ' joined the chat';
  var nameItem = document.createElement('div');
  nameItem.className = 'message name-style';
  nameItem.textContent = userJoinedMessage;
  messages.appendChild(nameItem);
  window.scrollTo(0, document.body.scrollHeight);
});


// socket.on('chat message', function(data) {
//   // Display other users' messages with the "left" class
  
//   displayMessage({ message: data.message, isSender: data.isSender });
// });

socket.on('chat message', function(data) {
  displayMessage({ message: data.message, isSender: data.sender === username, sender: data.sender});
});





  function displayMessage(data) {
    var item = document.createElement('div');
    item.className = data.isSender ? 'message show right' : 'message show left';
    messages.appendChild(item);
  
    var name = document.createElement('div');
    name.className = 'name';
    console.log(data.isSender);
    name.textContent = data.isSender ? 'You' : data.sender; // Display sender's name if it's not you
    item.appendChild(name);
  
    var messageText = document.createElement('div');
    messageText.className = 'text';
    messageText.textContent = data.message;
    item.appendChild(messageText);
  
    window.scrollTo(0, document.body.scrollHeight);
  }
  




