import { Container } from 'components/Container';
import media from 'styled-media-query';
import styled, { css } from 'styled-components';

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
        display: grid;
        grid-template-columns: 26rem 1fr;
        gap: ${theme.grid.gutter};
    `}
  `}
`;

export const ShowMore = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`;

export const ShowMoreButton = styled.div`
  ${({ theme }) => css`
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    color: ${theme.colors.white};

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`;

export const ShowMoreLoading = styled.img`
  width: 4rem;
`;
