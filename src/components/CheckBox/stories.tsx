import { Story, Meta } from '@storybook/react/types-6-0';
import CheckBox, { CheckBoxProps } from '.';

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta;

export const Default: Story<CheckBoxProps> = (args) => <CheckBox {...args} />;
