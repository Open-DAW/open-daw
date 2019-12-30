import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import App from './App';
import WorkspacePage from '../../pages/workspace/WokspacePage';
import Signin from "../../pages/signin/Signin";
import Signup from "../../pages/signup/Signup";

const MyNavigator = createSwitchNavigator({
    app: App,
    workspace: WorkspacePage,
    signin: Signin,
    signup: Signup,
}, {
    initialRouteName: 'app',
});

export const AppNav = createBrowserApp(MyNavigator);