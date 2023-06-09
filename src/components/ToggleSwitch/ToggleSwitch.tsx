import React, { useState } from 'react';
import ToggleSwitchProps from "./ToggleSwitch.types";
import {ToggleSwitchContainer, ToggleSwitchSlider} from "./ToggleSwitch.style";

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange, checked = false }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleToggle = (): void => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <ToggleSwitchContainer onClick={handleToggle} isChecked={isChecked}>
      <ToggleSwitchSlider isChecked={isChecked} />
    </ToggleSwitchContainer>
  );
};

export default ToggleSwitch;
