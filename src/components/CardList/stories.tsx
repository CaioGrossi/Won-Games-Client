import { Story, Meta } from '@storybook/react/types-6-0';
import cardsMock from 'components/PaymentOptions/mock';
import CardList, { CardListProps } from '.';

export default {
  title: 'Profile/CardList',
  component: CardList,
  args: {
    cards: cardsMock
  }
} as Meta;

export const Default: Story<CardListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardList {...args} />
  </div>
);
