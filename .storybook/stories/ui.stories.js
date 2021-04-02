import React, { useState } from 'react';
import Checkbox from '../../src/components/Forms/Checkbox';
import Knob from '../../src/components/Forms/Knob';
import NumberSelect from '../../src/components/Forms/NumberSelect';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    title: 'Ui Elements',
    decrators: [withKnobs]
};

export const CheckboxAction = () => {
    let [active, setActive] = useState(false);
    return <Checkbox active={active} onChange={setActive} />;
}

export const NumberSelectAction = () => {
    return <NumberSelect />
}

export const KnobAction = () => {
    return <Knob />
}