
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
        } catch(err) {
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
        } catch(err) {
            console.log(err)
        }
    }
}

import * as Types from './../constants/ActionTypes';
import callApi from './../utils/api';

export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}

export const actFetchProducts = (products) => {
    console.log(products);
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    return dispatch => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type : Types.ADD_PRODUCT,
        product
    }
}

export const actGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data));
        });
    }
}

export const actGetProduct = (product) => {
    return {
        type : Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    }
}

export const actUpdateProduct = (product) => {
    return {
        type : Types.UPDATE_PRODUCT,
        product
    }
}
