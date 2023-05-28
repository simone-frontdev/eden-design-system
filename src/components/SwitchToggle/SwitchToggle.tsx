import React, {useState} from 'react';
import {
    SwitchKnob,
    SwitchContainer,
    Toggle
} from "./SwitchToggle.style";
import SwitchToggleProps from "./SwitchToggle.types";

const SwitchToggle = (props: SwitchToggleProps) => {
    const {
        on,
        onChange
    } = props

    const [isOn, setIsOn] = useState(on ?? false);

    const handleChange = () => {
        setIsOn(!isOn)
        if (onChange) {
            onChange(!isOn)
        }
    }

    return (
        <SwitchContainer>
            <Toggle isOn={isOn} onClick={() => handleChange()}>
                <SwitchKnob isOn={isOn} style={{left: isOn ? '19px' : '1px'}}>
                </SwitchKnob>
            </Toggle>
        </SwitchContainer>
    );
}

export default SwitchToggle;
