import * as Types from '../constant/actionType';
import * as api from '../../utils/api';

export const actFetchTeachersRequest = () => {
    return dispatch => {
        return callApi('teachers', 'GET', null).then(res => {
            dispatch(actFetchTeachers(res.data));
        });
    };
}

export const actFetchTeachers = (teachers) => {
    console.log(teachers);
    return {
        type: Types.GET_TEACHERS,
        teachers
    }
}

export const actDeleteTeacherRequest = (id) => {
    return dispatch => {
        return callApi(`teachers/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteTeacher(id));
        })
    }
}

export const actDeleteTeacher = (id) => {
    return {
        type: Types.DELETE_TEACHER,
        id
    }
}

export const actAddTeacherRequest = (product) => {
    return dispatch => {
        return callApi('teachers', 'POST', product).then(res => {
            dispatch(actAddTeacher(res.data));
        });
    }
}

export const actAddTeacher = (product) => {
    return {
        type: Types.ADD_TEACHER,
        product
    }
}

export const actGetTeacherRequest = (id) => {
    return dispatch => {
        return callApi(`teachers/${id}`, 'GET', null).then(res => {
            dispatch(actGetTeacher(res.data));
        });
    }
}

export const actGetTeacher = (product) => {
    return {
        type: Types.GET_TEACHER_BY_ID,
        product
    }
}

export const actUpdateTeacherRequest = (product) => {
    return dispatch => {
        return callApi(`teachers/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateTeacher(res.data));
        });
    }
}

export const actUpdateTeacher = (product) => {
    return {
        type: Types.UPDATE_TEACHER,
        product
    }
}