import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import user from "./user.reducer";
import teachers from "./teacher/teacher";
import itemEditing from "./teacher/itemEditing";
import major from '../major/major.reducers';
import tag from '../tag/tag.reducers';

const appReducers = combineReducers({
    teachers,
    itemEditing,
    user,
    toastr: toastrReducer,
    major,
    tag
});

export default appReducers;