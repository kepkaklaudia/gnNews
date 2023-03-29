import axios from "axios";
import { API_KEY } from "../../API_KEY";
import { buildURL } from "./buildURL";

export const getNews = async ({ countryName }) => {
  const response = await axios({
    url: buildURL({ countryName }),
    headers: {
      Authorization: API_KEY
    }
  })

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};