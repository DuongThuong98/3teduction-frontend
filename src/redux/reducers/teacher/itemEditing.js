import * as Types from '../../constant/actionType';

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_TEACHER_BY_ID:
            return action.teacher;
        default:
            return state;
    }
}

export default itemEditing;