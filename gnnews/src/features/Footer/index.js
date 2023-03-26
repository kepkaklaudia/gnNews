import { Container, Text } from './styled';
import { Clock } from './Clock';
import { useSelector } from 'react-redux';
import { selectNews } from '../../core/getData/newsSlice';

export const Footer = () => {
  const { articles } = useSelector(selectNews);

  return (
    <Container>
      <Text>
        <Clock />
      </Text>
      <Text>
        Number of articles: {articles && articles.length}
      </Text>
    </Container>
  )
};