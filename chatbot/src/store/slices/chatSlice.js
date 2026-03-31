import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendMessageAPI } from "../../services/chatService.js";

export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async (message) => {
    return await sendMessageAPI(message);
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {
    addUserMessage: (state, action) => {
      state.messages.push({ role: "user", content: action.payload });
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
          role: "assistant",
          content: action.payload,
        });
      })
      .addCase(sendMessage.rejected, (state) => {
        state.loading = false;
        state.error = "Sorry, I couldn't get a response right now. Please try again or check your connection.";
      });
  },
});

export const { addUserMessage } = chatSlice.actions;
export default chatSlice.reducer;