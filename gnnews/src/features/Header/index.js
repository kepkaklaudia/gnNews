import { Container, Logo, NavigationLink, Wrapper } from './styled';
import { Menu } from './Menu';
import logo from './gnnews.png';
import { Popup } from './Popup';
import { Icons } from './Icons';
import { LanguageSwitcher } from '../../core/LanguageSwitcher';

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
      <Wrapper details>
        <Popup />
        <LanguageSwitcher />
      </Wrapper>
    </Wrapper>
  </Container>
)