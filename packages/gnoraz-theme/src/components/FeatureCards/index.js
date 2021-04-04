import { Card } from 'react-bootstrap';
import { Discord, Twitch, CashStack } from 'react-bootstrap-icons';

import {
  CardSt,
  CardHeaderSt,
  CardBodySt,
  ButtonSt,
  CardTitleSt,
} from './styles';

export const DiscordFeatureCard = () => {
  return (
    <CardSt>
      <CardHeaderSt>
        <Discord /> Discord Community
      </CardHeaderSt>

      <CardBodySt>
        <CardTitleSt>Sage Hallo</CardTitleSt>
        <Card.Text>
          Besuche uns auf unserem Discord. Werde noch heute Teil unserer
          Community und tausche dich mit uns aus.
        </Card.Text>
        <ButtonSt
          variant="primary"
          href="https://discord.gg/5fhpebw"
          target="_blank"
        >
          Discord betreten
        </ButtonSt>
      </CardBodySt>
    </CardSt>
  );
};

export const TwitchFeatureCard = () => {
  return (
    <CardSt>
      <CardHeaderSt>
        <Twitch /> Twitch
      </CardHeaderSt>

      <CardBodySt>
        <CardTitleSt>Sei dabei</CardTitleSt>
        <Card.Text>
          Wenn es wieder HARTE Balleraction in Warframe oder spannende
          Challengeruns in Darksouls gibt.
        </Card.Text>
        <ButtonSt
          variant="primary"
          href="https://twitch.tv/gnoraz"
          target="_blank"
        >
          Auf Twitch folgen
        </ButtonSt>
      </CardBodySt>
    </CardSt>
  );
};

export const MerchFeatureCard = () => {
  return (
    <CardSt>
      <CardHeaderSt>
        <CashStack /> Merchandise
      </CardHeaderSt>

      <CardBodySt>
        <CardTitleSt>Gönn es dir</CardTitleSt>
        <Card.Text>
          Qualitativ hochwertiges Merchandise gibt es in meinem Shop zu finden.
          Viel Spaß beim Stöbern!{' '}
        </Card.Text>
        <ButtonSt
          variant="primary"
          href="https://twitch.tv/gnoraz"
          target="_blank"
        >
          Zum Shop
        </ButtonSt>
      </CardBodySt>
    </CardSt>
  );
};
