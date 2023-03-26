import { createSlice } from "@reduxjs/toolkit";

export const viewSlice = createSlice({
  name: "view",
  initialState: {
    view: "list"
  },
  reducers: {
    changeView: (state, {payload: view}) => {
      state.view = view;
    },
  },
});

export const { changeView } = viewSlice.actions;

const selectState = state => state.view;

export const selectView = state => selectState(state).view;

export default viewSlice.reducer;