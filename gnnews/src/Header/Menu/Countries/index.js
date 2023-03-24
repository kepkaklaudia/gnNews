import { nanoid } from "@reduxjs/toolkit";
import { countriesList } from "./countriesList";
import { StyledLink } from "./styled";

export const Country = () => (
  <>
    {countriesList.map((country) =>
      <StyledLink
        to={`/country/${country.short}`}
        key={nanoid()}
      >
      </StyledLink>
    )}
  </>
);