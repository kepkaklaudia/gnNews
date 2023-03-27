import axios from "axios";
import { buildURL } from "./buildURL";
import { API_KEY } from "./API_KEY"

export const getNews = async ({ countryName }) => {
  const response = await axios({
    url: buildURL({ countryName }),
    withCredentials: false,
    headers: {
      Authorization: API_KEY
    }
  })

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};