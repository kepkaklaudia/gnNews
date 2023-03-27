import axios from "axios";
import { buildURL } from "./buildURL";

export const getNews = async ({countryName}) => {
  const response = await axios({
    url: buildURL({countryName}),
    headers: {
      Authorization: process.env.REACT_APP_API_KEY
    }
  })

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};