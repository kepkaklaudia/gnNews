import axios from "axios";

const baseURL = "https://newsapi.org/v2/top-headlines";
const apiKey = "";

export const getNews = async ({countryID}) => {
  const response = await axios.get(`${baseURL}?country=${countryID}&apiKey=${apiKey}`);

  if (!response.ok) {
   new Error(response.statusText);
  }

  return await response.data;
};