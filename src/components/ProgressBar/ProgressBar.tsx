import React, {FC} from 'react'
import {
    StyledProgressBarContainer,
    StyledProgressBarPercent
} from './ProgressBar.style';
import ProgressBarProps from "./ProgressBar.types";

const ProgressBar: FC<ProgressBarProps> = ({
                                               percent,
                                               ...props
                                           }) => {

    return (
        <StyledProgressBarContainer>
            <StyledProgressBarPercent percent={percent} />
        </StyledProgressBarContainer>
    )
}

export default ProgressBar;
