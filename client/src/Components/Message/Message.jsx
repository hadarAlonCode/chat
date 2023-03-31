import { Box } from '@mui/material';

function Message({ text, timestamp, from }) {
  return (
    <Box>
     <strong>{from}: </strong>
      <strong>{timestamp}: </strong>
      <span>{text}</span>
    </Box>
  );
}

export default Message;
