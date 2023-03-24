import { Container, Logo, NavigationLink } from './styled';
import { Menu } from './Menu';

export const Header = () => (
  <Container>
    <Menu />
    <NavigationLink
      to="/"
    >
      <Logo src={""} alt="logo" />
    </NavigationLink>
  </Container>
)