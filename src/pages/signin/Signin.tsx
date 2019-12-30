import React from 'react';
import Box from '../../components/Layout/Box';
import Logo from '../../components/base/Logo';
import Title from '../../components/Text/Title';
import TextMutted from '../../components/Text/Mutted';
import { Button, ButtonNav } from '../../components/Forms/Button';
import { Link } from "@react-navigation/web";
import GoogleSignin from '../../components/base/GoogleSignin';
import animations from '../../animations';
import { Input, InputPassword } from '../../components/Forms/Input';

export default class Signin extends React.Component<{}, { isSubmitting: boolean; canSubmit: boolean }> {
    static defaultProps = {}
    public state = {
        isSubmitting: false,
        canSubmit: false,
    }

    render() {
        return (
            <div className="centered-abs">
                <Box className="center auth-page" style={animations.page.in}>
                    <Logo />
                    <Title text="OD SIGNIN" />
                    <TextMutted text="Welcome to OD (online daw)!" />
                    <form>
                        <Input label="Username/Email" />
                        <InputPassword label="Password" />

                        <div className="space-between" style={{ marginBottom: '10px' }}>
                            <Link toRoute="ForgotPassword" routeName="ForgotPassword">Forgot password?</Link>
                        </div>

                        <div className="space-between" style={{ marginBottom: '15px' }}>
                            <ButtonNav toRoute="signup" label="Singup" className="full-width" />
                            <Button type="submit" label="SIGNIN" className="default-accent full-width" disabled={!this.state.canSubmit} />
                        </div>

                        <div>
                            <GoogleSignin />
                        </div>
                        <div>
                            <em>{this.state.isSubmitting ? "Submitting..." : null}</em>
                        </div>
                    </form>
                </Box>
            </div>
        )
    }
}