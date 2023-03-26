import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { countriesList } from "./countriesList";
import { Image, Wrapper, Name } from "./styled";
import { Loader } from "../../../../common/Loader/styled";
import { StyledLink } from "../../../../common/StyledLink/styled"

export const Countries = ({ onClick }) => {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setTimeout(() => {
      setStatus("loaded");
    }, 1000);
  });
  return (
    <>
      {status === "loading" ? <Loader /> :
        countriesList.map((country) =>
          <StyledLink
            to={`/country/${country.name.toLowerCase()}`}
            key={nanoid()}
            onClick={onClick}
          >
            <Wrapper>
              <Image
                src={country.flag}
                alt="flag"
              />
              <Name>
                {country.name}
              </Name>
            </Wrapper>
          </StyledLink>
        )}
    </>
  );
}