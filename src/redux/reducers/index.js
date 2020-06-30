import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import user from "./user.reducer";
import teachers from "./teacher/teacher";
import itemEditing from "./teacher/itemEditing";
import major from '../major/major.reducers';
import tag from '../tag/tag.reducers';
import assignment from './assignment.reducer';
import mockingTest from './mockingTest.reducer';
import response from './response.reducer'
import video from './video.reducer'

const appReducers = combineReducers({
    user,
    toastr: toastrReducer,
    major,
    tag,
    assignment,
    mockingTest,
    response,
    video
});

export default appReducers;