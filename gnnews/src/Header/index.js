import { Logo, NavigationLink } from './styled';
import { Menu } from './Menu';

export const Header = () => (
  <>
    <Menu />
    <NavigationLink
      to="/"
    >
      <Logo src={""} alt="logo" />
    </NavigationLink>
  </>
)