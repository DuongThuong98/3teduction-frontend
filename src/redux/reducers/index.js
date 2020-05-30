import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import user from "./user.reducer";
import teachers from "./teacher/teacher";
import itemEditing from "./teacher/itemEditing";

const appReducers = combineReducers({
    teachers,
    itemEditing,
    user,
    toastr: toastrReducer,
});

export default appReducers;