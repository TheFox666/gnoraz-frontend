import { Nav, Navbar } from "react-bootstrap";
import { styled } from "frontity";

export const NavbarMaxWidth = styled(Navbar)`
  max-width: 1200px;
  margin: auto;
  border-radius: 5px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  margin-bottom: 20px;
`;

export const NavbarBrand = styled(Navbar.Brand)`
  width: 150px;
  & > img {
    height: 40px;
    /* put value of image height as your need */
    float: left;
    margin-right: 7px;
  }
`;
