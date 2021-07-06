import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
  return (
    <header>
      <Navbar className= 'header'>
        <NavbarBrand href='/'>Apptastic App</NavbarBrand>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink href='https://github.com/Mariabruner/ReactProject'>
              Github
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;