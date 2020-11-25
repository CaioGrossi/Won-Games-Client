import Base from 'templates/Base';

import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import GameCard from 'components/GameCard';
import { Container } from 'components/Container';
import { Grid } from 'components/Grid';
import { HighlightProps } from 'components/Highlight';
import { GameCardProps } from 'components/GameCard';

export type WishlistTemplateProps = {
  games?: GameCardProps[];
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
    </Container>

    <Grid>
      {games?.map((game, index) => (
        <GameCard key={`wishlist-${index}`} {...game} />
      ))}
    </Grid>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
);

export default Wishlist;