import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    countryName: "poland",
    status: "",
    news: [],
  },
  reducers: {
    fetchNews: (state, {payload: countryName}) => {
      state.status = "loading";
      state.countryName = countryName;
    },
    fetchNewsSuccess: (state, {payload: news}) => {
      state.news = news;
      state.status = "success";
    },
    fetchError: state => {
      state.status = "error";
    },
  },
});

export const { fetchNews, fetchNewsSuccess, fetchError } = newsSlice.actions;

const selectState = state => state.news;

export const selectNewsStatus = state => selectState(state).status;
export const selectNews = state => selectState(state).news;
export const selectCountryName = state => selectState(state).countryName;

export default newsSlice.reducer;