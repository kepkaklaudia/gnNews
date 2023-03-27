import { selectedCountryShort } from "./findCountry";

export const buildURL = ({countryName}) => {
  let url = new URL("https://newsapi.org/v2/top-headlines");

  url.search = new URLSearchParams({
    country: selectedCountryShort({ countryName }),
  })

  return url;
};