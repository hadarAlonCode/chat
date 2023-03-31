import { createSlice } from '@reduxjs/toolkit'

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

export const messages = createSlice({
  name: 'messages',
  initialState: {
    messages: []
  },
  reducers: {
    addMessage: (state, action) => {
      const { payload } = action
      state.messages.push(payload)
    },
  }
})

// Action creators are generated for each case reducer function
export const { addMessage } = messages.actions

export default messages.reducer