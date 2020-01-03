import React from 'react';
import Box from '../../components/Layout/Box';
import Logo from '../../components/base/Logo';
import Title from '../../components/Text/Title';
import TextMutted from '../../components/Text/Mutted';
import { Button, ButtonNav } from '../../components/Forms/Button';
import { Link } from "@react-navigation/web";
import animations from '../../animations';
import { Input, InputPassword } from '../../components/Forms/Input';
import GoogleLogin from "react-google-login";

export default class Signin extends React.Component<{}, { isSubmitting: boolean; canSubmit: boolean }> {
    static defaultProps = {}
    public state = {
        isSubmitting: false,
        canSubmit: false,
    }

    responseGoogle(e) {
        console.log('eee', e)
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

                        <GoogleLogin
                            isSignedIn={true}
                            clientId="170222660556-ti0njmegp8j280kdr5dcit7uu3seqnl5.apps.googleusercontent.com"
                            buttonText="Login"
                            theme="dark"
                            onSuccess={(s) => console.log('succs', s)}
                            onFailure={(e) => console.log('fail', e)}
                            onRequest={() => console.log('request')}
                            cookiePolicy={'single_host_origin'}
                        />

                        <div>
                            <em>{this.state.isSubmitting ? "Submitting..." : null}</em>
                        </div>
                    </form>
                </Box>
            </div>
        )
    }
}