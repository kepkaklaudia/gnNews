import { useTranslation } from "react-i18next";
import { Animation, Wrapper, Text } from "./styled";

export const Error = () => {
  const { t } = useTranslation();
  
  return (
    <Wrapper>
      <Animation />
      <Text>
        {t("error")}
      </Text>
    </Wrapper>
  )
}