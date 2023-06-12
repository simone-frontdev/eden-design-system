import React from 'react'
import {
  StyledProgressBarContainer
} from './ProgressBar.style';
import ProgressBarProps from "./ProgressBar.types";

const ProgressBar: React.FC<ProgressBarProps> = ({max, value}) => {

  return (
    <StyledProgressBarContainer>
      <progress max={max} value={value}/>
    </StyledProgressBarContainer>
  );
};

export default ProgressBar;
