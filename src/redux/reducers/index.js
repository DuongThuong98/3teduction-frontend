import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import setting from "./setting";
import user from "./user";
import { ContractorIdAndJobId } from "./contractor-potential";
import products from "./products";
import itemEditing from "./itemEditing";

const appReducers = combineReducers({
  products,
  itemEditing,
  setting,
  user,
  toastr: toastrReducer,
  ContractorIdAndJobId,
});

export default appReducers;
