import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'

import setting from './setting';
import user from './user';
import {ContractorIdAndJobId} from './contractor-potential'

const appReducers = combineReducers({
    setting,
    user,
    toastr: toastrReducer,
    ContractorIdAndJobId
});

export default appReducers;