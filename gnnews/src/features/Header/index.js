import { Container, Logo, NavigationLink, Wrapper } from './styled';
import { Menu } from './Menu';
import logo from './gnnews.png';
import { Popup } from './Popup';
import { Icons } from './Icons';;

export const Header = () => (
  <Container>
    <Wrapper>
      <Menu />
      <NavigationLink
        to="/"
      >
        <Logo
          src={logo}
          alt="logo"
        />
      </NavigationLink>
    </Wrapper>
    <Wrapper>
      <Icons />
      <Popup />
    </Wrapper>
  </Container>
)