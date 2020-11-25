import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist';

import mockGame from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />;
}

export async function getStaticProps() {
  return {
    props: {
      games: mockGame,
      recommendedGames: mockGame.slice(0, 5),
      recommendedHighlight: highlightMock
    }
  };
}
