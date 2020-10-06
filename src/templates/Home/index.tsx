import Highligth, { HighlightProps } from 'components/Highlight';
import { GameCardProps } from 'components/GameCard';
import { BannerProps } from 'components/Banner';

import { Container } from 'components/Container';
import Menu from 'components/Menu';
import Heading from 'components/Heading';
import BannerSlider from 'components/BannerSlider';
import GameCardSlider from 'components/GameCardSlider';
import Footer from 'components/Footer';

import * as S from './styles';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  upcommingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  upcommingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <S.SectionMostPopular>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>

        <Highligth {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </Container>
    </S.SectionMostPopular>

    <S.SectionUpcoming>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>

        <GameCardSlider items={upcommingGames} />
        <Highligth {...upcommingHighlight} />
        <GameCardSlider items={upcommingMoreGames} />
      </Container>
    </S.SectionUpcoming>

    <S.SectionFreeGames>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>

        <Highligth {...freeHighlight} />
        <GameCardSlider items={freeGames} />
      </Container>
    </S.SectionFreeGames>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
);

export default Home;
