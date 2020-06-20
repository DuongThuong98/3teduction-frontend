// @ts-nocheck
import * as typeAction from '../constant/actionType';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getAll,
};

function login (email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request (user) { return { type: typeAction.LOGIN_REQUEST, user } }
    function success (user) { return { type: typeAction.LOGIN_SUCCESS, user } }
    function failure (error) { return { type: typeAction.LOGIN_FAILURE, error } }
}

function logout () {
    userService.logout();
    return { type: typeAction.LOGOUT };
}

function getAll () {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request () { return { type: typeAction.GETALL_REQUEST } }
    function success (users) { return { type: typeAction.GETALL_SUCCESS, users } }
    function failure (error) { return { type: typeAction.GETALL_FAILURE, error } }
}

export const setCurrentUser = (user) => {
    return {
        type: typeAction.SET_CURRENT_USER,
        user
    }
}

export const getCurrentUser = () => {
    return async dispatch => {
        try {
            let response = await api.getCurrentUser();
            if (response) {
                dispatch(getActionCurrentUser(response.data.data));
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const getActionCurrentUser = (user) => {
    return {
        type: typeAction.GET_CURRENT_USER,
        user
    }
}

export const updateInfoCurrentUser = (user) => {
    return {
        type: typeAction.UPDATE_CURRENT_USER,
        user
    }
}

export const updatePassword = (password) => {
    return async dispatch => {
        try {
            let response = await api.updatePassword(password);
            if (response) {
                console.log('updatePassword', response);
            }
        } catch (err) {
            console.log(err)
        }
    }
}