import React from 'react';
import {Story, Meta} from '@storybook/react';
import ProgressBar from "./ProgressBar";
import ProgressBarProps from "./ProgressBar.types";


export default {
    title: 'Gleater/ProgressBar',
    component: ProgressBar,
    argTypes: {},
} as Meta<typeof ProgressBar>;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    percent: 10
};

