import axios from "axios";
import { API_KEY } from "./API_KEY";
import { selectedCountryShort } from "./findCountry";

export const getNews = async ({ countryName }) => {
  const response = await axios(`https://newsapi.org/v2/top-headlines?country=${selectedCountryShort({ countryName })}&apiKey=${API_KEY}`)

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};