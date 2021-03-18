import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist';

import mockGame from 'components/GameCardSlider/mock';
import { initializeApollo } from 'utils/apollo';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { gamesMapper, highlightMapper } from 'utils/mappers';
import { GetServerSidePropsContext } from 'next';
import protectedRoutes from 'utils/protected-routes';

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apolloCliente = initializeApollo();
  const session = await protectedRoutes(context);

  const { data } = await apolloCliente.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  });

  return {
    props: {
      games: mockGame,
      session,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  };
}
