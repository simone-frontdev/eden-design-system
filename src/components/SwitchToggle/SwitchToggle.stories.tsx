import React from 'react';
import {Story, Meta} from '@storybook/react';
import SwitchToggleProps from "./SwitchToggle.types";
import SwitchToggle from "./SwitchToggle";

export default {
    title: 'Eden/SwitchToggle',
    component: SwitchToggle,
    argTypes: {},
} as Meta<typeof SwitchToggle>;

const Template: Story<SwitchToggleProps> = (args) => <SwitchToggle {...args}/>;

export const Default = Template.bind({});
Default.args = {};

export const On = Template.bind({});
On.args = {
    on: true
};
