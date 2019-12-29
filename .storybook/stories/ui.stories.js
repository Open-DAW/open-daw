import React, { useState } from 'react';
import Checkbox from '../../src/components/forms/Checkbox';
import NumberSelect from '../../src/components/forms/NumberSelect';
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