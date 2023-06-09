import styled from 'styled-components';
import {fonts} from "../../shared/fonts";
import {color} from "../../shared/colors";

const StyledProgressBarContainer = styled.div`
  height: 20px;
  border-radius: 10px;
  background-color: ${color.grayScale.gray0};
  position: relative;
`;

const StyledProgressBarPercent = styled.div<{percent: number}>`
  height: 100%;
  border-radius: 10px;
  background-color: ${color.secondary.secondary};
  position: absolute;
  transition: width 0.3s ease-in-out;
  top: 0;
  left: 0;
  width: ${props => props.percent}%;
`;

export {
    StyledProgressBarContainer,
    StyledProgressBarPercent
}
