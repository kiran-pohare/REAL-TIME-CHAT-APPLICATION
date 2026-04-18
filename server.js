const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 5000 });

server.on("connection", (socket) => {
  console.log("User connected");

  socket.on("message", (message) => {
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });
});

console.log("Server running on ws://localhost:5000");