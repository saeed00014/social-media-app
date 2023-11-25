import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cardLoading: true
}

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    cardLoading(state, action) {
      state.cardLoading = action.payload
    }
  }
})

export const { cardLoading } = loadingSlice.actions

export default loadingSlice