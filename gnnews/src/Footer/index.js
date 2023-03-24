import { Container, Text } from './styled';
import { Clock } from './Clock';

export const Footer = () => {

  return (
    <Container>
      <Text>
        <Clock />
      </Text>
      <Text>
        Number of articles:
      </Text>
    </Container>
  )
}