import React, { useState } from 'react';
import ToggleProps from "./SwitchToggle.types";
import {ToggleContainer, ToggleSlider} from "./SwitchToggle.style";

const Toggle: React.FC<ToggleProps> = ({ onChange, checked = false }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleToggle = (): void => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <ToggleContainer onClick={handleToggle} isChecked={isChecked}>
      <ToggleSlider isChecked={isChecked} />
    </ToggleContainer>
  );
};

export default Toggle;
