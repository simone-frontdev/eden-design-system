import React from 'react'
import {
    StyledProgressBarContainer,
    StyledProgressBarPercent
} from './ProgressBar.style';
import ProgressBarProps from "./ProgressBar.types";

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {

    return (
        <StyledProgressBarContainer>
            <StyledProgressBarPercent percentage={percentage} />
        </StyledProgressBarContainer>
    );
};

export default ProgressBar;
