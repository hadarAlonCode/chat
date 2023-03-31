import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles';
import moment from 'moment';

import { Box } from '@mui/material';
import ChatInput from './ChatInput/ChatInput';
import Message from './Message/Message';
import { sendMessage } from '../actions/actions';

const useStyles = makeStyles({
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  chatMessages: {
    flexGrow: 1,
    overflowY: 'scroll',
  },
});

function ChatClient() {
  const classes = useStyles();
  const messages = useSelector(state => state.messagesReducer.messages)
  const dispatch = useDispatch()

  const handleSend = (text) => {
    const newMessage = {
      text,
      timestamp: moment(new Date()).format('LLL'),
      from: 'user'
    };
    dispatch(sendMessage(newMessage))
  };

  return (
    <Box className={classes.chatContainer}>
      <Box className={classes.chatMessages}>
        {messages.map((message, index) => (
          <Message key={index} text={message.text} timestamp={message.timestamp} from={message.from} />
        ))}
      </Box>
      <ChatInput onSend={handleSend} />
    </Box>
  );
}

export default ChatClient;
