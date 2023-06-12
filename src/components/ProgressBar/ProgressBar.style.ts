import styled from 'styled-components';
import {color} from "../../shared/colors";

const StyledProgressBarContainer = styled.div`
  progress[value] {
    appearance: none;
    width: 100%;

    ::-webkit-progress-bar {
      height: 20px;
      border-radius: 10px;
      background-color: ${color.grayScale.gray0};
    }

    ::-webkit-progress-value {
      height: 20px;
      border-radius: 10px;
      transition: width 0.3s ease-in-out;
      background-color: ${color.primary.primary};
    }
  }
`;

export {
  StyledProgressBarContainer
};
