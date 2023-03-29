import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import { Container, Text } from './styled';
import { Clock } from './Clock';
import { selectNews, selectNewsStatus } from '../../core/getData/newsSlice';

export const Footer = () => {
  const status = useSelector(selectNewsStatus);
  const { articles } = useSelector(selectNews);
  const { t } = useTranslation();

  return (
    <Container>
      <Text>
        <Clock />
      </Text>
      {status === "error" ? "" :
        <Text>
          {t("articlesNumber")}
          {articles && articles.length}
        </Text>
      }
    </Container>
  )
};