import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  error: {
    errorData: "",
    error: false,
  },
};

export const fetchApi = createAsyncThunk("apiData/fetchApi", async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  return data;
});

const dataSlice = createSlice({
  name: "apiData",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.loading = true;
        state.error.errorData = "";
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.loading = false;
        state.error.error = true;
        state.error.errorData = action.error.message;
      });
  },
});

export const { reducer: apiReducer } = dataSlice;
