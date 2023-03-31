import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from './reducers/messages'

export default configureStore({
  reducer: {
    messagesReducer
  }
})