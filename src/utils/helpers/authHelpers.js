import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import Loading from '../../components/loader/loader';

export const userIsAuthenticated = connectedRouterRedirect({
    // The url to redirect auth to if they fail
    redirectPath: '/login',
    // If selector is true, wrapper will not redirect
    // For example let's check that state contains auth data
    // authenticatedSelector: state => (
    //     state.auth.auth.valid === true && state.auth.code.valid === true
    // ),
    authenticatedSelector: state => state.auth.userIsLogged,
    // A nice display name for this check
    wrapperDisplayName: 'UserIsAuthenticated',
    allowRedirectBack: false,
    // authenticatingSelector: state => !state.auth.auth && state.auth.token,
    AuthenticatingComponent: Loading,
});

export const userIsNotAuthenticated = connectedRouterRedirect({
    // The url to redirect auth to if they fail
    redirectPath: '/',
    // If selector is true, wrapper will not redirect
    // For example let's check that state contains auth data
    // authenticatedSelector: state => (
    //     state.auth.auth.valid === false && state.auth.code.valid === false
    // ),
    authenticatedSelector: state => !state.auth.userIsLogged,
    // A nice display name for this check
    wrapperDisplayName: 'UserIsAuthenticated',
    allowRedirectBack: false,
});