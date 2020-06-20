// @ts-nocheck
import * as typeAction from '../constant/actionType';
import * as api from './../../utils/api';


export const alertActions = {
    success,
    error,
    clear
};

function success (message) {
    return { type: typeAction.SUCCESS, message };
}

function error (message) {
    return { type: typeAction.ERROR, message };
}

function clear () {
    return { type: typeAction.CLEAR };
}