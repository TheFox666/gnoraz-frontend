import { connect } from "frontity";
import Link from "../Link";
import { NavContainer, NavItem } from "./styles";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const NavLinks = ({ state }) => (
  <NavContainer>
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link;
      return (
        <NavItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
            {name}
          </Link>
        </NavItem>
      );
    })}
  </NavContainer>
);
export default connect(NavLinks);
