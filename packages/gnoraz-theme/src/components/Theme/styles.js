import { styled, css } from 'frontity';
import { Container, Col } from 'react-bootstrap';

export const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #121212;
    color: #cccccc;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

export const ContainerMaxWidth = styled(Container)`
  max-width: 1200px;
  justify: center;
  background-color: #161616;
  border-radius: 3px;
  border: 3px solid #161616;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ColP10 = styled(Col)`
  border: 5px solid #161616; /*Color of the Background*/
  justify-content: center;
`;
