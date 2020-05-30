import * as typeAction from '../constant/actionType';
import * as api from './../../utils/api';

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

//temp
export function setUserDetails(user){
    return{
        type: "LOGIN_SUCCESS",
        auth: user.auth,
        token: user.token
    }
}

export function logoutUser(){
    return{
        type: "LOGOUT_SUCCESS",
        auth: false,
        token: ''
    }
}