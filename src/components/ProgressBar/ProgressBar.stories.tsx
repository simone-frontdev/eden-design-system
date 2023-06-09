import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import ProgressBar from "./ProgressBar";

const meta = {
  title: 'Eden/ProgressBar',
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    percentage: 0
  }
};

export const InProgress: Story = {
  args: {
    percentage: 40
  }
};

export const Complete: Story = {
  args: {
    percentage: 100
  }
};

export default meta;
