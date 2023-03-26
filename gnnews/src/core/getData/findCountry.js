import { countriesList } from "../../features/Header/Menu/Countries/countriesList";

const selectedCountryName = ({countryName}) => (countriesList.find(country => country.name.toLowerCase() === countryName))
export const selectedCountryShort = ({countryName}) => selectedCountryName({ countryName }).short