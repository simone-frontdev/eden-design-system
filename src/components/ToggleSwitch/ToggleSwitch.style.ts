import styled from 'styled-components';
import {color} from "../../shared/colors";

const ToggleSwitchContainer = styled.div<{ isChecked?: boolean }>`
  width: 60px;
  height: 30px;
  background-color: ${(props) => (props.isChecked ? color.secondary.secondary : color.grayScale.gray1)};
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const ToggleSwitchSlider = styled.div<{ isChecked?: boolean }>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${color.primary.primary};
  position: relative;
  top: 2px;
  left: ${(props) => (props.isChecked ? 'calc(100% - 28px)' : '2px')};
  transition: left 0.3s;
`;

export {
  ToggleSwitchContainer,
  ToggleSwitchSlider
}
