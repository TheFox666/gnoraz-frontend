import { styled } from "frontity";

export const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 1em;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    transition: all 0.15s ease-out;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #707070;
    }
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background: #c1272d;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.2s ease-in-out 0s;
    }
    &:hover {
      transition: all 0.15s ease-out;
      &:before {
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }
`;
