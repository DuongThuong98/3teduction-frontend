import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import user from "./user";
import teachers from "./teacher/teacher";
import itemEditing from "./teacher/itemEditing";

const appReducers = combineReducers({
    teachers,
    itemEditing,
    // setting,
    user,
    toastr: toastrReducer,
    // ContractorIdAndJobId,
});

export default appReducers;