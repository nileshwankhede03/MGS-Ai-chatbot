import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sendMessageAPI } from '../../services/chatService.js';
import { ERROR_MESSAGES, ROLES } from '../../constants/constants.js';

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async (message) => {
    return await sendMessageAPI(message);
  },
);

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {
    addUserMessage: (state, action) => {
      state.messages.push({ role: ROLES.USER, content: action.payload });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.messages.push({
          role: ROLES.ASSISTANT,
          content: action.payload,
        });
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || ERROR_MESSAGES.API_FAILED;
      });
  },
});

export const { addUserMessage } = chatSlice.actions;
export default chatSlice.reducer;
