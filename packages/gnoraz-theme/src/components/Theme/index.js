import { connect, Global, Head, css } from 'frontity';
import { Row, Container } from 'react-bootstrap';

import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css';
import { fixCss } from '../../helpers/css';

import { globalStyles, ContainerMaxWidth, ColP10 } from './styles';

import List from '../List';
import Post from '../Post';
import Page from '../Page';
import {
  DiscordFeatureCard,
  TwitchFeatureCard,
  MerchFeatureCard,
} from '../FeatureCards';
import Navigation from '../Navigation';

const fixedBootstrapCss = fixCss(bootstrapCss);
const BootstrapStyles = () => <Global styles={css(fixedBootstrapCss)} />;

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Head>
        <title>Frontity Workshop</title>
        <meta name="description" content={state.frontity.description} />
        <html lang="de" />
      </Head>
      {/* Add some global styles for the whole site, like body or a's. 
        Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <BootstrapStyles />
      <Global styles={globalStyles} />
      <Navigation />
      <ContainerMaxWidth>
        <Row xs={12}>
          <ColP10>blah</ColP10>
        </Row>
        <Row xs={12}>
          <ColP10>
            <DiscordFeatureCard />
          </ColP10>
          <ColP10>
            <TwitchFeatureCard />
          </ColP10>
          <ColP10>
            <MerchFeatureCard />
          </ColP10>
        </Row>
        <Row xs={12}>
          <ColP10>Dritte Zeile</ColP10>
        </Row>
        <Row>
          <ColP10 xs={9}>
            {/* <Main> */}
            {data.isArchive && <List />}
            {data.isPost && <Post />}
            {data.isPage && <Page />}
            {/* </Main> */}
          </ColP10>
          <ColP10 xs={3}>
            {/* <Main> */}
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            mollis. Quisque convallis libero in sapien pharetra tincidunt.
            Aliquam elit ante, malesuada id, tempor eu, gravida id, odio.
            Maecenas suscipit, risus et eleifend imperdiet, nisi orci
            ullamcorper massa, et adipiscing orci velit quis magna. Praesent sit
            amet ligula id orci venenatis auctor. Phasellus porttitor, metus non
            tincidunt dapibus, orci pede pretium neque, sit amet adipiscing
            ipsum lectus et libero. Aenean bibendum. Curabitur mattis quam id
            urna. Vivamus dui. Donec nonummy lacinia lorem. Cras risus arcu,
            sodales ac, ultrices ac, mollis quis, justo. Sed a libero. Quisque
            risus erat, posuere at, tristique non, lacinia quis, eros. Cras
            volutpat, lacus quis semper pharetra, nisi enim dignissim est, et
            sollicitudin quam ipsum vel mi. Sed commodo urna ac urna. Nullam eu
            tortor. Curabitur sodales scelerisque magna. Donec ultricies
            tristique pede. Nullam libero. Nam sollicitudin felis vel metus.
            Nullam posuere molestie metus. Nullam molestie, nunc id suscipit
            rhoncus, felis mi vulputate lacus, a ultrices tortor dolor eget
            augue. Aenean ultricies felis ut turpis. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Suspendisse placerat tellus ac nulla.
            Proin adipiscing sem ac risus. Maecenas nisi. Cras semper. Praesent
            interdum mollis neque. In egestas nulla eget pede. Int
            {/* </Main> */}
          </ColP10>
        </Row>
        <Row xs={12}>
          <ColP10>Footer</ColP10>
        </Row>
      </ContainerMaxWidth>
    </>
  );
};

export default connect(Root);
