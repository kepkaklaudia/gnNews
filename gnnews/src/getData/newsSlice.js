import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    countryID: "pl",
    status: "",
    news: [],
    view: "list"
  },
  reducers: {
    fetchNews: (state, {payload: countryID}) => {
      state.status = "loading";
      state.countryID = countryID;
    },
    fetchNewsSuccess: (state, {payload: news}) => {
      state.news = news;
      state.status = "success";
    },
    fetchError: state => {
      state.status = "error";
    },
    changeView: (state, {payload: view}) => {
      state.view = view;
    },
  },
});

export const { fetchNews, fetchNewsSuccess, fetchError, changeView } = newsSlice.actions;

const selectState = state => state.news;

export const selectNewsStatus = state => selectState(state).status;
export const selectNews = state => selectState(state).news;
export const selectCountryID = state => selectState(state).countryID;

export const selectView = state => selectState(state).view;

export default newsSlice.reducer;