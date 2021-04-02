import { connect } from "frontity";
import { Navbar, Nav } from "react-bootstrap";
import logoGnoraz from "../../assets/gnoraz_letter_logo.svg";

import NavLinks from "../NavLinks";

import { NavbarMaxWidth, NavbarBrand } from "./styles";

const Navigation = () => {
  return (
    <NavbarMaxWidth bg="dark" variant="dark" expand="lg" fluid="true">
      <NavbarBrand href="/">
        <img alt="" src={logoGnoraz} />
      </NavbarBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLinks />
        </Nav>
      </Navbar.Collapse>
    </NavbarMaxWidth>
  );
};

export default connect(Navigation);
