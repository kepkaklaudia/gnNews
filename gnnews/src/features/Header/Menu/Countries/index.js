import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { countriesList } from "./countriesList";
import { Image, Wrapper, Name } from "./styled";
import { Loader } from "../../../../common/Loader/styled";
import { StyledLink } from "../../../../common/StyledLink/styled"
import { useTranslation } from 'react-i18next';

export const Countries = ({ onClick }) => {
  const [status, setStatus] = useState("loading");
  const { t } = useTranslation();

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
            to={`/country/${country.name.en.toLowerCase()}`}
            key={nanoid()}
            onClick={onClick}
          >
            <Wrapper>
              <Image
                src={country.flag}
                alt="flag"
              />
              <Name>
                {t("key") === "pl" ? country.name.pl : country.name.en}
              </Name>
            </Wrapper>
          </StyledLink>
        )}
    </>
  );
}