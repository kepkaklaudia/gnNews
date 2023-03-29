import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import { Container, Text } from './styled';
import { Clock } from './Clock';
import { selectNews } from '../../core/getData/newsSlice';

export const Footer = () => {
  const { articles } = useSelector(selectNews);
  const { t } = useTranslation();

  return (
    <Container>
      <Text>
        <Clock />
      </Text>
      <Text>
        {t("articlesNumber")}
        {articles && articles.length}
      </Text>
    </Container>
  )
};