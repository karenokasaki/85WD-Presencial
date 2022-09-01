import { Navbar, NavItem, Nav, NavbarText, NavLink } from "reactstrap";

function NavbarComponent() {
  return (
    <Navbar color="dark" dark>
      <NavbarText>85WD</NavbarText>
      <Nav>
        <NavItem>
          <NavLink href="/">Receitas</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/favoritos">Favoritos </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/treino-axios">Axios </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavbarComponent;
