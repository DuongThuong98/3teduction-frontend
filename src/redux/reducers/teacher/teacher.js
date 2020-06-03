import * as Types from '../../constant/actionType';

var initialState = [];

var findIndex = (teachers, id) => {
    var result = -1;
    teachers.forEach((teacher, index) => {
        if (teacher.id === id) {
            result = index;
        }
    });
    return result;
}


const teachers = (state = initialState, action) => {
    var index = -1;
    var { id, teacher } = action;
    switch (action.type) {
        case Types.GET_TEACHERS:
            state = action.teachers;
            return [...state];
        case Types.DELETE_TEACHER:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_TEACHER:
            state.push(action.teacher);
            return [...state];
        case Types.UPDATE_TEACHER:
            index = findIndex(state, teacher.id);
            state[index] = teacher;
            return [...state];
        default:
            return [...state];
    }
};


export default teachers;