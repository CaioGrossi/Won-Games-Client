import Gallery, { GalleryImageProps } from 'components/Gallery';
import GameInfo, { GameInfoProps } from 'components/GameInfo';
import TextContent from 'components/TextContent';
import { Divider } from 'components/Divider';
import GameDetails, { GameDetailsProps } from 'components/GameDetails';
import Base from 'templates/Base';
import Showcase from 'components/Showcase';

import * as S from './styles';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
  upcomingTitle: string;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
};

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingTitle,
  upcomingHighlight,
  recommendedTitle,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Main>
      <S.Cover src={cover} role="image" aria-label="cover" />
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionGameDetails>

      <Showcase
        title={upcomingTitle}
        games={upcomingGames}
        highlight={upcomingHighlight}
      />
      <Showcase title={recommendedTitle} games={recommendedGames} />
    </S.Main>
  </Base>
);

export default Game;
