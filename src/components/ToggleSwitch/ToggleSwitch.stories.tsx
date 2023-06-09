import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import SwitchToggle from "./ToggleSwitch";

const meta = {
  title: 'Eden/ToggleSwitch',
  component: SwitchToggle,
} as Meta<typeof SwitchToggle>;

type Story = StoryObj<typeof meta>;

export const Off: Story = {
  args: {
    onChange: (value) => alert(value)
  }
};

export const On: Story = {
  args: {
    onChange: (value) => alert(value),
    checked: true
  }
};

export default meta;
