import { Navbar } from 'react-bootstrap';
import { styled } from 'frontity';

export const NavbarMaxWidth = styled(Navbar)`
  max-width: 1200px;
  margin: auto;
  border-radius: 3px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #263238;
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
