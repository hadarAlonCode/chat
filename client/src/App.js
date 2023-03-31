import React, { useEffect, useState } from 'react';
import Chat from './Components/Chat';
import { socket } from './websocket-client';

function App() {

  const [isConnected, setIsConnected] = useState(socket.connected);

  function onConnect() {
    console.log('onConnect');
    setIsConnected(true);
  }

  function onDisconnect() {
    setIsConnected(false);
  }


  useEffect(() => {
    socket.connect();

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.disconnect();
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return (
    <div>
      <Chat />
    </div>
  );
}

export default App;
