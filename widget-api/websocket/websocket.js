const { Server } = require('socket.io');

const io = new Server({
  path: "/pubsub",
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }
});

// Handle incoming WebSocket connections
io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
  });
});

io.listen(3002);

module.exports = io 
