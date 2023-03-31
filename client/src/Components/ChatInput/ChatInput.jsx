import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button, Box } from '@mui/material';

const useStyles = makeStyles({
  chatInput: {
    display: 'flex',
    alignItems: 'center',
  },
  chatInputField: {
    flexGrow: 1,
    marginRight: '1rem',
  },
});

function ChatInput({ onSend }) {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendButtonClick = () => {
    if (inputValue.trim() === '') {
      return;
    }
    onSend(inputValue.trim());
    setInputValue('');
  };

  return (
    <Box className={classes.chatInput}>
      <TextField
        className={classes.chatInputField}
        label="Type your message here"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button variant="contained" color="primary" onClick={handleSendButtonClick}>
        Send
      </Button>
    </Box>
  );
}

export default ChatInput;
