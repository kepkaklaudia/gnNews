import { Container, Logo, NavigationLink } from './styled';
import { Menu } from './Menu';
import logo from './gnnews.png';

export const Header = () => (
  <Container>
    <Menu />
    <NavigationLink
      to="/"
    >
      <Logo
        src={logo}
        alt="logo"
      />
    </NavigationLink>
  </Container>
)