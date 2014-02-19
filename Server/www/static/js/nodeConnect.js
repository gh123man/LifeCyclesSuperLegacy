var socket;
socket = io.connect(server);

//socket.emit('authenticate', {sid: sID});

if (!socket.socket.connected) {
  socket.socket.connect();
}
          

