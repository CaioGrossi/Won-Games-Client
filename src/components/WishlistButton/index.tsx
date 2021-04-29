import Button, { ButtonProps } from 'components/Button';
import { FavoriteBorder, Favorite } from '@styled-icons/material-outlined';
import { useWishlist } from 'hooks/use-wishlist';
import { useSession } from 'next-auth/client';
import { useState } from 'react';
import Spinner from 'components/Spinner';

type WishlistButtonProps = {
  hasText?: boolean;
  id: string;
} & Pick<ButtonProps, 'size'>;

const WishlistButton = ({
  id,
  hasText,
  size = 'small'
}: WishlistButtonProps) => {
  const [session] = useSession();
  const [loading, setLoading] = useState(false);

  const { isInWishlist, removeFromWishlist, addToWishlist } = useWishlist();

  const handleClick = async () => {
    setLoading(true);
    isInWishlist(id) ? await removeFromWishlist(id) : await addToWishlist(id);
    setLoading(false);
  };

  const ButtonText = isInWishlist(id)
    ? 'Remove from wishlist'
    : 'Add to wishlist';

  if (!session) {
    return null;
  }

  return (
    <Button
      icon={
        loading ? (
          <Spinner />
        ) : isInWishlist(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      onClick={handleClick}
      minimal
      size={size}
    >
      {hasText && ButtonText}
    </Button>
  );
};

export default WishlistButton;
