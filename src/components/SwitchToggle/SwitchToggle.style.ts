import styled from "styled-components";
import {color} from "../../shared/colors";

const SwitchContainer = styled.div`
  cursor: pointer;
`;

const Toggle = styled.div<{ isOn: boolean }>`
  position: relative;
  width: 42px;
  height: 24px;
  border-radius: 20px;
  background-color: ${props => props.isOn ? color.primary.primary : color.grayScale.gray2};
  transition: background-color 0.2s;
`;

const SwitchKnob = styled.div<{ isOn: boolean }>`
  position: absolute;
  top: 1px;
  width: 22px;
  height: 22px;
  border-radius: 20px;
  background-color: white;
  transition: left 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
    SwitchKnob,
    Toggle,
    SwitchContainer
}
