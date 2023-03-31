import { io } from 'socket.io-client';
import { addMessage } from './reducers/messages';
import store from './store';
const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:3002';

// Connect to Socket.IO server
const socket = io(URL, {
  path: "/pubsub",
  autoConnect: false
});

// Handle incoming messages from the server
socket.on('message', (message) => {
  console.log({ message });
  store.dispatch(addMessage(message));
});


export { socket }
