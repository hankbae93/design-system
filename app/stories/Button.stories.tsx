import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Default',
    },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'Secondary BTN',
  onClick: action('secondary click'),
};
