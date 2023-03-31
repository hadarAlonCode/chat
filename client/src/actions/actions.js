import { sendMessage as sendMessageApi } from '../api/requests';
import { addMessage } from '../reducers/messages';

const sendMessage = (newMessage) => (dispatch) => {
  dispatch(addMessage(newMessage))
  sendMessageApi(newMessage)
}

export { sendMessage }