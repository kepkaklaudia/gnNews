import i18next from "i18next";
import { Wrapper, StyledButton, StyledImage } from "./styled";

const languages = [
  {
    flagCode: "gb",
    translation: "en"
  },
  {
    flagCode: "pl",
    translation: "pl"
  }
]

export const LanguageSwitcher = () => (
  <Wrapper>
    {languages.map(({ flagCode, translation }) => (
      <StyledButton
        onClick={() => i18next.changeLanguage(translation)}
        key={flagCode}
      >
        <StyledImage
          src={`https://newsapi.org/images/flags/${flagCode}.svg`}
          alt="flag"
        />
      </StyledButton>
    ))}
  </Wrapper>
)