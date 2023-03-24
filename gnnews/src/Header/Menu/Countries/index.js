import { nanoid } from "@reduxjs/toolkit";
import { countriesList } from "./countriesList";
import { Image, Wrapper, StyledLink, Name } from "./styled";

export const Country = () => (
  <>
    {countriesList.map((country) =>
      <StyledLink
        to={`/country/${country.short}`}
        key={nanoid()}
      >
        <Wrapper>
          <Image src={country.flag} alt="flag" />
          <Name>{country.name}</Name>
        </Wrapper>
      </StyledLink>
    )}
  </>
);