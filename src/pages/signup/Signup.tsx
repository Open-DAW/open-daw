import React from 'react';
import Box from '../../components/Layout/Box';
import Logo from '../../components/base/Logo';
import Title from '../../components/Text/Title';
import TextMutted from '../../components/Text/Mutted';
import { Button, ButtonNav } from '../../components/Forms/Button';
import { Input, InputPassword } from '../../components/Forms/Input';
import animations from '../../animations';

export default class Signup extends React.Component {
    static defaultProps = {}

    render() {
        return (
            <div className="centered-abs">
                <Box className="center auth-page" style={animations.page.in}>
                    <Logo />
                    <Title text="OD SIGNUP" />

                    <TextMutted text="Welcome to OD (online daw)!" />

                    <form action="" className="flex-dir-column center">
                        <Input label="Username" />
                        <Input label="Email" />

                        <InputPassword label="Password" />
                        <InputPassword label="Repeat Password" />

                        <div className="space-between" style={{ marginBottom: '15px' }}>
                            <ButtonNav toRoute="signin" label="Signin" className="full-width" />
                            <Button label="SIGNUP" className="default-accent full-width" />
                        </div>
                    </form>
                </Box>
            </div>
        )
    }
}