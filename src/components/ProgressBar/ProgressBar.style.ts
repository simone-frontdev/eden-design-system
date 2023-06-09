import styled from 'styled-components';
import {color} from "../../shared/colors";

const StyledProgressBarContainer = styled.div`
  height: 20px;
  border-radius: 10px;
  background-color: ${color.grayScale.gray0};
  position: relative;
`;

const StyledProgressBarPercent = styled.div<{percentage: number}>`
  height: 100%;
  border-radius: 10px;
  background-color: ${color.primary.primary};
  position: absolute;
  transition: width 0.3s ease-in-out;
  top: 0;
  left: 0;
  width: ${props => props.percentage}%;
`;

export {
    StyledProgressBarContainer,
    StyledProgressBarPercent
};
