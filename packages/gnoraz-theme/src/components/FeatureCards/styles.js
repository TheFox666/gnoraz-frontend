import { styled } from 'frontity';
import { Card, Button } from 'react-bootstrap';

export const CardSt = styled(Card)`
  margin-top: 10px;
  margin-bottom: 10px;
  border-color: #890005;
  min-width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const CardHeaderSt = styled(Card.Header)`
  background-color: #202020;
`;

export const CardBodySt = styled(Card.Body)`
  background-color: #242424;
`;
export const CardTitleSt = styled(Card.Title)`
  color: #c1272d;
`;
export const ButtonSt = styled(Button)`
  background-color: #363636;
  border-color: #363636;
  &: hover {
    background-color: #c1272d;
    border-color: #c1272d;
  }
`;
